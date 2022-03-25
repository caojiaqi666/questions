class Stack {
  constructor(arr) {
    // super();
    this.items = arr;
  }
  // 添加元素
  push(element) {
    this.items.push(element);
  }
  // 移除栈顶元素
  pop() {
    return this.items.pop();
  }
  // 查看栈顶元素
  peek() {
    return this.items[this.items.length - 1];
  }
  // 检查栈是否为空
  isEmpty() {
    return this.items.length === 0;
  }
  // length
  size() {
    return this.items.length;
  }
  // 清空栈
  clear() {
    this.items = [];
  }
}

// let stack1 = new Stack();
// stack1.push(6);
// console.log('stack1.push: ', stack1);
// stack1.pop();
// console.log('stack1.pop: ', stack1);
// stack1.pop();
// console.log('stack1.pop: ', stack1);
// stack1.pop();
// console.log('stack1.pop: ', stack1);
// stack1.pop();
// console.log('stack1.pop: ', stack1);
// stack1.peek();
// console.log('stack1.peek: ', stack1);
// stack1.isEmpty();
// console.log('stack1.isEmpty: ', stack1);
// stack1.size();
// console.log('stack1.size: ', stack1);
// stack1.clear();
// console.log('stack1.clear: ', stack1);

let stack2 = new Stack([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
console.log('stack2: ', stack2);

stack2.pop();
console.log('stack1.pop: ', stack2);
stack2.pop();
console.log('stack1.pop: ', stack2);
stack2.pop();
console.log('stack1.pop: ', stack2);