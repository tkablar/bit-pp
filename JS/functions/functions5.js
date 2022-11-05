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
            a[i]=20;
        } 
        if(a[i]>0) {
            result.push(a[i]/2 + 5)
        }
    }
    return result;
}

console.log(newArray(x))