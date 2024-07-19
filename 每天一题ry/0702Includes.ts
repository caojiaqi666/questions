// const map = new Map([
//   ["PART_SUCCESS", "SUCCESS"],
//   ["INVALID", "FAIL"],
//   [["DEALING", "WAIT_PAY"], "INIT"],
// ]);
// const tabsOnchange = (key) => {
//   console.log(map.keys());
//   return map.get(key);
// };
// console.log("tabsOnchange", tabsOnchange("DEALING"));

const map: Map<string | string[], string> = new Map([
  ["PART_SUCCESS", "SUCCESS"],
  ["INVALID", "FAIL"],
]);
// map.set(["DEALING", "WAIT_PAY"], "INIT");
/* const tabsOnchange = (key) => {
  // console.log("判断条件", [...map.keys()].includes(key));
  return map.get(key);
};
tabsOnchange("DEALING");
console.log("tabsOnchange", tabsOnchange("DEALING")); */
// console.log("map", map);
console.log(123);
