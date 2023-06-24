module.exports = {
  plugins: [
    '@remotion',
    'tailwindcss',
  ],
  extends: [
    'plugin:@remotion/recommended',
    'plugin:tailwindcss/recommended',
    'xo-typescript',
    'xo-react',
    'plugin:react/jsx-runtime', // Prevents "'React' must be in scope when using JSX" errors
  ],
  rules: {
    'unicorn/filename-case': 'off',
    'import/extensions': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
}
