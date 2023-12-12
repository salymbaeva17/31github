const createCounter = function(init) {
    let c = i = init

    function increment() {
        return ++c
    }

    function decrement() {
        return --c
    }

    function reset() {
        return c = i
    }
    return {increment, decrement, reset}
};
const counter = createCounter(6)
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.reset())
console.log(counter.increment())
