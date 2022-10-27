//task 1

for(i=0;i<=15;i++) {
    if(i%2==0){
        console.log(i + " is even")
    } 
    else(
        console.log(i + " is odd")
        )
}

console.log()
//task2
sum=0
for(i=1; i<=1000; i++) {
    if(i%3==0 && i%5==0)
    { sum+=i

    }
}
console.log(sum)

console.log()
//task3

a=[2, 9, 7, 5, 11, 25, 61];
sum=0;
product=1;

for(i=0; i<a.length; i++) {
    sum+=a[i]; 
    product*=a[i];
}
console.log(" The sum of array elements is ", sum);
console.log(" The product of array elements is ", product);

console.log()
//task4

var x=["1", "A", "B", "c", "r", true, NaN, undefined];

var c=""
for(i=0; i<x.length; i++){
     c+=x[i]
} 
console.log(c)


console.log()
//task5
var a=[ 
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];

for(i=0; i<a.length; i++) {
    for(j=0; j<a[i].length; j++) {
        console.log(a[i][j])
    }
    console.log(a[i])
}

//na casu
for( var i=0; i<a.length; i++) {
    console.log(a[i])
    for(var j=0; j<a[i].length; j++) {
        console.log(a[i{j}])
    }
}

console.log()
//task6
//a=1
sum=0
for(i=0; i<=20; i++) {
    sum+=i*i;
}
console.log(sum);


console.log()
//task7

a=[80, 77, 88, 95, 68];
sum=0

for(i=0; i<a.length; i++) {
    sum+=a[i];  
}
avr=sum/a.length

if(avr<60) {
    console.log(avr + " Grade F")
} else if (avr<70) {
    console.log(avr + " Grade D")
} else if(avr<80) {
    console.log(avr + " Grade C")
} else if(avr<90) {
    console.log(avr + " Grade B")
} else {
    console.log(avr + " Grade A")
}

///na casu
var input=[
    ["David", 80],
    ["Marko", 77],
    ["Dany", 88],
    ["John", 95],
    ["Thomas", 68]
]
var sum=0;
var average=0;
for(var i=0; i< input.length; i++) {
    sum += input[i][1]
}

if(sum>0) {
    average = sum/input.length;
}

console.log(average);

if(average<60) {
    console.log("The grade is F");
} else if(average < 70) {
    console.log("The grade is D");
} else if(average < 80) {
    console.log("The grade is C");
} else if(average < 90) {
    console.log("The grade is B");
} else if(average < 100) {
    console.log("The grade is A")
}



console.log()
//task8
for(i=1; i<100; i++) {
    if(i%3==0 && i%5!=0) {
        console.log("Fizz", i)
    }
    if(i%3!=0 && i%5==0) {
        console.log("Buzz", i)
    }
    if(i%3==0  && i%5==0) {
        console.log("FizzBuzz", i)
    } else {
        console.log(i)
    }
}