


// let one= document.getElementById("one");
// let two= document.getElementById("two");
// let three= document.getElementById("three");
// let four= document.getElementById("four");
// let five= document.getElementById("five");
// let six= document.getElementById("six");
// let seven= document.getElementById("seven");
// let eight= document.getElementById("eight");
// let nine= document.getElementById("nine");
// let plus= document.getElementById("plus");
// let min= document.getElementById("min");
// let ac= document.getElementById("ac");
// let multiple= document.getElementById("multiple");
// let divide= document.getElementById("divide");
// let point= document.getElementById("point");
// let del= document.getElementById("del");
// let equal= document.getElementById("=");


let result = document.getElementById('result');
result.innerHTML="";
 


let currentNumber="";

let total=0;

function myFunction(value) {    
       
      //  console.log(currentNumber);
       

currentNumber+=value

   

    result.innerHTML+=value;
    


    // if(value=='-' && currentNumber==") {
    //     console.log("enter a number");
        
    // }

    // if(value=='*' && currentNumber=="") {
    //     console.log("enter a number");
        
    // }

    // if(value=='/' && currentNumber=="") {
    //     console.log("enter a number");
        
    // }

    // if(value=='.' && currentNumber=="") {
    //     console.log("enter a number");
    // }

    // if(value=='=' && currentNumber=="") {
    //     console.log("enter a number");
    // }

    // if(value==='del' && currentNumber=="") {
    //     console.log("enter a number");
    // }

   // currentNumber+=value;

return result;
    
};

function clearScreen() {
    document.getElementById("result").innerHTML = "";
    };

    
    function deleteLastChar() {
console.log(currentNumber);
currentNumber= currentNumber.substring(0,currentNumber.length-1);
result.innerHTML=currentNumber;
        
    }

    function equalButton (){
        
    }
    