//task 1
// Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

function duplicateElements(a = []) {
    var result = [];
    var tmp = 0;

    if( !a || a.length == 0) {
        return null;
    }

    for(var i = 0; i < a.length; i++) {
        tmp = a[i];
        result.push(a[i], tmp);

    }

    return result;
}

console.log(duplicateElements([2, 4, 7, 11, -2, 1]));

//task 2
// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

function removeDuplicates(a = []) {
    var result = [];

    if(!a || a.length == 0) {
        return null;
    }

    
    return a.filter((item, index) => a.indexOf(item) === index).sort();

}

var x = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

console.log(removeDuplicates(x))


//task 3
//a
// Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

function oddNumberOfElements(a=[]) {
    if(!a || a.length == 0) {
        return null;
    }

    if(a.length % 2 == 0) {
        return false
    }

    return true;
}

console.log(oddNumberOfElements([1, 2, 9, 2, 1]))
console.log(oddNumberOfElements([0, 1, 2, 3]))
console.log(oddNumberOfElements([0, 1, 2, 3, 10, 11, 25, 6]))

//b
//Write a function that counts the number of elements less than the middle
// element. If the given array has an even number of elements, print out an error
// message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

function lessThanMiddle(a = []) {
    if(a.length % 2 == 0) {
        return "Error: even number of elements!"
    }

    var middle = a[parseInt(a.length / 2)];
    var count = 0;

    for(var i = 0; i<a.length; i++) {
        if(middle > a[i]) {
            count++
        }
    }

    return count;
}

console.log(lessThanMiddle([-1, 8.1, 3, 6, 2.3, 44, 2.11]));
console.log(lessThanMiddle([0, 3, 9, 8, 7, 4, 1, 2, 6]));


//task 4
// Write a function that finds the smallest element of a given array. The function should
// return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: { minValue: -2, minLastIndex: 6 }

function smallestElementAndPosition(a = []) {
    var minValue = a[0];
    var minLastIndex = 0;
    var result = {};

    for(var i = 0; i < a.length; i++) {
        if(a[i] < minValue) {
            minValue = a[i];
            result.minValue = a[i];
            result.minLastIndex = a.lastIndexOf(minValue)
        }
    }

    return result;
}

console.log(smallestElementAndPosition([1, 4, -2, 11, 8, 1, -2, 3]));


//task 5

// a. Write a function that finds all the elements in a given array less than a given
// element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]

function lessThanGivenElement(a = [], b) {
    var result = [];

    for(var i = 0; i<a.length; i++) {
        if(a[i] < b) {
            result.push(a[i]);
        }
    }

    return result;
}

var x = [2, 3, 8, -2, 11, 4];
var y = 6;

console.log(lessThanGivenElement(x, y))

//b. Write a function that finds all the elements in a given array that start with the “pro”
// substring. The function should be case insensitive.
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]

var x = ["JavaScript", "Programming", "fun", "product"];
var y = "pro"

function findElementsWithPro(a = [], b) {
    var result = [];

    for(var i = 0; i < a.length; i++) {
        if(a[i].toLowerCase().includes(b)) {
           result.push(a[i])
        }
    }

    return result;
}

console.log(findElementsWithPro(x, y))

//c. Write a function that expects an array and a callback function that filters out
//some of the elements. Use functions defined in a) or b) to test it.




//task 6
//a
// a. Write a list (array) of products you usually buy in the supermarket. Write a price
// and name for each product. For example,
// [
// {name: ‘apples’, price: 100},
// {name: ‘milk’, price: 80},
// {name:’bananas’, price: 150}
// ]
// b. Write a function that calculates the total price of your shopping list.
// c. Write a function that calculates the average product price of your shopping list.
// Print this value with the precision of three decimals.
// d. Write a function that prints out the name of the most expensive product on your
// shopping list. Write the name in uppercase.

var x = [{name: "apples", price: 100}, 
    {name: "milk", price: 80}, 
    {name: "bananas", price: 150}
];

function totalPrice(a= []) {
    var result = 0;

    for(var i = 0; i < a.length; i++) {
        result += a[i].price
    }

    return result;
}

console.log(totalPrice(x));

function averageProductPrice(a=[]) {
    var result = 0;

    for(var i = 0; i < a.length; i++) {
        result += a[i].price / a.length
    }

    return parseFloat(result).toFixed(3);
}

console.log(averageProductPrice(x));

function mostExpensiveProduct(a = []) {
    var result = "";

    for(var i=0; i<a.length; i++) {
        var max = a[0].price;
        if(a[i].price > max) {
            max = a[i].price;
            result += a[i].name;
        }
    }

    return result.toUpperCase();
}

console.log(mostExpensiveProduct(x));

//task 7
