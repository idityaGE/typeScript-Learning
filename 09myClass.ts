//how to write class in typescript


//1st way
class User2 {
    name: string;
    age: number;
    city: string = "Mau"; //default value //we can also use readonly keyword to make it constant
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
let aditya2 = new User2("Aditya", 21);
console.log(aditya2);
aditya2.city = "Lucknow"; //we can change the default value
console.log(aditya2);


//2nd way //using public keyword
class User {
    constructor(public name: string, public age: number) { //public is a shortcut to create and initialize the property
        this.name = name;
        this.age = age;
    }
}
let aditya = new User("Aditya", 21);
console.log(aditya);

//3rd way //using private keyword
class User3 {
    constructor(private name: string, private age: number) { //private is a shortcut to create and initialize the property
        this.name = name;
        this.age = age;
    }
}
let aditya3 = new User3("Aditya", 21);
console.log(aditya3);
// aditya3.name  //we cannot access this because of privete keyword   //error: Property 'name' is private and only accessible within class 'User3'.

class User4 {
    public name: string;
    private age: number;
    readonly city: string = "Mau"; //readonly is a shortcut to create and initialize the property
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    introduce(): void {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}
let aditya4 = new User4("Aditya", 21);
console.log(aditya4);//User4 { name: 'Aditya', age: 21, city: 'Mau' }


//getter and setter
class User5 {
    name: string;
    private age: number; //can be accessed only inside the class
    readonly city: string = "Mau";
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    get nameOfUser(): string {
        return this.name;
    }
    get AgeOfUser(): number { //we can access the private property using getter inside the class but not outside the class
        return this.age;
    }
    set AgeOfUser(age: number) { //we can access the private property using setter inside the class but not outside the class
        this.age = age;
    }

}
//if its only readonly then we can only access it but cannot change it
//but if its private then we cannot access it and also cannot change it
//but most of the people don't use the above syntax insted they use the below syntax
class user6 {
    constructor(
        public name: string,
        private age: number,
        readonly city: string = "Mau") { }
    get ageOfUser(): number {
        return this.age;
    }
    set ageOfUser(age: number) { //we don't need to define return type in setter method //because it is always set some value not return any value
        this.age = age;
    }
}
let aditya6 = new user6("Aditya", 21);
console.log(aditya6);//user6 { name: 'Aditya', age: 21, city: 'Mau' }
console.log(aditya6.ageOfUser)    //getter method //21
aditya6.ageOfUser = 22;           //setter method
console.log(aditya6.ageOfUser)    //22


//protected keyword

//if we use protected keyword then we can access the property inside the class and also in the child class
//but if we use private keyword then we can access the property only inside the class not in the child class
class User7 {
    constructor(
        public name: string,
        protected age: number,
        readonly city: string = "Mau") { }
    get ageOfUser(): number {
        return this.age;
    }
    set ageOfUser(age: number) {
        this.age = age;
    }
}
class Admin extends User7 {
    constructor(name: string, age: number) {
        super(name, age);
    }
    introduce(): void {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}
let aditya7 = new Admin("Aditya", 21);
console.log(aditya7);//Admin { name: 'Aditya', age: 21, city: 'Mau' }
aditya7.introduce(); //My name is Aditya and I am 21 years old.
// aditya7.age //error: Property 'age' is protected and only accessible within class 'User7' and its subclasses.



//abstract class
//abstract class is a class that cannot be instantiated and is always used as a base class for other classes
abstract class User8 {
    constructor(public name: string, protected age: number, readonly city: string = "Mau") { }
    abstract introduce(): void;
}
// let aditya8 = new User8("Aditya",17); //error: Cannot create an instance of an abstract class.
//we can only create instance of the class which is inherited from the abstract class
class Admin8 extends User8 {
    constructor(name: string, age: number) {
        super(name, age);
    }
    introduce(): void {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}
let aditya8 = new Admin8("Aditya", 21);
console.log(aditya8);//Admin8 { name: 'Aditya', age: 21, city: 'Mau' }
console.log(aditya8.city); //Mau

//abstract method
//abstract method is a method that is declared without an implementation
//abstract method must be implemented in the child class
abstract class User10 {
    constructor(public name: string, protected age: number) { }
    abstract introduce(): void; //abstract method
}
class Admin10 extends User10 {
    constructor(name: string, age: number) {
        super(name, age);
    }
    introduce(): void {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}
let aditya10 = new Admin10("Aditya", 21);
aditya10.introduce(); //My name is Aditya and I am 21 years old.


//static keyword
//static keyword is used to create a property or method that can be accessed without creating an instance of the class
class User9 {
    static city: string = "Mau"; //static property
    constructor(public name: string, protected age: number) { }
    static introduce(): void {  //static method
        console.log(`This is a static method`);
    }
}
let aditya9 = new User9("Aditya", 21);
console.log(User9.city); //Mau
User9.introduce(); //This is a static method




//class with interface
//we can also use interface with class
//we can use interface to define the structure of the class

interface User11 {
    name: string;
    age: number;
    introduce(): void;
}
interface getAge {
    ageOfuser(): number;
}
class Admin11 implements User11, getAge { //but when we use interface with class then we have to implement all the properties and methods of the interface in the class and also we can add more properties and methods in the class
    constructor(
        public name: string,
        public age: number,
        readonly isMale: boolean = true) { } //we can add more properties
        
    ageOfuser(): number {
        return this.age;
    }
    introduce(): void {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}






export { }