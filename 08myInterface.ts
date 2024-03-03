//Purpose: To demonstrate the use of interfaces in TypeScript
// Source: https://www.tutorialsteacher.com/typescript/typescript-interface
//
// Interface
// An interface is a structure that defines the contract in your application. It defines the syntax for classes to follow. Classes that are derived from an interface must follow the structure provided by their interface. An interface defines properties, methods, and events, which are the members of the interface. Interfaces contain only the declaration of the members. It is the responsibility of the deriving class to define the members. It often helps in providing a standard structure that the deriving classes would follow.
//
// Interface for object
// An interface can be used to define the structure of an object. An interface can contain properties and methods. An interface can be used to define the type of an object.
//
interface User {
    readonly dbid: number,
    name: string,
    age: number,
    getNames?(name?:string): string; //function that retuns string and takes string as argument but argument is optional even function is optional
    getAge?:() => number;
    isMale?(): boolean;
}
let user: User = { dbid: 1, name: 'John', age: 25 };
console.log(user); // { dbid: 1, name: 'John', age: 25 }


//Interface for function
//An interface can be used to define the structure of a function. An interface can contain properties and methods. An interface can be used to define the type of a function.
interface MyFunc {
    (name: string, age: number): void;
}
let myFunc: MyFunc = function (name: string, age: number) {
    console.log(name, age);
}
myFunc('John', 25); // John 25


//Interface for array
//An interface can be used to define the structure of an array. An interface can contain properties and methods. An interface can be used to define the type of an array.
interface StringArray {
    [index: number]: string;
}
let myArray: StringArray = ['John', 'Jane'];
console.log(myArray); // [ 'John', 'Jane' ]


//Interface for class
//An interface can be used to define the structure of a class. An interface can contain properties and methods. An interface can be used to define the type of a class.
interface IUser {
    name: string,
    age: number,
    isMale: boolean,
    getDetails(): string;
}
class User1 implements IUser {
    name: string;
    age: number;
    isMale: boolean;
    constructor(name: string, age: number, isMale: boolean) {
        this.name = name;
        this.age = age;
        this.isMale = isMale;
    }
    getDetails(): string {
        return `${this.name} is ${this.age} years old.`;
    }
}

//Diffrence between interface and type
    //An interface can be used to define the structure of an object, function, array, or class. It can also be used to define the type of a variable.
    //1 Syntax
        //Interface Syntax
            interface Person {
                name: string;
                age: number;
            }
        //Type Syntax
            type Person1 = {
                name: string;
                age: number;
            };
    //2 Extensibility: Interfaces can be extended or implemented by other interfaces, allowing for the creation of complex inheritance hierarchies.
        interface Animal {
            name: string;
            eat(): void;
        }

        interface Dog extends Animal {
            bark(): void;
        }
    //3 Declaration Merging: Interfaces support declaration merging, which means that you can define multiple interfaces with the same name, and they will be merged into a single interface.
        interface Person {
            name: string;
        }

        interface Person {
            age: number;
        }

        const person: Person = {
            name: "John",
            age: 25,
        };
    //4 Compatibility: Interfaces and types are compatible with each other, meaning you can assign a value of one type to a variable of the other type if their structure is compatible.
        interface Person2 {
            name: string;
        }

        type Employee = {
            name: string;
        };

        const person1: Person2 = { name: "John" };
        const employee: Employee = person; // Assigning a Person object to an Employee variable



export{}//to avoid "Cannot redeclare block-scoped variable" error