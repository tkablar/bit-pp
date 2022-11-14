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


proveraSamoglasnika("Danas je lep i suncan dan.")