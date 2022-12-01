//slide
function sum(a, b) {
    var c = a + b;
    return c;
}
console.log(sum(9, 2));

console.log()
//task 1
//1. Write a program that calculates the maximum of two given numbers.
function max(a, b) {
        if(a>b) {
            return a;
        }
        else{
            return b;
        } 
    }

console.log(max(7, 13));

console.log()
//task 2
//2. Write a program that checks if a given number is odd.
function odd(a) {
    if(a%2==0) {
        return "even";
    } else { 
        return "odd";
    }
}

console.log(odd(54));

console.log()
//task 3
//3. Write a program that checks if a given number is a three digit long number.
function digit(a) {
    if(a>99) {
        return "yes";
    } else {
        return "no";
    }
}

console.log(digit(236));

//drugacije resenje bolje
function checkDigitLength(a) {
    return (a + '').length;
}

var digitLength = checkDigitLength(332);
if (digitLength >= 3) {
    console.log('The digit length is', digitLength);
}


console.log()
//task 4
//4. Write a program that calculates an arithmetic mean of four numbers.
function mean(a, b, c, d) {
    result=(a+b+c+d)/4;
    return result;
}

console.log(mean(50, 25, 15, 100));

//bolje resenje
function arithmeticMean() {
    var args = arguments;
    var result = 0;

    for (var i = 0; i < args.length; i++) {
        var value = args[i + ''];
        result += value;
    }

    return result / args.length;
}

console.log(arithmeticMean(3, 4, 5, 18, 22))


console.log();
//task 5
//5. Write a program that draws a square of a given size. For example, if the size of
// square is 5 the program should draw:
// *****
// * *
// * *
// * *
// *****

var c="\*";
var d=5;

function printFullRow(a, b) {
    result="";
    for(var i=0; i<b; i++) {
         result+=a;
    }
    console.log(result);
}

function printFirstAndLast(a, b) {
    result="";
    for(var i=0; i<b; i++) {
        if(i==0 || i==b-1) {
            result+=a;
        } else {
            result+=" ";
        }
    }
    console.log(result)
}

function printSquare(a, b) {
    for(var i=0; i<b; i++) {
        if(i==0 || i==b-1) {
            printFullRow(a, b)    
        } else {
            printFirstAndLast(a, b)   
        }
    }
}

printSquare(c, d);
printSquare(c, 9);
console.log(printSquare("+",8));

function square(a) {
    var result = '';
    for (var i = 0; i < a; i++) {
        for (var j = 0; j < a; j++) {
            if (i == 0 || i == (a - 1)) {
                result += '*'
            } else {
                if (j == 0 || j == (a - 1)) {
                    result += '*'
                } else {
                    result += ' '
                }
            }

        }

        result += '\n';
    }

    console.log(result);
}

square(5);
square(8);


console.log();
//task 6
// 6. Write a program that draws a horizontal chart representing three given values.
// For example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *
var m=5;
var g=3;
var l=7;
var p="\*";

function printFullRow(a, b) {
    result="";
    for(var i=0; i<b; i++) {
         result+=a;
    }
    console.log(result);
}

function draw(a, b, c, d) {
    printFullRow(d, a);
    printFullRow(d, b);
    printFullRow(d, c);
}

draw(m, g, l, p);
draw(9, 5, 4, "+");



console.log();
//task 7
//7. Write a program that calculates a number of digits of a given number.
var l=235;

function digitNum(a) {
    var result="" + a;
    return result.length;
}

console.log("Number " + l + " has " + digitNum(l) + " digits.");
console.log("Number " + 23 + " has " + digitNum(23) + " digits.");

console.log();
//task 8
// 8. Write a program that calculates a number of appearances of a given number in a
// given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3
var b=[2, 4, 7, 8, 7, 7, 1];
var c=7;


function NumApp(a, e) {
    var result=0;
    for(var i=0; i<a.length; i++) {
        if(a[i]===e) {
            result++
        } 
    } 
    return result;
} 

console.log(NumApp(b, c));
console.log(NumApp([3, 6, 8, 4, 7, 3 , 3], 3));

console.log();
//task 9
//9. Write a program that calculates the sum of odd elements of a given array.
var b=[2, 4, 7, 8, 7, 7, 1];

function oddSum(a) {
    var result=0;
    for(var i=0; i<a.length; i++) {
        if(a[i]%2!=0) {
            result+=a[i];
        }
    }
    return result;
}

console.log(oddSum(b));

console.log()
//task 10
// 10. Write a program that calculates the number of appearances of a letter a in a
// given string. Modify the program so it calculates the number of both letters a and
// A.
var b="TamarA"
var c="a"

function Appa(a, b) {
    var result=0;
    a = a.toLowerCase();
    for(var i=0; i<a.length; i++) {
        if(a[i]===b) {
            result++
        }
    }
    return result;
}

console.log(Appa(b, c));

console.log();
//task 11
// 11. Write a program that concatenates a given string given number of times. For
// example, if “abc” and 4 are given values, the program prints out abcabcabcabc.

var a="abc";
var b=4;

function repeat(c, d) {
    var result="";
    while(d>0) {
        result+=c;
        d--;
    }
    return result
}

console.log(repeat(a, b));

//drugacije resenje
var a="abc";
var b=4;

function concatString(c, d) {
    var result = "";
    for(var i=0; i<d; i++) {
        result += c;
    }
    return result;
}

console.log(concatString(a, b));