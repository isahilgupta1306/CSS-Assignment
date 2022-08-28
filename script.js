
var card = document.getElementsByClassName("card");

card.addEventListener('click',triggerSnackBar());

function triggerSnackBar() {
    
    var x = document.getElementById("snackbar");
    
    x.className = "show";
  
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}



function triggerDialogBox() {
    var x = document.getElementById("dialog-box");
  x.className = "show";
}

function closeDialogBox(){
    var x = document.getElementById("dialog-box");
    x.className = x.className.replace("show", "");
}

