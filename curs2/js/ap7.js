import { User } from "../app1/modules/User.js";
// Modificam nume, email, varsa
let user = new User('1','ion','ion@ion.com',22);
user.doarme(7);
user.mananca(2000);
console.log(user);
user.nume = 'Dan';
// user._varsta = -23
// user.myAge = 23
user.myEmail = 'dan@dan.ro'
console.log(user);