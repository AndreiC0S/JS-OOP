"use strict";
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
// function infiniteLoop(): never {
//   while (true) {}
// }
fail();
