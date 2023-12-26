function processData(data){
    return data.map(item => item[0]-item[1]).reduce((acc, item) => acc*item, 1)
}

console.log(processData([[2, 5], [3, 4], [8, 7]]))
console.log(processData([[2, 9], [2, 4], [7, 5]]))
