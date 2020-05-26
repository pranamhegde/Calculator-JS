

document.querySelector("input").value = 0;

var numberOfButtons = document.querySelectorAll(".number").length;

for( var i = 0; i < numberOfButtons; i++){
    document.querySelectorAll(".number")[i].addEventListener("click", function() {
        // var display = document.getElementsByClassName("btn").value;
        //  document.querySelector(".input").innerHTML = "45"; //Incorrect as ot updates only the string
        document.querySelector("input").value +=  document.querySelector(".number").value;
        
    
}

    function onClickAC () {
        document.querySelector("input").value = 0;
    }
