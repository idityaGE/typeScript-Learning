// Run: tsc myArray.ts

//Array of strings
const superHero: string[] = ['Ironman', 'Spiderman', 'Thor'];
console.log(superHero); // ['Ironman', 'Spiderman', 'Thor']


//type alias for array
type arr = string[];

let myArray: arr = ['John', 'Doe'];
console.log(myArray); // ['John', 'Doe']

//Array of objects
const users: { name: string, age: number }[] = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 }
];
console.log(users); // [ { name: 'John', age: 30 }, { name: 'Jane', age: 25 } ]


//type alias for array of objects
type User = {
    name: string,
    age: number
}[]
let myUsers: User = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 }
]
console.log(myUsers); // [ { name: 'John', age: 30 }, { name: 'Jane', age: 25 } ]


//Array of mixed type
const mixedArray: (string | number)[] = ['John', 25];
console.log(mixedArray); // ['John', 25]


//type alias for mixed type array
type MixedArray = (string | number)[];
let myMixedArray: MixedArray = ['John', 25];
console.log(myMixedArray); // ['John', 25]


//Array of arrays
const nestedArray: string[][] = [
    ['John', 'Doe'],
    ['Jane', 'Doe']
];
console.log(nestedArray); // [ [ 'John', 'Doe' ], [ 'Jane', 'Doe' ] ]


//type alias for array of arrays
type NestedArray = string[][];
let myNestedArray: NestedArray = [
    ['John', 'Doe'],
    ['Jane', 'Doe']
];
console.log(myNestedArray); // [ [ 'John', 'Doe' ], [ 'Jane', 'Doe' ] ]


//Array of functions
const myFunctions: (() => void)[] = [() => { }, () => { }];
console.log(myFunctions); // [ [Function], [Function] ]


//type alias for array of functions
type MyFunctions = (() => void)[];
let myFuncs: MyFunctions = [() => { }, () => { }];
console.log(myFuncs); // [ [Function], [Function] ]


//Array of any type
const anyArray: any[] = ['John', 25, true];
console.log(anyArray); // [ 'John', 25, true ]


//type alias for any type array
type AnyArray = any[];
let myAnyArray: AnyArray = ['John', 25, true];
console.log(myAnyArray); // [ 'John', 25, true ]


//Array of readonly strings
const hobbies: readonly string[] = ['Sports', 'Cooking'];
console.log(hobbies); // [ 'Sports', 'Cooking' ]
// hobbies.push('Reading'); // Error: Property 'push' does not exist on type 'readonly string[]'


//type alias for readonly array
type StringArray = readonly string[];
let myHobbies: StringArray = ['Sports', 'Cooking'];


//Array of readonly objects
const users1: readonly { name: string, age: number }[] = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 }
];
console.log(users1); // [ { name: 'John', age: 30 }, { name: 'Jane', age: 25 } ]


//type alias for readonly array of objects
type User1 = readonly {
    name: string,
    age: number
}[]
let myUsers1: User1 = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 }
]


//Array of readonly mixed type
const mixedArray1: readonly (string | number)[] = ['John', 25];
console.log(mixedArray1); // ['John', 25]


//type alias for readonly mixed type array
type MixedArray1 = readonly (string | number)[];
let myMixedArray1: MixedArray1 = ['John', 25];


//Array of readonly arrays
const nestedArray1: readonly string[][] = [
    ['John', 'Doe'],
    ['Jane', 'Doe']
];
console.log(nestedArray1); // [ [ 'John', 'Doe' ], [ 'Jane', 'Doe' ] ]


//type alias for readonly array of arrays
type NestedArray1 = readonly string[][];
let myNestedArray1: NestedArray1 = [
    ['John', 'Doe'],
    ['Jane', 'Doe']
];


//Array of readonly functions
const myFunctions1: readonly (() => void)[] = [() => { }, () => { }];
console.log(myFunctions1); // [ [Function], [Function] ]


//type alias for readonly array of functions
type MyFunctions1 = readonly (() => void)[];
let myFuncs1: MyFunctions1 = [() => { }, () => { }];
console.log(myFuncs1); // [ [Function], [Function] ]


//Array of readonly any type
const anyArray1: readonly any[] = ['John', 25, true];
console.log(anyArray1); // [ 'John', 25, true ]


//type alias for readonly any type array
type AnyArray1 = readonly any[];
let myAnyArray1: AnyArray1 = ['John', 25, true];
console.log(myAnyArray1); // [ 'John', 25, true ]


//Array of readonly objects with dynamic readonly properties
function getUser(): { readonly name: string, readonly [key: string]: any } {
    return { name: 'John', age: 30 };
}
console.log(getUser()); // { name: 'John', age: 30 }


//Array of readonly objects with readonly array
function getUser1(): { readonly name: string, readonly hobbies: readonly string[] } {
    return { name: 'John', hobbies: ['Sports', 'Cooking'] };
}
console.log(getUser1()); // { name: 'John', hobbies: [ 'Sports', 'Cooking' ] }
// getUser1().hobbies.push('Reading'); // Error: Property 'push' does not exist on type 'readonly string[]'


//Array of readonly type alias
type User2 = {
    readonly name: string,
    readonly age: number
}
const users2: readonly User2[] = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 }
];
console.log(users2); // [ { name: 'John', age: 30 }, { name: 'Jane', age: 25 } ]


//Array of readonly type alias for array of objects
type User3 = readonly {
    name: string,
    age: number
}[]
let myUsers2: User3 = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 }
]
console.log(myUsers2); // [ { name: 'John', age: 30 }, { name: 'Jane', age: 25 } ]


//Array of readonly type alias for mixed type array
type MixedArray2 = readonly (string | number)[];
let myMixedArray2: MixedArray2 = ['John', 25];
console.log(myMixedArray2); // ['John', 25]





//interface for array
const myArray1: Array<string> = ['John', 'Doe'];
console.log(myArray1); // ['John', 'Doe']


type arrtype = Array<number>;
let myArray2: arrtype = [1, 2, 3];

type arrtype1 = Array<string | number>;
let myArray3: arrtype1 = ['John', 25];


//interface for readonly array
const hobbies1: ReadonlyArray<string> = ['Sports', 'Cooking'];
console.log(hobbies1); // [ 'Sports', 'Cooking' ]
// hobbies1.push('Reading'); // Error: Property 'push' does not exist on type 'readonly string[]'

