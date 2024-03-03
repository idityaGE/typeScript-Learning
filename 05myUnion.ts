// "|" is used to define multiple data types for a variable
//

let score: number | string = 10;
score = '20';//score data type will be string
score = 30;//score data type will be number

//
type userType = {
    name: string,
    age: number | string
}
type Admin = {
    name: string,
    isActive: boolean
}

let user: userType | Admin = { //user can be of type userType or Admin or both
    name: 'John',
    age: "seventeen",
    isActive: 5 > 3 //true
}
console.log(user);//{ name: 'John', age: 'seventeen', isActive: true }

//
let myUnion: string | number;
myUnion = 10;
console.log(myUnion);//10
myUnion = 'Hello';
console.log(myUnion);//Hello
// myUnion = 5 > 3;//error as myUnion can only be of type string or number


//
function getDbId(id: string | number) {
    //some api call to get id and id can be of type string or number
    return `id: ${id}`;//id can be of type string or number
}
console.log(getDbId(10));//id: 10
console.log(getDbId('10'));//id: 10

//
function getDbId1(id: string | number) {
    if (typeof id === 'string') {  //need to check the type of id before using any string or number method
        return id.toUpperCase();   //toUpperCase() is a string method
    } else {
        return id.toFixed(2);      //toFixed() is a number method
    }
}

//
const data: string[] | number[] = ['John', 'Doe'];  //either string array or number array not mix of number and string

const data1: (string | number)[] = ['John', 25];    //here we can have mix of string and number


//
let pi: 3.14  = 3.14; //its value will always be 3.14
// pi = 3.15; //error as pi can only be 3.14

//
let saetallotment: 'upper' | 'lower' | 'middle' = 'upper'; //its value will always be either upper or lower or middle
saetallotment = 'middle';
// saetallotment = 'sidelower' //error as saetallotment can only be upper or lower or middle


//



export { }
