module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json'
    },
    extends: ["airbnb-typescript-prettier"],
    rules: {
        'object-curly-spacing': ['error', 'always']
    },
};
