"use strict";
exports.__esModule = true;
var message = 'Welcome to the World';
console.log(message);
var myvariable = 10;
function hasname(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasname(myvariable)) {
    console.log(myvariable.name);
}
console.log(myvariable);
console.log(2 + '2');
var nums = [1, 2, 2, 3];
console.log([...new Set(nums)]);
