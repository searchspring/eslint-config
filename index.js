module.exports = {
	env: {
		browser: true,
		jquery: true,
		node: true,
	},
	extends: [
		'airbnb-base',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:eslint-comments/recommended',
		'plugin:sonarjs/recommended',
		'plugin:promise/recommended',
		'plugin:prettier/recommended',
		'plugin:unicorn/recommended',
		'prettier',
		'prettier/unicorn',
	],
	overrides: [
		{
			files: ['tsconfig.*', '.eslintrc.*'],
			rules: {
				'sort-keys-fix/sort-keys-fix': 'error',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 10,
	},
	plugins: ['sonarjs', 'no-secrets', 'sort-keys-fix'],
	rules: {
		'arrow-parens': ['error', 'always'],
		'callback-return': 'error',
		camelcase: 'warn',
		'capitalized-comments': 'error',
		'class-methods-use-this': 'off',
		'eslint-comments/no-unused-disable': 'error',
		'handle-callback-err': 'error',
		'import/extensions': 'off',
		'import/no-default-export': 'error',
		'import/no-extraneous-dependencies': [
			'warn',
			{
				devDependencies: ['**/*.test.{js,ts}', '**/*.spec.{js,ts}', '**/*.unit.{js,ts}', '**/*.it.{js,ts}', 'tests/**/*', 'test/**/*'],
			},
		],
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'max-classes-per-file': 'off',
		'max-depth': ['error', 3],
		'max-len': [
			'error',
			{
				code: 150,
				ignoreRegExpLiterals: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreUrls: true,
			},
		],
		'max-nested-callbacks': ['error', 5],
		'max-params': ['error', 5],
		'no-console': 'error',
		'no-continue': 'off',
		'no-empty-function': 'off',
		'no-magic-numbers': [
			'error',
			{
				enforceConst: true,
				ignore: [0, 1],
			},
		],
		'no-param-reassign': 'off',
		'no-plusplus': 'off',
		'no-process-env': 'error',
		'no-process-exit': 'error',
		'no-restricted-syntax': 'off',
		'no-secrets/no-secrets': 'error',
		'no-underscore-dangle': 'off',
		'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
		'no-use-before-define': ['error', { classes: true, functions: false, variables: true }],
		'no-useless-call': 'error',
		'no-useless-constructor': 'off',
		'promise/always-return': 'off',
		'promise/catch-or-return': 'off',
		'quote-props': ['error', 'as-needed'],
		quotes: ['warn', 'single'],
		'sonarjs/no-duplicate-string': 'off',
		strict: ['error', 'global'],
		'unicorn/consistent-function-scoping': 'off',
		'unicorn/filename-case': ['error', { cases: { camelCase: true, pascalCase: true } }],
		'unicorn/no-fn-reference-in-iterator': 'off',
		'unicorn/no-for-loop': 'off',
		'unicorn/no-null': 'off',
		'unicorn/no-reduce': 'off',
		'unicorn/no-useless-undefined': 'off',
		'unicorn/prefer-export-from': 'off',
		'unicorn/prefer-module': 'off',
		'unicorn/prefer-top-level-await': 'off',
		'unicorn/prevent-abbreviations': 'off',
		'valid-jsdoc': 'off',
	},
};
