//typescript does static type checking
//".ts" is the extension for typescript file
//"typescriptlang.org" documentaion  //playground:   ts --> js
//'tsc -v' --> to check the version of typescript
//if above cmd doesn't work, then open powershell and run this cmd 'set-executionpolicy remotesigned' and then select "A"
//"tsc" is the command to compile the typescript file


let user = {
    user: "Aditya",
    age: 18,
    isMale: true
}
console.log(user.age)
console.log("Aditya")

//types: number, string, boolean, any, void, null, undefined, never, array, tuple, enum, object, interface, type alias, union, literal, unknown, never, void, any

let a: number = 10;
// a = "Add";//error as we have defined a as number and we are trying to assign string to it


let name: string = "Aditya";
console.log(name);

//number
let userid: number = 123;
//userid.  //only number methods will be shown

//type inference
let userid1 = 123;//we don't need to define the type of userid1, typescript will automatically be considere it as number
userid1 //when we hover over userid1, it will show the type as number


//boolean
let isloggedin: boolean = true;

//any
let hero;
hero = "Superman";//we can assign any type of value to hero
//suggest to avoid using any as it will not do the type checking




export{}