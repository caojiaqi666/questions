const fn = (money, count, thing) => {
	const dp = new Array(thing.length + 1)
		.fill([])
		.map((item) => new Array(count + 1).fill(0));

	for (let i = 1; i < dp.length; i++) {
		for (let j = 1; j < dp[i].length; j++) {
			const [coast, value, yilai] = thing[i - 1];
			if (coast < money) {
				dp[i][j] = dp[i - 1][j];
			} else {
				// dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - coast] + value * coast);
				dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] + value);
			}
		}
	}
	console.log("dp: ", dp);
};

console.log(
	fn(1000, 5, [
		[800, 2, 0],
		[400, 5, 1],
		[300, 5, 1],
		[400, 3, 0],
		[500, 2, 0],
	])
);
