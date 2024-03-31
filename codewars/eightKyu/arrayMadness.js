function arrayMadness(a, b) {
    return a.reduce((acc, rec) => acc+rec**2,0)>b.reduce((acc, rec) => acc+rec**3,0)
}

console.log(arrayMadness([3,4,6],[2,3,4]))
console.log(arrayMadness([4,5,6],[1,2,3]))
