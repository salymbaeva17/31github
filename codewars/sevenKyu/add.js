function add(...args) {
    return args.reduce((acc, item, idx) => acc+ item*(idx+1), 0)
}

console.log(add(100,200,300))
