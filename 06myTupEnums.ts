// Source: https://www.tutorialsteacher.com/typescript/tuple

// Tuple
let person: [string, number, boolean];//order of the data type should be same as the order of the data
person = ["John", 25, true];
// person = ["John", true, 5];//error as the order of the data type is not same as the order of the data


//type alias for tuple
type User = [string, number, boolean];
let user: User = ["John", 25, true];

user[1] = 18;
// user[1] = false; //error as the data type of user[1] is number and we are trying to assign boolean value to it 

user.push("Jane");
console.log(user);//[ 'John', 18, true, 'Jane' ] 
user.unshift("Doe");
console.log(user);//[ 'Doe', 'John', 18, true, 'Jane' ]
//we can user push,pop,unshift,shift methods on tuple but we its not a good practice to use these methods on tuple as it will change the data type order of the tuple


//tuple with rest parameter
let person1: [string, number, boolean, ...string[]];
person1 = ["John", 25, true, "Jane", "Doe"];
console.log(person1);//[ 'John', 25, true, 'Jane', 'Doe' ]


//tuple with optional values
let person3: [string, number?, boolean?];
person3 = ["John"];
console.log(person3);//[ 'John' ]
person3 = ["John", 25];
console.log(person3);//[ 'John', 25 ]
person3 = ["John", 25, true];
console.log(person3);//[ 'John', 25, true ]





export{}