const cancellable = function (fn, args, t) {
    let timerId, time = 0, result = [];

    function executeFn() {
        let returnedValue = fn.apply(null, args)
        result.push({time: time, returned: returnedValue})
        time += t
    }

    function cancelFn() {
        clearInterval(timerId)
    }

    executeFn()
    timerId = setInterval(executeFn, t)
    return cancelFn
}

const result = []

const fn = (x) => x * 2
const args = [4], t = 35, cancelTimeMs = 190

const start = performance.now();

const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({"time": diff, "returned": fn(...argsArr)});
}

const cancel = cancellable(log, args, t);

setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
    console.log(result)
}, cancelTimeMs + t + 15)
