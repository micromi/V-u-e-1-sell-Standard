module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    /****** 自定义验证规则 start ******/
    'semi': ['error', 'always'], // 定义语句以分号结尾
    'index': 0, // 缩进
    'space-before-function-paren': 0 // 函数圆括号前空格
    /****** 自定义验证规则 end ******/
  }
}
