function pigIt(str) {
    var arrayWord = str.split(' ');
    return arrayWord.map(function(word) {
        var firstLetter = word.charAt(0);
        return word.slice(1) + firstLetter + 'ay';
    }).join(' ');
}
