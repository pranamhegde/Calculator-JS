

document.querySelector("input").value = 0;

var numberOfButtons = document.querySelectorAll(".number").length;

for( var i = 0; i < numberOfButtons; i++){

    document.querySelectorAll(".number")[i].addEventListener("click", function() {
        // var display = document.getElementsByClassName("btn").value;
        //  document.querySelector(".input").innerHTML = "45"; //Incorrect as it updates only the string
        
        var calcNumber = this.value;
        parseInt(document.querySelector(".input"));
        document.querySelector(".input").value += parseInt(calcNumber);
       // alert(parseInt(document.querySelectorAll(".number")[0].value) + parseInt(document.querySelectorAll(".number")[1].value));
        
    });
    
}


    function onClickAC () {
        document.querySelector("input").value = 0;
        
    }

    var numberOfOperators = document.querySelectorAll(".operator").length;

    for(i = 0; i < numberOfOperators; i++)
    document.querySelectorAll(".operator")[i].addEventListener("click", function(){
        var operate;
        
        operate = this.value;
        alert(operate);
        switch (operate) {
            case '+':
                document.querySelector(".input").value += document.querySelectorAll(".number").value;
                break;

            case '-':
                document.querySelector(".input").value -= document.querySelectorAll(".number").value;
                break;

            case '*':
                document.querySelector(".input").value *= document.querySelectorAll(".number").value;
                break;

            case '/':
                document.querySelector(".input").value /= document.querySelectorAll(".number").value;
                break;
            case '%':
                document.querySelector(".input").value /= document.querySelectorAll(".number").value;
                document.querySelector(".input").value *= 100;
                break;
            
        
            default:
                console.log("Default");
                break;
        }
    });
