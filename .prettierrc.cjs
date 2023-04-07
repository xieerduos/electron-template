module.exports = {
  // 使用 prettier 的配置 schema。
  $schema: 'https://json.schemastore.org/prettierrc',
  arrowParens: 'always', // 将箭头函数的参数始终用括号包裹起来。
  bracketSameLine: true, // 在同一行中书写对象大括号和数组大括号。
  bracketSpacing: false, // 在对象大括号内不添加空格。
  embeddedLanguageFormatting: 'auto', // 根据需要自动格式化嵌入式语言，如在模板字符串中的 JavaScript 代码。
  htmlWhitespaceSensitivity: 'css', // HTML 空格敏感性使用 css。
  jsxSingleQuote: false, // 不使用单引号而是使用双引号来包裹 JSX 属性。
  printWidth: 120, // 设置每行的字符数限制，超过则格式化。
  proseWrap: 'preserve', // 不在 markdown 文件中强制断行。
  quoteProps: 'as-needed', // 只有在必要时才将属性名称用引号包裹起来，例如包含空格或保留关键字的属性名。
  insertPragma: false, // 不插入任何格式化代码，例如 Prettier 的特殊注释。
  requirePragma: false, // 不要在格式化的文件中要求使用特殊注释。
  semi: true, // 在语句末尾添加分号。
  singleQuote: true, // 使用单引号而不是双引号。
  tabWidth: 2, // 设置一个 tab 的宽度。
  trailingComma: 'none', // 不在多行的末尾添加逗号。
  useTabs: false, // 使用空格而不是制表符来缩进。
  vueIndentScriptAndStyle: false // 不缩进 .vue 文件中的 <script> 和 <style> 标签。
};
