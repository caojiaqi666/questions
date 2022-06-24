// 可串联构造器 中等 #application

// 在 JavaScript 中我们很常会使用可串联（Chainable/Pipeline）的函数构造一个对象，
// 但在 TypeScript 中，你能合理的给他附上类型吗？

// 在这个挑战中，你可以使用任意你喜欢的方式实现这个类型 - Interface, Type 或 Class 都行。
// 你需要提供两个函数 option(key, value) 和 get()。
// 在 option 中你需要使用提供的 key 和 value 扩展当前的对象类型，通过 get 获取最终结果。

// 例如

// 你的答案
type Chainable<T = {}> = {
  option<Key extends string, Value>(
    key: Key extends keyof T ? never : Key,
    value: Value
  ): Chainable<T & Record<Key, Value>>;
  get(): T;
};
//   解题思路
//   泛型组合 / Record / 伪return this

//   如何约束方法传参？在方法名后添加尖括号。option(key, value) => option<Key, Value>(key, value)。
//   如何约束方法传参为string？option<Key, Value>(key, value) => option<Key extends string, Value>(key, value)。
//   如何返回上一次option的结果？泛型T与Record<Key, Value>的组合类型，并且返回Chainable<组合类型>的计算结果。类似于return this。
//   如何获取最新的类型？T即可。因为当调用get()时，实际上是最后一次的Chainable，这里的T，已经是多次option组合计算后的结果了。

declare const config: Chainable;

const result = config
  .option("foo", 123)
  .option("name", "type-challenges")
  .option("bar", { value: "Hello World" })
  .get();

// 期望 result 的类型是：
interface Result {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}
// 你只需要在类型层面实现这个功能 - 不需要实现任何 TS/JS 的实际逻辑。

// 你可以假设 key 只接受字符串而 value 接受任何类型，你只需要暴露它传递的类型而不需要进行任何处理。同样的 key 只会被使用一次。
