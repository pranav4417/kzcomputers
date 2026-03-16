import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import {
    EXPORT_ENTITIES,
    buildPrismaFilters,
    transformDataForExport,
    exportToXLSX,
    exportToCSV,
    generateExportFilename
} from '@/lib/exportUtils';

export const dynamic = 'force-dynamic';

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
        const body = await request.json();
        const {
            entity,           // e.g., 'tickets', 'customers', etc.
            fields,           // array of field names to export
            filters = {},     // filter conditions
            format = 'xlsx',  // 'xlsx', 'csv', or 'json'
            filename          // optional custom filename
        } = body;

        // Validate entity
        if (!entity || !EXPORT_ENTITIES[entity]) {
            return NextResponse.json(
                { error: 'Invalid export entity' },
                { status: 400 }
            );
        }

        const config = EXPORT_ENTITIES[entity];

        // Use default fields if not specified
        const selectedFields = fields && fields.length > 0
            ? fields
            : config.defaultFields;

        // Build Prisma query
        const where = buildPrismaFilters(entity, filters);
        const include = getIncludeConfig(entity);

        // Fetch data from database
        let data;
        switch (entity) {
            case 'tickets':
                data = await prisma.ticket.findMany({
                    where,
                    include,
                    orderBy: { createdAt: 'desc' }
                });
                break;

            case 'customers':
                data = await prisma.customer.findMany({
                    where,
                    orderBy: { createdAt: 'desc' }
                });
                break;

            case 'invoices':
                data = await prisma.invoice.findMany({
                    where,
                    include,
                    orderBy: { createdAt: 'desc' }
                });
                break;

            case 'products':
                data = await prisma.product.findMany({
                    where,
                    orderBy: { createdAt: 'desc' }
                });
                break;

            case 'quoteRequests':
                data = await prisma.quoteRequest.findMany({
                    where,
                    include,
                    orderBy: { createdAt: 'desc' }
                });
                break;

            case 'agents':
                data = await prisma.admin.findMany({
                    where,
                    orderBy: { createdAt: 'desc' }
                });
                break;

            case 'services':
                data = await prisma.service.findMany({
                    where,
                    orderBy: { createdAt: 'desc' }
                });
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

        // Return file as blob
        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': mimeType,
                'Content-Disposition': `attachment; filename="${exportFilename}${extension}"`,
                'X-Export-Count': data.length,
                'X-Export-Entity': entity
            }
        });

    } catch (error) {
        console.error('Export error:', error);
        return NextResponse.json(
            { error: 'Failed to export data', details: error.message, stack: error.stack },
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
            return NextResponse.json(EXPORT_ENTITIES[entity]);
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
        });

    } catch (error) {
        console.error('Export config error:', error);
        return NextResponse.json(
            { error: 'Failed to get export configuration' },
            { status: 500 }
        );
    }
}
