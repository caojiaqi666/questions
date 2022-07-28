/**
 * 找到树结构key对应的label
 * @param key
 * @param options
 */
const findTreeKeyLabel = (
  key: string,
  options: DataItem[]
): string | boolean => {
  for (let i = 0; i < options.length; i++) {
    if (options[i]?.value === key) return options[i].label;
    if (options[i].children) {
      const res = findTreeKeyLabel(key, options[i].children);
      if (res) return res;
    }
  }
  return false;
};

const arr = [
  {
    label: "点击UV_命名过长命名过长命名过长命名过长",
    value: "0x1",
    desc: "描述描述描述描述描述描述描述描述描述描述描述",
  },
  {
    label: "点击PV",
    value: "0x2",
    children: [{ label: "children", value: "0x12" }],
  },
  {
    label: "UV点击率",
    value: "0x3",
    desc: "描述描述描述描述描述描述描述描述描述描述描述",
  },
  { label: "PV点击率", value: "0x4" },
  { label: "访问UV", value: "0x5" },
  { label: "访问PV", value: "0x6" },
];

const result = findTreeKeyLabel("0x12", arr);
console.log("result: ", result);
