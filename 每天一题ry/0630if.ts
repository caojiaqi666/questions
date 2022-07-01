/*
 * @Author: 如意 chenshuqi.csq@digital-engine.com
 * @Date: 2022-06-30 13:49:50
 * @LastEditors: 如意 chenshuqi.csq@digital-engine.com
 * @LastEditTime: 2022-06-30 23:36:32
 * @FilePath: /ts/questions/每天一题ry/0630if.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
  268 - If
  -------
  by Pavel Glushkov (@pashutk) #简单 #utils
  
  ### 题目
  
  实现一个 `IF` 类型，它接收一个条件类型 `C` ，一个判断为真时的返回类型 `T` ，以及一个判断为假时的返回类型 `F`。 `C` 只能是 `true` 或者 `false`， `T` 和 `F` 可以是任意类型。
  
  举例:
  
  ```ts
  type A = If<true, 'a', 'b'>  // expected to be 'a'
  type B = If<false, 'a', 'b'> // expected to be 'b'
  ```
  
  > 在 Github 上查看：https://tsch.js.org/268/zh-CN
*/

/* _____________ 你的代码 _____________ */

type If<C, T, F> = C extends true ? T : F;
type B = If<false, "a", "b">;
