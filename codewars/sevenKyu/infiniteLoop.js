function infiniteLoop(arr, d, n) {
    const [x, y, z] = arr.map(x => x.length)
    arr = arr.reduce((a, b) => a.concat(b))
    let remover = d === 'right' ? 'pop' : 'shift'
    let adder = d === 'right' ? 'unshift' : 'push'
    for (let i = 0; i < n; i++) {
        let e = arr[remover]()
        arr[adder](e)
    }
    return [arr.splice(0, x), arr.splice(0, y), arr]
}

console.log(infiniteLoop([[1, 2, 3], [4, 5, 6], [7, 8, 9]], "left", 1))
console.log(infiniteLoop([[1, 2, 3], [4, 5, 6], [7, 8, 9]], "right", 1))
console.log(infiniteLoop([[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]], "left", 2))
