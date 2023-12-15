function Person(id, name, age, job) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.job = job;
}

Person.prototype.eyeColor = "blue";

const p1 = new Person(20, "James", 40, "Doctor");
const p2 = new Person(23, "Linda", 45, "Engineer");

console.log(p1.eyeColor);
console.log(p2.eyeColor);
