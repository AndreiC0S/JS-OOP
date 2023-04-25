"use strict";
class Clock {
    constructor(h, m) {
        this.currentTime = new Date();
        console.log(this.currentTime);
        console.log(h, m);
    }
}
const time = new Clock(3, 2);
console.log(time);
