

let result = document.getElementById('result');
result.innerHTML="";
 
let currentNumber="";
var firstNumber="";
var secNumber="";
let total=0;

function myFunction(value) {    
       
      //  console.log(currentNumber);
       currentNumber+=value
   result.innerHTML+=value;

   

    return currentNumber;
};

function clearScreen() {
    document.getElementById("result").innerHTML = "";
    };

    
    function deleteLastChar() {
console.log(currentNumber);
currentNumber= currentNumber.substring(0,currentNumber.length-1);
result.innerHTML=currentNumber;
        
    }

   
    
  
    function myOperation(op) {
        if(op=='+' && currentNumber) {
            console.log(currentNumber);
            currentNumber=firstNumber;
           console.log(firstNumber);
            
        }

        if(op=='-' && currentNumber) {
                console.log("enter a number");
                
            }
        
            if(op=='*' && currentNumber) {
                console.log("enter a number");
                
            }
        
            if(op=='/' && currentNumber) {
                console.log("enter a number");
                
            }


    }

    function equalButton (){

    }