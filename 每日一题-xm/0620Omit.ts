// 实现 Omit 中等

// Omit<Type, Keys> 省略
// Exclude<UnionType, ExcludedMembers>

// 不使用 Omit 实现 TypeScript 的 Omit<T, K> 泛型。

// Omit 会创建一个省略 K 中字段的 T 对象。

// 例如：

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyOmit<T, U extends keyof T> = {
  [C in Exclude<keyof T, U>]: T[C];
};

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};
