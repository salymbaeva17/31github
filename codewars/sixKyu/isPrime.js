const isPrime = num => {
    for (let i = 2; i <= num ** .5; i++) {
        if (!(num % i)) return false;
    }
    return num > 1;
}
console.log(isPrime(7))
