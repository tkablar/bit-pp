function selectLiClass() {
    // var second = document.querySelector("#second");
    var liClassActive = document.querySelectorAll("li.active")[0];

    liClassActive.classList.remove("active");
    
    // var first = second.previousElementSibling;
    // first.firstElementChild.firstElementChild.classList.add("active");

    var first = liClassActive.parentElement.parentElement.previousElementSibling;
    first.firstElementChild.firstElementChild.classList.add("active");
}

selectLiClass()