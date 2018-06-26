module.exports = {
	parser: 'babel-eslint',

	extends: [
		'airbnb',
		'prettier',
		'prettier/react',
	],

	plugins: ['prettier'],

	rules: {
		'import/no-extraneous-dependencies': ['error', { packageDir: '.' }],
		'no-console': [
			'error',
			{
				allow: ['warn', 'error', 'info'],
			},
		],
		'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
		],
		'no-use-before-define': 0,
		'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
		'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        semi: false,
        printWidth: 120,
      },
    ],
	},
};
