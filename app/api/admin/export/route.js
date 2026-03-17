import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';
import {
    EXPORT_ENTITIES,
    buildPrismaFilters,
    transformDataForExport,
    exportToXLSX,
    exportToCSV,
    generateExportFilename
} from '@/lib/exportUtils';

export const dynamic = 'force-dynamic';

// Rate limiting map (simple in-memory implementation)
const rateLimitMap = new Map();
const RATE_LIMIT = 10; // max requests
const RATE_WINDOW = 60 * 1000; // 1 minute
const DEFAULT_PAGE_SIZE = 1000;
const MAX_PAGE_SIZE = 10000;

// Input validation function
function validateExportInput(body, config) {
    const errors = [];

    // Validate entity
    if (!body.entity) {
        errors.push('Entity is required');
    } else if (!EXPORT_ENTITIES[body.entity]) {
        errors.push('Invalid export entity');
    }

    // Validate fields
    if (body.fields && !Array.isArray(body.fields)) {
        errors.push('Fields must be an array');
    } else if (body.fields && body.fields.length > 0) {
        const validFields = config?.availableFields?.map(f => f.key) || [];
        const invalidFields = body.fields.filter(f => !validFields.includes(f));
        if (invalidFields.length > 0) {
            errors.push(`Invalid fields: ${invalidFields.join(', ')}`);
        }
    }

    // Validate format
    const validFormats = ['xlsx', 'csv', 'json'];
    if (body.format && !validFormats.includes(body.format)) {
        errors.push('Invalid export format. Must be xlsx, csv, or json');
    }

    // Validate pagination
    if (body.pageSize && (isNaN(body.pageSize) || body.pageSize < 1 || body.pageSize > MAX_PAGE_SIZE)) {
        errors.push(`Page size must be between 1 and ${MAX_PAGE_SIZE}`);
    }

    return errors;
}

function checkRateLimit(ip) {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record || now - record.timestamp > RATE_WINDOW) {
        rateLimitMap.set(ip, { count: 1, timestamp: now });
        return true;
    }

    if (record.count >= RATE_LIMIT) {
        return false;
    }

    record.count++;
    return true;
}

// Helper to get include config for relations
function getIncludeConfig(entity) {
    switch (entity) {
        case 'tickets':
            return { assignedTo: { select: { id: true, username: true } } };
        case 'quoteRequests':
            return {
                customer: { select: { id: true, name: true, email: true, phone: true } },
                product: { select: { id: true, name: true } }
            };
        case 'invoices':
            return { ticket: { select: { ticketNumber: true } } };
        default:
            return {};
    }
}

export async function POST(request) {
    try {
        // Check authentication
        const session = await requireAuth(['admin', 'agent', 'superadmin']);
        if (!session) {
            return NextResponse.json(
                { error: 'Unauthorized - Admin access required' },
                { status: 401 }
            );
        }

        // Check rate limit
        const ip = request.headers.get('x-forwarded-for') || 'unknown';
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { error: 'Rate limit exceeded. Please try again later.' },
                { status: 429 }
            );
        }

        const body = await request.json();
        const {
            entity,           // e.g., 'tickets', 'customers', etc.
            fields,           // array of field names to export
            filters = {},     // filter conditions
            format = 'xlsx',  // 'xlsx', 'csv', or 'json'
            filename,         // optional custom filename
            page = 1,         // pagination page number
            pageSize = DEFAULT_PAGE_SIZE  // results per page
        } = body;

        // Validate entity exists
        if (!entity || !EXPORT_ENTITIES[entity]) {
            return NextResponse.json(
                { error: 'Invalid export entity' },
                { status: 400 }
            );
        }

        // Validate input
        const validationErrors = validateExportInput(body, EXPORT_ENTITIES[entity]);
        if (validationErrors.length > 0) {
            return NextResponse.json(
                { error: 'Validation failed', details: validationErrors },
                { status: 400 }
            );
        }

        const config = EXPORT_ENTITIES[entity];

        // Use default fields if not specified
        const selectedFields = fields && fields.length > 0
            ? fields
            : config.defaultFields;

        // Build Prisma query with pagination
        const where = buildPrismaFilters(entity, filters);
        const include = getIncludeConfig(entity);
        const skip = (page - 1) * pageSize;

        // Fetch data from database with pagination
        let data, totalCount;
        switch (entity) {
            case 'tickets':
                [data, totalCount] = await Promise.all([
                    prisma.ticket.findMany({
                        where,
                        include,
                        orderBy: { createdAt: 'desc' },
                        skip,
                        take: pageSize
                    }),
                    prisma.ticket.count({ where })
                ]);
                break;

            case 'customers':
                [data, totalCount] = await Promise.all([
                    prisma.customer.findMany({
                        where,
                        orderBy: { createdAt: 'desc' },
                        skip,
                        take: pageSize
                    }),
                    prisma.customer.count({ where })
                ]);
                break;

            case 'invoices':
                [data, totalCount] = await Promise.all([
                    prisma.invoice.findMany({
                        where,
                        include,
                        orderBy: { createdAt: 'desc' },
                        skip,
                        take: pageSize
                    }),
                    prisma.invoice.count({ where })
                ]);
                break;

            case 'products':
                [data, totalCount] = await Promise.all([
                    prisma.product.findMany({
                        where,
                        orderBy: { createdAt: 'desc' },
                        skip,
                        take: pageSize
                    }),
                    prisma.product.count({ where })
                ]);
                break;

            case 'quoteRequests':
                [data, totalCount] = await Promise.all([
                    prisma.quoteRequest.findMany({
                        where,
                        include,
                        orderBy: { createdAt: 'desc' },
                        skip,
                        take: pageSize
                    }),
                    prisma.quoteRequest.count({ where })
                ]);
                break;

            case 'agents':
                [data, totalCount] = await Promise.all([
                    prisma.admin.findMany({
                        where,
                        orderBy: { createdAt: 'desc' },
                        skip,
                        take: pageSize
                    }),
                    prisma.admin.count({ where })
                ]);
                break;

            case 'services':
                [data, totalCount] = await Promise.all([
                    prisma.service.findMany({
                        where,
                        orderBy: { createdAt: 'desc' },
                        skip,
                        take: pageSize
                    }),
                    prisma.service.count({ where })
                ]);
                break;

            default:
                return NextResponse.json(
                    { error: 'Entity not supported for export' },
                    { status: 400 }
                );
        }

        if (!data || data.length === 0) {
            return NextResponse.json(
                { error: 'No data found for export with the selected filters' },
                { status: 404 }
            );
        }

        // Add pagination metadata to response
        const totalPages = Math.ceil(totalCount / pageSize);

        // Transform data based on selected fields
        const transformedData = transformDataForExport(data, entity, selectedFields);

        // Generate filename
        const exportFilename = filename
            ? filename
            : generateExportFilename(entity, format);

        let fileBuffer;
        let mimeType;
        let extension;

        // Export in requested format
        switch (format) {
            case 'xlsx':
                fileBuffer = exportToXLSX(transformedData, exportFilename, config.label);
                mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                extension = '.xlsx';
                break;

            case 'csv':
                const csvContent = exportToCSV(transformedData);
                fileBuffer = Buffer.from(csvContent, 'utf-8');
                mimeType = 'text/csv';
                extension = '.csv';
                break;

            case 'json':
                fileBuffer = Buffer.from(JSON.stringify(transformedData, null, 2), 'utf-8');
                mimeType = 'application/json';
                extension = '.json';
                break;

            default:
                return NextResponse.json(
                    { error: 'Invalid export format' },
                    { status: 400 }
                );
        }

        // Return file as blob with pagination info
        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': mimeType,
                'Content-Disposition': `attachment; filename="${exportFilename}${extension}"`,
                'X-Export-Count': data.length,
                'X-Export-Total': totalCount,
                'X-Export-Page': page,
                'X-Export-TotalPages': totalPages,
                'X-Export-Entity': entity
            }
        });

    } catch (error) {
        console.error('Export error:', error);
        return NextResponse.json(
            { error: 'Failed to export data', details: error.message },
            { status: 500 }
        );
    }
}

// GET endpoint to get export configuration and available options
export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const entity = searchParams.get('entity');

        // If entity specified, return its config
        if (entity && EXPORT_ENTITIES[entity]) {
            return NextResponse.json(EXPORT_ENTITIES[entity], {
                headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=600' }
            });
        }

        // Otherwise return all available entities
        const entities = Object.entries(EXPORT_ENTITIES).map(([key, value]) => ({
            key,
            label: value.label,
            description: value.description,
            icon: value.icon,
            fieldCount: value.availableFields.length,
            filterCount: value.filters.length
        }));

        return NextResponse.json({
            entities,
            formats: [
                { key: 'xlsx', label: 'Excel (.xlsx)', description: 'Microsoft Excel format' },
                { key: 'csv', label: 'CSV (.csv)', description: 'Comma-separated values' },
                { key: 'json', label: 'JSON (.json)', description: 'JavaScript Object Notation' }
            ]
        }, {
            headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=600' }
        });

    } catch (error) {
        console.error('Export config error:', error);
        return NextResponse.json(
            { error: 'Failed to get export configuration' },
            { status: 500 }
        );
    }
}
