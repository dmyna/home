module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import', 'jest'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:jest/recommended'
    ],
    settings: {
        'import/resolver': {
            typescript: {
                project: './tsconfig.json',
                alwaysTryTypes: true
            },
        },
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-unused-vars': 'warn',
        semi: 'error',
        eqeqeq: 'warn',
        'no-undef': 'error',
        'consistent-return': 'error',
        'no-var': 'off',
        'no-unused-vars': 'off',
        'max-len': ['warn', { code: 100 }],
        // classInit: 'error'
    },
    globals: {
        AnyFunction: true,
        AnyObj: true,
        UnkObj: true,
        AnyOk: true,
        AnyErr: true,
        UnknownObj: true,
        Factory: true,
        FactoryObj: true,
        JSONValue: true,
    },
    env: {
        node: true,
        browser: true
    }
};