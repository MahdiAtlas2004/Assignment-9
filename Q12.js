class Shape {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }

    calculateArea(){
        return "This method calculate the area of any shape";
    }
}

class Circle extends Shape{
    constructor(name, color, radius){
        super(name, color);
        this.radius = radius;
    }
}

let c1 = new Circle("MyCircle", "Brown", "2cm");
console.log(c1.name);
console.log(c1.color);
console.log(c1.radius);