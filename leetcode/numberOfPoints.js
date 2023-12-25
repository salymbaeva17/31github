const numberOfPoints = function (nums) {
    let output = nums.reduce((acc, cur) => {
        for (let i = cur[0]; i <= cur[1]; i++)
            acc.add(i);
        return acc;
    }, new Set());
    return output.size;
};
console.log(numberOfPoints([[3,6],[1,5],[4,7]]))
console.log(numberOfPoints([[1,3],[5,8]]))
