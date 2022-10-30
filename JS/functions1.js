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

console.log(max(7, 13))

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

console.log()
//task 4
function mean(a, b, c, d) {
    result=(a+b+c+d)/4;
    return result;
}

console.log(mean(50, 25, 15, 100));

console.log();
//task 5
//function square(a) {
//    if(a==5) {
//        return "\*\*\*\*\* \n\*   \* \n\*   \*\n\*   \*\n\*\*\*\*\*";
//    } else{
//        return "\*\*\*";
//    }
//}

//console.log(square(5));

var c="\*";
var d=5;
function printSquare(a, b) {
    for(var i=0; i<b; i++) {
        if(i==0 || i==b-1) {
            printFullRow(a, b)    
        } else {
            printFirstAndLast(a, b)   
        }
    }
}

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

printSquare(c, d)
printSquare(c,9)


console.log();
//task 6
//function draw(a, b, c) {
//    if(a==5 && b==3 && c==7) {
//        return "\*\*\*\*\*\n\*\*\*\n\*\*\*\*\*\*\*";
//    } else {
//       return "not good values";
//    }
//}

//console.log(draw(5, 3, 7))

var m=5;
var g=3;
var l=7;
var p="\*"

function draw(a, b, c, d) {
    printFullRow(d, a);
    printFullRow(d, b);
    printFullRow(d, c);
}

draw(m, g, l, p);



console.log();
//task 7
//function digitNum(a) {
//    if(a<10) {
//        return "jednocifren";
//    }
//    if(a<100) {
//        return "dvocifren";
//    }
//    if(a<1000) {
//        return "trocifren";
//    }
//    if(a<10000) {
//        return "cetvorocifren";
//    }
//}
//
//console.log(digitNum(9));

var l=235;

function digitNum(a) {
    var result="" + a;
    return result.length;
}

console.log("Number " + l + " has " + digitNum(l) + " digits.");


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
    return result
} 

console.log(NumApp(b, c))

console.log();
//task 9
var b=[2, 4, 7, 8, 7, 7, 1];

function oddSum(a) {
    var result=0;
    for(var i=0; i<a.length; i++) {
        if(a[i]%2!=0) {
            result+=a[i]
        }
    }
    return result
}

console.log(oddSum(b));

console.log()
//task 10
var b="TamarA"
var c="a"

function Appa(a, b) {
    var result=0;
    a = a.toLowerCase();//tamara
    for(var i=0; i<a.length; i++) {
        // if(a[i]===c || a[i]===d) {
        //     result++
        // }
        if(a[i]===b) {
            result++
        }
    }
    return result
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