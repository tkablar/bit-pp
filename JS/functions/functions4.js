//task 1
var x = [5, -4.2, 3, 7];
var y=[5. -4.2, 18, 7]
var e=3;

function elementInTheArray(a, b) {
    for(var i=0; i<a.length; i++) {
        if(a[i]==b) {
            return "yes";
        }
    }
    return "no";
}

console.log(elementInTheArray(x, e));
console.log(elementInTheArray(y, e));

console.log();
//task 2
var x=[-3, 11, 5, 3.4, -8]

function multipliePositive(a) {
    var result=[];
    for(var i=0; i<a.length; i++) {
              
        if(a[i]>0) {
            result.push(a[i]*2);
        } else {
            result.push(a[i]);
        }
    }
    return result;
}

console.log(multipliePositive(x));

console.log()
//task 3
var x=[4, 2, 2, -1, 6];

function minimumIndex(a) {
    var result=[];
    var minimum = a[0];
    var index = 0;
    for(var i=0; i<a.length; i++) {
        if(a[i]< minimum) {
            minimum = a[i];
            index = i;
        }
    }

    result.push(minimum);
    result.push(index);
    return result;
}

//console.log(minimumIndex(x));

console.log();
//task 4
var x=[4, 2, 2, -1, 6];

function secondSmallest(a) {
    var najmanji = minimumIndex(a)[0]
    var konacnoRes=a[0];
    for(var i=0; i<a.length; i++) {
        
        if(a[i] > najmanji && a[i]<konacnoRes) {
            konacnoRes=a[i];
        }
    }
    return konacnoRes;
}

console.log(secondSmallest(x));

console.log()
//task 5
var x=[3, 11, -5, -3, 2]

function sumPositive(a) {
    var result=0;
    for(var i=0; i<a.length; i++) {
        if(a[i]>0) {
            result+=a[i]
        }
    }
    return result
}

console.log(sumPositive(x));

console.log()
//task 6
x=[2, 4, -2, 7, -2, 4, 2];
y= [3, 4, 12, 8]

function symmetricOrNot(a) {
    var zadnji=a.length-1
    var result="symmetric"
    for(var i=0; i<a.length; i++) {
        if(a[i] !== a[zadnji - i]) {
            result="not symmetric"
        } 
    }
    return "The array is " + result
}

console.log(symmetricOrNot(x))
console.log(symmetricOrNot(y))

console.log()
//task 7
var x=[4, 5, 6, 2];
var y=[3, 8, 11, 9];

function intertwineArrays(a, b) {
    var result=[];
    for(var i=0; i<a.length; i++) {
        result.push(a[i]);
        result.push(b[i]);   
    }
    return result
}

console.log(intertwineArrays(x, y));

console.log()
//task 8

var x=[4, 5, 6, 2];
var y=[3, 8, 11, 9];

function concatArrays(a, b) {
    var result=[];
    for(var i=0; i<a.length; i++) {
        result=a.concat(b)
    }
    return result
}

console.log(concatArrays(x, y));

console.log();
//task 9
var e=2;
var x=[4, 6, 2, 8, 2, 2];

function deleteElement(a, b) {
    var result=[];
    for(var i=0; i<a.length; i++) {
        if(a[i]!==b) {
            result.push(a[i])
        }
    }
    return result
}

console.log(deleteElement(x, e));
console.log(deleteElement([6, 2, 8, 6, 7, 7], 7));

console.log()
//task 10
var e=78;
var p=3;
var x=[2, -2, 33, 12, 5, 8];

function insertNumber(a, b, c) {
    var result = [];
   for(var i = 0; i<= a.length; i++) {
    if (i == c) {
        result[i]=b;
    } else if (i< c) {
        result [i]=a[i];
    } else {
        result[i] = a[(i-1)]
    }
   }

   return result;
}

console.log(insertNumber(x, e, p))

//drugo resenje
var e=78;
var p=3;
var x=[2, -2, 33, 12, 5, 8];

function insertNumberA(a, b, c) {
    var result=[];
    var newArray=a.splice(c);
    a.push(b);

    return a.concat(newArray);
}

console.log(insertNumberA(x, e, p))