module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  globals: {
    __static: true
  },
  rules: {
    // 指定规则
    'vue/no-parsing-error': [
      // 禁止Vue.js错误
      2, // 错误级别为error
      {
        'x-invalid-end-tag': false // x-invalid-end-tag这个错误不会报错
      }
    ],
    'no-regex-spaces': 'error', // 禁止正则表达式中的空格
    'no-multi-spaces': 'error', // 禁止多个空格
    'array-bracket-spacing': [
      // 数组方括号内的空格
      'error',
      'never'
    ],
    'object-curly-spacing': [
      // 对象花括号内的空格
      'error',
      'never'
    ],
    'block-spacing': [
      // 代码块花括号内的空格
      'error',
      'never'
    ],
    'comma-spacing': [
      // 逗号后面的空格
      'error',
      {
        before: false, // 逗号前没有空格
        after: true // 逗号后有空格
      }
    ],
    'semi-spacing': [
      // 分号后面的空格
      'error',
      {
        before: false, // 分号前没有空格
        after: true // 分号后有空格
      }
    ],
    'computed-property-spacing': [
      // 计算属性内部的空格
      'error',
      'never'
    ],
    'no-trailing-spaces': 'off', // 禁止行末有空格，但是不作为错误级别
    'no-spaced-func': 'error', // 禁止函数名和括号之间有空格
    'space-before-function-paren': [
      // 函数括号前的空格
      'error',
      {
        anonymous: 'ignore', // 匿名函数括号前忽略
        named: 'ignore' // 命名函数括号前忽略
      }
    ],
    'space-before-blocks': [
      // 代码块括号前的空格
      'error',
      'always'
    ],
    'space-in-parens': [
      // 括号内的空格
      'error',
      'never'
    ],
    'space-infix-ops': [
      // 操作符中的空格
      'error',
      {
        int32Hint: false // 指定是否在位运算符号前后插入空格
      }
    ],
    'space-unary-ops': 'error', // 一元运算符前后不留空格
    'spaced-comment': ['error', 'always'], // 注释前后留一个空格
    'arrow-spacing': 'error', // 箭头函数的箭头前后留一个空格
    'yield-star-spacing': [
      // yield* 后面不留空格，前面留一个空格
      'error',
      {
        before: true,
        after: false
      }
    ],
    'no-irregular-whitespace': 'error', // 禁止使用不规则的空白符
    'template-curly-spacing': ['error', 'never'], // 模板字符串内部不留空格
    'max-len': ['error', 120], // 单行最大长度为120
    'no-multiple-empty-lines': 'error', // 不允许多个空行
    'eol-last': 'off', // 不强制文件末尾有空行
    'lines-around-comment': [
      // 注释前后各保留一行空行
      'error',
      {
        beforeBlockComment: false
      }
    ],
    curly: ['error', 'multi-line'], // 单行代码块两侧不加空格，多行代码块两侧加空格
    camelcase: [
      // 使用驼峰命名法，但是属性名可以不用
      'error',
      {
        properties: 'never'
      }
    ],
    'no-unused-vars': 0, // 允许定义未使用的变量
    'arrow-parens': 0, // 箭头函数参数可以不用括号
    indent: [
      // 使用2个空格作为一个缩进层级
      'error',
      2,
      {
        SwitchCase: 1 // switch 语句中的 case 子句增加一个缩进层级
      }
    ],
    'no-console': 0, // 允许使用 console
    'generator-star-spacing': 0, // generator 函数的 * 号前后不留空格
    'no-var': 1, // 尽量使用 let 或 const，不使用 var
    eqeqeq: ['error', 'smart'], // 使用严格相等运算符（===）或不严格相等运算符（==）的情况下需要进行类型转换时可以使用 ==，例如将字符串转为数字
    semi: [1, 'always'], // 语句末尾必须加分号，但可以使用 ASI 自动插入分号
    'operator-linebreak': [
      // 在操作符前换行，除非操作符位于行末或者下一行开头
      2,
      'before',
      {
        overrides: {
          '?': 'after'
        }
      }
    ],
    'no-debugger': 2, // 禁止使用 debugger
    quotes: [1, 'single'] // 字符串必须使用单引号
  }
};
