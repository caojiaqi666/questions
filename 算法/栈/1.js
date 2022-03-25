// 栈问题
// 有效的括号-20
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 示例 1:
// 输入: "()"
// 输出: true
// 复制代码示例 2:
// 输入: "()[]{}"
// 输出: true
// 复制代码示例 3:
// 输入: "(]"
// 输出: false
// 复制代码示例 4:
// 输入: "([)]"
// 输出: false
// 复制代码示例 5:
// 输入: "{[]}"
// 输出: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let map = new Map();
  map.set("{", "}");
  map.set("(", ")");
  map.set("[", "]");
  let len = s.length;

  if (len % 2 !== 0) {
    return false;
  }
  for (let i = 0; i < len; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      stack.push(s[i]);
    } else {
      let len2 = stack.length;
      if (map.get(stack[len2 - 1]) == s[i]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  console.log("stack: ", stack);
  if (stack.length == 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isValid("{()}"));
