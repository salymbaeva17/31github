isAcronym = function (words, s) {
    return words.map(item => item[0]).join`` === s
};
console.log(isAcronym(["alice", "bob", "charlie"], "abc"))
console.log(isAcronym(["an", "apple"], "a"))
console.log(isAcronym(["never","gonna","give","up","on","you"], "ngguoy"))
