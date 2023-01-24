function addMessage(){
    var element = document.getElementById('input');
    
    var newEle = document.createElement('p');

    var eleNod = document.createTextNode(element.value);

    newEle.appendChild(eleNod);

    var messageBlock = document.getElementById('first');

    messageBlock.appendChild(newEle);

    element.value = "";
}


function sendMessage() {
    
}