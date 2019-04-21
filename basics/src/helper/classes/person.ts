import { IPerson } from "./IPerson";

export class Person { //creates object
    constructor(private name:IPerson){
        this.name = name;
    }

    getName(){ //function
        //return this.name; //for class
        return this.name.firstname + //shows importance of typechecking kahit magbago code
        this.name.surname;
    }
}