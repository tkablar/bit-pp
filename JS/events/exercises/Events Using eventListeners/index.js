var player = document.querySelector("#player");
var container = document.querySelector("#contentContainer");
var shouldMove = true;



function getClickPosition(e) {

    if(shouldMove) {

        var xPosition = e.clientX;
        var yPosition = e.clientY;

        player.style.marginLeft = (xPosition-40) + "px";
        player.style.marginTop = (yPosition-40) + "px";
    }

}   

function stopMoving() {
    
    shouldMove = !shouldMove;

}
