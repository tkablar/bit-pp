// 1.
// Headquarters have asked that you store the following information about each book: title, author,
// copyright date, ISBN, number of pages, number of times the book has been checked out, whether the book has been discarded.

// Headquarters also needs you to track certain actions that you must perform when books get out of date.
// First, for a manual, the book must be thrown out if it is over 5 years old.
// Second, for a novel, the book should be thrown out if it has been checked out over 100 times.

// Construct three classes that hold the information needed by headquarters as properties.
// One class should be a Book class and two child classes of the Book class called Manual and Novel.
// Each class will contain two methods. One will be a constructor.
// The other one will either be in charge of disposal of the book or updating the property related to the number of times a book has been checked out.
// Hint: This means you need to read through the requirements for the problem and decide what should belong to Book and what should belong to the Novel and Manual classes.
 
// Declare an object of the Novel class for the following tome from the library. Declare an object of the Manual class for the following tome from the library.
// One of the above books needs to be discarded. Call the appropriate method for that book to update the property. That way the crew can throw it into empty space to become debris.
// The other book has been checked out 5 times since you first created the object. Call the appropriate method to update the number of times the book has been checked out.

class Book{
    constructor(title, author,copyrightDate, ISBN, numberOfPages, checkedOut, discarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = ISBN;
        this.numberOfPages = numberOfPages;
        this.checkedOut = checkedOut;
        this.discarded = discarded;
    }

    checkout(check = 1) {
        return this.checkedOut += check;
    }
}

class Novel extends Book{
    constructor(title, author,copyrightDate, ISBN, numberOfPages, checkedOut, discarded) {
        super(title, author,copyrightDate, ISBN, numberOfPages, checkedOut, discarded)

    }

    dispose() {
        if(this.checkedOut >= 100) {
            return this.discarded = true;
        } else {
            return this.discarded = false;
        }
    }

}

class Manual extends Book {
    constructor(title, author,copyrightDate, ISBN, numberOfPages, checkedOut, discarded) {
        super(title, author,copyrightDate, ISBN, numberOfPages, checkedOut, discarded)
    }

    dispose(year) {
        if(year - this.copyrightDate > 5) {
            return this.discarded = true;
        } else {
            return this.discarded = false;
        }
    }
}

var novel = new Novel("Pride and Prejudice", "Jane Austen", 1813, 1111111111111, 432, 32, false);
console.log(novel.checkedOut);
console.log(novel.checkout(5));
// console.log(novel.checkout());
console.log(novel.checkedOut);

console.log();
var manual = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, 0000000000000, 1147, 1, false);

console.log(manual.discarded);
console.log(manual.dispose(2023));
console.log(manual.discarded);