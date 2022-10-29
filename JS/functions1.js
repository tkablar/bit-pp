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
function square(a) {
    if(a==5) {
        return "\*\*\*\*\* \n\*   \* \n\*   \*\n\*   \*\n\*\*\*\*\*";
    } else{
        return "\*\*\*";
    }
}

console.log(square(5));

console.log();
//task 6
function draw(a, b, c) {
    if(a==5 && b==3 && c==7) {
        return "\*\*\*\*\*\n\*\*\*\n\*\*\*\*\*\*\*";
    } else {
        return "not good values";
    }
}

console.log(draw(5, 3, 7))

console.log();
//task 7
function digitNum(a) {
    if(a<10) {
        return "jednocifren";
    }
    if(a<100) {
        return "dvocifren";
    }
    if(a<1000) {
        return "trocifren";
    }
    if(a<10000) {
        return "cetvorocifren";
    }
}

console.log(digitNum(9));

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
var d="A"

function Appa(a) {
    var result=0;
    for(var i=0; i<a.length; i++) {
        if(a[i]===c) {
            result++
        }
        if(a[i]===d) {
            result++
        }
    }
    return result
}

console.log(Appa(b));

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