var image = document.getElementsByTagName("img");
var first = document.getElementsByClassName("first");

console.log(image)

for(var i = 0; i < image.length; i++) {
    image[i].addEventListener("click", e => {
        console.log(e.target);
        console.log(e.target.offsetWidth != "300");
        // e.target.style.border = "1px solid red";
        console.log(e.target.offsetWidth);
        if(e.target.offsetWidth == "300") {
            e.target.style.border = "1px solid red";
        } else {
            e.stopPropagation()
        }          
    })
}



