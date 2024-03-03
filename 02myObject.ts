const obj = {
    name: 'John',
    age: 30,
    city: 'New York',
    ismarried: false
}

let { name: Name, ...prop } = obj;
console.log(Name); // John
console.log(prop); // { age: 30, city: 'New York', ismarried: false }


//function having object as argument
function createUser(
    { name, age }:                      //argument
        { name: string, age: number }       //argument type
): void                         //return type
{
    console.log(name, age);
}

createUser({ name: 'John', age: 30 }); // John 30


//function returning object
function getUser(): { name: string, age: number } { //return type
    return { name: 'John', age: 30 };
}


//function returning object with optional properties
function getUser1(): { name: string, age?: number } {
    return { name: 'John' };
}


//function returning object with dynamic properties
function getUser2(): { name: string, [key: string]: any } {
    return { name: 'John', age: 30 };
}


//function returning object with readonly properties
//readonly properties can be accessed but can't be modified
function getUser3(): { readonly name: string, readonly age: number } {
    return { name: 'John', age: 30 };
}


//function returning object with dynamic readonly properties
function getUser4(): { readonly name: string, readonly [key: string]: any } {
    return { name: 'John', age: 30 };
}


//function returning object with readonly array
function getUser5(): { readonly name: string, readonly hobbies: readonly string[] } {
    return { name: 'John', hobbies: ['Sports', 'Cooking'] };
}


//type alias for object
type User = {
    name: string,
    age: number
    isMalw: boolean
}

function createUser1(user: User): User {
    return user;
}
const auser = createUser1({ name: 'John', age: 30, isMalw: true });
console.log(auser); // { name: 'John', age: 30, isMalw: true }


let user: User = {
    name: 'John',
    age: 30,
    isMalw: true
}

console.log(user); // { name: 'John', age: 30, isMalw: true }


//type alias for array of objects
type Users = {
    name: string,
    age: number
    isMalw: boolean
}[]
let users: Users = [
    { name: 'John', age: 30, isMalw: true },
    { name: 'Steve', age: 25, isMalw: true }
]
console.log(users); // [ { name: 'John', age: 30, isMalw: true }, { name: 'Steve', age: 25, isMalw: true } ]


//type alias for array
type StringArray = string[];
let hobbies: StringArray = ['Sports', 'Cooking'];
console.log(hobbies); // [ 'Sports', 'Cooking' ]


//type alias for function
type AddFn = (a: number, b: number) => number;       //return type
let add: AddFn;                                      //function type
add = (a: number, b: number) => {
    return a + b;
}
console.log(add(2, 3)); // 5


//type alias for function with optional parameters
type AddFn1 = (a: number, b: number, c?: number) => number;
let add1: AddFn1;
add1 = (a: number, b: number, c?: number) => {
    return a + b + (c ? c : 0);
}
console.log(add1(2, 3, 4)); // 9
console.log(add1(2, 3)); // 5


//type alias for function with default parameters
type AddFn2 = (a: number, b: number, c?: number) => number;
let add2: AddFn2;
add2 = (a: number, b: number, c: number = 0) => {
    return a + b + c;
}


//type alias for function with rest parameters
type AddFn3 = (...numbers: number[]) => number;
let add3: AddFn3;
add3 = (...numbers: number[]) => {
    return numbers.reduce((result, num) => result + num, 0);
}
console.log(add3(2, 3, 4)); // 9
console.log(add3(2, 3)); // 5
console.log(add3(2)); // 2
console.log(add3()); // 0


//type alias for function with dynamic parameters
type AddFn4 = (a: number, b: number, ...numbers: number[]) => number;
let add4: AddFn4;
add4 = (a: number, b: number, ...numbers: number[]) => {
    return numbers.reduce((result, num) => result + num, a + b);
}
console.log(add4(2, 3, 4)); // 9
console.log(add4(2, 3)); // 5
// console.log(add4(2)); // Error minimum 2 parameters required


//type alias with readonly properties and optional properties
type User5 = {
    readonly _id: string, //can't be modified
    name: string,
    age: number,
    isMale: boolean,
    creaditCard?: string //optional property
}
let user5: User5 = {
    _id: '123',
    name: 'John',
    age: 30,
    isMale: true,
    // creaditCard: '1234567890'
} 
// user5._id = '456'; // Error can't be modified



//type alias with readonly array
type User6 = {
    readonly _id: string, //can't be modified
    name: string,
    age: number,
    isMale: boolean,
    hobbies: readonly string[] //can't be modified //push, pop, shift, unshift will not work
}
let user6: User6 = {
    _id: '123',
    name: 'John',
    age: 30,
    isMale: true,
    hobbies: ['Sports', 'Cooking']
}
// user6._id = '456'; // Error can't be modified
// user6.hobbies.push('Reading'); // Error can't be modified


//type alias with dynamic readonly properties
type User7 = {
    readonly _id: string, //can't be modified
    name: string,
    age: number,
    isMale: boolean,
    [key: string]: any //dynamic properties
}
let user7: User7 = {
    _id: '123',
    name: 'John',
    age: 30,
    isMale: true,
    creaditCard: '1234567890' 
}


//multiple type alias with intersection type
type cardNum = {
    creaditNum: number
}
type cvvNum = {
    cvv: number
}
type cardName = {
    name: string
}
type cardExpiry = {
    expiry: string
}

type card = cardNum & cvvNum & cardName & cardExpiry & { readonly _id: string } //intersection type;
let card1: card = {
    _id: '123',
    creaditNum: 1234567890,
    cvv: 123,
    name: 'John',
    expiry: '12/2022'
}
console.log(card1); // { _id: '123', creaditNum: 1234567890, cvv: 123, name: 'John', expiry: '12/2022' }









export { } // To avoid "Cannot redeclare block-scoped variable" error