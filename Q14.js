function compareObjects(obj1, obj2) {
    const myObj1 = Object.keys(obj1);
    const myObj2 = Object.keys(obj2);

    if(myObj1.length !== myObj2.length){
        return false;
    }

    for(let x of myObj1){
        if(obj1[x] !== obj2[x]){
            return false;
        }
    }

    return true;
}

const obj1 = {
    id: 2,
    name: "James",
    age: 20
}

const obj2 = {
    id: 2,
    name: "James",
    age: 20
}

const obj3 = {
    id: 3,
    name: "Jennifer",
    age: 55
}

//It will return true because obj1 and obj2 are equal.
console.log(compareObjects(obj1, obj2));

//It will return false because obj1 and obj3 are not equal.
console.log(compareObjects(obj1, obj3));