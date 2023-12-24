finalString = function(s) {
    let
        str = '',
        revStr = '';

    for(let i = 0; i < s.length; i++) {
        if(s[i] === 'i') {
            [str, revStr] = [revStr, str];
        } else {
            str += s[i];
            revStr = s[i] + revStr;
        }
    }

    return str;
};
console.log(finalString('string'))
console.log(finalString('poiinter'))
