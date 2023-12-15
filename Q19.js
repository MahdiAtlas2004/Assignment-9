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

//Using loop to print the first friend favorite books.
for(let x of person.friends[0].favoriteBooks){
    console.log(x);
}

//Using loop to print the second friend favorite books.
for(let x of person.friends[1].favoriteBooks){
    console.log(x);
}