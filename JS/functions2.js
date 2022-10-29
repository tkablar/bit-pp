//task 1
var input0="SomeRandomString";
var input1=365

function IsOrNot(a) {
    if(typeof a === "number") {
        return false;
    } else {
        return true
    }    
}

console.log(IsOrNot(input0))


console.log();
//task 2
var input1="Stringic";
var input2="";
var input3=21;

function BlankOrNot(a) {
    if(a.length === 0) {
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
var s="String sa Y je super ";
var m="Y";
var o="Z"

function charOcc(a, b) {
    var result=0;
    for(var i=0; i<a.length; i++) {
        if(a[i] === b) {
            result = a.indexOf(b);
        }
    }   
    return result
}

console.log(charOcc(s, m));
console.log(charOcc(s, o)); 

console.log()
//task 6
var p="Neki super Z string sa puno Z Z Z";
var t="Y";
var x="Z";

function lastOcc(a, b) {
    var result=0;
    for(var i=0; i<a.length; i++) {
        if(a[i] === b) {
            result = a.lastIndexOf(b)
        }
    }
    return result
}

console.log(lastOcc(p, t));
console.log(lastOcc(p, x));

console.log();
//task 7
var l="Random";

function stringToArray(a) {
    var result=[]
    for(var i=0; i<a.length; i++) {
        result.push(a[i]);
    }
    return result
}

console.log(stringToArray(l))