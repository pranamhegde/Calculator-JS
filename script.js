



var numberOfButtons = document.querySelectorAll(".btn").length;

for( var i = 0; i < numberOfButtons; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click", function() {
        var display = document.getElementsByClassName("btn").value;
         document.querySelector("input").innerHTML = display;
      
    });
    
}


