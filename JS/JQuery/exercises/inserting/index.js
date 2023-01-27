$(document).ready(function() {
    console.log("Amazing Gallery");
    addImages()
});


function addImages() {
    $('body').append("<div></div>");
    $("div:first").addClass("container");
    $(".container").append("<div></div>");
    $(".container").append("<div></div>");
    $(".container").append("<div></div>");
    $(".container").append("<div></div>");
    $(".container").append("<div></div>");
    $(".container").append("<div></div>");
    $(".container").prepend("<h1>Amazing Gallery</h1>");
    $("h1").css({"color": "orange", "text-align": "center", "font-family": "Arial, Helvetica, sans-serif"});

    var nijedanVeciOd200 = true;

    $("div").each(function(index,element) {

        if($(element).is(".container")) {
            
        } else {
            var a = Math.floor(Math.random()*400)+100;
            // var b = 0;
            // console.log(a)

            var color = makeRandomColor();
            
            
            $(element).css({"width": `${a}px`, "height": `${a}px`, "background-color": `${color}`, "margin": "0px 0px", "display": "inline-block"});

            if(a < 200 && nijedanVeciOd200) {
                $(element).css({"border": "1px solid green"});
                // console.log(a);
            } else {
                nijedanVeciOd200 = false;
            }
        }
    })
    

}

function makeRandomColor() {
    var a = "#";

    for(var i = 0; i < 6; i++) {
        var b = Math.floor(Math.random()*16);
        if(b == 10) {
            b = "A";
        } 
        if(b == 11) {
            b = "B";
        }
        if(b == 12) {
            b = "C";
        }
        if(b == 13) {
            b = "D";
        }
        if(b == 14) {
            b = "E";
        }
        if(b == 15) {
            b = "F";
        }
        a+=b;
        
    }

    return a;

}

console.log(makeRandomColor())