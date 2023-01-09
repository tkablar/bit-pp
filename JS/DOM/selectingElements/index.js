
var second = document.getElementById("second")
console.log(second);

function changeBackgroundColor() {
    second.style.backgroundColor = "#cccccc"
}

changeBackgroundColor();

var listItem = document.getElementsByTagName("li");
var listItemTwo = document.querySelectorAll('li');
console.log(listItem)
console.log(listItemTwo)

function selectLiElements() {
    var listItemTwo = document.querySelectorAll('li');
    console.log(listItemTwo);
}

selectLiElements()

function changeLiClass() {
    var listItemTwo = document.querySelectorAll('li');
    var second = document.getElementById("second");


    for(var i = 0; i < listItemTwo.length; i++) {
        listItemTwo[i].classList.add("list");
        listItemTwo[i].style.backgroundColor = "#cccccc";
    } 
}

changeLiClass();





function lastUnorderedList() {
    var listItemThree = document.querySelector("#third").querySelectorAll("li");

    for(var i = 0; i < listItemThree.length; i++) {
        listItemThree[i].style.background = "#90ee90";
        listItemThree[i].style.cssText += "text-transform: uppercase;";
    }
}

lastUnorderedList();