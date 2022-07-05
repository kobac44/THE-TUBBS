module.exports = {
  root: true,
  env: {
    node: true,
    "es6": true,
    "es2020": true
  },
  'extends': [
   
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
      "ecmaVersion": 2020,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
};
