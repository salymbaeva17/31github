function ipsBetween(start, end){
    const ip1 = start.split('.')
    const ip2 = end.split('.')

    let result = 0
    for (let i = 0; i < 4; i++) {
        result += (ip2[i] - ip1[i]) * 256 ** (3 - i)
    }

    return result
}

console.log(ipsBetween("150.0.0.0", "150.0.0.1"))
console.log(ipsBetween("10.0.0.0", "10.0.0.50"))
console.log(ipsBetween("10.11.12.13", "10.11.13.0"))
