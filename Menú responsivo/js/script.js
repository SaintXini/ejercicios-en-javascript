window.onload = function(){
    document.getElementById("boton").onclick = function(){
        var miMenu = document.getElementById("miMenu");
        if(miMenu.className==="menu"){
            miMenu.className += " responsivo";
        } else {
            miMenu.className = "menu";
        }
    }
}