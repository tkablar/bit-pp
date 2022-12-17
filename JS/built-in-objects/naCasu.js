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

