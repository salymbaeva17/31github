function towerBuilder(n) {
    return Array.from({length: n}, function(v, k) {
        const spaces = ' '.repeat(n - k - 1)
        return spaces + '*'.repeat(k + k + 1) + spaces
    })
}

console.log(towerBuilder(2))
console.log(towerBuilder(1))
console.log(towerBuilder(3))
