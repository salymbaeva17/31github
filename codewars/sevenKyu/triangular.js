const max_n = Math.floor(Math.sqrt(Number.MAX_VALUE))

function triangular(n) {
    if (n < 1 || n >= max_n) return 0

    return (n * (n + 1)) / 2
}

console.log(triangular(7))
