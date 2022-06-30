// Trim 中等 #template-literal

// 实现Trim<T>，它是一个字符串类型，并返回一个新字符串，其中两端的空白符都已被删除。

// 例如

type Space1 = " " | "\n" | "\t";
type Trim<T extends string> = T extends `${Space1}${infer R}`
  ? Trim<R>
  : T extends `${infer L}${Space1}`
  ? Trim<L>
  : T;

type trimed1 = Trim<"  Hello World  ">; // expected to be 'Hello World'
