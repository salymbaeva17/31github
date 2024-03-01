function past(h, m, s) {
    return h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000
}

console.log(past(0, 1, 1))
console.log(past(1, 1, 1))
