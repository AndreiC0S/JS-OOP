"use strict";
// o clasa poate implementa mai multe interfete  
class Employee {
    setSalary(salary) {
        this.salary = salary;
    }
    FullName() {
        return this.firstName + ' ' + this.lastName;
    }
    GetAge() {
        return this.age;
    }
    constructor(firstN, lastN, getAge, salary) {
        this.getSalary = (salary) => {
            return this.salary = salary;
        };
        this.firstName = firstN;
        this.lastName = lastN;
        this.age = getAge;
        this.salary = salary;
    }
    getElevatorPitch() {
        throw new Error("Method not implemented.");
    }
}
// using the class that implements interface  
let myEmployee = new Employee('Ion', 'Ion', 25, 1500);
let myFullName = myEmployee.FullName();
let myAge = myEmployee.GetAge();
let salary = myEmployee.getSalary(1000);
console.log("Name of Person: " + myFullName + '\nAge: ' + myAge + ' ' + salary);
