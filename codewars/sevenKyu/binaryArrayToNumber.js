const binaryArrayToNumber = arr => {
    return arr.reverse().reduce((acc, item, idx) => acc + item*2**idx, 0)
};
console.log(binaryArrayToNumber([0,0,1,0]))
console.log(binaryArrayToNumber([0,0,0,1]))
console.log(binaryArrayToNumber([1,1,1,1]))
console.log(binaryArrayToNumber([0,1,1,0]))
