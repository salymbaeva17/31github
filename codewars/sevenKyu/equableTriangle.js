function equableTriangle(a, b, c) {
//Your code here!
    let trianglePerimeter = a + b + c
    let semiPerimeter = (a + b + c) / 2
    let heronFormula = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c))
    return trianglePerimeter === heronFormula
}

console.log(equableTriangle(5, 12, 13))
console.log(equableTriangle(2, 3, 4))
console.log(equableTriangle(6, 8, 10))
