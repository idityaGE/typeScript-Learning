//Generics are used to create reusable components.

//Generics in TypeScript are similar to generics in Java or C#.

const array: number[] = [1, 2, 3, 4, 5];
const array2: string[] = ["a", "b", "c", "d", "e"];

const score: Array<number> = [1, 2, 3, 4, 5];
const score2: Array<string> = ["a", "b", "c", "d", "e"];

//generic function
function printArray<T>(arr: T[]): void { //'<T>' here T is a placeholder for the type of the array
    arr.forEach((element) => {
        console.log(element);
    });
}
//here T is a placeholder for the type of the array it can be any type like number, string, boolean etc. or it can be a custom type like User, Product etc. which conatins multiple types.

printArray<number>(array);
printArray<string>(array2);

const user: (string | number)[] = ["Aditya", 21];
printArray(user);
// printArray<string | number>(user); both are same


//generic class
class User<T> {
    constructor(public name: T, public age: number) { }
    introduce(): void {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}
let aditya = new User<string>("Aditya", 21);


//now let's come to the point of using generics 

function print<T>(arg: T): T { //its return type is also T so whatever type of argument we pass it will return the same type of argument
    console.log(arg);
    return arg;
}
let output = print<string>("Aditya"); //we can define the type of the argument
let output2 = print(21); //we can also let the compiler to infer the type of the argument

interface User2 {
    name: string;
    age: number;
}
let output3 = print<User2>({ name: "Aditya", age: 21 }); //we can also pass custom type as an argument like interface, class etc.

type Product = {
    name: string;
    price: number;
} //we can also use type for custom type
let output4 = print<Product>({ name: "Laptop", price: 50000 });

//we can also use multiple types in generics
function print2<T, U>(arg1: T, arg2: U): void {
    console.log(arg1, arg2);
}
print2<string, number>("Aditya", 21);
print2("Aditya", 21); //we can also let the compiler to infer the type of the argument


//function overloading using generics
function getProduct<T>(products: T[]): T[] {
    return products;
}
//arrow function
const getProducts = <T>(products: T[]): T[] => {
    return products;
}


//generic constraints
//
function getVal<T extends number, U>(valOne: T, valTwo: U): object { //now here we have add a constraint that T should be a number
    return {
        valOne,
        valTwo
    };
}
// console.log(getVal("Aditya",21)); //error because T should be a number
console.log(getVal(21, "Aditya")); //we also add constraint on U also 


//
interface Length {
    length: number;
}
function getLength<T extends Length>(arg: T): T {
    console.log(arg.length);
    return arg;
}
//  The extends Length part is a constraint that restricts T to any type that satisfies the Length interface.In other words, T must be an object that has a length property of type number.
// Inside the getLength function, arg.length is logged to the console.Since T extends Length, TypeScript knows that arg has a length property.The function then returns arg.
getLength("Aditya");
getLength([1, 2, 3, 4, 5]);
getLength({ length: 5 });
const len = getLength([1, 2, 3, 4, 5]);
console.log(len);  //[ 1, 2, 3, 4, 5 ]

//
interface db {
    connection: string;
    username: string;
    password: string;
}
function getDb<T, U extends db>(arg1: T, arg2: U): object {
    console.log(arg2.connection);
    return {
        arg1,
        arg2
    };
}
let connectioStatus = getDb("Aditya", { connection: "localhost", username: "root", password: "root" });
console.log(connectioStatus); //{ arg1: 'Aditya', arg2: { connection: 'localhost', username: 'root', password: 'root' } }


//generic with classes
interface Quiz {
    name: string,
    type: string
}
interface Couse {
    name: string,
    author: string,
    subject: string,
    price?: number
}
class Sellable<T> {
    public cart: T[] = [];
    constructor(cart: T[]) {
        this.cart = cart;
    }
    addToCart(item: T): void {
        this.cart.push(item);
    }
}
let quiz = new Sellable<Quiz>([{ name: "Quiz1", type: "MCQ" }]);
quiz.addToCart({ name: "Quiz2", type: "MCQ" });
console.log(quiz.cart); //[ { name: 'Quiz1', type: 'MCQ' }, { name: 'Quiz2', type: 'MCQ' } ]

let course = new Sellable<Couse>([{ name: "Course1", author: "Aditya", subject: "TS", price: 1000 }]);
course.addToCart({ name: "Course2", author: "Aditya", subject: "TS" });
console.log(course);  //Sellable { cart: [ { name: 'Course1', author: 'Aditya', subject: 'TS', price: 1000 }, { name: 'Course2', author: 'Aditya', subject: 'TS' } ] }









export { }