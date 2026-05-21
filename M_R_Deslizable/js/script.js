window.onload = function() {
    document.getElementById("abre").onclick = function() {
        document.getElementById("miMenu").style.width = "250px";
    }
    document.getElementById("cerraMenu").onclick = function(){
        document.getElementById("miMenu").style.width = "0";
    }
}