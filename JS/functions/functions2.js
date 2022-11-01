//task 1
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
var input1="Stringic";
var input2="";
var input3=21;

function BlankOrNot(a) {
    if(typeof a==="string" && a === " ") {
        return true;
    }
    else{
        return false;
    }
}

console.log(BlankOrNot(input3));

console.log();
//task 3
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
// var s="String sa Y je super ";
// var m="Y";
// var o="Z"

// function charOcc(a, b) {
//     var result=0;
//     for(var i=0; i<a.length; i++) {
//         if(a[i] === b) {
//             result = a.indexOf(b);
//         }
//     }   
//     return result
// }

// console.log(charOcc(s, m));
// console.log(charOcc(s, o)); 

var s="String sa Y je super ";
var m="Y";
var o="Z"

function charOcc(a, b) {
    var result=0;
    for(var i=0; i<a.length; i++) {
         result = a.indexOf(b);
    }   
    return result
}

console.log(charOcc(s, m));
console.log(charOcc(s, o));


console.log()
//task 6
// var p="Neki super Z string sa puno Z Z Z";
// var t="Y";
// var x="Z";

// function lastOcc(a, b) {
//     var result=0;
//     for(var i=0; i<a.length; i++) {
//         if(a[i] === b) {
//             result = a.lastIndexOf(b)
//         }
//     }
//     return result
// }

// console.log(lastOcc(p, t));
// console.log(lastOcc(p, x));

var p="Neki super Z string sa puno Z Z Z";
var t="Y";
var x="Z";

function lastOcc(a, b) {
    var result=0;
    for(var i=0; i<a.length; i++) {
        result = a.lastIndexOf(b)
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

function stringToArray(a) {
    var result=[]
    for(var i=0; i<a.length; i++) {
        result.push(a[i]);
    }
    return result
}

console.log(stringToArray(l));


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

console.log();
//task 9

var x="My random string";
var y="_";
var p="-";
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
var array1=["1", "21","tamara", undefined, "42", "1e+3", Infinity];
var arrayResult=[];

function stringToNumbers(a) {
    var b=[];
    for(var i=0; i<a.length; i++) {
        if (!isNaN(a[i])) {
            b.push(+a[i]);
        } 
    }
    return b;
}

console.log(stringToNumbers(array1));


console.log();
//task 12
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