const addTwoPromises = async(promise1, promise2) => {
    return Promise.all([promise1, promise2])
        .then(value =>
            value.reduce((acc, item) => acc + item, 0))
};
console.log(
    addTwoPromises(
        new Promise(resolve => setTimeout(() => resolve(2), 20)),
        new Promise(resolve => setTimeout(() => resolve(5), 60))
    )
)
