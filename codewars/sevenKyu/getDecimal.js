const getDecimal = (n) => {
    return Math.abs(n%1)
}
console.log(getDecimal(13.333))
console.log(getDecimal(0.4))
