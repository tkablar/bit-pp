// while
var i=0;

while(i<10) {
    console.log(i);
    i++;
}

console.log()
//do while
var i=10;

do{
    i++; 
} while (i < 10);

console.log(i)

console.log()
// for loop
var punishment="";

for(var i=0; i<10; i++) {
    punishment += "I will never do this again\n";
}
console.log(punishment)

//nested for loop
var a="\n", b="*\t";
console.log(a, b);
console.log()

var res = '\n';
   for (var i = 0; i < 5; i++) {
       for (var j = 0; j < 5; j++) {
           res += '*\t';
       }
       res += '\n';
   }
console.log(res)


console.log()
// for-in loop
var a = ['a', 'b', 'c', 'x', 'y', 'z'];
var result = '\n';
for (var i in a) {
 result += 'index: ' + i + ', value: ' + a[i] + '\n';
}

console.log(result);
