class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    sum(){
        return (this.num1 + this.num2);
    }

    sub(){
        return (this.num1 - this.num2);
    }
}

let c1 = new Calculator(20, 2);
console.log(c1.sum());
console.log(c1.sub());