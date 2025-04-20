module.exports = {
    // Default settings (applies to all files unless overridden)
    // Language-specific overrides
    overrides: [
        // JavaScript/JSX
        {
            files: ['*.js', '*.jsx'],
            options: {
                trailingComma: 'es5',
                tabWidth: 4,
                semi: false,
                singleQuote: true,
                printWidth: 80,
            },
        },
        // TypeScript/TSX
        {
            files: ['*.ts', '*.tsx'],
            options: {
                //trailingComma: 'all',
                //bracketSpacing: false,
            },
        },
        // JSON
        {
            files: ['*.json'],
            options: {
                singleQuote: false,
            },
        },
        // HTML
        {
            files: ['*.html'],
            options: {
                /*
                printWidth: 100,
                htmlWhitespaceSensitivity: 'strict',
                */
            },
        },
        // CSS/SCSS/LESS
        {
            files: ['*.css', '*.scss', '*.less'],
            options: {
                singleQuote: false, // CSS prefers double quotes
                tabWidth: 4,
            },
        },
        // Markdown
        {
            files: ['*.md', '*.mdx'],
            // ignore
            options: { parser: 'noop' },
        },
        // YAML
        {
            files: ['*.yaml', '*.yml'],
            // ignore
            options: { parser: 'noop' },
        },
    ],
}
