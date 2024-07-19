type moreType = "Log" | "Error" | "Info";

type Code1 = "X";
type Code2 = "Y" | "W";
type Code3 = "Z";

type CodeEnum = {
  Log: Code1;
  Error: Code2;
  Info: Code3;
};

type ValueEnum = {
  X: { a: ""; b: "" };
  Y: { msg: ""; a: "" };
  Z: { x: "" };
  W: { ww: "w" };
};

function testuu<
  T extends moreType, // "Error"
  K extends Pick<CodeEnum, T>,
  // {
  //   Error: "Y" | "W";
  // }
  M extends Pick<ValueEnum, K[T]>
  //    {
  //     Y: {
  //         msg: "";
  //         a: "";
  //     };
  //     W: {
  //         ww: "w";
  //     };
  // }
>(type: T, code: K[T], value: M[K[T]]) {}

// K[T]为"Y" | "M"
// M[K[T]]为 { msg: "", a: "" } | { ww: "w" }
// 所以这样写取不到其中一个对象，取到的是个联合类型

testuu("Error", "W", { a: "", msg: "" });

type a = Pick<CodeEnum, "Error">;

type b = Pick<ValueEnum, Code2>;

let obj = { a: "", msg: "" };
