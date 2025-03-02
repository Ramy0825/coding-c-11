// Task 1: Creating a Book Class
class Book {                           // create a class named book 
    constructor(title, author, isbn, copies) {
        this.title = title;              // make every single part of the constructor apart and equal to what it is 
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }
    getDetails() {
        return `Title: ${this.title},         // we want the things to retuen in the console log to show what it is 
         Author: ${this.author}, 
         ISBN: ${this.isbn}, 
         Copies: ${this.copies}`;
    } // everytime we need to pull it up in the console it will show what it has to show 

    updateCopies(amount) {
        this.copies += amount;
    }
};

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
book1.updateCopies(-1);
console.log(book1.getDetails());

// Task 2: Creating a Borrower Class
class Borrower {                 // creating a class called borrower 
    constructor(name, borrowerId) {      // 
        this.name = name;         // assign it a name 
        this.borrowerId = borrowerId;       // assign it to a borrower id 
        this.borrowedBooks = [];
    }
    borrowBook(bookTitle) {            // method out the book title to the borrow book idea 
        this.borrowedBooks.push(bookTitle);    // add a title to the book that was borrowed 
    }
    returnBook(bookTitle) {            // how to return the book from borrowing 
        this.borrowedBooks = this.borrowedBooks.filter(title => title !== bookTitle);           // remove the book title 
    }
};

const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);

// Task 3: Creating a Library Class
class Library {
    constructor() {
        this.books = [];        //start an empty list of books  
        this.borrowers = []; //haeve a list of empty borrowers 
    }
    addBook(book) {      // add book to library
        this.books.push(book);
    }
    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    }
};

const library = new Library();
library.addBook(book1);
library.listBooks();

// Task 4: Implementing Book Borrowing
library.borrowers.push(borrower1);     // adding borrower to library system 
library.lendBook = function (borrowerId, isbn) {       // lend a book function
    let book = this.books.find(b => b.isbn === isbn);
    let borrower = this.borrowers.find(b => b.borrowerId === borrowerId);

    if (book && book.copies > 0 && borrower) {       // see if book exists and if there is copies 
        book.updateCopies(-1);
        borrower.borrowBook(book.title);      // add title to borrowed books 
    }
}

library.lendBook(201, 123456);
console.log(book1.getDetails());
console.log(borrower1.borrowedBooks);

// Task 5: Implementing Book Returns
library.returnBook = function (borrowerId, isbn) {       // find book by unique id 
    let book = this.books.find(b => b.isbn === isbn);         // find bool by book nsme 
    let borrower = this.borrowers.find(b => b.borrowerId === borrowerId);

    if (book && borrower && borrower.borrowedBooks.includes(book.title)) {
        book.updateCopies(1);
        borrower.returnBook(book.title);
    }
};

library.returnBook(201, 123456);
console.log(book1.getDetails());
console.log(borrower1.borrowedBooks);
