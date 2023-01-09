// function textAlert() {
//     var textFromLi = document.querySelector("#portfolio").textContent;

//     alert(textFromLi);
// }

// textAlert()


function lastElement(text) {
    var lastElement = document.querySelector("#list").lastElementChild;

    lastElement.textContent = text;
}

lastElement("Is this thing working");

