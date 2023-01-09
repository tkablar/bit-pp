function dropDownMenu(a, element){
    var body =  document.documentElement.children[1];
        body.appendChild(element);
  
    var select = document.createElement("select");
        element.appendChild(select);
  
    for(var i = 0; i < a.length; i++){
        var option =  document.createElement('option');
        option.textContent = a[i];
        select.appendChild(option);
    }
}
  
dropDownMenu(["Home","Portfolio","About"],document.querySelector("div"));
dropDownMenu(["About", "Portfolio", "Home"], document.querySelector("body").lastChild )   