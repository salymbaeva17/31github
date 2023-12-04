const isAllPossibilities = (x) => {
    if (x.includes(0) && x.includes(x.length - 1)) {
        for (let i = 0; i < x.length; i++) {
            if (!x.includes(i)) {
                return false;
            }
        }
        return true
    } else return false;
}
console.log(isAllPossibilities([0,1,2,3,4]))
