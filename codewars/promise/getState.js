function getState(promise) {
    const t = {};
    return Promise.race([promise, t])
        .then(v => (v === t)? "pending" : "fulfilled")
        .catch(err => "rejected");
}
const p = Promise.reject();
const state = await withNoResult(getState(p));
console.log(state)
