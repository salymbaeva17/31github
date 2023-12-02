function arr2bin(arr) {
    return arr.reduce((sum, cur) => typeof(cur) === 'number' ? sum + cur : sum, 0).toString(2);
}

console.log(arr2bin([1,2,'a']))
console.log(arr2bin([1,2]))
console.log(arr2bin([]))
