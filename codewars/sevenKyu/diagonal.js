function diagonal(matrix){
    let pd = 0, sd = 0;
    for (let i = 0; i < matrix.length; i++) {
        pd += matrix[i][i];
        sd += matrix[i][matrix.length-i-1];
    }
    if (pd > sd) return "Principal Diagonal win!";
    else if (sd > pd) return "Secondary Diagonal win!";
    return "Draw!";
}

console.log(diagonal([ [2,2,2],
    [4,2,6],
    [1,8,2] ]))
console.log(diagonal([  [1, 2, 2, 5, 1, 1, 2, 2, 5, 1],
    [4, 1, 6, 1, 1, 1, 2, 2, 1, 1],
    [1, 8, 1, 6 ,2, 1, 2, 1, 5, 1],
    [1, 5, 2, 1, 2, 1, 1, 2, 5, 1],
    [1, 8, 2, 6, 1, 1, 2, 2, 5, 1],
    [1, 2, 2, 5, 1, 1, 2, 2, 5, 1],
    [1, 2, 2, 1, 1, 1, 1, 2, 5, 1],
    [1, 2, 1, 5, 1, 1, 2, 1, 5, 1],
    [1, 1, 2, 5, 1, 1, 2, 2, 1, 1],
    [1, 2, 2, 5, 1, 1, 2, 2, 5, 1] ]))
console.log(diagonal([ [1, 2, 2, 5, 1],
    [4, 1, 6, 1, 1],
    [1, 8, 5, 6 ,2],
    [1, 5, 2, 1, 2],
    [1, 8, 2, 6, 1] ]))
