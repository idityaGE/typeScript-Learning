"use strict";
//how to write class in typescript
Object.defineProperty(exports, "__esModule", { value: true });
//1st way
var User2 = /** @class */ (function () {
    function User2(name, age) {
        this.city = "Mau"; //default value //we can also use readonly keyword to make it constant
        this.name = name;
        this.age = age;
    }
    return User2;
}());
var aditya2 = new User2("Aditya", 21);
console.log(aditya2);
aditya2.city = "Lucknow"; //we can change the default value
console.log(aditya2);
//2nd way //using public keyword
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    return User;
}());
var aditya = new User("Aditya", 21);
console.log(aditya);
//3rd way //using private keyword
var User3 = /** @class */ (function () {
    function User3(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    return User3;
}());
var aditya3 = new User3("Aditya", 21);
console.log(aditya3);
// aditya3.name  //we cannot access this because of privete keyword   //error: Property 'name' is private and only accessible within class 'User3'.
var User4 = /** @class */ (function () {
    function User4(name, age) {
        this.city = "Mau"; //readonly is a shortcut to create and initialize the property
        this.name = name;
        this.age = age;
    }
    User4.prototype.introduce = function () {
        console.log("My name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return User4;
}());
var aditya4 = new User4("Aditya", 21);
console.log(aditya4);
