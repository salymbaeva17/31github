const BASE_75 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,./:";

let ord = (char) => char.charCodeAt(0);
let chr = (code) => String.fromCharCode(code);

function b75encode(input){
    return input && input.match(/[^]{1,7}/g)
        .map(p=>[...p.padEnd(7,'\0')].reduce((t,c)=>t*256n+BigInt(c.charCodeAt()),0n))
        .map(n=>[...Array(9)].map((_,i)=>BASE_75[Number((n/75n**BigInt(9+~i))%75n)]))
        .flat().join('')+(7-(input.length%7||7));
}

function b75decode(input){
    return input.length === 1 ? '' : input.slice(0,-1).match(/[^]{1,9}/g)
        .map(p=>[...p.padEnd(9,'\0')].reduce((t,c)=>t*75n+BigInt(BASE_75.indexOf(c)),0n))
        .map(n=>String.fromCharCode(...[...Array(7)].map((_,i)=>Number((n/256n**BigInt(7+~i))%256n))))
        .join('').replace(new RegExp(`\u0000{${input[input.length-1]}}$`), '');
}
let original = 'Simple text.';
let encoded = "Xh&1*IqZjg2gKO:a&E2";
console.log(b75encode(original), encoded)
console.log(b75decode(encoded), original)
