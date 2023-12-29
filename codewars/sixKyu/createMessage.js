const createMessage = (...arr) =>
    str => str ? createMessage(...arr, str) : arr.join(` `)
console.log(createMessage('Hello')('World!')("It's me")())
