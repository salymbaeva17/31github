function timeConvert(num) {
    let hh = Math.floor(num / 60);
    let mm = num % 60;
    if (num < 0) {
        return '00:00'
    }
    if (hh < 1) {
        hh = '00';
    } else if (hh >= 1 && hh < 10) {
        hh = '0' + hh;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    return hh + ':' + mm
}

console.log(timeConvert(78))
console.log(timeConvert(0))
console.log(timeConvert(134))
