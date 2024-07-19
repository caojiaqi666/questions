// Capitalize 中等 #template-literal

// 实现 Capitalize<T> 它将字符串的第一个字母转换为大写，其余字母保持原样。

// 例如

type MyCapitalize<T extends string> = T extends `${infer first}${infer rest}`
  ? `${Uppercase<first>}${rest}`
  : "";

type capitalized1 = MyCapitalize<"hello world">; // expected to be 'Hello world'

type capitalized2 = MyCapitalize<"h">; // expected to be 'H'

type capitalized3 = MyCapitalize<"">; // expected to be ''
