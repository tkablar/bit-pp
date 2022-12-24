//task 1
// Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

function duplicateElements(a = []) {
    var result = [];
    var tmp = 0;

    if( !a || a.length == 0) {
        return null;
    }

    for(var i = 0; i < a.length; i++) {
        tmp = a[i];
        result.push(a[i], tmp);

    }

    return result;
}

console.log(duplicateElements([2, 4, 7, 11, -2, 1]));

//task 2
// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

function removeDuplicates(a = []) {
    var result = [];

    if(!a || a.length == 0) {
        return null;
    }

    
    return a.filter((item, index) => a.indexOf(item) === index).sort();

}

var x = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

console.log(removeDuplicates(x))


//task 3
//a
// Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

function oddNumberOfElements(a=[]) {
    if(!a || a.length == 0) {
        return null;
    }

    if(a.length % 2 == 0) {
        return false
    }

    return true;
}

console.log(oddNumberOfElements([1, 2, 9, 2, 1]))
console.log(oddNumberOfElements([0, 1, 2, 3]))
console.log(oddNumberOfElements([0, 1, 2, 3, 10, 11, 25, 6]))

//b
//Write a function that counts the number of elements less than the middle
// element. If the given array has an even number of elements, print out an error
// message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

function lessThanMiddle(a = []) {
    if(a.length % 2 == 0) {
        return "Error: even number of elements!"
    }

    var middle = a[parseInt(a.length / 2)];
    var count = 0;

    for(var i = 0; i<a.length; i++) {
        if(middle > a[i]) {
            count++
        }
    }

    return count;
}

console.log(lessThanMiddle([-1, 8.1, 3, 6, 2.3, 44, 2.11]));
console.log(lessThanMiddle([0, 3, 9, 8, 7, 4, 1, 2, 6]));


//task 4
// Write a function that finds the smallest element of a given array. The function should
// return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: { minValue: -2, minLastIndex: 6 }

function smallestElementAndPosition(a = []) {
    var minValue = a[0];
    var minLastIndex = 0;
    var result = {};

    for(var i = 0; i < a.length; i++) {
        if(a[i] < minValue) {
            minValue = a[i];
            result.minValue = a[i];
            result.minLastIndex = a.lastIndexOf(minValue)
        }
    }

    return result;
}

console.log(smallestElementAndPosition([1, 4, -2, 11, 8, 1, -2, 3]));


//task 5

// a. Write a function that finds all the elements in a given array less than a given
// element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]

function lessThanGivenElement(a = [], b) {
    var result = [];

    for(var i = 0; i<a.length; i++) {
        if(a[i] < b) {
            result.push(a[i]);
        }
    }

    return result;
}

var x = [2, 3, 8, -2, 11, 4];
var y = 6;

console.log(lessThanGivenElement(x, y))

//b. Write a function that finds all the elements in a given array that start with the “pro”
// substring. The function should be case insensitive.
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]

var x = ["JavaScript", "Programming", "fun", "product"];
var y = "pro"

function findElementsWithPro(a = [], b) {
    var result = [];

    for(var i = 0; i < a.length; i++) {
        if(a[i].toLowerCase().startsWith(b)) {
           result.push(a[i])
        }
    }

    return result;
}

console.log(findElementsWithPro(x, y))

//c. Write a function that expects an array and a callback function that filters out
//some of the elements. Use functions defined in a) or b) to test it.
function filterOutElements(a = [], b, c) {

    return c(a, b);

}



console.log(filterOutElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, lessThanGivenElement))

//task 6
//a
// a. Write a list (array) of products you usually buy in the supermarket. Write a price
// and name for each product. For example,
// [
// {name: ‘apples’, price: 100},
// {name: ‘milk’, price: 80},
// {name:’bananas’, price: 150}
// ]
// b. Write a function that calculates the total price of your shopping list.
// c. Write a function that calculates the average product price of your shopping list.
// Print this value with the precision of three decimals.
// d. Write a function that prints out the name of the most expensive product on your
// shopping list. Write the name in uppercase.

var x = [{name: "apples", price: 100}, 
    {name: "milk", price: 80}, 
    {name: "bananas", price: 150}
];

function totalPrice(a= []) {
    var result = 0;

    for(var i = 0; i < a.length; i++) {
        result += a[i].price
    }

    return result;
}

console.log(totalPrice(x));

function averageProductPrice(a=[]) {
    var result = 0;

    for(var i = 0; i < a.length; i++) {
        result += a[i].price / a.length
    }

    return parseFloat(result).toFixed(3);
}

console.log(averageProductPrice(x));

function mostExpensiveProduct(a = []) {
    var result = "";

    for(var i=0; i<a.length; i++) {
        var max = a[0].price;
        if(a[i].price > max) {
            max = a[i].price;
            result += a[i].name;
        }
    }

    return result.toUpperCase();
}

console.log(mostExpensiveProduct(x));

//task 7
// a. Write a function that checks if a given string is written in all capitals.
// b. Write a function that checks if a given string contains any digits.
// c. Write a function that checks if a given string is a valid hexadecimal color.
// d. Write a function that checks if a given number belongs to the interval from 1900
// to 2018.
// e. Write a function named validator that returns an object with properties
// stringValidator, passwordValidator, colorValidator, and yearValidator referencing
// the functions from a) to d).

//a

function checkStringCapitals(a = "") {
    var result = true;
    var temp;

    for(var i = 0; i < a.length; i++) {
        temp = a[i].toUpperCase();
        if(temp !== a[i]) {
            result = false;
        }
    }

    return result;
}

console.log(checkStringCapitals("TODayIsAgoodDay"));
console.log(checkStringCapitals("YAY"))

//b

function checkStringForDigits(a = "") {
    var result = false;
    var temp;

    for(var i = 0; i < a.length; i++) {
        temp = parseInt(a[i]);
        if(temp) {
            result = true;
        }
    }

    return result;
}

console.log(checkStringForDigits("asd9ads"));
console.log(checkStringForDigits("asdads"));

// c

function checkIfStringHexColor(a = "") {

    if(a[0] != "#") {
        return false;
    }

    if(!(a.length == 4 || a.length == 7)) {
        return false;
    }

    for(var i = 1; i < a.length; i++) {
        if(!((a[i].charCodeAt(0) <= '0'.charCodeAt(0) && a[i].charCodeAt(0) <= 9) || (a[i].charCodeAt(0) >= 'a'.charCodeAt(0) && a[i].charCodeAt(0) <= 'f'.charCodeAt(0)) || (a[i].charCodeAt(0) >= 'A'.charCodeAt(0) || a[i].charCodeAt(0) <= 'F'.charCodeAt(0)))) {
            return false;
        }
    }

    return true;
}

console.log(checkIfStringHexColor("#1AFFa1"));
console.log(checkIfStringHexColor("#F00"));
console.log(checkIfStringHexColor("123456"));

// d. Write a function that checks if a given number belongs to the interval from 1900 to 2018.

function checkNumberInterval(a) {
    
    if(a >= 1900 && a <= 2018) {
        return true;
    }

    return false;
}

console.log(checkNumberInterval(1989));
console.log(checkNumberInterval(1235));
console.log(checkNumberInterval(2007));

//e. Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).


function validator() {
    return {checkStringCapitals, checkStringForDigits, checkIfStringHexColor, checkNumberInterval};
}


var val = validator().checkStringCapitals("BIRDS");

console.log();
console.log(val);

//task 8
// Write a function that calculates a number of days to your birthday.

// Input: 25 February
// Output: 5 days

function daysUntilMyBirthday(input) {
    var today = new Date("February 20, 2023 01:01:00");
    var oneDay = 24*60*60*1000;

    var a = new Date(input);
    var birthday = a;

    var days = Math.round(Math.abs((today - birthday)) / (oneDay));

    return days + " days until my birthday!";
};

console.log(daysUntilMyBirthday("February 25, 2023"));

function daysUntilBirthday(input) {
    var today = new Date();
    console.log(today);

    var oneDay = 24*60*60*1000;

    var a = new Date(input);
    var birthday = a;

    var days = Math.round(Math.abs((today - birthday)) / (oneDay));

    return days + " days until my birthday!";
}

console.log(daysUntilBirthday("June 21 2023"));

// task 9
// 9. Write a function that for a given departure and arrival time calculates the time the trip takes.
// Input: 8:22:13 11:43:22
// Output: 3 hours 21 minutes 9 seconds

function calculateTripTime(input1 = {hours, minutes, seconds }, input2 = {hours, minutes, seconds }) {
    var result = {};

    result.hours = input2.hours - input1.hours;
    result.minutes = input2.minutes - input1.minutes;
    result.seconds = input2.seconds - input1.seconds;

    return result;

}

console.log(calculateTripTime({hours: 8, minutes: 22, seconds: 13}, {hours: 11, minutes: 43, seconds: 22}))


function calculateTripDuration(startT, endT) {
    var ar = startT.split(":");
    var ar2 = endT.split(":");
  
    console.log(ar, ar2);
  
    var start = new Date(0, 0, 0, ar[0], ar[1], ar[2]);
    var end = new Date(0, 0, 0, ar2[0], ar2[1], ar2[2]);
  
    console.log(start, end);
  
    var diff = end.getTime() - start.getTime();
  
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log(hours);
    var min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((diff % (1000 * 60)) / 1000);
  
    return hours + " hours " + min + " minutes " + sec + " seconds ";
  }
  
  console.log(calculateTripDuration("8:22:13", "11:43:22"));

//task 10
// a. Write a constructor function that creates points in space. Each point in space has
// its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.

// b. Write a function that calculates the distance between two points in the space.

function createPoint(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

var point1 = new createPoint(3, 5, 1);
var point2 = new createPoint(1, 2, 3);

//b.

function distanceBetweenPoints(point1, point2) {
    var xDifference = point1.x - point2.x;
    var yDifference = point1.y - point2.y;
    var zDifference = point1.z - point2.z;

    return Math.sqrt(xDifference*xDifference + yDifference*yDifference + zDifference * zDifference);
}

var distance = distanceBetweenPoints(point1, point2);
console.log(distance);

//task 11

// a. Write a function that generates a random integer value between 5 and 20.
// b. Write a function that generates a random integer value between 50 and 100.
// c. Write a function which expects a number and a callback generator function and returns an array of numbers produced by the generator function.

//a.
//b.
function generateRandomNumber(input1, input2) {
    
    return Math.floor(Math.random() * (input2 - input1 + 1) + input1);
}
  
  console.log(generateRandomNumber(5, 20));
  console.log(generateRandomNumber(50, 100));

  //c.
  function arrayOfNumbers(a, b) {
    var result = [];
    for(var i = 0; i < a; i++) {
        result[i] = b(a, a*a);
    }
    return result;
  }
  console.log(arrayOfNumbers(50, generateRandomNumber));
  console.log(arrayOfNumbers(5, generateRandomNumber ));

//task 12.
//Write a function that shuffles the elements of a given array.
// Input: [3, 6, 11, 2, 9, 1]
// Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array)

function shuffleElements(a) {
    var result = [];


    return result;
}

console.log(shuffleElements([3, 6, 11, 2, 9, 1]));

