const braceMap = {
    '(': ')',
    '[': ']',
    '{': '}'
};

function validBraces(braces) {
    return !braces.split('').reduce(function (prev, cur) {
        if (cur === braceMap[prev[prev.length - 1]]) {
            prev.pop();
        } else {
            prev.push(cur);
        }
        return prev;
    }, []).length;
}

console.log(validBraces("({})[({})]"))
console.log(validBraces("[(])"))
