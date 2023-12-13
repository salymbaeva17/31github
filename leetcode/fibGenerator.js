const fibGenerator = function* () {
    let current = 0
    let next = 1

    while (true) {
        yield current;
        [current, next] = [next, current + next]


    }
};
const gen = fibGenerator();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
