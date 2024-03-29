module.exports = {
  env: {
    commonjs: true,
    node: true,
    browser: true,
    'shared-node-browser': true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
  },
  extends: ['eslint:recommended', 'plugin:sonarjs/recommended', 'prettier'],
  parser: '@babel/eslint-parser',
  plugins: [
    'import',
    'sonarjs',
    'unicorn',
    'fp',
    'prefer-optional-chaining',
    '@shopify',
    'prettier',
  ],
  rules: {
    'no-unused-vars': 1,
    'no-promise-executor-return': 2,
    'no-unreachable-loop': 2,
    'prefer-object-has-own': 2,
    curly: 2,
    eqeqeq: 2,
    'no-caller': 2,
    'no-new-object': 2,
    'no-array-constructor': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-implicit-coercion': 2,
    'no-lone-blocks': 2,
    'no-multi-str': 2,
    'no-new-wrappers': 2,
    'no-octal-escape': 2,
    'no-proto': 2,
    'prefer-object-spread': 2,
    'no-sequences': 2,
    'no-unmodified-loop-condition': 2,
    'no-useless-call': 2,
    'no-void': 2,
    'max-statements-per-line': [2, { max: 1 }],
    'new-parens': 2,
    'no-multi-assign': 2,
    'no-restricted-syntax': [
      'error',
      {
        selector: 'FunctionDeclaration',
        message:
          'Do not use a function declaration. Use a function expression instead: const x = function () { ... };',
      },
      {
        selector: 'ExportDefaultDeclaration',
        message: 'Do not use default export. Use named exports instead.',
      },
      'WithStatement',
      "BinaryExpression[operator='in']",
      'ClassDeclaration',
      'ClassExpression',
    ],
    'space-infix-ops': [2, { int32Hint: false }],
    'no-var': 2,
    'prefer-destructuring': [
      1,
      {
        array: false,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    'prefer-rest-params': 2,
    'no-unused-expressions': [
      2,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
        enforceForJSX: true,
      },
    ],
    'fp/no-delete': 1,
    camelcase: [
      1,
      {
        properties: 'never',
      },
    ],
    'prefer-const': 2,
    'no-return-assign': [2, 'always'],
    'no-else-return': 2,
    'prefer-template': 2,
    'prefer-spread': 2,
    'no-param-reassign': 2,
    'array-callback-return': [2, { allowImplicit: true }],
    'dot-notation': 2,
    '@shopify/prefer-early-return': 2,
    'object-shorthand': [2, 'properties'],
    'import/first': 2,
    'import/order': 2,
    'import/no-duplicates': 2,
    'import/no-useless-path-segments': [
      2,
      {
        noUselessIndex: true,
      },
    ],
    'no-unneeded-ternary': [2, { defaultAssignment: false }],
    'prefer-optional-chaining/prefer-optional-chaining': 1,
    'require-atomic-updates': 1,
    'no-nested-ternary': 1,
    'no-console': [1, { allow: ['warn', 'error', 'debug'] }],
    'sonarjs/cognitive-complexity': 0, // disabled because: sonar warns against react functional components
    'sonarjs/prefer-immediate-return': 0, // disabled because: bad rule. Too opinionated.
    'unicorn/better-regex': 2,
    'unicorn/explicit-length-check': 2,
    'unicorn/consistent-function-scoping': 2,
    'unicorn/prefer-default-parameters': 2,
    'unicorn/no-array-push-push': 1,
    'unicorn/prefer-array-index-of': 1,
    'unicorn/prefer-array-flat-map': 1,
    'unicorn/prefer-array-some': 1,
    'unicorn/prefer-array-find': 1,
    'unicorn/prefer-array-flat': 1,
    'unicorn/prefer-includes': 2,
    'unicorn/prefer-spread': 2,
    'unicorn/no-useless-undefined': 2,
    'unicorn/no-for-loop': 2,
    'unicorn/prefer-type-error': 2,
    'unicorn/no-instanceof-array': 2,
    'unicorn/no-new-array': 2,
    'unicorn/throw-new-error': 2,
    'unicorn/no-array-reduce': 2,
    'unicorn/no-useless-length-check': 2,
    'unicorn/prefer-prototype-methods': 2,
    'unicorn/prefer-date-now': 2,
    'unicorn/no-new-buffer': 2,
    'unicorn/no-useless-spread': 2,
    'unicorn/no-unsafe-regex': 2,
    'unicorn/prefer-query-selector': 2,
    'unicorn/prefer-string-replace-all': 2,
    'unicorn/prefer-export-from': [2, { ignoreUsedVariables: true }],
    'no-shadow': [
      2,
      {
        hoist: 'all',
        builtinGlobals: true,
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error', 'event'],
      },
    ],
    'no-eval': 2,
    'prettier/prettier': [
      2,
      {
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
      },
    ],
    // to consider...
    // no-negated-condition
    // unicorn/prefer-switch
    // unicorn/prefer-object-from-entries
    // import/no-unused-modules
    // import/no-cycle {maxDepth: 6, ignoreExternal: true}
    // import/extensions
    // https://eslint.org/docs/rules/guard-for-in or no-restricted-syntax con ForInStatement, suggerire di usare Object.keys e loopare l’array con for...of
  },
  ignorePatterns: ['node_modules/'],
};
