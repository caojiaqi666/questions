// Length of String 中等 #template-literal

// 计算字符串的长度，类似于 String#length 。

type StringToArray<S extends string> = S extends `${infer H}${infer R}`
  ? [H, ...StringToArray<R>]
  : []

type LengthOfString<S extends string> = StringToArray<S>['length']