//task 1
// 1. Write a function to check whether the `input` is a string or not.

var input0="SomeRandomString";
var input1=365

function IsOrNot(a) {
    if(typeof a === "string") {
        return true;
    } else {
        return false;
    }    
}

console.log(IsOrNot(input0))


console.log();
//task 2
//2. Write a function to check whether a string is blank or not.
var input1="Stringic";
var input2="";
var input3=21;

function BlankOrNot(a) {
    if(typeof a==="string" && a === "") {
        return true;
    }
    else{
        return false;
    }
}

console.log(BlankOrNot(input3));

console.log();
//task 3
//Write a function that concatenates a given string n times (default is 1).
var n=4
var f="Ha"

function stringx(a, b) {
    var result="";
    while(b>0) {
        result+=a;
        b--;
    }
    return result;
}

console.log(stringx(f,n));



console.log()
//task 4
//Write a function to count the number of letter occurrences in a string.
var a="My random string";
var c="n";
var l="Probavamo jedan string"
var z="a"

function letterOcc(b, d) {
    var result=0
    for(var i=0; i<b.length; i++) {
        if(b[i]===d) {
            result++;
        }
    }
    return result
}

console.log(letterOcc(a, c));
console.log(letterOcc(l, z));

console.log();
//task 5
// 5. Write a function to find the position of the first occurrence of a character in a string. The
// result should be the position of character. If there are no occurrences of the character, the
// function should return -1.
var s="String sa Y je super Y Y";
var m="Y";
var o="Z"

function charOcc(a, b) {
    var result=0;
    for(var i=0; i<a.length; i++) {
         result = a.indexOf(b);
    }   
    return result;
}

console.log(charOcc(s, m));
console.log(charOcc(s, o));


console.log()
//task 6
// 6. Write a function to find the position of the last occurrence of a character in a string. The
// result should be in human numeration form. If there are no occurrences of the character,
// function should return -1.
var p="Neki super Z string sa puno Z Z Z";
var t="Y";
var x="Z";

function lastOcc(a, b) {
    var result=0;
    for(var i=0; i<a.length; i++) {
        result = a.lastIndexOf(b);
    }
    return result
}

console.log(lastOcc(p, t));
console.log(lastOcc(p, x));

console.log();
//task 7//
//Write a function to convert string into an array. Space in a string should be represented as
//“null” in new array.
var l="Random";
var x="Random String to array"

function stringToArray(a) {
    var result=[]
    for(var i=0; i<a.length; i++) {
        if(a[i]=== " ") {
            result.push(null)
        } else {
            result.push(a[i]);
        }
        
        
    }
    return result
}

console.log(stringToArray(l));
console.log(stringToArray(x));


var h="My random string";

function stringToArray(a) {
    var result=[]
    for(var i=0; i<a.length; i++) {
        if(a[i] === " ") {
            result.push(null);
        } else {
            result.push(a[i]);
        }
    }
    return result
}

console.log(stringToArray(h));


console.log();
//task 8
// 8. Write a function that accepts a number as a parameter and checks if the number is prime or
// not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.
var x=7;

function primeOrNot(a) {
    if(a <=1) {
        return "Number " + a + " is not a Prime number"
    } 

    var s = Math.sqrt(a);
    for (var i = 2; i <= s; i++){
        if (a % i === 0) {
            return "Number " + a + " is not a Prime number"
        }
    }

    return "Number " + a + " is a Prime number"
}

console.log(primeOrNot(x));
console.log(primeOrNot(-5));
console.log(primeOrNot(24));
console.log(primeOrNot(9));

//drugo resenje
function isPrimeNumber(num) {

    if (num === 1) {
        return false;
    } else if (num === 2) {
        return true;
    }
   
    for (var x = 2; x < num; x++) {
        if (num % x === 0) {
            return false;
        }
    }
   
    return true;
 }
 
 var isPrime = isPrimeNumber(37);
 console.log(isPrime);

console.log();
//task 9
// 9. Write a function that replaces spaces in a string with provided separator. If separator is not
// provided, use “-” (dash) as the default separator.
var x="My random string";
var y="_";
var t="+";

function spaceToDash(a, b = "-") {
    var result="";
    for(var i=0; i<a.length; i++) {
        if(a[i]==" ") {
            result+=b;
        } else {
            result+=a[i];
        }
    }
    return result;
}

console.log(spaceToDash(x, y));
console.log(spaceToDash(x, p));
console.log(spaceToDash(x, t));
console.log(spaceToDash(x));

console.log();
//task 10
// 10. Write a function to get the first n characters
// and add “...” at the end of newly created string.
var x="My random string";
var y=7;

function newString(a, c) {
    var result="";
    for(var i=0; i<c; i++) {
            result+=a[i];
    }
    return result + "...";
}

console.log(newString(x, y));



console.log();
//task 11
// 11. Write a function that converts an array of strings into an array of numbers. Filter out all
// non-numeric values.
var array1=["1", "21","tamara", undefined, "42", "1e+3", Infinity];
var arrayResult=[];

function stringToNumbers(a) {
    var b=[];
    for(var i=0; i<a.length; i++) {
        if (!isNaN(a[i]) && a[i]!=Infinity) {
            b.push(+a[i]);
        } 
    }
    return b;
}

console.log(stringToNumbers(array1));


console.log();
//task 12
// 12. Write a function to calculate how many years there are left until retirement based on the
// year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
// already retired, a proper message should be displayed.
var x=1975;
var z=2022;
var retireMen=65;
var retireWomen=60;

function yearsTillRetireMen(currentYear, birthYear, retireMen=65) {
    result1=(currentYear-birthYear);
    if(retireMen-result1<=0) {
        result2="This person is retired"
    } else {
        result2="This person has " +(retireMen-result1) +" years until retirement";
    }
    return result2;
    
}

console.log(yearsTillRetireMen(z, x));

var x=1975;
var z=2022;
var retireMen=65;
var retireWomen=60;

function yearsTillRetireWomen(currentYear, birthYear, retireWomen=60) {
    result1=(currentYear-birthYear);
    if(retireWomen-result1<=0) {
        result2="This person is retired";
    } else {
        result2="This person has " + (retireWomen-result1) + " years until retirement";
    }
    return result2

}

console.log(yearsTillRetireWomen(z, x));

console.log();
//task 13
// 13. Write a function to humanize a number (formats a number to a human-readable string) with
// the correct suffix such as 1st, 2nd, 3rd or 4th.

function humanizeNumber(a) {
    var result="";
    var c="" + a;
    var leng=c.length;
    if(c[leng-1]==1 && c[leng-2]!=1) {
        result+=c + "st"
    } else if(c[leng-1]==2 && c[leng-2]!=1) {
        result+=c + "nd"
    } else if(c[leng-1]==3 && c[leng-2]!=1){
        result+=c + "rd"
    } else {
        result+=c + "th"
    }

    return result;
}

console.log(humanizeNumber(2));
console.log(humanizeNumber(11));
console.log(humanizeNumber(7));
console.log(humanizeNumber(31));
console.log(humanizeNumber(65));
console.log(humanizeNumber(1));
console.log(humanizeNumber(1011));
console.log(humanizeNumber(2002));
