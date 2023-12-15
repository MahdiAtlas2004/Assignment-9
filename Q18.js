var person = {
    id: 1000,
    name: "Ahmad",
    favoriteBooks: [
        { id: 1, name: "JavaScript", pages: 456 },
        { id: 2, name: "React.js", pages: 1320 },
    ],
    address: { country: "Afghanistan", province: "Herat", district: "Ghurian" },
    friends: [
        {
            id: 1098,
            name: "Karim",
            favoriteBooks:
                [
                    { id: 1, name: "CSS with Jone", pages: 444 },
                    { id: 2, name: "React.js", pages: 876 },
                ],
            address: {
                country: "Afghanistan",
                province: "Herat",
                district: "Kerokh",
            },
        },
        {
            id: 1009,
            name: "Mahmood",
            favoriteBooks: [
                { id: 1, name: "Node.js", pages: 765 },
                { id: 2, name: "Express.js", pages: 2234 },
            ],
            address: {
                country: "Afghanistan",
                province: "Herat",
                district: "Qozera",
            },
        },
    ],
};

console.log(person);

//Using loop for to print the favorite books of this person.
for(let x of person.favoriteBooks){
    console.log(x);
}