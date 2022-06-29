declare var __DEV__: boolean;

// namespace 代表后面的全局变量是一个对象
declare namespace MyPlugin {
  var n: number;
  var s: string;
  var f: (s: string) => number;
}
