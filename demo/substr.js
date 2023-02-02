/*
 * @Author: anjiang
 * @Date: 2023-01-31
 * @LastEditors: anjiang
 * @LastEditTime: 2023-02-01
 * @Description:
 */
const str =
	"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36";

let substr = str;

function getChromeVersion() {
	let arr = navigator.userAgent.split(" ");
	let chromeVersion = "";
	for (let i = 0; i < arr.length; i++) {
		if (/chrome/i.test(arr[i])) chromeVersion = arr[i];
	}
	if (chromeVersion) {
    return JSON.stringify(chromeVersion)
		return Number(chromeVersion.split("/")[1].split(".")[0]);
	} else {
		return false;
	}
}
console.log(getChromeVersion());
