function scramble(str, arr) {
    let res = []
    for(let i = 0; i< arr.length; i++){
        res[arr[i]] =str[i]
    }
    return res.join``
}

console.log(scramble('hello', [0,2,1,4,3]))
