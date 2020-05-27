

document.querySelector("input").value = 0;



var numberOfButtons = document.querySelectorAll(".number").length;
var numValue;// a global variable to carry the value of number clicked
var result = 0;



for( var i = 0; i < numberOfButtons; i++){

    document.querySelectorAll(".number")[i].addEventListener("click", function() {
        // var display = document.getElementsByClassName("btn").value;
        //  document.querySelector(".input").innerHTML = "45"; //Incorrect as it updates only the string
        
        var calcNumber = this.value;
        parseFloat(document.querySelector(".input"));
        document.querySelector(".input").value += parseFloat(calcNumber);
       // alert(parseFloat(document.querySelectorAll(".number")[0].value) + parseFloat(document.querySelectorAll(".number")[1].value));
        numValue = calcNumber;
    });
    
}

    function inputBottomUpdate(){
        document.querySelectorAll(".input")[1].value = result;
        alert(document.querySelectorAll(".inpu")[1].value)
    }


    function onClickAC () {
        document.querySelector("input").value = 0;
        result = 0;
        inputBottomUpdate();
        
    }

    var numberOfOperators = document.querySelectorAll(".operator").length;

    for(i = 0; i < numberOfOperators; i++)
    document.querySelectorAll(".operator")[i].addEventListener("click", function(num1,operate ){

        operate = this.value;
       // document.querySelectorAll(".input")[1].value = result;
        
        num1 = document.querySelector(".input").value;
       
        // alert(num1);
        // alert(num2);
        
        
        switch (operate) {
            case '+':
               document.querySelector(".input").value = 0;
               result += parseFloat(num1); 
               inputBottomUpdate();
            //    alert(result);
            //    alert(num1);
              
               break;

            case '-':
                document.querySelector(".input").value = 0;
                result -= parseFloat(num1);
                inputBottomUpdate();
                // alert(result);
                // alert(num1);
                break;

            case '*':
                document.querySelector(".input").value = 0;
                result *= parseFloat(num1);
                inputBottomUpdate();
                // alert(result);
                // alert(num1);

            case '/':
                document.querySelector(".input").value = 0;
                result /= parseFloat(num1);
                inputBottomUpdate();
                 alert(result);
                 alert(num1);
            case '%': 
                document.querySelector(".input").value = 0;
                result /= parseFloat(num1); 
                result *= 100;
                inputBottomUpdate();
                // alert(result);
                // alert(num1);
                break;
            
            case '=':
                
                document.querySelector(".input").value = result;
                inputBottomUpdate();
                
                break;
        
            default:
                console.log("Default");
                break;

        }

       
    });

   