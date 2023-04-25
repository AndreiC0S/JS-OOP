"use strict";
class StudentNou {
    constructor(code, name) {
        this.studCode = code;
        this.studName = name;
    }
    display() {
        return `My unique code: ${this.studCode}, my name: ${this.studName}.`;
    }
}
let studentnou = new StudentNou(1, "JoeRoot");
console.log(studentnou.display());
