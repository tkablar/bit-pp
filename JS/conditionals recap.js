//task 1
var a=3, b=4, c=5;
if(a==b && b==C && a==c) {
    console.log("equilateral triangle")
}
if(a==b && c!=b && c!=a) {
    console.log("isosceles triangle")
}
if(a!=b && a!=c && c==b) {
    console.log("isosceles triangle")
}
if(a==c && a!=b && c!=b) {
    console.log("isosceles triangle")
}
if(a!=b && a!=c && b!=c) {
    console.log("scalene triangle")
}

console.log()
//task 2
var a=5, b=3;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

console.log()
//task 3
var a=85; b=96;
if(a>=91 && a<=100) {
    console.log("Grade A")
}
if(a>=81 && a<=90) {
    console.log("Grade B")
}
if(a>=71 && a<=80) {
    console.log("Grade C")
}
if(a>=61 && a<=70) {
    console.log("Grade D")
}
if(a>=51 && a<=60) {
    console.log("Grade E")
}


if(b>=91 && b<=100) {
    console.log("Grade A")
}
if(b>=81 && b<=90) {
    console.log("Grade B")
}
if(b>=71 && b<=80) {
    console.log("Grade C")
}
if(b>=61 && b<=70) {
    console.log("Grade D")
}
if(b>=51 && b<=60) {
    console.log("Grade E")
}

console.log()
//task 4
var a=9, b="cat", c="sheep";
if(a>=2) {
    console.log(a + b + "s")
} else{
    console.log(a + b)
}

//fali resenje za collective noun sheep
if(a>=2) {
    console.log("herd of " + a +" " + c)
} else{
    console.log("a " + a + c)
}

console.log()
//task 5
a=33, b=13, c=18;
if(a>=c) {
    console.log("You are old enough to drive")
} else {
    console.log("You have to wait for " + (c-a) + " years")
}

if(b>=c) {
    console.log("You are old enough to drive")
} else {
    console.log("You have to wait for " + (c-b) + " years")
}

console.log()
//task 6
a=33, d=55;
if(a==d) {
    console.log("You are the same age")
}
if(a<=d) {
    console.log("You are "+ (d-a) +" years younger")
}

console.log()
//task 7
a="german shepard", b="bulldog", c="terrier", d="hound", e="malmute", f="bulldog";
if(f==a) {
    console.log("This is german shepard called Neo")
}
if(f==b) {
    console.log("This is bulldog called Neo")
}
if(f==c) {
    console.log("this is terrier called Neo")
}
if(f==d) {
    console.log("this is hound called Neo")
}
if(f==e) {
    console.log("This is malmute called Neo")
}
if(f!=a || f!=b && f!=c && f!=d && f!=e) {
    console.log("This is a mixed breed")
}

//shorter code same result
if (f == a || f == b || f == c || f == d || f == e) {
    console.log("This is a "+ f + " called Neo")
} else {
    console.log("This is a mixed breed")
}
