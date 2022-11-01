// task 1
x = 3, y = -7, z = 2;
if (x>0 && y>0 && z>0)  {
    alert('The sign is +');
}
else if(x<0 && y<0 && z<0) {
   console.log("The sign is -")
}
else if(x>0 && y<0 && z<0) {
    console.log("The sign is +")
}
else if(x<0 && y>0 && z<0) {
    console.log("THE SIGN IS +")
} else {
    console.log("the sign is -")
}

console.log()
//task2

a = -5, b = -2, c = -6, d = 0, e =-1;
if (a>b && a>c && a>d && a>e) {
    console.log(a);
}
else if (b>a && b>c && b>d && b>e) {
    console.log(b)
}
else if (c>a && c>b && c>d && c>e) {
    console.log(c)
}
else if (d>a && d>c && d>b && d>e) {
    console.log(d)
}
else{
    console.log(f)
}

// task 3

f = 0, g = -1, h = 4;
if (f>g && f>h) {
    if(g>h) {
        console.log(f+'','' + h + '', '' + g);
    }
    else{
        console.log(f+'', '' + h +'', '' + g);
    }
}
else if (g>f && g>h) {
    if (f>h) {
        console.log(g + '', '' + f + '', '' + h);
    }
    else{
        console.log(g + '', '' + h + '', '' + f);
    }
}
else if (h>f && h>g) {
    if (f>g) {
        console.log(h + '', '' + f + '', '' + g);
    }
    else{
        console.log(h+ '', '' + g +'', '' + f)
    }
}

console.log()
// task 4
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

console.log()
//task 5
l=9, p=18;
if(l>p) {
    console.log(l)
}
else if(p>l) {
    console.log(p)
}

console.log()
//task 6
var c=60, f=((9*c/5)+32);
console.log(c + '\u{2103}' + " is " + f + '\u{2109}');
f=140, c=((f-32)*5)/9;
console.log(f + '\u{2109}' + " is " + c + "\u{2103}")

console.log()
//task 7
var a=13, b=11, c=32;

if (b > a) {
    console.log((b - a) * 2);
} else {
    console.log(a - b);
}

if (c > a) {
    console.log((c - a) * 2);
} else {
    console.log(a - c);
}

console.log()
//task 8
a=12, b=5;
if(a==b) {
    console.log((a+b)*3)
} else {
    console.log(a+b)
}

c=8, d=8;
if(c==d) {
    console.log((c+d)*3)
} else {
    console.log(c+d)
}

console.log()
//task 9
a=5, b=54;
if(a==50 || a+b==50 || b==50) {
    console.log("true")
}

c=6, d=50;
if(c==50 || d==50 || c+d==50) {
    console.log("true")
}

e=40, f=10;
if(e==50 || f==50 || e+f==50) {
    console.log("true")
}

console.log()
//task 10
var a=13, b=34, c=256;
if(a>20 && a<100) {
    console.log("20 <> 100")
} else if(a>100 && a<400) {
    console.log("100 <> 400")
} else{
    console.log( "-" )
}

if(b>20 && b<100) {
    console.log("20 <> 100")
} else if(b>100 && b<400) {
    console.log("100 <> 400")
} else{
    console.log( "-" )
}

if(c>20 && c<100) {
    console.log("20 <> 100")
} else if(c>100 && c<400) {
    console.log("100 <> 400")
} else{
    console.log( "-" )
}


