// KebabCase medium #template-literal

// FooBarBaz -> foo-bar-baz

type str9 = "FooBarBaz"

type KebabCase<T extends string> = {}

type result9 = KebabCase<str9>