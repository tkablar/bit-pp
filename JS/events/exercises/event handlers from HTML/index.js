function changeBgColor() {

var element = document.body;

element.classList.toggle("dark-mode");
   
}

var autoColor =  setInterval(function changeBgColor(){
    var element = document.body;

    element.classList.toggle("dark-mode");
}, 1000);


clearInterval(autoColor)

