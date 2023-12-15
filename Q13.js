const person = {
    id: 2,
    name: "James",
    lname: "Bond",
    job: "Agent"
}

function countProperty(objectName) {
    return Object.keys(objectName).length;
}

console.log(countProperty(person));