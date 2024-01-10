const decodeResistorColors = bands => {
    const colors = {black:0,brown:1,red:2,orange:3,yellow:4,green:5,blue:6,violet:7,gray:8,white:9,gold:5,silver:10},
        [first, second, multiplier, tolerance] = bands.split(' ').map(color => colors[color]),
        ohm = (10 * first + second) * 10**multiplier
    return `${ohm >= 10**6 ? ohm / 10**6 + 'M' : ohm >= 1000 ? ohm / 1000 + 'k' : ohm} ohms, ${tolerance || 20}%`
}
console.log(decodeResistorColors("yellow violet red gold"))
console.log(decodeResistorColors("brown black green silver"))
console.log(decodeResistorColors("yellow violet black"))
