class Student {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    
    getStudentData = function() {
        return `${this.name} ${this.surname}`
    }
}