

let buttonIncBreak = document.getElementById('breakIncButton');
let buttonDecBreak= document.getElementById('breakDecButton');
let buttonIncMin= document.getElementById('minIncsButton');
let buttondecMin= document.getElementById('minDecButton');

let showBreak= document.getElementById('showBreak');
let showMin= document.getElementById('showMin')

let sec =document.getElementById('sec')

let result = document.getElementById('result');



result.innerHTML=25;

let showBreakContent=showBreak.textContent;
let showMinContent=showMin.textContent;
let secContent=sec.textContent;

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

function runFunction () {setInterval(beginClock, 1000);}


result.addEventListener('click',runFunction )



function beginClock () {
    

    
       
        if(secContent!=0) {
            console.log(secContent);
            secContent=parseInt(secContent);
            secContent=60;
            secContent--; }

           else if(secContent==0 && showMinContent!=0) {
            secContent=59;
                showMinContent--;
            }
            


            if(secContent==0 && showMinContent==0) {
                if(showBreakContent !=0) {
                    showBreakContent--;
                }
            }


        
       
        
   
    
    
    result.innerHTML=showMinContent +":" + secContent ;
    
   




   

    
    
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
























































