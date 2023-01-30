$(document).ready(function() {
    $("body").append("<div></div>");
    $("div").addClass("first");
    $("body").append("<div></div>");
    $("div:last").addClass("second");

    $(".first").append("<img></img>");
    $(".first").append("<img></img>");
    $(".first").append("<img></img>");

    $(".second").append("<img></img>");
    $(".second").append("<img></img>");
    $(".second").append("<img></img>");

    $(".first").css({"width": "100%", "height": "600px"});
    $(".second").css({"width": "100%", "height": "600px"});

    $("img").each(function(index, element) {
        

        if($(element).is(".first") || $(element).is(".second")) {

        } else {
            $(element).css({"background-color": "green", "width": "33%", "height": "300px", "display": "inline-block"})
        }
    });

    $("img:first").addClass("selected");

  


    removeAddBorder();
})



function removeAddBorder() {

    $("img:first").removeClass("selected");
    
    $("div").eq(1).find("img").eq(1).addClass("selected");

    
}



