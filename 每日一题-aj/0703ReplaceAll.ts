// ReplaceAll 中等 #template-literal

// 实现 ReplaceAll<S, From, To> 将一个字符串 S 中的所有子字符串 From 替换为 To。

// 例如

type ReplaceAll<S extends string, From extends string, To extends string> =
  From extends ""
    ? S
    : S extends `${infer begin}${From}${infer rest}`
    ? `${begin}${To}${ReplaceAll<rest, From, To>}`
    : S;

type replaced2 = ReplaceAll<"t y p e s", " ", "">; // 期望是 'types'
