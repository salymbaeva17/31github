maximumTripletValue = function(nums) {
    let max = 0

    for (let i = 0; i < nums.length; i++)
        for (let j = i+1; j < nums.length; j++)
            for (let k = j+1; k < nums.length; k++)
                max = Math.max((nums[i] - nums[j]) * nums[k], max)

    return max
};
console.log(maximumTripletValue([12,6,1,2,7]))
console.log(maximumTripletValue([1,2,3]))
console.log(maximumTripletValue([1,10,3,4,19]))
