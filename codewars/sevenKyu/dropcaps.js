function dropCap(n) {
    return n.split(' ').map(item =>item.toLowerCase() && item.length>2 ? item[0].toUpperCase()+item.slice(1,item.length).toLowerCase():item).join` `
}

console.log(dropCap('apple'))
console.log(dropCap('more  than    one space between words'))
console.log(dropCap('Revelation of the contents outraged American public opinion, and helped generate'))
