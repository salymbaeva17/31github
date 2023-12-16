function solve(a){
    let even = a.filter(i => +i%2===0)
    let odd = a.filter(i=> +i%2===1)
    return even.length - odd.length
}
console.log(solve([0,1,2,3]))
console.log(solve([0,1,2,3,'a','b']))
console.log(solve([0, 15,'z',16,'m', 13, 14,'c', 9, 10, 13,'u', 4, 3]))
console.log(solve([13, 6, 8, 15, 4, 8, 13]))
