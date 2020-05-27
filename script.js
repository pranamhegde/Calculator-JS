

document.querySelector("input").value = 0;

var numberOfButtons = document.querySelectorAll(".number").length;
var numValue;// a global variable to carry the value of number clicked
var result = 0;



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
        result = 0;
        
    }

    var numberOfOperators = document.querySelectorAll(".operator").length;

    for(i = 0; i < numberOfOperators; i++)
    document.querySelectorAll(".operator")[i].addEventListener("click", function(num1,operate ){

        operate = this.value;
        num1 = document.querySelector(".input").value;
       
        // alert(num1);
        // alert(num2);
        
        
        switch (operate) {
            case '+':
               document.querySelector(".input").value = 0;
               result += parseInt(num1);
               alert(result);
               alert(num1);
              
               break;

            case '-':
                document.querySelector(".input").value = 0;
                result -= parseInt(num1);
                alert(result);
                alert(num1);
                break;

            case '*':
                document.querySelector(".input").value = 0;
                result *= parseInt(num1);
                alert(result);
                alert(num1);

            case '/':
                document.querySelector(".input").value = 0;
                result /= parseInt(num1);
                alert(result);
                alert(num1);
            case '%': 
                document.querySelector(".input").value = 0;
                result /= parseInt(num1); 
                result *= 100;
                alert(result);
                alert(num1);
                break;
            
            case '=':
                document.querySelector(".input").value = result;
                
                break;
        
            default:
                console.log("Default");
                break;
        }
    });
