const fn = (maxWeight, wvArr) => {
	const dp = new Array(wvArr.length + 1)
		.fill([])
		.map(() => new Array(maxWeight + 1).fill(0));

	console.log("dp: ", dp);
	for (let i = 1; i < dp.length; i++) {
		for (let j = 1; j < dp[i].length; j++) {
			if (j < wvArr[i - 1].w) {
				dp[i][j] = dp[i - 1][j];
			} else {
				dp[i][j] = Math.max(
					dp[i - 1][j],
					dp[i - 1][j - wvArr[i - 1].w] + wvArr[i - 1].v
				);
			}
		}
	}
	return dp[wvArr.length][maxWeight];
};

console.log(
	fn(6, [
		{ w: 2, v: 11 },
		{ w: 3, v: 4 },
		{ w: 4, v: 6 },
	])
);
