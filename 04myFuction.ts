function addTwoNumbers(a: number, b: number): number {//here we are defining the type of a and b as number and the return type of the function as number
    return a + b;
}

let sum = addTwoNumbers(10, 20);//sum data type will also be number
console.log(sum);

//default parameter
function signUpUser(name: string, age: number, isMale: boolean = true): object {
    const data = {
        name,
        age,
        isMale
    }
    return data
}

//arrow function
let multiply = (a: number, b: number): string => {
    let mul: number = a * b;//mul data type will be number but function return type will be string
    return mul.toString();
}

let result = multiply(10, 20);
console.log(result);
console.log(typeof result);

//more than one return type
//here return type can be either string or boolean
//if we don't define the return type then it will be considered as any
function isAdult(age: number): string | boolean {
    if (age >= 18) {
        return "Adult";
    } else {
        return false;
    }
}

// const heros = ["Superman", "Batman", "Wonderwoman"];
const heros = [1, 2, 3, 'Superman', "Batman", "Wonderwoman"];

heros.map((hero: number | string): string => {//typescript will automatically decide the type of hero as string and number
    return `${hero} is a super hero`
})


function consoleError(Error: string): void {//void is used when we don't want to return anything from the function
    console.log(Error);
}//typescript will automatically decide the type of function as void but its a good practice to define the return type of the function as void

function throwError(Error: string): never {//never is used when the function never returns anything
    throw Error //throwing an error;
}





export { }//to avoid the error "Cannot redeclare block-scoped variable 'user'." as we have already defined user in intro.ts file