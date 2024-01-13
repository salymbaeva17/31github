function arrange(str) {
    let words = str.split(' ')
    for (let d = 1, j = 0, i = 1; i < words.length; i++) {
        if (d * words[j].length > d * words[i].length) {
            [words[j], words[i]] = [words[i], words[j]]
        }

        j = i
        d = -d
    }
    return words
        .map((w, i) => w[i % 2 ? 'toUpperCase' : 'toLowerCase']())
        .join(' ')
}

console.log(arrange("who hit retaining The That a we taken"))
console.log(arrange("on I came up were so grandmothers"))
