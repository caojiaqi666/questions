/*
 * @Author: 如意 chenshuqi.csq@digital-engine.com
 * @Date: 2022-06-28 22:16:23
 * @LastEditors: 如意 chenshuqi.csq@digital-engine.com
 * @LastEditTime: 2022-06-28 22:41:46
 * @FilePath: /ts/questions/每天一题ry/test/extends.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * extends：表示继承/拓展的含义、表示约束的含义、表示分配的含义
 *  对extends的理解https://blog.csdn.net/qq_34998786/article/details/120300361
 * A extends B 的理解，A 可以分配给B*/
type Human = {
  name: string;
  age: number;
};
type Duck = {
  name: string;
};
type Bool = Duck extends Human ? "yes" : "no"; // Bool => 'yes'

type A1 = "x" extends "x" ? string : number; // string
type A2 = "x" | "y" extends "x" ? string : number; // number

type P<T> = T extends "x" ? string : number;
type A3 = P<"x" | "y">; // ?

// never是所有类型的子类型
// type A1 = never extends 'x' ? string : number; // string

// type P<T> = T extends 'x' ? string : number;
// type A2 = P<never> // never
