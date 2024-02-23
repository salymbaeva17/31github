String.prototype.toJadenCase = function () {
    return this.split(" ").map(item => item[0].toUpperCase()+ item.slice(1)).join` `
};
console.log(
    "How can mirrors be real if our eyes aren't real".toJadenCase()
)
