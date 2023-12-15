class Person{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

//Creating setter method.
    set myName(name){
        this.name = name;
    }

//Creating getter method.
    get myName(){
        return this.name;
    }
}


let p1 = new Person(20, "James");
console.log(p1.name);

//Setting the new name.
p1.myName = "Rayan";

//Getting the new name.
console.log(p1.myName);