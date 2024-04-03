function pigIt(str) {
    let arrayWord = str.split(' ')
    return arrayWord.map(function(word) {
        let firstLetter = word.charAt(0)
        return word.slice(1) + firstLetter + 'ay'
    }).join(' ')
}

console.log(pigIt('hello its me Aitolkun'))
