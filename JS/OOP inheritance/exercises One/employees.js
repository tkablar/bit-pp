//1. Create constructor functions with properties representing the following:
//      Person: name, surname
//      Employee: inherits Person and has job and salary
//      Developer: inherits from Employee and has specialization
//      Manager: inherits from Employee and has department
// 2All developers should inherit method:
//      getSpecialization which prints out the name of the specialization

// All managers should inherit methods:
//      getDepartment which prints out the name of the department
//      changeDepartment which sets the department value to the given value

// All employees should inherit methods:
//      getData which returns the name, surname and salary 
//      getSalary which prints out the salary
//      increaseSalary which increases the salary by 10% 


class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

class Employee extends Person {
    constructor(name, surname, job, salary ) {
        super(name, surname);
        this.job = job;
        this.salary = salary;
    }

    getData() {
        return this.name + " " + this.surname + " " + this.salary;
    }

    getSalary() {
        return this.salary;
    }
    
    increaseSalary() {
        return this.salary = this.salary + this.salary*0.1;
    }
}

class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary );
        this.specialization = specialization;
    }

    getSpecialization() {
        return this.specialization;
    }
}

class Manager extends Employee {
    constructor(name, surname, job, salary, department) {
        super(name, surname, job, salary)
        this.department = department;
    }

    getDepartment() {
        return this.department;
    }

    changeDepartment(input) {
        return this.department = input;
    }

}

var person = new Person("Zika", "Zikic");
console.log(person);

var employee = new Employee("Mira", "Mirkovic", "administration", 700);
console.log(employee);

var developer = new Developer("Mika", "Mikic", "frontendDeveloper", 2000, "JS");
console.log(developer);
console.log(developer.getSpecialization());

var manager = new Manager("Pera",  "Peric", "developer", 3000, "IT");
console.log(manager);
console.log(manager.department);
console.log(manager.changeDepartment("Design"));
console.log(manager.department);

console.log(employee.getData());
console.log(employee.getSalary());
console.log(employee.increaseSalary());
console.log(employee.getSalary());



