/* 题目：取出元组类型中的第二项 */
// extends - 限制传入的类型，判断 T 是否符合我们给出的条件
// infer - 占位
type Second<T extends unknown[]> = T extends [infer A, infer B, ...infer C]
  ? B
  : never;

type Tuple1 = [number, string, boolean];
type Tuple2 = [string, number, boolean];
type Tuple3 = [string, boolean, number];

type Second1 = Second<Tuple1>;
type Second2 = Second<Tuple2>;
type Second3 = Second<Tuple3>;

/* 课后练习 */
/* 
1. 取Promise泛型中的类型

Promise<string>
// 如何取到string
*/
type PromiseType<T extends Promise<unknown>> = T extends Promise<infer C>
  ? C
  : never;

type p1 = PromiseType<Promise<string>>;
type p2 = PromiseType<Promise<boolean>>;

/* 2.获取元组第一项类型，最后一项类型，第一项以外的剩余类型，最后项以外的剩余类型 */
//  (1)获取元组第一项类型
type FirstType<T extends unknown[]> = T extends [infer A, ...infer B]
  ? A
  : never;
type first1 = FirstType<Tuple1>;
type first2 = FirstType<Tuple2>;

//  (2)获取元组最后一项类型
type LastType<T extends unknown[]> = T extends [...infer A, infer B]
  ? B
  : never;
type last1 = LastType<Tuple1>;
type last2 = LastType<Tuple2>;

//  (3)获取第一项以外的剩余类型
type ExcludeFirstType<T extends unknown[]> = T extends [infer A, ...infer B]
  ? B
  : never;
type excludeFirst1 = ExcludeFirstType<Tuple1>;
type excludeFirst2 = ExcludeFirstType<Tuple2>;

//  (4)获取最后一项以外的剩余类型
type ExcludeLastType<T extends unknown[]> = T extends [...infer A, infer B]
  ? A
  : never;
type excludeLast1 = ExcludeLastType<Tuple1>;
type excludeLast2 = ExcludeLastType<Tuple2>;
