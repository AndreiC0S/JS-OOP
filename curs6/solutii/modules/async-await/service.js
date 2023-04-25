"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonService = void 0;
const PersonService = async (person) => {
    person.request = true;
    return person;
};
exports.PersonService = PersonService;
