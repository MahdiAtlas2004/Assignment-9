class Person{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

//Creating a none static method.
    show1(){
        console.log("Hello World 1");
    }

//Creating a static method.
    static show2(){
        console.log("Hello World 2");
    }
}

//You can access show1 method via creating object of Person class.
let p1 = new Person(20, "James");
p1.show1();

//You can access show2 method with name of the class without creating any object.
Person.show2();

