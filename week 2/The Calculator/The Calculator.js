


let one= document.getElementById("one").value;
let two= document.getElementById("two").value;
let three= document.getElementById("three").value;
let four= document.getElementById("four").value;
let five= document.getElementById("five").value;
let six= document.getElementById("six").value;
let seven= document.getElementById("seven").value;
let eight= document.getElementById("eight").value;
let nine= document.getElementById("nine").value;
let plus= document.getElementById("plus").value;
let min= document.getElementById("min").value;
let ac= document.getElementById("ac").value;
let multiple= document.getElementById("multiple").value;
let divide= document.getElementById("divide").value;
let point= document.getElementById("point").value;
let del= document.getElementById("del").value;
let equal= document.getElementById("=").value;


let result = document.getElementById('result');
//let buttonsValue= document.getElementById('one');

 let klas= document.getElementsByClassName("buttons");


 

for (let i=0;i<klas.length;i++) {

    klas[i].addEventListener("click",myFunction);
    
}

function myFunction() {
    console.log('hello world')
    let result = document.getElementById('result');

   console.log(klas.value);
 // parseFloat(result) = parseFloat(buttonsValue)

result.value=buttonsValue.value;

}

