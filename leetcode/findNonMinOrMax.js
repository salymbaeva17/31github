const findNonMinOrMax = (n) => {
    return n.length<3 ? -1 : Math.min(Math.max(Math.min(n[0], n[1]), n[2]), Math.max(n[0],n[1]))
}
console.log(findNonMinOrMax([2,1,4,3]))
