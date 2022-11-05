//task 1
var l="My random string";
var t="JS ";
var o=1;


function insertToString(a, b, c) {
    var result="";
    if(typeof(c)== undefined){
        c=0;
    }
    if(typeof(b)== "undefined") {
        b= "";
    }
        return result = a.slice(0, c) + b + a.slice(c);
    }

console.log(insertToString(l, t, o));
console.log(insertToString(l, t, 10));
console.log(insertToString(l, t, 4));

console.log();
//task 2
var t=["NaN", 0, 15, false, -22, "", undefined, 47, null];

function joinElements(a) {
    var result="";
    
    for(var i=0; i<a.length; i++) {
        if(a[i] === undefined || a[i] === null || a[i] === Infinity || a[i] === "NaN" || a[i] === false) {
            result+="";
        }  else {
            result+=a[i];
        }
    }
    return result;
}

console.log(joinElements(t));

console.log();
//task 3
var o=[NaN, 0, 15, false, -22, "", undefined, 47, null];


function filterOut(a) {
    var result=[];
    for(var i=0; i<a.length; i++) {
        if(a[i]> 0 || a[i]< 0) {
            result.push(a[i]);
        }
    }
    return result;
}

console.log(filterOut(o));

console.log();
//task 4
var o=12345;
var t=98765;


function reverseNumber(num) {
    num = num + "";
    var output = "";
    var lastIndex = num.length - 1;
 
    for (var index = 0; index < num.length; index++) {
        var element = num[lastIndex - index];
        output += element;
    }
 
    var reversedNum = parseFloat(output);
    return reversedNum;
 }
 
 var result = reverseNumber(98765)
 
 console.log(typeof result);
 console.log(result);

 console.log(reverseNumber(o));
 console.log(reverseNumber(t));


 console.log();
 //task 5
 var z=[7, 9, 0, -2];

 function lastElementOfArray(a, b) {
    var result=[];
    var n=a.length;
    for(var i=n - b; i < n; i++) {
       result.push(a[i]);
    }
    return result;
 }

 console.log(lastElementOfArray(z, 3));
 console.log(lastElementOfArray(z, 1))

 console.log();
 //task 6

function specifiedNum(a, b = null) {
    var result=[];

    for(var i=0; i<a; i++) {
        result.push(b)
    }

    return result;
}

console.log(specifiedNum(6, 0));
console.log(specifiedNum(3, "none"));
console.log(specifiedNum(3));
console.log(specifiedNum(7, "one"));

console.log();
//task 7
//Write a function that says whether a number is perfect.
//28 -> 28 is a perfect number.

function perfectOrNot(a) {
    if(a<=0) {
        return a + " is not a perfect number.";
    }
    var sum=0;
    
    for(var i=1; i<a; i++) {
        if(a%i==0) {
            sum+=i;
        }
    }
    if (sum==a) {
        return a + " is a perfect number";
    }

    return a + " is not a perfect number.";
}

console.log(perfectOrNot(28));
console.log(perfectOrNot(496));
console.log(perfectOrNot(236));
console.log(perfectOrNot(8128)); 

console.log();
//task 8
//Write a function to find a word within a string.
var t="The fox quick fox brown fox fox fox foxtrot";
var o="fox";
var p="aa bb cc dd aa bb dd gg aa aa";
var l="aa";

function wordWithinString(a, b) {
    var result=0;
    // b=" " + b + " ";
    for(var i=0; i<a.length; i++) {
        for(var j=0; j<b.length; j++) {
            
            if(a[i+j]==b[j]) {
                result+=1
            } else {
                result-=j;
                break;
            }
        }
    }
    return result / b.length;
}

console.log(wordWithinString(t, o));
console.log(wordWithinString(p, l));

console.log();
//task 9
var e="myemailaddress@bgit.rs";

function hideEmail(a) {
    var result="";
    var hide=""
    for(var i=0; i<a.length; i++) {
        if(i<2) {
            result+=a[i];
        } else if(i==3) {
           result+="..."; 
        }  else if(a[i]=="@") {
            hide=i;
            result+=a[i]; 
        } else if(i>3) {
            result+=""; 
        } else if(i>hide) {
            result+=a[i];  
        } 
    }    
    return result;
}

console.log(hideEmail(e));



console.log()
//task 10
function findFrequentItem(inputArr) {
    var mostFrequent = 1;
    var m = 0;
    var item;
    for (var i = 0; i < inputArr.length; i++) {
        for (var j = i; j < inputArr.length; j++) {
            if (inputArr[i] == inputArr[j]) {
                m++;
            }
            if (mostFrequent < m) {
                mostFrequent = m;
                item = inputArr[i];
            }
        }
        m = 0;
    }
 
    // output: item (number of times)
    return item + " ( " + mostFrequent + " times ) "
 }
 
 var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
 console.log(findFrequentItem(arr1));