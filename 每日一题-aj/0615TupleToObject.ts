// 元组转换为对象 简单
// by sinoon @sinoon

// 传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来。

// 例如：

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type TupleToObject<T extends readonly any[]> = {
  [C in T[number]]: C;
};

type result11 = TupleToObject<typeof tuple>; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

// 解题思路：
// 元组或数组中的遍历是T[number]，TS中 type Arr= ['a', 'b'], Arr[number] = 'a' | 'b'
// 对象中的遍历是keyof T，TS中 type Obj= {a: 1, b: '2'}, keyof Obj = 'a' | 'b'
// 此例中as const断言后的类型为不可写的数组类型，所以要约束传入的参数即使用extends构造一个不可写的数组类型，

type TupleToObject2<T extends readonly any[]> = {
  [C in T[number]]: C;
};
type result12 = TupleToObject2<typeof tuple>; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
