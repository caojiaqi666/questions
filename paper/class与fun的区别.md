<!--
 * @Author: anjiang 1508771379@qq.com
 * @Date: 2022-07-28 18:01:48
 * @LastEditors: anjiang 1508771379@qq.com
 * @LastEditTime: 2022-07-28 18:01:57
 * @FilePath: /Demo/questions/paper/class与fun的区别.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# 函数式组件与类组件有何不同？

https://overreacted.io/zh-hans/how-are-function-components-different-from-classes/
https://overreacted.io/how-are-function-components-different-from-classes/

这是一篇关于 React 的文章，由 Dan Abramov 撰写。

### 函数组件和类组件有何不同？

React 函数组件和类组件有何不同？长期以来，人们一直认为类组件提供了更多功能（如状态）。但是使用 Hooks 之后，这个说法不再成立。

也许你听说过其中一个在性能上更胜一筹。到底是哪个更好呢？很多类似的性能测试都存在缺陷，所以需要慎重从中得出结论。性能主要取决于代码的执行情况，而不是你选择函数组件还是类组件。据我们观察，性能差异微乎其微，尽管优化策略略有不同。

总之，我们不建议重写现有的组件，除非有其他原因并且不介意成为早期采用者。Hooks 目前仍然很新（就像 React 在 2014 年时一样），一些“最佳实践”还没有出现在教程中。

那么现在我们应该怎么做呢？React 函数组件和类组件之间真的有什么根本差异吗？当然有 —— 在心智模型中。在本文中，我将介绍它们之间最大的差异。自从 2015 年引入函数组件以来，这一差异就一直存在，但经常被忽视：

**函数组件捕获了渲染后的值。**

让我们详细探讨一下这是什么意思。

注意：本文不对类组件或函数组件进行价值判断。我只是在描述 React 中这两种编程模型之间的差异。有关更广泛地采用函数的问题，请参阅 Hooks FAQ。

考虑这个组件：

```javascript
function ProfilePage(props) {
  const showMessage = () => {
    alert('Followed ' + props.user);
  };

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  };

  return (
    <button onClick={handleClick}>Follow</button>
  );
}
```

它显示了一个按钮，通过 `setTimeout` 模拟了一个网络请求，然后显示一个确认提示。例如，如果 props.user 是 'Dan'，在三秒后就会显示 'Followed Dan'。足够简单。

（请注意，在上面的示例中，无论我使用箭头函数还是函数声明都没关系。`function handleClick()` 的效果完全相同。）

我们如何用类组件来实现它呢？一个简单的转换可能看起来像这样：

```javascript
class ProfilePage extends React.Component {
  showMessage = () => {
    alert('Followed ' + this.props.user);
  };

  handleClick = () => {
    setTimeout(this.showMessage, 3000);
  };

  render() {
    return <button onClick={this.handleClick}>Follow</button>;
  }
}
```

人们通常认为这两段代码是等价的。人们经常在这两种模式之间自由重构，而没有注意到它们的影响：

找出这两个版本之间的差异

然而，这两段代码实际上是微妙地不同的。仔细看看它们。你看到差异了吗？对我个人来说，要看出这一点花了一段时间。

在这里有一些剧透，所以如果你想自己找出差异，请查看这个在线演示。本文的其余部分将解释这一差异以及为什么它很重要。

在继续之前，我要强调，我描述的差异与 React Hooks 本身无关。上面的示例甚至没有使用 Hooks！

这一切都是关于 React 中的函数和类的差异。如果你打算在 React 应用中更频繁地使用函数，可能需要了解一下。

我们将通过一个在 React 应用中常见的 bug 来说明这一差异。

打开这个示例沙盒，其中包含一个当前配置文件选择器和上面两个 ProfilePage 实现 —— 每个都渲染了一个 Follow 按钮。

尝试用这两个按钮执行以下操作序列：
1. 点击其中一个 Follow 按钮。
2. 在 3 秒内更改选择的配置文件。
3. 阅读提示文本。

你会注意到一个奇怪的差异：
对于上面的 ProfilePage 函数，点击 Dan 的配置文件，然后导航到 Sophie 的配置文件仍然会弹出 'Followed Dan'。
对于上面的 ProfilePage 类，它会弹出 'Followed Sophie'：
步骤的演示

在这个示例中，第一种行为是正确的。如果我关注一个人，然后导航到另一个人的配置文件，我的组件不应该对我关注了谁感到困惑。这个类的实现显然是有 bug 的。

（不过你肯定应该关注 Sophie。）

那么为什么我们的类示例会表现出这种行为呢？

让我们仔细看看我们类中的 showMessage 方法：

```javascript
class ProfilePage extends React.Component {
  showMessage = () => {
    alert('Followed ' + this.props.user);
  };
```

这个类方法从 this.props.user 中读取。在 React 中，Props 是不可变的，所以它们永远不会改变。但 this 是可以改变的，而且一直都是可变的。

事实上，这正是类中 this 的用途。React 本身会随着时间的推移对其进行更改，以便您可以在渲染和生命周期方法中读取最新版本。

因此，如果我们的组件在请求进行中重新渲染，this.props 就会发生变化。showMessage 方法会从“过时的” props 中读取用户信息。

这揭示了关于用户界面本质的有趣观察。如果我们说 UI 从概念上讲是当前应用程序状态的一个函数，那么事件处理程序就是渲染结果的一部分 —— 就像视觉输出一样。我们的事件处理程序“属于”特定的渲染，具有特定的 props 和 state。

然而，安排一个定时器，其回调中读取 this.props，就会打破这种关联。我们的 showMessage 回调函数不“绑定”到任何特定的渲染上，因此它“丢失”了正确的 props。从 this 中读取数据就会断开这种连接。

假设函数组件不存在。我们该如何解决这个问题？

我们希望在某个地方“修复”渲染和 showMessage 回调之间的连接，以便在传递时间的过程中不会丢失 props。

一种方法是在事件开始时尽早读取 this.props，然后明确地将它们传递到定时器的完成处理程序中：

```javascript
class ProfilePage extends React.Component {
  showMessage = (user) => {
    alert('Followed ' + user);
  };

  handleClick = () => {
    const {user} = this.props;
    setTimeout(() => this.showMessage(user), 3000);
  };

  render() {
    return <button onClick={this.handleClick}>Follow</button>;
  }
}
```

这样可以工作。但是这种方法会使代码显著更冗长，容易出错。如果我们需要更多的参数，会怎么样？如果我们还需要访问状态呢？如果 showMessage 调用另一个方法，并且该方法读取了 this.props.something 或 this.state.something，我们会再次遇到完全相同的问题。因此，我们必须通过从 showMessage 调用的每个方法将 this.props 和 this.state 作为参数传递。

这样做破坏了类通常提供的人机工程学。我们很难记住或者强制执行这一点，这就是为什么人们经常忍受 bug 而不愿修改。

类似地，将警报代码直接内联到 handleClick 中并不能解决更大的问题。我们希望以一种允许将代码分割到更多方法中的方式结构化代码，同时还能读取与该调用相关的渲染对应的 props 和 state。这个问题甚至不仅仅是 React 独有的 —— 你可以在任何将数据放入可变对象（比如 this）的 UI 库中重现它。

也许，我们可以在构造函数中绑定方法？

```javascript
class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.showMessage = this.showMessage.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  showMessage() {
    alert('Followed ' + this.props.user);
  }

  handleClick() {
    setTimeout(this.showMessage, 3000);
  }

  render() {
    return <button onClick={this.handleClick}>Follow</button>;
  }
}
```

不，这并没有解决任何问题。记住，问题在于我们读取 this.props 太晚了，而不是我们使用的语法！然而，如果我们完全依赖 JavaScript 闭包，问题就会消失。

闭包通常避免使用，因为很难想象一个可以随时间发生变化的值。但在 React 中，props 和 state 是不可变的！（或者至少，这是一个强烈的建议。）这消除了闭包的一个主要隐患。

这意味着，如果您从特定渲染中闭合了 props 或 state，您可以始终依靠它们保持完全相同：

```javascript
class ProfilePage extends React.Component {
  render() {
    // 捕获 props！
    const props = this.props;

    // 注意：我们在 *内部渲染*。
    // 这些并不是类方法。
    const showMessage = () => {
      alert('Followed ' + props.user);
    };

    const handleClick = () => {
      setTimeout(showMessage, 3000);
    };

    return <button onClick={handleClick}>Follow</button>;
  }
}
```

你已经在渲染时“捕获”了 props：
抓住皮卡丘
这种方式内部的任何代码（包括 showMessage）都保证看到特定渲染的 props。React 不再“打乱我们的计划”。

然后我们可以在内部添加任意多的帮助函数，它们都将使用被捕获的 props 和 state。闭包解救我们啦！

上面的示例是正确的，但看起来有点奇怪。如果你在渲染内部定义函数，而不是使用类方法，那还有类的意义是什么呢？

确实，我们可以通过去掉外面的类“壳”来简化代码：

```javascript
function ProfilePage(props) {
  const showMessage = () => {
    alert('Followed ' + props.user);
  };

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  };

  return (
    <button onClick={handleClick}>Follow</button>
  );
}
```

就像上面一样，props 仍然会被捕获 —— React 会将它们作为参数传递。与 this 不同，React 本身不会改变 props 对象本身。

如果你在函数定义中解构 props，这一点就更明显了：

```javascript
function ProfilePage({ user }) {
  const showMessage = () => {
    alert('Followed ' + user);
  };

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  };

  return (
    <button onClick={handleClick}>Follow</button>
  );
}
```

当父组件使用不同的 props 渲染 ProfilePage 时，React 将再次调用 ProfilePage 函数。但我们已经点击的事件处理程序“属于”先前渲染的配置文件，具有自己的用户值以及读取它的 showMessage 回调。它们都保持不变。

这就是为什么在函数版本的这个示例中，点击 Sophie 的配置文件，然后更改到 Sunil，会弹出 'Followed Sophie'：

正确行为的演示

这种行为是正确的。 （虽然你可能也想关注 Sunil！）

现在我们了解了 React 中函数和类之间的重大差异：

**函数组件捕获了渲染后的值。**

使用 Hooks 时，相同的原则也适用于状态。考虑下面的示例：

```javascript
function MessageThread() {
  const [message, setMessage] = useState('');

  const showMessage = () => {
    alert('You said: ' + message);
  };

  const handleSendClick = () => {
    setTimeout(showMessage, 3000);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <input value={message} onChange={handleMessageChange} />
      <button onClick={handleSendClick}>Send</button>
    </>
  );
}
```

（这是一个在线演示。）

虽然这不是一个很好的消息应用 UI，但它展示了同样的观点：如果我发送了一条特定的消息，组件不应该困惑于哪条消息实际上被发送了。这个函数组件的消息捕获了“属于”由浏览器调用的点击处理程序返回的渲染的状态。因此，当我点击“发送”按钮时，消息被设置为在我点击“发送”时输入框中的内容。

因此，我们知道 React 函数默认会捕获 props 和 state。但是，如果我们想要读取不属于这个特定渲染的最新 props 或 state，该怎么办呢？在类中，你可以通过读取 this.props 或 this.state 来做到这一点，因为 this 本身是可变的。在函数组件中，你也可以有一个可变值，它被所有组件渲染共享。它称为“ref”：

```javascript
function MyComponent() {
  const ref = useRef(null);
  // 你可以读取或写入 `ref.current`。
  // ...
}
```

但你必须自己管理它。

ref 扮演了与实例字段相同的角色。它是进入可变命令世界的逃生舱口。你可能熟悉“DOM ref”，但这个概念更通用。它只是一个可以放东西的盒子。

即使在视觉上，this.something 看起来像 something.current 的镜像。它们代表着相同的概念。

默认情况下，React 不会为函数组件的最新 props 或 state 创建 refs。在许多情况下，你不需要它们，分配它们可能是多余的。但是，如果你愿意，你可以手动追踪这个值：

```javascript
function MessageThread() {
  const [message, setMessage] = useState('');
  const latestMessage = useRef('');

  const showMessage = () => {
    alert('You said: ' + latestMessage.current);
  };

  const handleSendClick = () => {
    setTimeout(showMessage, 3000);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    latestMessage.current = e.target.value;
  };
```

如果我们在 showMessage 中读取 message，我们将看到我们按下“发送”按钮时的消息。但是当我们读取 latestMessage.current 时，我们会得到最新的值 —— 即使我们在按下“发送”按钮后继续输入。

您可以将这两个演示进行比较，以了解差异。在某些情况下，ref 是一种“退出”渲染一致性的方式，它在某些