function isPrime (n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

function minimumNumber(numbers){
    let count = 0
    let sum = numbers.reduce((a,b) => a+b)

    if (isPrime(sum)) return 0

    while(!isPrime(sum)) {
        sum++
        count++
    }
    return count
}

console.log(minimumNumber([3,1,2]))
console.log(minimumNumber([5,2]))
console.log(minimumNumber([1,1,1]))
console.log(minimumNumber([2,12,8,4,6]))
