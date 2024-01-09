function lastSurvivor(letters, coords) {
    const arr = [...letters]
    coords.map((el, i, ar) => arr.splice(el, 1))
    return arr[0]
}

console.log(lastSurvivor('kbc', [0, 1]))
console.log(lastSurvivor('zbk', [2, 1]))
