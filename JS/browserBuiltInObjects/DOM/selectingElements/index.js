
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

    // listItemTwo[0].classList.add("hello");
    // listItemTwo[1].classList.add("Hi")
    // second.classList.add("hi");

    for(var i = 0; i < listItemTwo.length; i++) {
        listItemTwo[i].classList.add("list");
        listItemTwo[i].style.backgroundColor = "#cccccc";
    } 
}

changeLiClass();

function lastUnorderedList() {
    
}