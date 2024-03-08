"use strict";
//how to write class in typescript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
console.log(aditya4); //User4 { name: 'Aditya', age: 21, city: 'Mau' }
//getter and setter
var User5 = /** @class */ (function () {
    function User5(name, age) {
        this.city = "Mau";
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(User5.prototype, "nameOfUser", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User5.prototype, "AgeOfUser", {
        get: function () {
            return this.age;
        },
        set: function (age) {
            this.age = age;
        },
        enumerable: false,
        configurable: true
    });
    return User5;
}());
//if its only readonly then we can only access it but cannot change it
//but if its private then we cannot access it and also cannot change it
//but most of the people don't use the above syntax insted they use the below syntax
var user6 = /** @class */ (function () {
    function user6(name, age, city) {
        if (city === void 0) { city = "Mau"; }
        this.name = name;
        this.age = age;
        this.city = city;
    }
    Object.defineProperty(user6.prototype, "ageOfUser", {
        get: function () {
            return this.age;
        },
        set: function (age) {
            this.age = age;
        },
        enumerable: false,
        configurable: true
    });
    return user6;
}());
var aditya6 = new user6("Aditya", 21);
console.log(aditya6); //user6 { name: 'Aditya', age: 21, city: 'Mau' }
console.log(aditya6.ageOfUser); //getter method //21
aditya6.ageOfUser = 22; //setter method
console.log(aditya6.ageOfUser); //22
//protected keyword
//if we use protected keyword then we can access the property inside the class and also in the child class
//but if we use private keyword then we can access the property only inside the class not in the child class
var User7 = /** @class */ (function () {
    function User7(name, age, city) {
        if (city === void 0) { city = "Mau"; }
        this.name = name;
        this.age = age;
        this.city = city;
    }
    Object.defineProperty(User7.prototype, "ageOfUser", {
        get: function () {
            return this.age;
        },
        set: function (age) {
            this.age = age;
        },
        enumerable: false,
        configurable: true
    });
    return User7;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name, age) {
        return _super.call(this, name, age) || this;
    }
    Admin.prototype.introduce = function () {
        console.log("My name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Admin;
}(User7));
var aditya7 = new Admin("Aditya", 21);
console.log(aditya7); //Admin { name: 'Aditya', age: 21, city: 'Mau' }
aditya7.introduce(); //My name is Aditya and I am 21 years old.
// aditya7.age //error: Property 'age' is protected and only accessible within class 'User7' and its subclasses.
//abstract class
//abstract class is a class that cannot be instantiated and is always used as a base class for other classes
var User8 = /** @class */ (function () {
    function User8(name, age, city) {
        if (city === void 0) { city = "Mau"; }
        this.name = name;
        this.age = age;
        this.city = city;
    }
    return User8;
}());
// let aditya8 = new User8("Aditya",17); //error: Cannot create an instance of an abstract class.
//we can only create instance of the class which is inherited from the abstract class
var Admin8 = /** @class */ (function (_super) {
    __extends(Admin8, _super);
    function Admin8(name, age) {
        return _super.call(this, name, age) || this;
    }
    Admin8.prototype.introduce = function () {
        console.log("My name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Admin8;
}(User8));
var aditya8 = new Admin8("Aditya", 21);
console.log(aditya8); //Admin8 { name: 'Aditya', age: 21, city: 'Mau' }
console.log(aditya8.city); //Mau
//static keyword
//static keyword is used to create a property or method that can be accessed without creating an instance of the class
var User9 = /** @class */ (function () {
    function User9(name, age) {
        this.name = name;
        this.age = age;
    }
    User9.introduce = function () {
        console.log("This is a static method");
    };
    User9.city = "Mau"; //static property
    return User9;
}());
var aditya9 = new User9("Aditya", 21);
console.log(User9.city); //Mau
User9.introduce(); //This is a static method
//abstract method
//abstract method is a method that is declared without an implementation
//abstract method must be implemented in the child class
var User10 = /** @class */ (function () {
    function User10(name, age) {
        this.name = name;
        this.age = age;
    }
    return User10;
}());
var Admin10 = /** @class */ (function (_super) {
    __extends(Admin10, _super);
    function Admin10(name, age) {
        return _super.call(this, name, age) || this;
    }
    Admin10.prototype.introduce = function () {
        console.log("My name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Admin10;
}(User10));
var aditya10 = new Admin10("Aditya", 21);
aditya10.introduce(); //My name is Aditya and I am 21 years old.
var Admin11 = /** @class */ (function () {
    function Admin11(name, age, isMale) {
        if (isMale === void 0) { isMale = true; }
        this.name = name;
        this.age = age;
        this.isMale = isMale;
    } //we can add more properties
    Admin11.prototype.ageOfuser = function () {
        return this.age;
    };
    Admin11.prototype.introduce = function () {
        console.log("My name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Admin11;
}());
