import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

export default [
  {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  ...compat.extends("plugin:prettier/recommended"),
  {
    ignores: ["public/*"]
  },
  {files: ["**/*.vue"], languageOptions: {parserOptions: {parser: tseslint.parser}}},
  {
    rules: {
      "no-alert": 0, // 禁止使用alert confirm prompt
      "no-array-constructor": 2, // 禁止使用数组构造器
      "no-bitwise": 0, // 禁止使用按 位运算 符
      "no-caller": 1, // 禁止使用arguments.caller或arguments.callee
      "no-class-assign": 2, // 禁止给类赋值
      "no-cond-assign": 2, // 禁止在条件表达式中使用赋值语句
      "no-console": 2, // 禁止使用console
      "no-const-assign": 2, // 禁止修改const声明的变量
      "no-constant-condition": 2, // 禁止在条件中使用常量表达式 if(true) if(1)
      "no-continue": 0, // 禁止使用continue
      "no-control-regex": 2, // 禁止在正则表达式中使用控制字符
      "no-debugger": 2, // 禁止使用debugger
      "no-delete-var": 2, // 不能对var声明的变量使用delete操作符
      "no-div-regex": 1, // 不能使用看起来像除法的正则表达式/=foo/
      "no-dupe-keys": 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
      "no-dupe-args": 2, // 函数参数不能重复
      "no-duplicate-case": 2, // switch中的case标签不能重复
      "no-else-return": 2, // 如果if语句里面有return,后面不能跟else语句
      "no-empty": 2, // 块语句中的内容不能为空
      "no-empty-character-class": 2, // 正则表达式中的[]内容不能为空
      "no-eq-null": 2, // 禁止对null使用==或!=运算符
      "no-eval": 1, // 禁止使用eval
      "no-ex-assign": 2, // 禁止给catch语句中的异常参数赋值
      "no-extend-native": 2, // 禁止扩展native对象
      "no-extra-boolean-cast": 2, // 禁止不必要的bool转换
      "no-extra-semi": 2, // 禁止多余的冒号
      "no-fallthrough": 1, // 禁止switch穿透
      "no-floating-decimal": 2, // 禁止省略浮点数中的0 .5 3.
      "no-func-assign": 2, // 禁止重复的函数声明
      "no-implicit-coercion": 1, // 禁止隐式转换
      "no-implied-eval": 2, // 禁止使用隐式eval
      "no-inline-comments": 0, // 禁止行内备注
      "no-inner-declarations": [2, "functions"], // 禁止在块语句中使用声明（变量或函数）
      "no-invalid-regexp": 2, // 禁止无效的正则表达式
      "no-invalid-this": 2, // 禁止无效的this，只能用在构造器，类，对象字面量
      "no-irregular-whitespace": 2, // 不能有不规则的空格
      "no-iterator": 2, // 禁止使用iterator 属性
      "no-label-var": 2, // label名不能与var声明的变量名相同
      "no-labels": 2, // 禁止标签声明
      "no-lone-blocks": 2, // 禁止不必要的嵌套块
      "no-lonely-if": 2, // 禁止else语句内只有if语句
      "no-loop-func": 1, // 禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
      "no-mixed-requires": [0, false], // 声明时不能混用声明类型
      "quotes": ["error", "single"],
      "vue/multi-word-component-names": "off",
      "@typescript-eslint/no-explicit-any": "off"
    }
  }
];