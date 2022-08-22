// Remove Index Signature medium
// Implement RemoveIndexSignature<T> , exclude the index signature from object types.

type Foo = {
  [key: string]: any;
  foo(): void;
};

type RemoveIndexSignature<T> = {}

type H = RemoveIndexSignature<Foo>; // expected { foo(): void }
