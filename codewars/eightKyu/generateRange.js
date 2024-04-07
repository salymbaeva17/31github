function generateRange(min, max, step){
    var arr = [];
    while (min <= max) {
        arr.push(min);
        min += step;
    }
    return arr
}

console.log(generateRange(2,10,3))
