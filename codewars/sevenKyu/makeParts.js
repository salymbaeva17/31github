function makeParts(arr, chunkSize) {
    let newArr = [];
    while (arr.length > 0){
        newArr.push(arr.splice(0, chunkSize));
    }
    return newArr;
}

console.log(makeParts([1,2,3,4,5], 2))
console.log(makeParts([1,2,3], 1))
console.log(makeParts([1,2,3,4,5], 10))
