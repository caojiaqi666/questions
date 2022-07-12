# 探究 ReactNode 和 ReactElement 的关系
作者：方阿森
链接：https://juejin.cn/post/6991488685787054116
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

引子
最近在学习「React进阶」 React全部api解读+基础实践大全 的时候遇到了一点小问题。由于我使用 Ts 来实践 React 进阶博客中的例子，所以我在实践 cloneElement 这个 API 的例子的时候，遇见了 Ts 的报错。

报错信息如下：
No overload matches this call.
  The last overload gave the following error.
    Argument of type 'ReactNode' is not assignable to parameter of type 'ReactElement<any, string | JSXElementConstructor<any>>'.
      Type 'undefined' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.

这个报错所要表达的意思是，children 的类型为 ReactNode，而 React.cloneElement 这个方法中第一个参数的类型应该是 ReactElement 。
这个情况就引发了我的思考，ReactNode 和 ReactElement 之间有什么关系？
ReactNode、ReactElement
通过查看声明文件，我们得出 ReactNode 的类型如下：
    type ReactText = string | number;
    type ReactChild = ReactElement | ReactText;

    interface ReactNodeArray extends Array<ReactNode> {}
    type ReactFragment = {} | ReactNodeArray;
    type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

我们发现 ReactNode 是一个联合类型，其中的类型包括 ReactChild、ReactFragment、ReactPortal、boolean、null 以及 undefined。
在 ReactNode 的联合类型中，ReactChild 这个类型也是一个联合类型，该类型为 ReactElement 或者 ReactText。
此时我们就发现了一个实事，也就是 ReactElement 这个类型只不过是 ReactNode 这个类型的一个子类型（我不知道这样叫符不符合规范）。
接下来我们看一看 ReactElement ：
    interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
        type: T;
        props: P;
        key: Key | null;
    }

这是一个接口，其中有 type、props、key 这三个属性。
JSX.Element
JSX.Element 通过执行 React.createElement 或是转译 JSX 获得。
const jsx = <div>hello</div>
const ele = React.createElement("div", null, "hello");
<p> // <- ReactElement = JSX.Element
  <Custom> // <- ReactElement = JSX.Element
    {true && "test"} // <- ReactNode
  </Custom>
</p>

JSX.Element 是一个 ReactElement，其 props 和 type 的泛型被设置为 any。之所以存在 JSX.Element 是因为不同的库实现 JSX 的方式不同，也就是说 JSX 是一个全局的命名空间，通过不同的库来设置，React 的设置如下：
declare global {
  namespace JSX {
    interface Element extends React.ReactElement<any, any> { }
  }
}

小结
通过上面的分析，我们可以得出 ReactElement 是 ReactNode 的一个子集。而在React 中 JSX.Element 和 ReactElement 是几乎等价的。在 React 中实现 JSX.Element 的方式就是 ReactElement。
解决问题
我们认清楚了 ReactNode 和 ReactElement 之后这个问题的原因就很清晰了。
如下图中，children 的类型为 ReactNode，而 cloneElement 这个方法所接受的 children 类型是一个 ReactElement。

因此我们需要设定 children 类型是一个 ReactElement。

如上图所示，通过泛型，我们可以限制 children 的类型为 ReactElement。
如此一来，如果我们在编写代码的时候没有注意 children 类型，错误的提供了一个 ReactText 类型的 children，Ts 将会检查出错误。

你看，Ts 的好处还是挺多的。
