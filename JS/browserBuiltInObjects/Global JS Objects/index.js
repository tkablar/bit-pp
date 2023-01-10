// Math

// Random
// Create a function that builds an array of 10 random numbers between 1 and 50.
// The function prints that array out in the console and then returns it.


function createRandomArray() {
    var a = [];

    for(var i = 10; i > 0; i--) {
        a.push(Math.random() * 50 + 1);
    }

    console.log(a);

    return a;
}

var list = createRandomArray()

// Round
// Create a function that uses the passed array of numbers and rounds all its elements to two decimals.
// Print out the modified array in the console.
// Use the first function for generating the input array.

function twoDecimalsArray(a) { 
    
    for(var i = 0; i < a.length; i++) {
        a[i] = Math.round((a[i] + "e+2"))/100;
    }

    console.log(a)

    return a;

}

twoDecimalsArray(list)


// Floor
// Create a function that uses the passed array of numbers and rounds all its elements to the nearest integer.
// Print out the modified array in the console.
// Use the first function for generating the input array.


function roundNumber(a) {

    for(var i = 0; i < a.length; i++ ) {
        a[i] = Math.floor(a[i])
    }

    console.log(a);

    return a;
}

roundNumber(list)


// Max
// Create a function that finds and prints out the biggest element in the passed array of numbers.


function printMax(a) {
    max = a[0];
    for(var i = 0; i < a.length; i++) {
        

        if(a[i] > max) {
            max = a[i];
        }

    }

    return console.log(max);
}

printMax(list)


// Date
    
// Print out the whole date object in the console.
// Print out the current time in the console.
// Print out the current date in the console.


function printWholeDate() {
    return console.log(Date())
}

printWholeDate()

function printCurrentTime() { 
    var date = new Date();
    return console.log(date.getHours())
}

printCurrentTime()

function printCurrentDate() { 
    var date = new Date();
    return console.log(date.getDate())
}

printCurrentDate()