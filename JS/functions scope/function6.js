//task 1
//Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
// E, I, O, and U.

var x="Neki random String uIAhjkhuU";

function findVOwels(a) {
    var vowelList="aeiouAEIOU"
    var result=0;
    for(char of a) {
        for(vowel of vowelList) {
            if(char === vowel ) {
                result++
            }
        }
        
    }
    return result
}

console.log(findVOwels(x));

console.log();
//task 2
var x=["a", "b", "c"];
var z=[1, 2, 3];

function combineArray(a, b) {
    let result=[];
    for(let i=0; i<a.length; i++) {
        result.push(a[i], b[i])
    }
    return result
}

console.log(combineArray(x, z));


console.log()
//task 3
var x=[1, 2, 3, 4, 5, 6];

function rotateList(a, b) {
    let result1=[];
    let result2=[];
    
    for(let i = 0; i<a.length; i++) {
        if(i<b) {
            result1.push(a[i]);
            
        } else {
            result2.push(a[i]);
            
        }
    }

    for(let j=0; j<result1.length; j++) {

        result2.push(result1[j])
    } 

    return result2
}

console.log(rotateList(x, 2))

console.log();
//task 4
//Write a function that takes a number and returns array of its digits.

var x=1234;
var y=58963214;

function numberToDigitArray(a) {
    let result=[];
    let f=a+""
    for(let i=0; i<f.length; i++) {
        result.push(+f[i])
    }
    return result
}

console.log(numberToDigitArray(x));
console.log(numberToDigitArray(y));

console.log()
//task 5
//Write a program that prints a multiplication table for numbers up to 12.
let a = 12;
function multiplicationTable(a) {
    let firstRow = "";
    for (let i = 0; i <= a; i++) {
        if (i === 0) {
            firstRow += "|\tx\t|";
        } else {
            firstRow += "\t" + i + "\t|";
        }
    }
    console.log(firstRow);

    for (let i = 1; i <= a; i++) {
        let row = "";
        for (let j = 1; j <= a; j++) {
            if (j === 1) {
                row += "|\t" + i + "\t|";
            }
            row += "\t" + i * j + "\t|";
        }
        console.log(row);
    }
}

multiplicationTable(a)

console.log();
//task 6\

function convertToFahrenheit(a) {
    let fahrenheit=a*9/5+32;
    return a + " Celsius is " + fahrenheit + " in Fahrenheit";
}

console.log(convertToFahrenheit(15));

console.log();
//task 7
var x=[12, 5, undefined, 55, NaN, 3, 15, "L", Infinity, "as", 654];

function maxElementNumber(a) {
    let result=[];
    let max=a[0]
    for(let i=0; i<a.length; i++ ) {
        if (typeof a[i] === "number" && a[i] !== NaN && a[i] !== Infinity && a[i] > max) {
            max=a[i]
        }
    }
    return max
}

console.log(maxElementNumber(x));

console.log();
//task 8

var x=[15, 7, 1, 2, 8, 10, 11, 13, 20, 5];

function maxAndMinElement(a) {
    let max=a[0];
    let min=a[0];
    let result=[];
    for(let i=0; i<a.length; i++) {
        if(a[i]>max) {
            max=a[i];
        }
        if(a[i]<min) {
            min=a[i]
        }
        
    }
    result.push(max, min)
    return result
}

console.log(maxAndMinElement(x));

console.log();
//task 9
//Write a function to find the median element of array.

var x=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var y=[0, 5, 6, 10, 77, NaN, 9, 10, 11];

function medianElement(a) {
    let result=[];
    let middleIndex=0;

    if (a.length%2 === 1) {
        middleIndex = (a.length - 1)/2;
        result.push(a[middleIndex]);
    } else {
        middleIndex = a.length/2 - 1;
        let twoMiddle = (a[middleIndex] + a[middleIndex + 1]) / 2;
        result.push(twoMiddle)
    }

    return result
}

console.log(medianElement(x))
console.log(medianElement(y))

console.log();
//task 10
//Write a function to find the element that occurs most frequently.

var x=[7, 7, 1, 2, 45, 1, 9, 7, 1, 17, 22, 1];

function mostFrequentElement(a) {
    let maxcount=0;
    let elementMaxFreq;
    for(let i = 0; i<a.length; i++) {
        let count=0;
        for(let j=0; j<a.length; j++) {
            if(a[i] == a[j]) {
                count++
            }
        }
        if (count>maxcount) {
            maxcount=count;
            elementMaxFreq=a[i]
        }
    }
    
    return elementMaxFreq
}

console.log(mostFrequentElement(x))

console.log();
//task 11

var x=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var z=[1, 2, 3, 4, 5, 6, 7, 8, 9];
var y=[];

function returnElements(a) {
    let result=[];
        
        if(a.length%2===0) {
            result.push(a[0], a[a.length-1])
        }
        if(a.length%2!==0) {
            
            result.push(a[0], a[(a.length-1)/2], a[a.length-1])
        } 
        if(a.length===0) {
            return a
        }
         
    
    return result
}

console.log(returnElements(x))
console.log(returnElements(z))
console.log(returnElements(y))

//task 12
//Write a function to find the average of N elements.
//Make the function flexible to receive
//dynamic number or parameters.


function averageOfElements(...a) {
    let average=0;
    let sum=0;
    
    for(let i=0; i<a.length; i++) {
        sum+=a[i];
    }
    average=sum/a.length;

    return average;
}

console.log(averageOfElements(4, 6, 7, 8, 9));
console.log(averageOfElements(10, 20, 40));

//task 13
//Write a function to find all the numbers greater than the average.


function greaterThanAverage(...a) {
    let result=[];
    let averageNumber=averageOfElements(...a);

    for(let i=0; i<a.length; i++) {
        if(a[i]> averageNumber) {
            result.push(a[i]);
        }
    }

    return result;
}

console.log(greaterThanAverage(4, 6, 7, 8, 9));
console.log(greaterThanAverage(2, 4, 6, 8, 10));

//task 14
//The body mass index (BMI) is the ratio of the weight of a person
//(in kilograms) to the square of the height (in meters). Write a
//function that takes two parameters, weight and height, computes
//the BMI, and prints the corresponding BMI category.

function bodyMassIndex(a, b) {
    let result="";

    let BMI=0;


    squareOfHeight=b*b;

    BMI=a/squareOfHeight;

    if(BMI < 15) {
        result = "BMI of this person is " + BMI + ". Starvation";
    }
    if(BMI>15 && BMI <17.5) {
        result = "BMI of this person is " + BMI + ". Anorexic";
    }
    if(BMI>17.5 && BMI <18.5) {
        result = "BMI of this person is " + BMI + ". Underweight";
    }
    if(BMI>=18.5 && BMI <25) {
        result = "BMI of this person is " + BMI + ". Ideal";
    }
    if(BMI>=25 && BMI <30) {
        result = "BMI of this person is " + BMI + ". Overweight";
    }
    if(BMI>=30 && BMI <40) {
        result = "BMI of this person is " + BMI + ". Obese";
    }
    if(BMI>=40) {
        result = "BMI of this person is " + BMI + ". Morbidly obese";
    }

    return result;
}

console.log(bodyMassIndex(60, 1.7))

//task 15
//15. Write a function that takes a list of strings and prints them,
//one per line, in a rectangular frame.
// *********
// * Hello *
// * World *
// * in    *
// * a     *    
// * frame *
// *********

var x=[ "Hello", "World", "in", "a", "frame"];

function printFulRow(a) {
    let result="****";

    for(let i=0; i<a; i++) {
        result+="*";
    }

    console.log(result);
}

function printFirstAndLast(a, b) {
    let result = "* " + a;
    for (let i = a.length; i < b; i++) {
        result += " ";
    }
    result += " *";

    console.log(result);
}

function getLongestWordLength(a) {
    let longest=a[0].length;

    for(let i=0; i<a.length; i++ ) {
        if(a[i].length>longest) {
            longest=a[i].length;
        }
    }

    return longest;
}

function textWithFrame(a) {
    let longest = getLongestWordLength(a);
    printFulRow(longest);
    for(let i = 0; i < a.length; i++) {
        printFirstAndLast(a[i], longest);
    }
    printFulRow(longest);
}

textWithFrame(x);