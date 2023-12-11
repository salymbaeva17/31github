const isPalindrome = function(x) {
  const y = x.toString().split("").reverse().join("");
  return y === x 
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
