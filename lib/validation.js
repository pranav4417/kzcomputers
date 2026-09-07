export const validationPatterns = {
    name: /^[a-zA-Z\s'-]+$/,
    phone: /^[0-9\s+-]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    number: /^[0-9]*\.?[0-9]*$/,
    integer: /^[0-9]+$/,
    assetId: /^[A-Z0-9-]+$/i,
    hexColor: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
    url: /^(\/|https?:\/\/)/,
    description: /^[a-zA-Z0-9\s,.';:!?@#$%^&*()_+\-=\[\]{}|\\~`"\/]*$/
};

export const validationMessages = {
    name: 'Name can only contain letters, spaces, hyphens, and apostrophes',
    phone: 'Phone number can only contain digits, spaces, hyphens, and +',
    email: 'Please enter a valid email address',
    number: 'Please enter a valid number',
    integer: 'Please enter a whole number',
    assetId: 'Asset ID can only contain letters, numbers, and hyphens',
    hexColor: 'Please enter a valid hex color (e.g., #003B73)',
    url: 'Please enter a valid URL or path (e.g., /products or https://...)',
    description: 'Description contains invalid characters'
};

export function validateField(value, type) {
    if (!value || value.trim() === '') return { valid: true, empty: true };
    
    const pattern = validationPatterns[type];
    if (!pattern) return { valid: true };
    
    const valid = pattern.test(value);
    return {
        valid,
        empty: false,
        message: valid ? null : validationMessages[type]
    };
}

export function sanitizeInput(value, type) {
    if (!value) return value;
    
    switch (type) {
        case 'name':
            return value.replace(/[^a-zA-Z\s'-]/g, '');
        case 'phone':
            return value.replace(/[^0-9\s+-]/g, '');
        case 'number':
            return value.replace(/[^0-9.]/g, '');
        case 'integer':
            return value.replace(/[^0-9]/g, '');
        case 'assetId':
            return value.replace(/[^a-zA-Z0-9-]/g, '').toUpperCase();
        default:
            return value;
    }
}
