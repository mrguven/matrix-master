


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

