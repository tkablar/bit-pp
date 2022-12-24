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

//Write a function that in a given string replaces all the appearances of the string ‘JS’ with
// ‘**’.
// Input: “Programming in JS is super interesting!”
// Output: “Programming in ** is super interesting!”

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

//task 4
// Write a function that deletes a character from the given position in the string.
// Input: “Goodd morning!”, 3
// Output: “Good morning!”


function deleteACharacter(a, b) {
    var temp="";
    for(let i=0; i<a.length; i++) {
        if(i == b) {
            continue;
        } else {
            temp += a[i]
        }
    }
    return temp;
}

var x = "Goodd morning!";
var y = 3;

console.log(deleteACharacter(x, y));

//task 5
// Write a function that deletes every second element of the given array.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
// Output: [3, 1, 90, 23, 67]

var x = [3, 5, 1, 8, 90, -4, 23, 1, 67];

function deleteEverySecondEl(a) {
    var temp = [];
    for(let i = 0; i < a.length; i++) {
        if(i % 2 == 0 ) {
            temp.push(a[i])
        }
    }
    return temp;
}

console.log(deleteEverySecondEl(x));

//task 6
// Write a function that replaces the elements of the given array between two positions with
// their doubled values.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6
// Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]

var x = [3, 5, 1, 8, 90, -4, 23, 1, 67];
var y = 2;
var z = 6;

function replaceElements(a, b, c) {
    var temp = [];
    for(let i = 0 ; i < a.length; i++) {
        if(i < b || i > c) {
            temp.push(a[i])
        } else {
            temp.push(a[i] * 2)
        }
    }
    return temp;
}

console.log(replaceElements(x, y, z));

//task 7
// Write a function that checks if every element of the first array is contained in the second
// array. Be careful with repetitions!
// Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
// Output: true

var x = [3, 4, 1, 3];
var y = [8, 9, 3, 1, 11, 4, 3];

function checkElements(a, b ) {
    if(!b || b.length == 0 || !a || a.length == 0) {
        return false;
    }

    var result = [];
    for(let i = 0; i < a.length; i++) {
        if(b.includes(a[i])) {
            result.push(a[i]);
        }
    }
    console.log(result);

    return JSON.stringify(a) === JSON.stringify(result)
}

console.log(checkElements(x, y))


// function compareArrays(array1 = [], array2 = []) {
//     if (!array1 || array1.length == 0 || !array2 || array2.length == 0) {
//         return false;
//     }

//     // return array1.every(element => array2.includes(element));
//     var result = [];
//     for (var i = 0; i < array1.length; i++) {
//         if(array2.includes(array1[i])) {
//             result.push(array1[i])
//         }
//     }

//     console.log(result);

//     return JSON.stringify(array1) === JSON.stringify(result);
// }

// console.log(compareArrays([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]))

//task 8
// Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’.
// Input: [‘apple’, ‘tea’, ‘amazing’, ‘morning’, ‘JavaScript’]
// Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]

var x = ["apple", "tea", "amazing", "morning", "JavaScript"];
var y = "A";

function appearanceOfAa(a, b) {
    var count = 0;
    var result = [];
    for(let i = 0; i < a.length; i++) {
        a[i].toLowerCase();
        b.toLowerCase();
        for(let j = 0; j < a[i].length; j++) {
            var elem = a[i][j];
            if( elem == b) {
                count++
            }
        }

        if(result.length > 1) {
            var maxCount = 0;
            for(let z = 0; z < result.length; z++) {
                if(result[z][1] > maxCount) {
                    maxCount = result[z][1];
                }
            }

            if(maxCount <= count) {
                var newElement = [a[i], count];
                result = [newElement].concat(result);
            } else {
                result.push([a[i], count]);
            }
        } else {
            result.push([a[i], count])
        }
        
    }

    var sort = [];
    for(var i = 0; i < result.length; i++) {
        sort.push(result[i][0]);
    }

    return sort;
}

console.log(appearanceOfAa(x, y))
