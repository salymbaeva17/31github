const toCamelCase = str =>
     str.split(/-|_/g).map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('')
console.log(toCamelCase('the_stealth-warrior'))
