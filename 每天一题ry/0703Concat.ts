/*
 * @Author: 如意 chenshuqi.csq@digital-engine.com
 * @Date: 2022-07-03 14:31:00
 * @LastEditors: 如意 chenshuqi.csq@digital-engine.com
 * @LastEditTime: 2022-07-03 14:36:31
 * @FilePath: /questions/每天一题ry/0703Concat.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
  533 - Concat
  -------
  by Andrey Krasovsky (@bre30kra69cs) #简单 #array
  
  ### 题目
  
  在类型系统里实现 JavaScript 内置的 `Array.concat` 方法，这个类型接受两个参数，返回的新数组类型应该按照输入参数从左到右的顺序合并为一个新的数组。
  
  举例，
  
  ```ts
  type Result = Concat<[1], [2]> // expected to be [1, 2]
  ```
  
  > 在 Github 上查看：https://tsch.js.org/533/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Concat<T extends any[], U extends any[]> = [...T, ...U];
type c = Concat<[1, 2, 3], [12, 222]>;
