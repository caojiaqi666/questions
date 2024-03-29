// Replace 中等 #template-literal

// 实现 Replace<S, From, To> 将字符串 S 中的第一个子字符串 From 替换为 To 。

// 例如

type Replace<S extends string, From extends string, To extends string> =
	From extends ""
		? S
		: S extends `${infer begin}${From}${infer rest}`
		? `${begin}${To}${rest}`
		: S;

type replaced = Replace<"types are fun!", "fun", "awesome">; // 期望是 'types are awesome!'

type GetParams<Func extends Function> = Func extends (
	...params: infer Params
) => any
	? Params
	: never;

type res = GetParams<(a: number, b: boolean) => void>;

type GetReturnType<Func extends Function> = Func extends (
	...params: any
) => infer R
	? R
	: never;

type res1 = GetReturnType<(a: number, b: boolean) => Promise<number>>;
