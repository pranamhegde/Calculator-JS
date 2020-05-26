

document.querySelector("input").value = 0;

var numberOfButtons = document.querySelectorAll(".number").length;
var numValue;// a global variable to carry the value of number clicked

for( var i = 0; i < numberOfButtons; i++){

    document.querySelectorAll(".number")[i].addEventListener("click", function() {
        // var display = document.getElementsByClassName("btn").value;
        //  document.querySelector(".input").innerHTML = "45"; //Incorrect as it updates only the string
        
        var calcNumber = this.value;
        parseInt(document.querySelector(".input"));
        document.querySelector(".input").value += parseInt(calcNumber);
       // alert(parseInt(document.querySelectorAll(".number")[0].value) + parseInt(document.querySelectorAll(".number")[1].value));
        numValue = calcNumber;
    });
    
}


    function onClickAC () {
        document.querySelector("input").value = 0;
        
    }

    var numberOfOperators = document.querySelectorAll(".operator").length;

    for(i = 0; i < numberOfOperators; i++)
    document.querySelectorAll(".operator")[i].addEventListener("click", function(num1, num2, operate ){

        operate = this.value;
        num1 = document.querySelector(".input").value;
        num2 = numValue;
        alert(num1);
        alert(num2);
        var result;
        
        switch (operate) {
            case '+':
               result = parseInt(num1) + parseInt(num2);
               document.querySelector(".input") = result;
                break;

            case '-':
                result = parseInt(num1) - parseInt(num2);
                document.querySelector(".input") = result;
                break;

            case '*':
                result = parseInt(num1) * parseInt(num2);
                document.querySelector(".input") = result;
                break;

            case '/':
                result = parseInt(num1) / parseInt(num2);
                document.querySelector(".input") = result;
                break;
            case '%':
                result = parseInt(num1) / parseInt(num2);
                result *= 100;
                document.querySelector(".input") = result;
                break;
            
        
            default:
                console.log("Default");
                break;
        }
    });
