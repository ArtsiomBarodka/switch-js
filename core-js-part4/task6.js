function Book(title, author) {
  this.title = title;
  this.author = author;
}

const book1 = new Book("Book Title 1", "Author 1");
const book2 = new Book("Book Title 2", "Author 2");
const book3 = new Book("Book Title 3", "Author 3");

console.log(
  `Book 1 has ${book1.title} title and is written by ${book1.author} author`
);
console.log(
  `Book 1 has ${book2.title} title and is written by ${book2.author} author`
);
console.log(
  `Book 1 has ${book3.title} title and is written by ${book3.author} author`
);
