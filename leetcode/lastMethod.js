Array.prototype.last = function() {
    return this.length>0?this.pop(): -1
};
console.log([null, {}, 3].last())
