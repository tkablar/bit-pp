//task 1
//Write a function that converts an array of strings
//into an array of numbers. Filter out all non-numeric values.

var x=["1", "21", undefined, "42", "1e+3", Infinity];

function filterStringToNumber(a) {
    let result=[];
    for(let i=0; i<a.length; i++) {
        if(parseInt(a[i])) {
            result.push(+(+a[i]).toFixed())
        }
    }
    return result
}

console.log(filterStringToNumber(x))

//task 2
// Write a program to join all elements of the array
// into a string skipping elements that
// are undefined, null, NaN or Infinity.

var x=[NaN, 0, 15, false, -22, "", undefined, 47, null];

function numbersToString(a) {
    let result="";
    for(let i=0; i<a.length; i++) {
        
        if (isFinite(a[i]) && a[i] !== null) {
                    
            result+=a[i];
        
        }
    
    }
    return result
}

console.log(numbersToString(x))

//task 3
//Write a program to filter out falsy values from the array.

var x=[NaN, 0, 15, false, -22, "", undefined, 47, null];

function filterFalsyValues(a) {
    let result=[];
    for(let i=0; i<a.length; i++) {

        if(a[i]) {
            result.push(a[i]);
        }
    }
    return result;
}

console.log(filterFalsyValues(x))

//task 4
//Write a program that calculates a number of integer values in the array.

var x=[NaN, 23.1, 15, false, -22.5, "", 4, 7, null];

function numberOfIntegerValues(a) {
    let result=0;
    for(let i=0; i<a.length; i++) {
        if(Number.isInteger(a[i])) {
            result++
        }
    }
    return result;
}

console.log(numberOfIntegerValues(x))

//task 5
//Write a program that calculates a number of float values in the array.

var x=[NaN, 23.1, 15, false, -22.5, "", 4, 7, null];

function numberOfFloatValues(a) {
    let result=0;
    for(let i=0; i<a.length; i++) {
        if(parseInt(a[i]) && !Number.isInteger(a[i])) {
            result++
        } 

    }
    return result;
}

console.log(numberOfFloatValues(x))