var mario = document.getElementById("img-1");
var marioRun = document.getElementById("img-2");
var background = document.getElementById("bg");


function running(e) {
    if (e.keyCode == 39) {
        // right arrow
        mario.style.visibility = "hidden";
        marioRun.style.visibility = "visible";
        background.style.animation = "moveRight 0.3s linear infinite";
      }
    
    
}

function stop() {
    mario.style.visibility = "visible";
    marioRun.style.visibility = "hidden";
    background.style.animation = "none"
}





