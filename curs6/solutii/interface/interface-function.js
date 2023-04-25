"use strict";
let mySearch;
mySearch = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
};
console.log(mySearch("pato", "topa")); //false
//console.log(mySearch("pato", "pato")); //true
