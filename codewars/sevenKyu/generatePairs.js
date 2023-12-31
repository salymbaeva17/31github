function generatePairs(n) {
    var result = [];
    for(i =0 ; i <= n ; i++){
        for(j = i ; j <= n ; j++){
            result.push([i, j]);
        }
    }
    return result;
}

console.log(generatePairs(2))
console.log(generatePairs(3))
