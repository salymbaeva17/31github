function solution(digits){
    return digits.length === 5 ? +digits :
        Math.max(+digits.slice(0,5), solution(digits.slice(1)))
}

console.log(solution('45678234'))
