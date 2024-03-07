//how to write class in typescript


//1st way
class User2{
    name:string;
    age:number;
    city:string = "Mau"; //default value //we can also use readonly keyword to make it constant
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}
let aditya2 = new User2("Aditya", 21);
console.log(aditya2);
aditya2.city = "Lucknow"; //we can change the default value
console.log(aditya2);


//2nd way //using public keyword
class User{
    constructor(public name:string, public age:number){ //public is a shortcut to create and initialize the property
        this.name = name;
        this.age = age;
    }
}
let aditya = new User("Aditya", 21);
console.log(aditya);

//3rd way //using private keyword
class User3{
    constructor(private name:string, private age:number){ //private is a shortcut to create and initialize the property
        this.name = name;
        this.age = age;
    }
}
let aditya3 = new User3("Aditya", 21);
console.log(aditya3);
// aditya3.name  //we cannot access this because of privete keyword   //error: Property 'name' is private and only accessible within class 'User3'.

class User4{
    public name:string;
    private age:number;
    readonly city:string = "Mau"; //readonly is a shortcut to create and initialize the property
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    introduce():void{
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}
let aditya4 = new User4("Aditya", 21);
console.log(aditya4);








export{}