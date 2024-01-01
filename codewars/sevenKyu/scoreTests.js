const scoreTest = (str, ...vals) => str.reduce((a, v) => a + vals[v] * [1,1,-1][v], 0);
console.log(scoreTest([0, 0, 0, 0, 2, 1, 0], 2, 0, 1))
console.log(scoreTest([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2))
