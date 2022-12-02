//task 1
var e=3, a=[5, -4.2, 3, 7], i=0;
c="no"
for(i=0;i<a.length;i++) {
    if(a[i]===e) 
    c="yes"
} 

console.log(c)

var e=3, a=[5, -4.2, 18, 7];
c="no";

for(i=0; i<a.length; i++) {
    if(a[i]===e)
    c="yes";
}

console.log(c)


console.log()
//task 2
a=[-3, 11, 5, 3.4, -8];
for(i=0; i<a.length; i++) {
    if(a[i]>=0)
    a[i]*=2;
}
console.log(a)

console.log()
//task3
var array=[4, 2, 2, -1, 6];
var index = 0;
var minimum=array[index];

for(var i=1; i<array.length; i++) {
    if(array[i] < minimum) {
        minimum = array[i];
        index = i
    }
}

console.log(minimum, index)
console.log(index)

console.log()
//task4
var minimum2 = array[0]
for(i=1; i<array.length; i++) {
    if(array[i] < minimum2 && array[i] !== minimum) {
        minimum2=array[i]
    }
}
console.log(minimum2)

console.log()
//task5
var a=[3, 11, -5, -3, 2];
var sum=0;
for(i=0; i<a.length; i++) {
    if(a[i]>=0) {
        sum+=a[i]
    }
}
console.log(sum);

console.log()
//task 6
var array=[2, 4, -2, 7, -2, 4, 2];
var symmetric = "symmetric.";
var lastIndex = array.length - 1;

for(i=0; i<array.length; i++) {
    if (array[i] !== array[lastIndex - i]) {
        symmetric = "not symmetric."
    }
}

console.log("This array is " + symmetric);

var array=[3, 4, 12, 8];
var symmetric = "symmetric.";
var lastIndex = array.length - 1;

for(i=0; i<array.length; i++) {
    if (array[i] !== array[lastIndex - i]) {
        symmetric = "not symmetric."
    }
}

console.log("This array is " + symmetric);

console.log()
//task7
var b=[4, 5, 6, 2];
var c=[3, 8, 11, 9];
var d=[]

for(i=0; i<b.length; i++) {
    d.push(b[i])
    d.push(c[i])
}
console.log(d)

//na casu




console.log()
//task8
var array1=[4, 5, 6, 2];
var array2=[3, 8, 11, 9];

var array3=array1.concat(array2)
console.log(array3)

console.log();
//task9
var e=2;
var a=[4, 6, 2, 8, 2, 2];

var newA=[];

for(var i=0; i < a.length; i++) {
    if(a[i] !=e) {
        newA.push(a[i]);
    }
}
console.log(newA);

console.log();
//task10
var e=78
var p=3
var a=[2, -2, 33, 12, 5, 8];
var newN=[];

    if(p > a.length) {
        console.log("Erorr")
    } else {
        
        for(i = 0; i < a.length; i++) {
            if(i === p) {
                newN.push(e)
            }
            newN.push(a[i]);
        }
    }

console.log(newN);