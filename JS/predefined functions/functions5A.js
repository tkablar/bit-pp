//task 1

var x=[["Nikad nemoj odustati, jer uvek postoji vreme i mesto kada će se plima promeniti.", "Harijet Bičer Stou"],
["Ama, misli dobro, pa će dobro i biti.", "Ivo Andrić"],
["Oluje čine da hrastovi puštaju dublje korenje.", "Džordž Herbert"],
["Ono što vodi i vuče svet, nisu lokomotive, nego ideje.", "Viktor Igo"], 
["Svaka smela ideja u početku izgleda kao ludost.", "Gete"],
["Rad rađa ideje.", "Džim Ron"]];

function randomQuote(a) {
    
    return a[Math.floor(Math.random()*a.length)];
}

console.log(randomQuote(x))

//task 2

function prestupnaIliNe(a) {
    let result=a + " nije prestupna godina.";
    if((a%4==0 && a%100!=0) || a%400==0) {
        result = a + " je prestupna godina.";
    }

    return result;
}

console.log(prestupnaIliNe(1999));
console.log(prestupnaIliNe(1978));
console.log(prestupnaIliNe(2000));
console.log(prestupnaIliNe(2004));
console.log(prestupnaIliNe(2012));

//task 3

function daLiJeSamoglasnik(a) {
    let lower=a.toLowerCase();
    let samoglasnici="aeiou";

    for(let i=0; i<samoglasnici.length; i++) {
        if(lower===samoglasnici[i]){
            return true;
        }
    }
    return false;
}


function proveraSamoglasnika(a) {
    let countSam=0;
    let countSug=0;
    
    for(let i=0; i<a.length; i++) {
       if(daLiJeSamoglasnik(a[i])===true) {
            countSam++
       } else {
            if(a[i]!==" " && a[i]!== ".") {
                countSug++
            }
            
       }
    }
 console.log("Ima " + countSam + " samoglasnika, i " + countSug + " suglasnika.")
}


proveraSamoglasnika("Danas je lep i suncan dan.");

//task 4

var x=[96, "Danas", Infinity, null, 0, "yesterday"];

function typeOfArrayElements(a) {
    let result=[];

    for(let i=0; i<a.length; i++) {
        result.push(typeof a[i])
    }
    return result
}

console.log(typeOfArrayElements(x));

//task 5

var x=["12bb", "pp", "as23s", "00sd"];

function checkIfItsNumber(a) {
    
    for(let i=0; i<a.length; i++) {
        if(isFinite(a[i])) {
            return true

        } 
    }
    return false
}

function stringWithoutNumbers(a) {
    let result=[];

    for(let i= 0; i<a.length; i++) {
        if(!checkIfItsNumber(a[i])) {
            result.push(a[i])
        }
    }
    return result;
}

console.log(stringWithoutNumbers(x))

//task 6
var x="Computer";
var y= "Science";

function middleChar(a) {
    let result="";

        if(a.length%2==0) {
            result+=a[a.length/2-1] + a[a.length/2];
        }
        if(a.length%2!=0) {
            result+=a[(a.length-1)/2 ];
        }
        
    return result;
}

console.log(middleChar(x));
console.log(middleChar(y));

function secondCharRepeat(a) {
    let result="";
    let repeat;

    for(let i=2; i<a.length; i++) {
       
            if(a[i] == a[1]) {
                result="@ index " + i;
                repeat = true;
                break;
            } else {
                repeat = false;
            }
    }
    if(repeat == false ) {
        result="not found"
    }
    
    return result;
}

console.log(secondCharRepeat(x))
console.log(secondCharRepeat(y))

function stringToArray(a) {
    let result=[];
    numberOfchar=a.length;
    
    result.push(numberOfchar);
    result.push(a[0]);
    result.push(a[a.length-1]);
    result.push(middleChar(a));
    result.push(secondCharRepeat(a));

    return result
}

console.log(stringToArray(x));
console.log(stringToArray(y));

//task 7
var x=[9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 9, 8];

function notRepeatElements(a) {
    let result=[];

    for(let i=0; i<a.length; i++) {
        let count=0;
        for(let j=0; j<a.length; j++) {
            if(i != j && a[i] == a[j]) {
                count++
                break;
            }
        }
        if(count == 0) {
            result.push(a[i]);
        }
    }
    return result;
}

console.log(notRepeatElements(x));

//task 8

var x=[2, 3, 4, 5];
var y=[2, 3, 4, 5, 6];
var z=[7, 1, 2, 7, 5, 9, 7, 6, 3, 4, 5];

function arrayToSubarray(a,b) {
    let result=[];
    let result1=[];

    for(let i=0; i<a.length; i+=b) {
        result.push(a.slice(i, i+b)); 
    }
    return result;
}

console.log(arrayToSubarray(x, 2))
console.log(arrayToSubarray(y, 2))
console.log(arrayToSubarray(x, 3))
console.log(arrayToSubarray(z, 4))