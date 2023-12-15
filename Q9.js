class Book{
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
}

let b1 = new Book("Intoduction to Java Programming", "Daniel Young");

console.log(b1.title);
console.log(b1.author);