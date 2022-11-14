//task 1
var x=[3, 500, 12, 149, 53, 414, 1, 19];

function minNumberOfArrey(a) {
    var min=a[0]
    for(var i=0; i<a.length; i++) {
        if(a[i]<min) {
            min=a[i];
            ;
        }
    }
    return min;
}

console.log(minNumberOfArrey(x));

function maxNumberOfArrey(a) {
    var max=a[0];
    for(var i=0; i<a.length; i++) {
        if(a[i]>max) {
            max=a[i]
        }
    }
    return max
}

console.log(maxNumberOfArrey(x))

function switchNumberInArrey(a, b, c) {
    var b=maxNumberOfArrey(a);
    var c=minNumberOfArrey(a);
    var result=[];
    for(var i=0; i<a.length; i++) {
        if(a[i]!== b && a[i]!==c) {
            result.push(a[i]);
        }
        if(a[i]===b) {
            result.push(c);
        } 
        if(a[i]===c) {
            result.push(b);
        }
    }
    return result;
}

console.log(switchNumberInArrey(x));

console.log();
//task 2
var x=[3, 500, -10, 149, 53, 414, 1, 19];

function newArray(a) {
    var result=[];
    for(var i=0; i<a.length; i++) {
        
        if(a[i]<=0) {
            result.push(20);
        } else {
            result.push(a[i]/2 + 5)
        }
    }
    return result;
}

console.log(newArray(x))

console.log()
//task 3
var x=["Micahel", "Anna", "Frank", "Joe", "John", "David", "Mark", "Bill"];
var y=[50, 39, 63, 72, 99, 51, 83, 59];

function studentGrades(a, b) {
    var result="";
    for(var i=0; i<a.length; i++) {
        
        if(b[i]<=50) {
            result+=a[i] + " acquired " + b[i] + " points and failed to complete the exam. ";
        } else if(b[i]<=60) {
            result+=a[i] + " acquired " + b[i] + " points and earned 6. ";
        } else if(b[i]<=70) {
            result+=a[i] + " acquired " + b[i] + " points and earned 7. ";
        } else if(b[i]<=80) {
            result+=a[i] + " acquired " + b[i] + " points and earned 8. ";
        } else if(b[i]<=90) {
            result+=a[i] + " acquired " + b[i] + " points and earned 9. ";
        } else if(b[i]<=100) {
            result+=a[i] + " acquired " + b[i] + " points and earned 10. ";
        }         
            
    }
    
    return result;
}

console.log(studentGrades(x, y));

console.log();
//task 4

var x=[13, 11, 15, 5, 6, 1, 8, 12];

function sortAndMultiplie(a) {
    let temp;

    for(let i=0; i<a.length; i++) {
        for(let j=i+1; j<a.length; j++) {
            if(a[j]<a[i]) {
                temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }
        a[i] *= 2;
    }

    return a;
}

console.log(sortAndMultiplie(x))

console.log();
//task 5

var x=[13, 11, 15, 5, 6, 1, 8, 12];

function descendingOrder(a) {
    for(let i=0; i<a.length; i++) {
        for(let j=i+1; j<a.length; j++) {
            if(a[j]>a[i]) {
                temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }
    }

    return a;
}

console.log(descendingOrder(x))

console.log()
//task 6

function multipleEvenNumbers(a) {
    var result=0;
    var sum=0
    var sum2=0

    for(var i=1; i<=a; i++) {
        if(i%2==0) {
            sum+=i
        }
    }
    for(var j=1; j<=500; j++) {
        if(j%2!=0) {
            sum2+=j
        }
    }

    return result=(sum-sum2)*12.5;
}

console.log(multipleEvenNumbers(1000));

console.log()
//task 7
var x=["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"];

function newString(a, b) {
    var result="";
    var b="";
    for(var i=0; i<a.length; i++) {
            b=a[i];
            
        if(typeof b === "string") {
            
            if(b.length>1) {
                
                result+=b[0] + b[1];
            }
        }
       
    }

    return result;
}

console.log(newString(x));

console.log();
//task 8

var x="Belgrade Institute of Technology";

function reverseString(a) {
    var result="";
    
    for(var i=0; i<a.length; i++) {
            b=a.length-1-i;
            result+=a[b];

    }
   
    return result;
}

console.log(reverseString(x));

console.log();
//task 9
var x=[1, 2, 3, 4, 5, 6, 7]
var y=

function twoNumberCombination(a) {
    var result=[];
    
    
    for( var i=1; i<=a; i++ ) {
        for(var j=1; j<=a; j++) {
            if(i!=j) {
                result.push([i, j])
                
            }
        }
    }
    
    return result; 
}

var combinations=twoNumberCombination(7);

console.log(combinations);
console.log("There are " + combinations.length + " combinations");

console.log();
//task 10

function primeOrNot(a) {
    for (var i=2; i<a; i++) {
        if (a%i ===0) {
            return false;
        }
    }

    return true;
}

console.log(primeOrNot(17));
console.log(primeOrNot(15));

console.log();
//task 11
var x="eye";
var y="Geek";
var p="a nut for a jar of tuna";

function palindromeString(a) {
    var result=true;
   
    for(var i=0, j = a.length - 1; i<a.length; i++, j--) {  
        if (a[i] == " ") {
            i++
        }
        if (a[j] == " ") {
            j--
        }
            if(a[i]!=a[j]) {
                
                result=false;
            }
    }

    return result
}

console.log(palindromeString(x))
console.log(palindromeString(y))
console.log(palindromeString(p))


console.log();
//task 12

var x=192;
var y=42;
var z=81;
var t=9;

function greatesCommonDivisors(a, b) {
    let result=0;
    for(let i=1; i<=b; i++) {
        if(a%i==0 && b%i==0) {
            result=i
        }
    }
    return result
}

console.log(greatesCommonDivisors(x,y))
console.log(greatesCommonDivisors(z, t))