var heaven = [34, [], "bodacious", "barbacues", "begin", "whatever", "by", "battering", true, "bacon"];

result = "";

for(var i = 0; i<heaven.length; i++) {
    var element = heaven[i];
    if(element[0] == "b" ) {
        result += element + " "
    }
}

console.log(result);


var a=0;
var b=0;
while (a < 3) {
    a++;
    b += a;
    console.log(b)
}

var size=5;
var a=5;
var size=4;
for(var j=size; j >=0; j--) {
    console.log(a)

    a=a-2
}

var a=0;
for(a;a<5;a++);
console.log(a)