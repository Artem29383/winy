module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 2
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: require('./config/alias')
      }
    ],
    'babel-plugin-styled-components',
  ]
};