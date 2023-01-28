
$(document).ready(function() {
    $(document).on("click", function(event) {
        $("#player").css({
            "position": "absolute",
            "left": event.pageX-40,
            "top": event.pageY-40
        })

    });

    $("button").click(function(event) {
        $(document).off()
    })
});