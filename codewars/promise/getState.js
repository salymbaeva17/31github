async function getState(promise) {
    const t = {};
    return Promise.race([promise, t])
        .then(v => (v === t)? "pending" : "fulfilled")
        .catch(err => "rejected");
}
async function withNoResult(promise) {
    const noResult = new Promise(r => setTimeout(r, 50, "NO_RESULT"));
    return Promise.race([promise, noResult])
}
const p = Promise.resolve();
const state = await withNoResult(getState(p));
console.log(state)
const p2 = Promise.reject();
const state2 = await withNoResult(getState(p2));
console.log(state2)
