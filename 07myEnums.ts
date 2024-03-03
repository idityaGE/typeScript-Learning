// Purpose: To demonstrate the use of enums in TypeScript
// Source: https://www.tutorialsteacher.com/typescript/typescript-enum
//
// Enums
// Enums are used to define a collection of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
enum Color {        //using only enum will generate an IIFE (Immediately Invoked Function Expression) in the compiled JavaScript
    Red,            //0  //by default the value of the enum starts from 0
    Green,          //1
    Blue,           //2
    Yellow = 5,     //5 //we can give custom value to the enum
    Black = "kala"  //Black //we can also give string value to the enum
}
const greenchili = Color.Green;        //this will return the index of the enum
console.log(greenchili);         //1
const colorName = Color[2];            //this will return the name of the enum 
console.log(colorName);          //Blue
const colorValue = Color[5];           //this will return the name of the enum
console.log(colorValue);         //Yellow
const colorValue1 = Color.Black;       //this will return the value of the enum
console.log(colorValue1);        //kala
console.log(Color["Black"]);     //kala

//but using enums is not a good practice as it will increase the bundle size of the application so we use 'const enum' instead of 'enum'
const enum color {
    Red,
    Green,
    Blue,
    Yellow = 5,
    Black = "kala"
}

const redchili = color.Red;           //this will return the index of the enum
console.log(redchili); //0
// const colorName1 = color[2];       //Error: A const enum member can only be accessed using a string literal
const colorValue2 = color.Black;      //this will return the name of the enum
console.log(colorValue2);      //kala


//Numeric enums
//Numeric enums are number-based enums. If the value of the enum is not provided, it will start from 0.
enum Direction {
    Up = 8,
    Down,  //9  //if the value of the enum is not provided, it will start from the value of the previous enum + 1
    Left,
    Right,
}
console.log(Direction.Up);   //1
console.log(Direction[8]);   //Up
console.log(Direction[9]);   //Down
console.log(Direction[10]);  //Left
console.log(Direction[11]);  //Right
console.log(Direction[0]);   //undefined
console.log(Direction[1]);   //undefined


//String enums
//String enums are string-based enums. All the members of the enum must be string values.
enum Direction1 {
    Up = "UP",  
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
console.log(Direction1.Up);       //UP
console.log(Direction1["UP"]);    //undefined
console.log(Direction1["Up"]);    //UP
console.log(Direction1["Down"]);  //DOWN









export { }