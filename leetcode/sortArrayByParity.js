const sortArrayByParity = (nums) => {
    let res = [], res2=[]
    for(let i = 0; i<nums.length; i++){
        if(nums[i] %2===0)res.push(nums[i])
        else if(nums[i]%2!==0)res2.push(nums[i])
    } return [...res, ...res2]
};
console.log(sortArrayByParity([1,2,3,4,5,6]))
