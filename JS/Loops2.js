//task 1

var a=1;
var sum=0;

for(a=1; a<= 10; a++) {
    sum+=a;
}
console.log("Sum of natural numbers: ", sum);

console.log()
//task 2
var a=1;
var cube=a*a*a;
result=""

for(i=1; i<=10; i++) {
    cube=i*i*i
    console.log(i + " up to cube equals " + cube);
} 
    
//console.log("cube of the number ", a, " is: ", cube);

console.log()
//task 3
var a=6;
var fact=1
for(i=1; i<=a; i++) {
    fact*=i;
}
console.log("The factorial of "+ a + " is " + fact);

console.log()
console.log("Task 4")
//task 4
//Write a code to display the n terms of
//even natural number and their sum.
//Example:
//Input number of terms - 5. 
//Expected output: "The even numbers are 2, 4, 6, 8, 10".
var input=5;
var even=[];
var sum=0;
for(i=1; i<=input; i++) {
    even.push(i*2);
    sum+=i*2;
}
console.log("The even numbers are: " + even);
console.log("The sum of even numbers is: " + sum);



console.log()
//task 5
//5.Write a code to calculate the sum of digits in a number
//and show that sum on screen.
//Example: "Sum of digits in number 232 is 7".
var a="371";
var sum = 0;
console.log(a.length)

for (i = 0; i < a.length; i++) {
    sum += (+a[i]);
}

console.log("Sum of digits in number " + a + " is " + sum);

console.log()
console.log("Task 6")
//task 6
//Write a code to count all letters in a word
//and show that count on screen.
//Example: Given word is "Eclip542se".
//Result should be something like "There is 7 letters in this word".

var word="Eclip542se";
var sum=0;
for(i=0; i < word.length; i++) {
    sum+=1;
}
console.log("There is " + sum + " letters in this word");
console.log("There is " + word.length + " letters in this word");

console.log()
console.log("Task 7")
//task 7
//Write a code to find on which index in array
//is letter "C" and show that index on screen.
//Given array is: [1, 3, 32, $, g, h, t, s, c, 66, 23, h2].

var array=[1, 3, 32, "$" , "g", "h", "t", "s", "c", 66, 23, "h2"];

for(i=0; i<array.length; i++) {
    if(array[i]==="c") {
        console.log("The index of the letter \'c\' is: " + i);
    }
}




