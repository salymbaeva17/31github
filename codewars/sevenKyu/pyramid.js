function pyramid(balls) {
    let out = 0;
    while( balls > out )
        balls -= (out += 1);
    return out === 1 ? 1 : out;
}

console.log(pyramid(6))
