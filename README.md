# eslint-config

This is based on the AirBnB style guide, but includes a number of additional plugins and some custom rules for our preferences.

Checkout the `index.js` for the details.

### Plugins

- AirBnB: https://github.com/airbnb/javascript
- Import: https://github.com/benmosher/eslint-plugin-import
- ESLint Comments: https://github.com/mysticatea/eslint-plugin-eslint-comments
- SonarJS: https://github.com/SonarSource/eslint-plugin-sonarjs
- Promise: https://github.com/xjamundx/eslint-plugin-promise
- Prettier-ESLint compatibility: https://github.com/prettier/eslint-config-prettier
- Mocha: https://github.com/lo1tuma/eslint-plugin-mocha
- Unicorn: https://github.com/sindresorhus/eslint-plugin-unicorn

Occasionally look [here](https://github.com/dustinspecker/awesome-eslint) for new good stuff.

## Install

To install just the config, use the line below.

```bash
npm i -D @searchspring/eslint-config
```

It's recommended to also install the Searchspring prettier config:

```bash
npm i -D @searchspring/prettier
```

In order to install all the related dependencies and a typical configuration for a JS project, also run the following:

```bash
npm i -D eslint husky lint-staged prettier fixpack
```

Then update your package.json with the following:

```json5
{
	husky: {
		hooks: {
			// Runs staged files for a commit through the scripts below
			'pre-commit': 'lint-staged',
		},
	},
	// Scripts for staged files
	'lint-staged': {
		'./package.json': ['fixpack', 'prettier --write'],
		'*.{js,ts}': ['prettier --write', 'eslint --fix'],
	},
	scripts: {
		format: 'prettier --write "**/*.{js,ts,json}"',
		lint: 'eslint --fix "**/*.{js,ts}"',
		// Important to run the fixpack before format, as format will fix the indentation
		style: 'fixpack && npm run format && npm run lint',
	},
}
```
