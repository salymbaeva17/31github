const map = function (arr, fn) {
    return arr.map((item, idx) => fn(item, idx))
};
console.log(map(
    [1, 2, 3],
    function plusOne(n) {return n + 1}
))
console.log(map(
    [1, 2, 3],
    function plusI(n, i) {return n + i;}
))
console.log(map(
    [10, 20, 30],
    function constant(n, i) {return 42;}
))
