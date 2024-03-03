"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = { dbid: 1, name: 'John', age: 25 };
console.log(user); // { dbid: 1, name: 'John', age: 25 }
var myFunc = function (name, age) {
    console.log(name, age);
};
myFunc('John', 25); // John 25
var myArray = ['John', 'Jane'];
console.log(myArray); // [ 'John', 'Jane' ]
var User1 = /** @class */ (function () {
    function User1(name, age, isMale) {
        this.name = name;
        this.age = age;
        this.isMale = isMale;
    }
    User1.prototype.getDetails = function () {
        return "".concat(this.name, " is ").concat(this.age, " years old.");
    };
    return User1;
}());
var person = {
    name: "John",
    age: 25,
};
var person1 = { name: "John" };
var employee = person; // Assigning a Person object to an Employee variable
