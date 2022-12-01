//task 1
// Write a function named tellFortune that:
//  takes 4 arguments: number of children, partner&#39;s name, geographic location, job title.
//  outputs your fortune to the screen like so: &quot;You will be a X in Y, and married to Z with N kids.&quot;
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(n, z, y, x) {
    console.log("You will be a " + x + " in " + y + ", and married to " + z + " with " + n + " kids.")
}

tellFortune(3, "Mike", "New York", "Manager" )
tellFortune(4, "Ike", "Tokio", "CEO" )
tellFortune(1, "John", "London", "Profesor" )

//task 2
// Write a function named calculateDogAge that:
//  takes 1 argument: your puppy&#39;s age.
//  calculates your dog&#39;s age based on the conversion rate of 1 human year to 7 dog years.
//  outputs the result to the screen like so: &quot;Your doggie is NN years old in dog years!&quot;
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog
// years.

function calculateDogAge(a) {
    let result=a*7;
    console.log("Your doggie is " + result + " years old in dog years!");
}

calculateDogAge(4);
calculateDogAge(2);
calculateDogAge(7);

//task 5
// Create a function that validates a password to conform to the following rules:
//  Length between 6 and 24 characters,
//  At least one uppercase letter (A-Z).
//  At least one lowercase letter (a-z).
//  At least one digit (0-9).
//  Maximum of 2 repeated characters (“aa” is OK, “aaa” is NOT).
//  Supported special characters: ! @ # $ % ^ &amp; * ( ) + = _ - { } [ ] : ; &quot; &#39; ? &lt; &gt; , .
//  Examples: validatePassword(&quot;P1zz@&quot;) ➞ false // Too short.
//  validatePassword(&quot;iLoveYou&quot;) ➞ false // Missing a number.
//  validatePassword(&quot;Fhg93@&quot;) ➞ true // OK!








//task 6
// Create a function that finds how many prime numbers there are, up to the given integer.
// Examples: primeNumbers(10) ➞ 4 // 2, 3, 5 and 7
// primeNumbers(20) ➞ 8 // 2, 3, 5, 7, 11, 13, 17 and 19
// primeNumbers(30) ➞ 10 // 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29









//task 7
// Create a function that returns an array that expands by 1 from 1 to the value of the input, and then
// reduces back to 1. Items in the arrays will be the same as the length of the arrays.

// Examples:
// diamondArrays(1) ➞ [1],
// diamondArrays(2) ➞ [1, 2, 2, 1]
// diamondArrays(5) ➞ [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1]

function fillArray(result, i) {
    for(let j=1; j<=i; j++) {
        result.push(i)
    }

}

function diamondArrays(a) {
    let result = [];

    for(let i=1; i<=a; i++) {
        fillArray(result, i);
    }

    for(var i = a - 1; i>= 1; i--) {
        fillArray(result, i);
    }

    return result;
}

console.log(diamondArrays(5))
