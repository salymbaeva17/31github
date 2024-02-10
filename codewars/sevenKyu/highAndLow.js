function highAndLow(numbers){
    let numArr = numbers.split(" ").map(Number)
    return `${numArr.sort((a,b) => b-a)[0]} ${numArr.sort((a,b) => a-b)[0]}`
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
console.log(highAndLow("1 2 3"))
