function babySharkLyrics() {
    let arr = ['Baby shark', 'Mommy shark', 'Daddy shark', 'Grandma shark', 'Grandpa shark', "Let's go hunt"]
    let out = ''
    let doo = ' doo'.repeat(6)
    arr.map(el => out += `${el},${doo}\n`.repeat(3) + `${el}!\n`)
    out += 'Run away,…'
    return out
}

console.log(babySharkLyrics())
