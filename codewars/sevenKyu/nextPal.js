function nextPal(val) {
    do {
        val++;
    } while(!isPalindrome(val))
    return val;
}

function isPalindrome(num) {
    return num === reverseNum(num);
}

function reverseNum(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

console.log(nextPal(11))
console.log(nextPal(188))
