function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

// var person = new Person("Pera", "peric");
// var person1 = {name: "Pera", surname: "Peric"};
// person1["asd"] = "asd";

console.log(Person.prototype)

Person.prototype.fullName = function () {
    return `${this.name} ${this.surname}`;
}

console.log(Person.prototype);
var person = new Person("Pera", "peric");
console.log(person.fullName());

Person.prototype.printInfo = function() {
    console.log(this.fullName());
}

// console.log(printInfo());


function Programmer(name, surname, favouriteLanguage) {
    Person.call(this, name, surname);
    this.favouriteLanguage = favouriteLanguage;
}

// var programmerPera = new Programmer("Pera", "Peric", "JS");
// programmerPera.printInfo();
console.log(Programmer.prototype);

Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;
console.log(Programmer.prototype);

Programmer.prototype.printInfo = function() {
    var fullName = this.fullName();
    console.log(this.name)
    console.log(`${fullName} ${this.favouriteLanguage}`);
}

var programmerPera = new Programmer("Pera", "Peric", "JS");