"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("./service");
const createPerson = async () => {
    const person = await (0, service_1.PersonService)({
        name: "Eduardo",
        age: 18,
        city: "Maringá",
        request: false,
    });
    const person2 = await (0, service_1.PersonService)({
        name: "Adriana",
        age: 28,
        city: "Maringá",
        request: false,
    });
    // errado colocar vários awaits
    console.log(person);
    console.log(person2);
    const person3 = (0, service_1.PersonService)({
        name: "Alfredo",
        age: 18,
        city: "Maringá",
        request: false,
    });
    const person4 = (0, service_1.PersonService)({
        name: "Nick",
        age: 18,
        city: "Maringá",
        request: false,
    });
    Promise.all([person3, person4]).then((values) => {
        console.log(values);
    });
    return person;
};
createPerson();
