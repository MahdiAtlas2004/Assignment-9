const person = {
    show: function(job){
        return `${this.name} is ${this.age} years old ${job}`;
    }
}

const p1 = {
    name: "James",
    age: 40
}

const p2 = {
    name: "Junior",
    age: 14
}

//Using Call method
console.log(person.show.call(p1, "Teacher"));

//Using Apply method
console.log(person.show.apply(p2, ["Student"]));