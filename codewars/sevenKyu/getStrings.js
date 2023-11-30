const getStrings = (city)=>{
    let arr = city.toLowerCase().split('').filter(el => el!==' ')
    let obj = {}
    for(let el of arr){
        obj[el] = (obj[el] || 0) +1
    }
    let res = []
    for (let letter in obj){
        res.push(letter+":"+'*'.repeat(obj[letter]))
    }
return res.join`, `
}
console.log(getStrings("Chicago"));
console.log(getStrings("Bangkok"));
console.log(getStrings("Las Vegas"));