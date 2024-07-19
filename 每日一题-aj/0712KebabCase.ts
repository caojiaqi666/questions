// KebabCase medium #template-literal

// FooBarBaz -> foo-bar-baz

type str9 = "FooBarBaz";

type KebabCase<S extends string, Loop = false> =
  S extends `${infer F}${infer R}`
    ? F extends Lowercase<F>
      ? `${F}${KebabCase<R, true>}`
      : `${Loop extends true ? "-" : ""}${Lowercase<F>}${KebabCase<R, true>}`
    : "";

type result9 = KebabCase<str9>;
