//task 1
// Write a function that checks if a given string contains digit 5.
// Input: “1b895abd”
// Output: true
// Input: “1bser9re”
// Output: false

function checkStringDigit(a, b) {
    for(var i = 0; i<a.length; i++) {
        if(a[i] == b) {
            return true
        }
    }

    return false
}

console.log(checkStringDigit("1b895abd", 5))
console.log(checkStringDigit("1bser9re", 5))
console.log(checkStringDigit("vghkj1278963", 5))

//task 2
// Write a function that in a given string replaces all the appearances of the string ‘JS’ with
// ‘**’.
// Input: “Programming in JS is super interesting!”
// Output: “Programming in ** is super interesting!”

function replacePartOfString(a, b, c = "*") {
    var result = "";

    // for(var i = 0; i<a.length; i++) {
    //     for(var j=0; j<b.length; j++) {
    //         if(a[i] != b[j] && a[i+1] != b[j]) {
    //             result+=a[i];
    //         } else {
    //             result+=c;
    //         }
    //     }

        


       for(var i = 0; i<a.length; i++) {
        //// for(var j=0; j<b.length; j++) {
        
            if((a[i] + a[i+1]) != b ) {
                result+=a[i];
                
            } else {
                result+=c 
            }
            
        }
    
    return result;
}

console.log(replacePartOfString("Programming in JS is super interesting!", "JS"))

//task 3
//Write a function that inserts a given character on a given position in the string.
// Input: “Goo morning”, 4, ‘d’
// Output: “Good morning”

function insertCharInString(a, b, c) {
    var result="";
    for(var i=0; i<a.length; i++) {
        
        if(i!=b-1) {
            result+=a[i];
        } 
        if (i==b-1)   {
            result+=c
        }
        
    }
    return result;
}

console.log(insertCharInString("Goo morning", 4, "d "))


//task 2 sa casa replace string

function replace(sentence, element, replacement) {
    if(!sentence || sentence.length==0 || !element || element.length == 0 || replacement.length != 1)  {
        return sentence;
    }

    var replacementString = "";
    for(var i=0; i <element.length; i++) {
        replacementString += replacement[i]
    }

    var result = "";
    for(var i = 0; i< sentence.length; i++) {
        var z = i;
        var word = "";
        for(var j = 0; j<element.length; j++) {
            if(sentence[z]) {
                word +=sentence[z]
                z++
            }
        }

        if(word.toLowerCase() == element.toLowerCase()) {
            result+=replacementString;
            i += (element.length-1)
        } else {
            result += sentence[i];
        }
    }
    return result;
}

console.log(replace("Programming in JS is super interesting!", "JS", "*"))





