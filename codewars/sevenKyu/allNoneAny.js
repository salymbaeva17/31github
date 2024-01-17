Array.prototype.all = function (p) {
    return this.filter(p).length === this.length;
};

Array.prototype.none = function (p) {
    return this.filter(p).length === 0;
};

Array.prototype.any = function (p) {
    return this.filter(p).length > 0;
};
console.log([1, 2, 3].all(isGreaterThanZero))
console.log(![-1, 0, 2].all(isGreaterThanZero))
console.log([-1, 2, 3].none(isLessThanZero))
console.log([-1, -2, -3].none(isGreaterThanZero))
console.log([-1, 2, 3].any(isGreaterThanZero))
console.log([-1, -2, -3].any(isGreaterThanZero))

function isGreaterThanZero (num) {
    return num > 0;
}

function isLessThanZero (num) {
    return num < 0;
}
