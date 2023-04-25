"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ZipValidator_1 = require("./ZipValidator"); // com chaves
let myValidator = new ZipValidator_1.ZipCodeValidator();
const ret = myValidator.isAcceptable("12345");
console.log(ret);
