//task 1
// Write a JavaScript function that reverses a number. typeof result of the function should
// be “number”.
// 12345 -> 54321

// function reverseNumber(a) {
//     var aToString = "" + a;
//     var result = "";

//     for(var i = aToString.length - 1; i >= 0; i--) {
//         temp = aToString[i];
//         result+= temp;
//     }

//     return parseInt(result);
// }

// console.log(reverseNumber(12345));
// console.log(typeof reverseNumber(12345));

function reverseNumber(a) {

    return (parseInt(a.toString().split("").reverse().join("")));
}

console.log(reverseNumber(12345));
console.log(typeof reverseNumber(12345));

//task 2
// Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Note: Assume punctuation, numbers and symbols are not included in the passed string.
// “Webmaster” -> “abeemrstw”

function stringLettersInAlphabeticalOrder(a) {
    var b = a.toLowerCase()

    return b.split("").sort().join("")
}

console.log(stringLettersInAlphabeticalOrder("Webmaster"));

//task 3
// Write a function to alphabetize words of a given string. Alphabetizing a string means
// rearranging the letters so they are sorted from A to Z.
// "Republic Of Serbia" -> "Rbceilpu Of Sabeir"

function alphabetizeWords(a) {
    var words = a.split(" ")
    var result1 = words[0].split("").sort().join("");
    var result2 = words[1].split("").sort().join("");
    var result3 = words[2].split("").sort().join("");
    var resultFinal = result1 + " " + result2 + " " + result3;

    return  resultFinal;
}

console.log(alphabetizeWords("Republic Of Serbia"));


function alphabetizeWordsInString(a) {
    var words = a.split(" ");

    for( var i = 0; i < words.length; i++) {
        words[i] = words[i].split("").sort().join("");
    }

    return words.join(" ");
}

console.log(alphabetizeWordsInString("Republic Of Serbia"))
console.log(alphabetizeWordsInString("Republic Of Serbia is the best country in the World"))

//task 4
// Write a function to split a string and convert it into an array of words.
// "John Snow"; -> [ "John", "Snow"; ]

function splitString(a) {

    return a.split(" ");
}

console.log(splitString("John Snow"));
console.log(splitString("John Snow Johnny Brave"));

//task 5
// Write a function to convert a string to its abbreviated form.
// "John Snow" -> "John S."

function abbreviateString(a) {
    var splitName = a.split(" ");
    if(splitName.length > 1) {
        return (splitName[0] + " " + splitName[1].charAt(0) + ".")
    }

    return splitName[0];
}

console.log(abbreviateString("John Snow"));

//task 6
// Write a function that adds string to the left or right of string, by replacing it’s characters.

function replaceCharacters(a, b, c) {
    var result = "";

    if(c == "l") {
        result = a.slice(0, a - b.length) + b;
        return result;
    }

    if(c == "r") {
        result = b + a.slice(0, a - b.length)
        return result;
    }
}

console.log(replaceCharacters("0000", "123", "l"));
console.log(replaceCharacters("00000000", "123", "r"));

//task 7

// Write a function to capitalize the first letter of a string and returns modified string.

function capitalizeFirstLetter(a) {
    return a.replace(a[0], a[0].toUpperCase());
}

console.log(capitalizeFirstLetter("js string exercises"));
console.log(capitalizeFirstLetter("javascript is great!"));

//task 8

// Write a function to hide email addresses to protect them from unauthorized users.

function hideEmailAddress(a) {

    var hide = a.split("@");
    console.log(hide);

    
    hide[0] = hide[0].substring(0, hide[0].length/2)+ "...";
    

    return hide.join("@");
}

console.log(hideEmailAddress("somerandomaddress@example.com"));


//task 9
// Write a program that accepts a string as input and swaps the case of each character. For
// example, if you input "The Quick Brown Fox", the output should be "tHE qUICK bROWN fOX".

function swapCaseOfCharacters(a = "") {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var result = "";

    for(var i = 0; i < a.length; i++) {
        if(a[i] == " ") {
            result += " ";
        }

        if(upper.includes(a[i])) {
            result += a[i].toLowerCase();
        }

        if(lower.includes(a[i])) {
            result += a[i].toUpperCase()
        }
    }

    return result;
}

console.log(swapCaseOfCharacters("The Quick Brown Fox"));