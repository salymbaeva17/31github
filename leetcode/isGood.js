const isGood =  (nums) => {

    nums.sort(function (a, b) {
        return a - b
    })
    let number = nums.length - 1
    let check = false
    let count = 0
    outerLoop: for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums[number - 1]; j++) {
            if (nums[i] === nums[j]) break outerLoop;
        }
        if (nums[i] === number) count++;
        check = (nums[number] === number) && (nums[number - 1] === number) && (count === 2);
    }
    return check;
}
console.log(isGood([2, 1, 3]))
console.log(isGood([1, 3, 3, 2]))
console.log(isGood([3, 4, 4, 1, 2, 1]))
console.log(isGood([1, 1]))
