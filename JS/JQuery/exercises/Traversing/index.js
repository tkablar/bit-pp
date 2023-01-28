$(document).ready(function() {
    $("body").append("<div></div>");
    $("div").addClass("first");
    $("body").append("<div></div>");
    $("div:last").addClass("second");

    $(".first").append("<div></div>");
    $(".first").append("<div></div>");
    $(".first").append("<div></div>");

    $(".second").append("<div></div>");
    $(".second").append("<div></div>");
    $(".second").append("<div></div>");

    $(".first").css({"width": "100%", "height": "600px"});
    $(".second").css({"width": "100%", "height": "600px"});

    $("div").each(function(index, element) {
        

        if($(element).is(".first") || $(element).is(".second")) {

        } else {
            $(element).css({"background-color": "green", "width": "33%", "height": "300px", "display": "inline-block"})
        }
    });

    $("div.first div:first").addClass("selected");

    $(".selected").css({"border": "1px solid red"});

    
})