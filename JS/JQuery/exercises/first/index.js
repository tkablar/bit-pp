$(document).ready(function() {
    console.log("Hello World!");
    secondTask()
    
});


function secondTask() {
    $("li:last").addClass('active');
    $("li:first").css({'border-bottom': 'solid red'});
    $("#middle").css({"background-color": "green"})
}

$('li').each(function(index, element) {
    $(element).css({'text-transform': 'uppercase'});
})

