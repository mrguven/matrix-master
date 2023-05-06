

let buttonIncBreak = document.getElementById('breakIncButton');
let buttonDecBreak= document.getElementById('breakDecButton');
let buttonIncMin= document.getElementById('minIncsButton');
let buttondecMin= document.getElementById('minDecButton');

let showBreak= document.getElementById('showBreak');
let showMin= document.getElementById('showMin')

let result = document.getElementById('result');

result.innerHTML=25;

let showBreakContent=showBreak.textContent;
let showMinContent=showMin.textContent;


console.log(showBreak.textContent);



buttonIncBreak.addEventListener('click', increaseBreakValue)

function increaseBreakValue (){

 showBreakContent=parseInt(showBreakContent);

 showBreakContent+=1;

 showBreak.innerHTML= showBreakContent;

}


buttonDecBreak.addEventListener('click', decBreakValue)

function decBreakValue (){

 showBreakContent=parseInt(showBreakContent);

 showBreakContent-=1;

 if(showBreakContent===0 || showBreakContent<0 ) {  // there is beter solution??? but for now I found this.
    showBreakContent=0
 }


 showBreak.innerHTML= showBreakContent;

}






buttonIncMin.addEventListener('click', increaseMinValue)

function increaseMinValue (){

    showMinContent=parseInt(showMinContent);

    showMinContent+=1;

    showMin.innerHTML= showMinContent;
    result.innerHTML=showMinContent;

}


buttondecMin.addEventListener('click', decMinValue)

function decMinValue (){

    showMinContent=parseInt(showMinContent);

    showMinContent-=1;
    if(showMinContent===0 || showMinContent<0 ) {  // there is beter solution??? but for now I found this.
        showMinContent=0
     }

    showMin.innerHTML= showMinContent;
    result.innerHTML=showMinContent;

}













// buttonIncBreak.addEventListener('click', increaseValue(showBreakContent,showBreak))


// function increaseValue(input,place) { 
//     if(!isNaN(input))  {
//     console.log(input);
//    input=parseInt(input);
//     input+=1;
//     place.innerHTML= input;
// }
    
//     else   {
//         input+=1;
//         place.innerHTML= input;
//     }

   
// }
























































