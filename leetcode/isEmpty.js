isEmpty = function(obj) {
    return !Object.keys(obj).length
};
console.log(isEmpty([null,false, 0]))
console.log(isEmpty({}))
console.log(isEmpty({"x": 5, "y": 42}))
