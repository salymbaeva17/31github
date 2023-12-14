async function sleep(millis) {
    await new Promise((res) => setTimeout(res, millis))
    return millis
}

let t = Date.now();
sleep(100).then(() => {
    console.log(Date.now() - t);
});
