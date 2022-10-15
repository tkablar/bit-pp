var d=4, f=0;
if(d>f) {
    console.log("d is grater than f")
} else if (f>d) { 
    console.log("f is grater than d")
}

//next slide
var a=3, b=4, c=9;
if(a%2==0) {
    console.log("even")
} else {
    console.log("odd")
}
if(b%2==0) {
    console.log("even")
} else {
    console.log("odd")
}
if(c%2==0) {
    console.log("even")
} else {
    console.log("odd")
}

//next
var d=12, e=15;
if(d%3==0 && d%5==0) {
    console.log(d)
}
if(e%3==0 && e%5==0) {
    console.log(e)
}

//next
var f=3 , g=-7 , h=2;
if(f*g*h<0) {
    console.log('the sign is -')
} else {
    console.log("the sign is +")
}

//next
var i=7, j=10;
if(typeof i=="number") {
    if(i%2==0) {
        console.log(i/2)
    } else{
        console.log("x")
    }
}
if(typeof j=="number") {
    if(j%2==0) {
        console.log(j/2)
    } else{
        console.log("x")
    }
}

console.log("pp")
//next
var a=-5, b=-2, c=-6, d=0, e=-1;
var najveci;
if(a>b) {
    najveci = a;
} else {
    najveci = b;
}

if(najveci < c) {
    najveci = c;
}

if (najveci < d) {
    najveci = d;
}

if(najveci < e) {
    najveci = e
}
console.log(najveci)

console.log()
//next
var a=0, b=-1, c=4;
if(a>b && a>c && b>c) {
    console.log(a,b,c)
}
if(b>a && b>c && a>c) {
    console.log(b,a,c)
}
if(c>a && c>b && a>b) {
    console.log(c,a,b)
}

if(a>b) {
    if(a>c) {
        if(b>c) {
            console.log(a, b, c)
        } else {
            console.log(a, c, b)
        }
    } else  {
        console.log(c, a, b)
    }
} else {
    if(b>c) {
        if(c>a) {
            console.log(b, c, a)
        } else {
            console.log(b, a, c)
        }
    } else {
        console.log(c, b, a)
    }
}