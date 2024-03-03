"use strict";
// "|" is used to define multiple data types for a variable
//
Object.defineProperty(exports, "__esModule", { value: true });
var score = 10;
score = '20'; //score data type will be string
score = 30; //score data type will be number
var user = {
    name: 'John',
    age: "seventeen",
    isActive: true
};
console.log(user); //{ name: 'John', age: 'seventeen', isActive: true }
