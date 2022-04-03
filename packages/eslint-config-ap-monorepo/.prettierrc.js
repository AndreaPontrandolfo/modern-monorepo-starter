module.exports = {
    trailingComma: 'es5',
    semi: true,
    singleQuote: true,
    bracketSpacing: true,
    bracketSameLine: false,
    printWidth: 85,
    arrowParens: 'avoid',
    parser: 'babel',
    tabWidth: 2,
    quoteProps: 'as-needed',
    endOfLine: 'crlf',
    overrides: [
        {
            files: '*.css',
            options: {
                parser: 'css',
            },
        },
    ],
};
