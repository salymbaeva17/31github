function dashatize(num) {
    return num.toString().split("").map(function(c){
        return c % 2 ? "-" + c + "-" :  c
    }).join("").split("-").filter(a => a !== "").join("-")

}
console.log(dashatize(28369))
console.log(dashatize(-98))
