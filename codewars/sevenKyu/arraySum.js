function arraySum(arr) {
    return arr.reduce((n, x) => n + (Array.isArray(x) ? arraySum(x) : isNaN(x) ? 0 : x), 0)
}

console.log(arraySum([1, 2, [1, 3]]))
console.log(arraySum([1, 2, 3]))
