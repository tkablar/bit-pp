//task 
var a=0;

for(var a=0; a<=10; a++) {
    console.log(a*a);
}

console.log()
//task 1
for(var a=0; a<=15; a++) {
    if(a%2===1) {
        console.log(a, " is a odd number");
    } else{
        console.log(a, " is a even number");
    }
}

console.log()
//task 2
var sum=0;

for(var b=0; b<1000; b++)   {
    if(b%3===0 || b%5===0) {
        sum+=b;
    }
}
console.log(sum)

console.log()
//task 3
var array=[1, 2, 3, 4, 5, 6, 7];
sum=0, product=1;
for(i=0 ; i < array.length; i+=1) {
    sum+=array[i];
    product*=array[i];
}
console.log("sum: "+ sum + " product: " + product);

console.log()
//task 4 ***
var x=["1", "A", "B", "c", "r", true, NaN, undefined];
result=""
for(i=0; i< x.length; i+=1) {
    result+=x[i]
}
console.log(result);

console.log()
//task 5
var a=[
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];
result="";
for(i=0; i< a.length; i+=1) {
    result+=a[i]
}
console.log(result);

console.log()
//task 6
var a=0;
for(var x=0; x<=20; x++) {
    a+=(x*x);
}
console.log(a)

console.log()
//task 7
var bodovi=[["david", 80], ["marko", 77],["dany", 88],["john", 95],["thomas", 68]];
prosekocene=0

for(i=0; i<bodovi.length; i++) {
    prosekocene+=bodovi[i][1];
    var prosek=(prosekocene/bodovi.length);
}
console.log("prosek je: " + (prosekocene)/bodovi.length);

if(prosek<60) {
    console.log("Ocena: F");
}
else if(prosek<70) {
    console.log("ocena: D");
}
else if(prosek<80) {
    console.log("ocena: C");
}
else if(prosek<90) {
    console.log("ocena: B");
}
else if(prosek<100) {
    console.log("ocena: A");
}

console.log()
//task 8
for(a=0; a<=100; a++) {
    if(a%3==0 && a%5!=0) {
    console.log("Fizz");
    }
    else if(a%5==0 && a%3!=0) {
        console.log("Buzz");
        }
    else if(a%3==0 && a%5==0) {
        console.log("FizzBuzz")
    }
    else{
        console.log(a)
    }
}
