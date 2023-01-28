class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    //metoda pa nije potrebno pisati function
    fullName() {
        return `${this.name} ${this.surname}`;
    }

    getInfo() {
        return this.fullName();
    }
}

class Programmer extends Person {
    constructor(name, surname, favouriteLanguage ) {
        super(name, surname);
        this.favouriteLanguage = favouriteLanguage;
    }

    // getInfo() {
    //     return this.fullName() + " " + this.favouriteLanguage;
    // }
}

var programmer = new Programmer("Pera", "Peric", "JS");
console.log(programmer.getInfo());

class Tester extends Person {
    constructor(name, surnamame, favouriteTestingFramework) {
        super(name, surnamame);
        this.favouriteTestingFramework = favouriteTestingFramework;
    }

    getInfo() {
        return super.getInfo() + " " + this.favouriteTestingFramework;
    }
}

var tester = new Tester("Pera", "Petrovic", "Selenium");
// console.log("to je ovo "+ tester.getInfo());

class BackendProgrammer extends Programmer {
    constructor(name, surname, language, db) {
        super(name, surname, language);
        this.db = db;
    }
}

var backendProgrammer = new BackendProgrammer("Nikola", "Alic", "C#", "SQL");
console.log(backendProgrammer.getInfo());
console.log(backendProgrammer.fullName());