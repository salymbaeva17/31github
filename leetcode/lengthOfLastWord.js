const lengthOfLastWord = function(s) {
    return s.trim().split(' ').slice(-1)[0].length
};
console.log(lengthOfLastWord('   hello world   '))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
