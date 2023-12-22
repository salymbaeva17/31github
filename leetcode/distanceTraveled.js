const distanceTraveled = function(mainTank, additionalTank) {
    let distance = 0
    while(mainTank-5 >= 0){
        if(additionalTank >=1){
            mainTank +=1
            additionalTank -=  1
        }
        if(mainTank>=5){
            distance += 50
            mainTank -= 5
        }
        else break
    }
    return mainTank*10 +distance
}
console.log(distanceTraveled(5,10))
