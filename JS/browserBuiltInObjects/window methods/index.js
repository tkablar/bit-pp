function greeting() {
    alert("Welcome to My Page!");
}

greeting()

function question() {
    var today = prompt("How are you today?");

    

    // confirm("We will submit this answer now!" + " " + today)

    if( confirm("We will submit this answer now!" + " " + today) == true) {
        alert("Successful!")
    }
    
}

question()
