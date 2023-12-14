const person = {
    name: "James",
    age: 50,
    address: "England, London"
}

function printDetails(objectName){
    for(let x in objectName){
            console.log(`${x}: ${objectName[x]}`);
    }
}

printDetails(person);
