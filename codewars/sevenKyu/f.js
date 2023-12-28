const f = (x,{a,b,c}) => ({[a]:b,[b]:c,[c]:a})[x]

console.log(f(3, {a:3, b:4,c:5}))
