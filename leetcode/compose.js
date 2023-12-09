const compose = function(functions) {
    return function(x) {
        let output = x
        for(let i = functions.length-1; i>=0; i--){
            output = functions[i](output)
        }
        return output
    }
};

const fn = compose([x => x + 1, x => 2 * x])

console.log(fn(4))
