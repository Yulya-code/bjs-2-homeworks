class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
}
    fix(); {
     this.state *= 1,5;
    }

    set this._state(grade); {
     if (grade < 0) {
       this._state == 0;
    } else if (grade > 100) {
       this._state = 100;
    } 

    this._state = grade;
}

    get state(); {
        return this._state;
    }

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
    super (name, releaseDate, pagesCount);    
    this.type = 'book';
    this.author = author;
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);  
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);  
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);  
        this.type = 'detective';
    }
}


//Задача 2

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

 addBook(book) {
     if (book.state > 30) {
     this.books.push(book);
    }
 }

 findBookBy(type, value) {
     return this.books.find(item => item[type] === value) || null;
 }

 giveBookByName(bookName) {
     const searchBook = this.books.find(item => item.name === bookName);
     this.books.splice(this.books.indexOf(searchBook), 1);
     
     return searchBook || null;
 }
}