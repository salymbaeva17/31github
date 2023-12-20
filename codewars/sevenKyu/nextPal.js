function nextPal(val) {
    do {
        val++
    } while (!isPalindrome(val))
    return val
}

function isPalindrome(n) {
    return n === reverseNum(n)
}

function reverseNum(n) {
    return +n.toString().split('').reverse().join``
}

console.log(nextPal(11))
console.log(nextPal(188))
