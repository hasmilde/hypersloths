module.exports = {
  root: true,
  extends: 'eslint-config-airbnb-base',
  parserOptions: {
    sourceType: 'script'
  },
  rules: {
    /**
     * Errors
     * Extends: https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/errors.js
     */
    // Rule: disallow or enforce trailing commas
    // Docs: http://eslint.org/docs/rules/comma-dangle
    // Airbnb: 'comma-dangle': [2, 'always-multiline']
    'comma-dangle': [2, 'never'],
    // Rule: disallow the use of console
    // Docs: http://eslint.org/docs/rules/no-console
    // Airbnb: 'no-console': 1
    'no-console': 0,

    /**
     * Imports
     * Extends: https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js
     */
    // Rule: forbid the use of extraneous packages
    // Docs: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    // Airbnb: 'import/no-extraneous-dependencies': [2, { devDependencies: false, optionalDependencies: false, }],
    'import/no-extraneous-dependencies': [2, { devDependencies: true, optionalDependencies: false }],

    /**
     * Strict
     * Extends: https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/strict.js
     */
    // Rule: require effective use of strict mode directives
    // Docs: http://eslint.org/docs/rules/strict
    // Airbnb: 'strict': [2, 'never']
    strict: [2, 'global'],

    /**
     * Style
     * Extends https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js
     */
    // Rule: enforce consistent linebreak style
    // Docs: http://eslint.org/docs/rules/linebreak-style
    // Airbnb: 'linebreak-style': ['error', 'unix']
    'linebreak-style': [0, 'unix'],
    // Rule: require or disallow a space before function opening parenthesis
    // Docs: http://eslint.org/docs/rules/space-before-function-paren
    // Airbnb: 'space-before-function-paren': [2, { 'anonymous': 'always', 'named': 'never' }]
    'space-before-function-paren': [2, 'never']
  }
};
