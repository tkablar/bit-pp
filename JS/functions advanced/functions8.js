(
    function () {
        console.log("boo")
    }
) ();

//task 1
// Write IIFE that replaces the first and the last element of the given array and prints out its
// elements.
// Input array: [4, 5, 11, 9]
// Output array: [ 9, 5, 11, 4]

(
    function (a) {
     let x=a[0];
     let y=a[a.length-1];

        a.pop(a);
        a.shift(a);

        a.unshift(y);
        a.push(x);
        
     console.log(a);
    }

) ([4, 5, 11, 9])

//task 2
// Write IIFE that calculates the surface area of the given rectangle with sides a and b.
// Input: 4 5
// Output: 20

( function(a, b) {
    result = a*b;

    console.log(result)
}
) (4, 5)


//task 3

var transformed = (function (sentence, letter, replacementCharacter) {
    var counter=0;
    result= "";
    for(var i=0; i<sentence.length; i++) {
        if(sentence[i].toLowerCase() !== letter.toLowerCase()) {
            result += sentence[i];
            continue;
        }

        result += replacementCharacter;
        counter++
    }

    return `${result}, ${counter}`;
}) ("programMing", "m", "*");

console.log(transformed);

//task 4
//Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com.
// Input: pera peric
// Output: pera.peric@gmail.com

var emailSuggest = (function(a, b) {
    result=a+ "." + b + "@gmail.com"

    console.log(result)
}) ("pera" , "peric")



//task 5
//Write a function that returns a function that calculates a decimal value of the given octal
//number.
//Input: 034
//Output: 28

var getNumberToDecimalConverter= function (base) {
    if(!base) {
        return 0;
    }
    function convert(number) {
        return parseInt(number, base);
    }

    return function(value) {
        return convert(value);
    }
}

var octalToDecimal = getNumberToDecimalConverter(8);
var num = octalToDecimal("034");
console.log(num);

//task 6
// 6. Write a function that checks if a given string is valid password. The password is valid if it
// is at least 6 characters long and contains at least one digit. The function should receive
// two callbacks named successCallback and errorCallback that should be called in case
// password is correct or invalid.
// Input: JSGuru
// Output: Your password is invalid!
// Input: JSGuru123
// Output: Your password is cool!

function checkType(data, type) {
    if(!data || typeof data != type) {
        return false;
    }

    return true
}

var passwordChecker = function(password, success, error) {
    // if(!success || typeof success != "function") {
    //     return false;
    // }

    // if(!error || typeof error != "function") {
    //     return false;
    // }

    if(!checkType(succes, "function") || !checkType(error, "function")) {
        return false;
    }

    function isNumeric(num) {
        return !isNaN(parseFloat(num) && isFinite(num))
    }

    function isPasswordValid(password) {
        if(typeof password != "sting" || password.length< 6) {
            return false
        }

        for(var i=0; i<password.length; i++) {
            if(isNumeric(password[i])) {
                return true;
            }
        }
        return false
    }

    var isValid = isPasswordValid(password);
    if(isValid) {
        return success();
    }

    return error();
}

var success = function() {
    console.log("Your password is valid")
}

passwordChecker("sdfhjkklj123", success, error)

//task 7
// 7. Write a function that filters elements of the given array so that they satisfy a condition
// given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3]

var filter = function(input, conditionChecker) {
    if(!ckeckType(conditionChecker, "function")) {
        return input;
    }

    var result = [];

    for(var i = 0; i<input.length; i++) {
        if(!conditionChecker(input[i])) {
            continue;
        }

        result.push(input[i]);
    }

    return result;
}

function checkElement(element) {
    return element % 2 != 0;
}

console.log(filter([23, 5, 7, 42, 12], checkElement));