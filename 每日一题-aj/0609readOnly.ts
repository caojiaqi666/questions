// 实现 Readonly 简单

// 不要使用内置的Readonly<T>，自己实现一个。

// 该 Readonly 会接收一个 泛型参数，并返回一个完全一样的类型，只是所有属性都会被 readonly 所修饰。

// 也就是不可以再对该对象的属性赋值。

// 例如：

interface Todo {
  title: string;
  description: string;
}

type MyReadonly<T> = {
  readonly [C in keyof T]: T[C];
};

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

// todo.title = "Hello" // Error: cannot reassign a readonly property
// todo.description = "barFoo" // Error: cannot reassign a readonly property

type MyReadonly2<T> = {
  readonly [C in keyof T]: T[C];
};

type todo2 = MyReadonly2<Todo>;
