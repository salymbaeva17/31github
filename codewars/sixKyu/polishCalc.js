const operands = {
    '+': function (b, a) { return a + b;},
    '-': function (b, a) { return a - b;},
    '*': function (b, a) { return a * b;},
    '/': function (b, a) { return a / b;}
};

function calc(expr) {
    expr = expr || '0';
    return +expr.split(/\s/g).reduce(function (stack, current) {
        stack.push(operands[current] ? operands[current](+stack.pop(), +stack.pop()) : current);
        return stack;
    }, []).pop();
}

console.log(calc('4 2 /'))
console.log(calc('1 3 *'))
console.log(calc('1 3 -'))
