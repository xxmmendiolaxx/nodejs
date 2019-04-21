import { Person, IPerson } from "./helper";

export {
    Person
}

const log = (message:string)=>{ // :return type =>
    console.log(message);
    //return(message);
}

//log("hello world");

/*class Person { //creates object
    constructor(private name:IPerson){
        this.name = name;
    }

    getName(){ //function
        //return this.name; //for class
        return this.name.firstname + //shows importance of typechecking kahit magbago code
        this.name.surname;
    }
} */

//const reserved word for constant variable, permanent value
//let value can be changed, will cause error if value not changed

const person1 = new Person({firstname:"Mark", surname:"Diaz"}); //creates an instance separated from the class Person (copy)
//const person2 = new Person("Joey"); for class

//person1.name will cause error since private, only accessible in class;
//use private if the variable is only used in class
//public if you will access outside to avoid manipulation of data

//log(person1.getName()); for class

console.log(person1.getName()); //for interface

//interface prevents you to make mistakes

/* interface IPerson { //I(name) convention
    firstname: string;
    middlename?: string; //optional operator; don't use unless needed
    surname: string;
} */

//interface fully utilizes typescripts funtion of typechecking

//module data that can be used in a different file

