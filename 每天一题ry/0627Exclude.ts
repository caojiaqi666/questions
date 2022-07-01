/*
 * @Author: 如意 chenshuqi.csq@digital-engine.com
 * @Date: 2022-06-28 22:43:33
 * @LastEditors: 如意 chenshuqi.csq@digital-engine.com
 * @LastEditTime: 2022-06-28 22:59:50
 * @FilePath: /ts/questions/每天一题ry/0627Exclude.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 *   实现内置的Exclude <T, U>类型，但不能直接使用它本身。从联合类型T中排除U的类型成员，来构造一个新的类型。
 *  */
type t = string | number | boolean;
type u = number;
type MyExclude<T, U> = T extends U ? never : T;
type yy = MyExclude<t, u>;

/**解析：
 *分配条件类型：对于使用extends关键字的条件类型（即上面的三元表达式类型），如果extends前面的参数是一个泛型类型，当传入该参数的是联合类型，则使用分配律计算最终的结果。分配律是指，将联合类型的联合项拆成单项，分别代入条件类型，然后将每个单项代入得到的结果再联合起来，得到最终的判断结果。
  原文链接：https://blog.csdn.net/qq_34998786/article/details/120300361
 *
 */
// interface userInfo {
//   name: string;
//   age: number;
// }
// keyof userInfo
