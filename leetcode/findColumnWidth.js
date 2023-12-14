const findColumnWidth = function(grid) {
    return grid.reduce((acc, row) => acc.map((num, i) => Math.max(String(row[i]).length, num)),
        Array(grid[0].length).fill(0));
};
console.log(findColumnWidth([[1,2,3], [-2,34,122], [3,0,-233]]))
console.log(findColumnWidth([[1],[22],[333]]))
console.log(findColumnWidth([[-15,1,3],[15,7,12],[5,6,-2]]))
