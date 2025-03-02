// Task 1: Creating a Book Class
class Book {
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }
    getDetails() {
        return `Title: ${this.title},
         Author: ${this.author}, 
         ISBN: ${this.isbn}, 
         Copies: ${this.copies}`;
    }

    updateCopies(amount) {
        this.copies += amount;
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
book1.updateCopies(-1);
console.log(book1.getDetails());

// Task 2: Creating a Borrower Class
class Borrower {
    constructor(name, borrowerId) {
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    }
    borrowBook(bookTitle) {
        this.borrowedBooks.push(bookTitle);
    }
    returnBook(bookTitle) {
        this.borrowedBooks = this.borrowedBooks.filter(title => title !== bookTitle);
    }
}

const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);

// Task 3: Creating a Library Class
class Library {
    constructor() {
        this.books = [];
        this.borrowers = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    }
}

const library = new Library();
library.addBook(book1);
library.listBooks();

// Task 4: Implementing Book Borrowing
library.borrowers.push(borrower1);
library.lendBook = function (borrowerId, isbn) {
    let book = this.books.find(b => b.isbn === isbn);
    let borrower = this.borrowers.find(b => b.borrowerId === borrowerId);

    if (book && book.copies > 0 && borrower) {
        book.updateCopies(-1);
        borrower.borrowBook(book.title);
    }
};

library.lendBook(201, 123456);
console.log(book1.getDetails());
console.log(borrower1.borrowedBooks);

// Task 5: Implementing Book Returns
library.returnBook = function (borrowerId, isbn) {
    let book = this.books.find(b => b.isbn === isbn);
    let borrower = this.borrowers.find(b => b.borrowerId === borrowerId);

    if (book && borrower && borrower.borrowedBooks.includes(book.title)) {
        book.updateCopies(1);
        borrower.returnBook(book.title);
    }
};

library.returnBook(201, 123456);
console.log(book1.getDetails());
console.log(borrower1.borrowedBooks);
