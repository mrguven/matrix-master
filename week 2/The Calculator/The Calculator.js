

let result = document.getElementById('result');

result.innerHTML="";
 
let currentNumber="";
let firstNumber="";
let secNumber="";


function myFunction(value) {    
       
      //  console.log(currentNumber);
       currentNumber+=value
   result.innerHTML+=value;


   
    return currentNumber;
    
};

let operator ='';
function myOperation(op) {

    
    if(op=='+' && currentNumber) {
        
        firstNumber=currentNumber;
        
        operator='+';
        
        result.innerHTML='';
        currentNumber='';
    }

    if(op=='-' && currentNumber) {
        firstNumber=currentNumber;
        operator='-';
        
        result.innerHTML='';
        currentNumber='';
  }
    
    if(op=='*' && currentNumber) {
            firstNumber=currentNumber;
            operator='*';
        
            result.innerHTML='';
            currentNumber='';

   }
    
    if(op=='/' && currentNumber) {
            firstNumber=currentNumber;
            operator='/';
        
            result.innerHTML='';
            currentNumber='';
    
            
        }
}

function clearScreen() {
    document.getElementById("result").innerHTML = "";
    };

    
    function deleteLastChar() {
console.log(currentNumber);
currentNumber= currentNumber.substring(0,currentNumber.length-1);
result.innerHTML=currentNumber;
        
    }
  
function equalButton (){

secNumber=currentNumber;

if (operator=='+') {

   
 console.log( parseFloat(firstNumber) + parseFloat(secNumber) );
result.innerHTML=parseFloat(firstNumber) + parseFloat(secNumber)
 currentNumber="";
 firstNumber="";
 secNumber="";

}

if(operator=='-') {
   
    result.innerHTML=parseFloat(firstNumber) - parseFloat(secNumber);
    currentNumber="";
 firstNumber="";
 secNumber="";
}

if(operator=='*') {
   
    result.innerHTML=parseFloat(firstNumber) * parseFloat(secNumber);
    currentNumber="";
 firstNumber="";
 secNumber="";
}

if(operator=='/') {
   
    result.innerHTML= parseFloat(firstNumber) / parseFloat(secNumber);
    currentNumber="";
 firstNumber="";
 secNumber="";
}

    }

    result.innerHTML='';