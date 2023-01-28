// The following exercises needs to be done on 2 ways: 1) using classes, 2) using constructor functions.

// 1. 
// a)Create a Car class with properties (brand, model, motion) and methods (check motion, accelerate, break).
// Check motion method should check the speed and returns if the car are in move or not (speed is greater than zero). Accelerate method should increase the speed for some number we provide.
// Break method should decrease the speed for the number we provided (pay attention if the speed is negative number after decreasing).
// b) Add the status method that displays all current data for the car (model, brand, motion state, speed => something like "Ford Mondeo is running at 150km/h, car is moving").
// c) Add a new method to stop the car immediately (set the speed to 0). It doesn't need parameters.
// d) Create a 3 car objects and test it!

// 1) using classes

class Car {
    constructor(brand, model, motion) {
        this.brand = brand;
        this.model = model;
        this.motion = motion;
    }

    checkMotion() {
        if(this.motion > 0) {
            return "Car is moving";
        } else {
            return "Car is not moving";
        }
    }

    accelerate(input) { 
        return this.motion += input;
        
    }

    break(input) {
        if((this.motion - input) <= 0) {
            // console.log(this.motion);
            // console.log(input);
            return "Car stoped.";
        } else {
           return this.motion -= input;
        }
    }

    status() {
         return `${this.brand} ${this.model} is runing ${this.motion}km/h, ${this.checkMotion()}`
    }

    stopTheCar() {
        return this.motion = 0;
    }
};

var firstCar = new Car("Ford", "Mondeo", 70);
console.log(firstCar.checkMotion());

console.log(firstCar.accelerate(10));
console.log(firstCar.motion);

console.log(firstCar.break(30));
console.log(firstCar.break(90));

console.log(firstCar.status());
console.log(firstCar.stopTheCar());

var firstCar = new Car("Reno", "Clio", 120);
console.log(firstCar.checkMotion());

console.log(firstCar.accelerate(15));
console.log(firstCar.motion);

console.log(firstCar.break(50));
console.log(firstCar.break(120));

console.log(firstCar.status());
console.log(firstCar.stopTheCar());


var firstCar = new Car("Chevrolette", "Spark", 60);
console.log(firstCar.checkMotion());

console.log(firstCar.accelerate(30));
console.log(firstCar.motion);

console.log(firstCar.break(40));
console.log(firstCar.break(120));

console.log(firstCar.status());
console.log(firstCar.stopTheCar());


// 2) using constructor functions

function Car(brand, model, motion) {
    this.brand = brand;
    this.model = model;
    this.motion = motion;
    

    this.checkMotion = function() {
        if(this.motion > 0) {
            return "Car is moving";
        } else {
            return "Car is not moving";
        }
    }

    this.accelerate = function(input) { 
        return this.motion += input;
        
    }

    this.break = function(input) {
        if((this.motion - input) <= 0) {
            return "Car stoped.";
        } else {
           return this.motion -= input;
        }
    }

    this.status = function() {
         return `${this.brand} ${this.model} is runing ${this.motion}km/h, ${this.checkMotion()}`
    }

    this.stopTheCar = function() {
        return this.motion = 0;
    }
};

var firstCar = new Car("Ford", "Mondeo", 70);
console.log(firstCar.checkMotion());

console.log(firstCar.accelerate(10));
console.log(firstCar.motion);

console.log(firstCar.break(30));
console.log(firstCar.break(90));

console.log(firstCar.status());
console.log(firstCar.stopTheCar());

// 2.
// a)Create a TV class with properties like brand, channel and volume. Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// b) Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// c) Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
// d) Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
// e) It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".
// f) Create a TV object and test it!

// 1) using classes

class TV {
    constructor(brand = "Samsung", channel = 1, volume = 50) {
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;
    }

    increase(input) {
        if((this.volume + input) > 100) {
            return this.volume = 100;
        } else {
            return this.volume = this.volume + input;
        }
        
    }

    deacrease(input) {
        if((this.volume - input) < 0) {
            return this.volume = 0;
        } else {
            return  this.volume = this.volume - input;
        }
    }

    setTheChannel(input) {
        if(input > 50) {
            return this.channel;
        } else {
            return this.channel = input;
        }
    }

    resetTV() {
        var television = new TV();
        this.volume = television.volume;
        this.channel = television.channel;

        return `${this.channel} ${this.volume}`;
    }

    status() {
        return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
    }
}

var samsung = new TV();

console.log(samsung.increase(10));
console.log(samsung.setTheChannel(24));
console.log(samsung.status());
console.log(samsung.resetTV());
console.log(samsung.status());


// 2) using constructor functions

function TV(brand = "Samsung", channel = 1, volume = 50) {
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;

    this.increase = function(input) {
        if((this.volume + input) > 100) {
            return this.volume = 100;
        } else {
            return this.volume = this.volume + input;
        }
        
    }

    this.deacrease = function(input) {
        if((this.volume - input) < 0) {
            return this.volume = 0;
        } else {
            return  this.volume = this.volume - input;
        }
    }

    this.setTheChannel = function(input) {
        if(input > 50) {
            return this.channel;
        } else {
            return this.channel = input;
        }
    }

    this.resetTV = function() {
        var television = new TV();
        this.volume = television.volume;
        this.channel = television.channel;

        return `${this.channel} ${this.volume}`;
    }

    this.status = function() {
        return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
    }
}

var samsung = new TV();

console.log(samsung.increase(10));
console.log(samsung.setTheChannel(24));
console.log(samsung.status());
console.log(samsung.resetTV());
console.log(samsung.status());