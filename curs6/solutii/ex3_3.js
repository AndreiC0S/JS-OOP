"use strict";
class Person2 {
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log(this.name);
    }
}
class Employee2 extends Person2 {
    constructor(name, code) {
        super(name); // must call super()
        this.empCode = code;
    }
    find(name) {
        return new Employee2(name, 1);
    }
}
let emp = new Employee2("James", 100);
emp.display(); //James
let emp2 = emp.find('Steve');
