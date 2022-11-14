//slide
function sum(a, b) {
    var c = a + b;
    return c;
}
console.log(sum(9, 2));

console.log()
//task 1
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

var l=235;

function digitNum(a) {
    var result="" + a;
    return result.length;
}

console.log("Number " + l + " has " + digitNum(l) + " digits.");
console.log("Number " + 23 + " has " + digitNum(23) + " digits.");

console.log();
//task 8
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