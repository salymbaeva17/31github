const sumOrProduct = (arr, n) => {
    const sorted = arr.sort((a, b) => a - b);
    const sum = sorted.slice(-n).reduce((acc, i) => acc + i);
    const product = sorted.slice(0, n).reduce((acc, i) => acc * i, 1);
    return sum > product ? 'sum' : sum < product ? 'product' : 'same';
}
console.log(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4))
console.log(sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3))
console.log(sumOrProduct([10, 20, 3, 30, 5, 4], 3))
