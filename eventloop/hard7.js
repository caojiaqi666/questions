/*
 * @Author: anjiang
 * @Date: 2023-02-02
 * @LastEditors: anjiang
 * @LastEditTime: 2023-02-02
 * @Description:
 */
const p = function () {
	return new Promise((resolve, reject) => {
		const p1 = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(1);
			}, 0);
			resolve(2);
		});
		p1.then((res) => {
			console.log(res);
		});
		console.log(3);
		resolve(4);
	});
};

p().then((res) => {
	console.log(res);
});
console.log("1");
