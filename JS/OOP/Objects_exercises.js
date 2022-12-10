//task 1

// Create a function that takes an array of objects (groceries) which calculates the total
// price and returns it as a number. A grocery object has a product, a quantity and a price,
// for example:
// {
// "product": "Milk";,
// "quantity": 1,
// "price": 1.50
// }

var milk = {product: "Milk", quantity: 3, price: 1.50 }
var chocolate = {product: "chocolate", quantity: 1, price: 4.50}
var brocoli = {product: "brocoli", quantity: 1, price: 3}

function totalPrice(a) {
    var sum = 0;
    a.forEach((b) => {
        sum = sum + (b.quantity * b.price)
    })

    var result = sum

    return Number(result)
}

console.log(totalPrice([milk, chocolate, brocoli]))

//task 2

// You go to a jewelry shop and try to find the most expensive piece of jewelry. You write
// down the name of each piece of jewelry and its price. Create a function that gets the
// name of the piece of jewelry with the highest price and returns &quot;The most expensive
// one is the {name of jewelry piece}&quot;.
// Example:
// mostExpensive([{name:’DiamondEarings’, price: 980}, {name:’Gold watch’, price:250},
// …])
// - The most expensive one is the diamond Ring.

var diamondRing = {
    name: "Diamond ring",
    price: 1253
}

var goldNecklace = {
    name: "Gold necklace",
    price: 930
}

var silverBracelet = {
    name: "Silver bracelet",
    price: 560
}

function mostExpensive(a) {
    var max = 0;
    var temp = 0;
    var result = "";

    for(var i = 0; i < a.length; i++) {
        if(a[i].price > temp) {
            temp = a[i].price;
            max = temp;
            result += "The most expensive one is the" + a[i].name
        }
    }

    return result
}

console.log(mostExpensive([diamondRing, goldNecklace, silverBracelet]));



//task 3

// Given a word, create an object that stores the indexes of each letter in an array. Make
// sure the letters are the keys. Make sure the letters are symbols. Make sure the indexes
// are stored in an array and those arrays are values.
// Examples:
// mapLetters(&quot;dodo&quot;) ➞ { d: [0, 2], o: [1, 3] }
// mapLetters(&quot;froggy&quot;) ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
// mapLetters(&quot;grapes&quot;) ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }

function mapLetters(a) {
    var letter = "";
    var temp = ""
    var index = 0;
    var result = {};

    for(var i = 0; i < a.length; i++) {
        letter = a[i];
        temp = letter;
        console.log(letter);
        index = i;
        console.log(index);
            
    }
    return result;
}

    

console.log(mapLetters("dodo"));


//task 4

// And who cursed the most in the fight between you and your spouse? Given an object
// with three rounds, with nested objects as your scores per round, return a string of who
// cursed the most: If you, return &quot;ME!&quot; If your spouse, return &quot;SPOUSE!&quot; If a draw, return
// &quot;DRAW!&quot;
// Examples:
// determineWhoCursedTheMost([{me: 10, spouse: 5 }, { me: 5, spouse: 10 },
// { me: 0, spouse: 10, }]) ➞ &quot;DRAW!&quot;
// determineWhoCursedTheMost([{me: 40,spouse: 5}, {me: 9, spouse: 10}, { me: 9,
// spouse: 10}]) ➞ &quot;ME!&quot;
// determineWhoCursedTheMost([{ me: 10,spouse: 5 }, { me: 9, spouse: 44 }, { me: 10,
// spouse: 55}]) ➞ &quot;SPOUSE!&quot;

var first = {me: 5, spouse: 10}
var second = {me: 10, spouse: 15}
var third = {me: 20, spouse: 35}

function whoCursedTheMost(a) {
    var result = "";
    var countMe = 0;
    var countSpouse = 0;
    for(var i = 0; i < a.length; i++) {
        if(a[i].me > a[i].spouse) {
            countMe+= a[i].me
        } else {
            countSpouse+=a[i].spouse;
        }
    }

    if(countSpouse > countMe) {
        result = "SPOUSE!"
    } else if (countSpouse == countMe) {
        result = "DRAW!";
    } else {
        result = "ME!"
    }

    return result;
}

console.log(whoCursedTheMost([first, second, third]));

console.log(whoCursedTheMost([{me: 80, spouse: 5}, {me: 23, spouse: 15}, {me: 6, spouse: 15}]));

console.log(whoCursedTheMost([{me: 10, spouse: 5}, {me: 5, spouse: 10}, {me: 0, spouse: 10}]));

//task 5
// Create a function that converts color in RGB format to Hex format.
// Examples:
// rgbToHex({red: 0, green: 128, blue: 192}) ➞ "#0080c0";

var blue = {
    r: 67,
    g: 84,
    b: 90
}

function RGBToHex(a) {
    var r = a.r.toString(16);
    var g = a.g.toString(16);
    var b = a.b.toString(16);

    if(r.length == 1) {
        r = "0" + r;
    }
    if(g.length == 1) {
        g = "0" +g;
    }
    if(b.length == 1) {
        b = "0" + b;
    }

    return "#" + r + g + b;
}

console.log(RGBToHex(blue))
console.log(RGBToHex({r: 0, g: 128, b: 192}))