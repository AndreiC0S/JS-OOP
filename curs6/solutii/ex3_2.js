"use strict";
class Student2 {
    constructor(code, name) {
        this.studCode = code;
        this.studName = name;
    }
}
class Person extends Student2 {
    constructor(code, name, department) {
        super(code, name);
        this.department = department;
    }
    getElevatorPitch() {
        return (`My unique code: ${this.studCode}, my name: ${this.studName} and I am in ${this.department} Branch.`);
    }
}
let joeRoot = new Person(1, "Ion", "PS");
console.log(joeRoot.getElevatorPitch());
