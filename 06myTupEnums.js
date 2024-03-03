"use strict";
// Source: https://www.tutorialsteacher.com/typescript/tuple
Object.defineProperty(exports, "__esModule", { value: true });
// Tuple
var person; //order of the data type should be same as the order of the data
person = ["John", 25, true];
var user = ["John", 25, true];
user[1] = 18;
// user[1] = false; //error as the data type of user[1] is number and we are trying to assign boolean value to it 
user.push("Jane");
console.log(user); //[ 'John', 18, true, 'Jane' ] 
user.unshift("Doe");
console.log(user); //[ 'Doe', 'John', 18, true, 'Jane' ]
