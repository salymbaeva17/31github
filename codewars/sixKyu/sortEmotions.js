function sortEmotions(arr, order){
    const m = {
        ":D": 1,
        ":)": 2,
        ":|": 3,
        ":(": 4,
        "T_T": 5
    }
    return arr.sort((a,b) => order ? m[a] - m[b] : m[b] - m[a])
}

console.log(sortEmotions([ ':D', 'T_T', ':D', ':(' ], false))
console.log(sortEmotions([ 'T_T', ':D', ':(', ':(' ], false))
console.log(sortEmotions([ ':)', 'T_T', ':)', ':D', ':D' ], true))
console.log(sortEmotions([ 'T_T', ':D', ':(', ':(' ], true))
