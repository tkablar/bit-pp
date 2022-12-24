var str1 = String("1");
var str2 = new String("1");
console.log(str1);
console.log(str2);

var potato = new String("Potato");
var indexO = potato.indexOf("o");
console.log(indexO); //vraca prvi susret tog karaktera

var lastO = potato.lastIndexOf("o");
console.log(lastO);//vraca zadnji index

// -1 vrati ako nema tog karaktera


//razlike .substring i .slice
// https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring


//utorak 20.12.2022.

var obj = {};
Object.defineProperty(obj, "name", { value: "leonardo", writable: true, enumerable: false});
console.log(obj.name);

console.log(obj.hasOwnProperty("name"));
console.log(obj.hasOwnProperty("test"));

console.log(Object.isExtensible(obj));
obj.date = "today";
Object.preventExtensions(obj);
obj.date = "asdfg";
obj.test = "test";
console.log(obj.date)
console.log(obj.test)

var newObj = {
    date: "today"
}

Object.freeze(newObj);
console.log(Object.isFrozen(newObj));
console.log(Object.isSealed(newObj));
console.log(Object.isExtensible(newObj));

var a = 3.8451354;
var toFixed = a.toFixed(2);
var toPrecised = a.toPrecision(2);

console.log(toFixed);
console.log(toPrecised);



var array = new Array(1, 2, 3, 4, 5);
console.log(array);

var arrayB = new Array(5);
console.log(arrayB);

var push = array.push(7);
var pop = array.pop();

console.log(push);
console.log(pop);

var arrayC = new Array(5, 3, 18, 44, -1, 8);

var sorted = arrayC.sort(function(a,b) {
    return b - a;
})

console.log(sorted);
console.log(arrayC.sort());

var a = [3, 5, 1, 11, 7, "test"];
// var b = a.sort()
// console.log(b)

var a = [3, 5, 1, 11, 7, "test"];
var joinedArray = a.join(",")
console.log(joinedArray)

var a = [3, 5, 1, 11, 7, "test"];
var c = a.slice(1, 5);
console.log(c)
console.log(a)

var a = [3, 5, 1, 11, 7, "test"];
var b = a.splice(1, 5, 33, 22, 55 , 45);
console.log(b);
console.log(a);

// string

Boolean("");
Boolean(new String("")); 


var str = new String("Potato head");
var upper = str.toUpperCase();
var lower = str.toLowerCase();
console.log(str);
console.log(upper);
console.log(lower);

console.log(str.charAt(0));
console.log(str[0]);

var str = new String("Potato head");
var indexO = str.indexOf("O");
var indexo = str.indexOf("o", 3);
var lastIndex = str.lastIndexOf("o")
console.log(indexO);
console.log(indexo);
console.log(lastIndex);

var contains = str.includes("ea");
console.log(contains)

var str = new String("Potato head");
var sliced = str.slice(1, -1)
var substringed = str.substring(1, 0)
console.log(sliced);
console.log(substringed);

var str = new String("Potato head head");
console.log(str.split(" ")); //izbacuje taj uslov i deli na element
var splitted = str.split("a");
var joined = splitted.join("a")
console.log(splitted);
console.log(joined);

var str = new String("Potato head head");
var concat = str.concat("s");
console.log(str);
console.log(concat);

console.log(str.valueOf()); 

var str = new String("Potato head head");
var replaced = str.replace("a", "s");
console.log(replaced);

// https://stackoverflow.com/questions/18687530/using-match-and-the-difference-between-search


var random = 10 * Math.random().toFixed(1);
console.log(random);

var min = Math.min(1, 2, 3, 4, 5, 6, 7, -3);
console.log(min)

var pow = Math.pow(2, 10);
var root = Math.sqrt(144);
console.log(pow);
console.log(root);

//datum date

var now = new Date();
//now.getUTCDate //cuva vreme po grinicu

console.log(now)
now.setMonth(10);
console.log(now)
console.log(now.getDate(), now.getFullYear(), now.getHours(), now.getDay());
