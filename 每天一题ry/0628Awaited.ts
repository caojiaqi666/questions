/*
 * @Author: 如意 chenshuqi.csq@digital-engine.com
 * @Date: 2022-06-28 09:19:53
 * @LastEditors: 如意 chenshuqi.csq@digital-engine.com
 * @LastEditTime: 2022-06-28 10:13:21
 * @FilePath: /ts/6-28awaited.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* 题目： 假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。在 TS 中，我们用 Promise 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。
 比如：Promise<ExampleType>，请你返回 ExampleType 类型。 */
type MyAwaited<T> = T extends Promise<infer K> ? MyAwaited<K> : T;
type p1 = Promise<string>;
type p2 = Promise<number>;

type res1 = MyAwaited<p1>;
type res2 = MyAwaited<p1>;
