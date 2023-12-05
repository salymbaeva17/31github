const addDigits = (num) => {
    let res= ('' + num).split('').reduce((acc, el) => acc + +el, 0)
    while((""+res).length >1){
        res =  ('' + res).split('').reduce((acc, el) => acc + +el, 0)
    }

return res
};
console.log(addDigits(38))
console.log(addDigits(0))
