class Shape {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }

    calculateArea(){
        return "This method calculate the area of any shape";
    }
}

let s1 = new Shape("Rectangle", "Yellow");
console.log(s1.color);
console.log(s1.name);
console.log(s1.calculateArea());