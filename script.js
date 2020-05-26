

document.querySelector("input").value = 0;

var numberOfButtons = document.querySelectorAll(".number").length;

for( var i = 0; i < numberOfButtons; i++){
    document.querySelectorAll(".number")[i].addEventListener("click", function() {
        // var display = document.getElementsByClassName("btn").value;
        //  document.querySelector(".input").innerHTML = "45"; //Incorrect as ot updates only the string
        var calcNumber = document.querySelector(".number").value;
        document.querySelector(".input").value = parseInt(document.querySelector(".input").value);
        document.querySelector(".input").value += parseInt(calcNumber);
        alert(parseInt(document.querySelectorAll(".number")[0].value) + parseInt(document.querySelectorAll(".number")[1].value));
    });
    
}

    function onClickAC () {
        document.querySelector("input").value = 0;
    }

    document.querySelectorAll(".operator").addEventListener("click", function(){
        var operate;

        switch (operate) {
            case '+':
                document.querySelector(".input") += document.querySelector(".number").value;
                break;

            case '-':
                document.querySelector(".input") -= document.querySelector(".number").value;
                break;

            case '*':
                document.querySelector(".input") *= document.querySelector(".number").value;
                break;

            case '/':
                document.querySelector(".input") /= document.querySelector(".number").value;
                break;
            
        
            default:
                console.log("Default");
                break;
        }
    });
