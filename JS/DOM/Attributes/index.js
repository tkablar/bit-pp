function validateForm() {
    var form = document.querySelector("form");
    var input = form.querySelectorAll("input");

    input.forEach ( function(element) {
        if(element.hasAttribute("required") && element.value == "") {
            element.style.borderColor = "red"
        }
    })

}

validateForm()