const fix = paragraph => {
    if(paragraph === '') return ''
    return paragraph.split('. ')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join('. ')
}

console.log(fix("hello. my name is inigo montoya. you killed my father. prepare to die."))
console.log(fix('hi.'))
console.log(fix(''))
