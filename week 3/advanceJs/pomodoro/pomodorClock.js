

let buttonIncBreak = document.getElementById('breakIncButton');
let buttonDecBreak= document.getElementById('breakDecButton');
let buttonIncMin= document.getElementById('minIncsButton');
let buttondecMin= document.getElementById('minDecButton');

let showBreak= document.getElementById('showBreak');
let showMin= document.getElementById('showMin')

let sec =document.getElementById('sec')
let secBreak=document.getElementById('secBreak')
let result = document.getElementById('result');



result.innerHTML=25+ ":" + "00";

let showBreakContent=showBreak.innerText;
let showMinContent=showMin.innerText;
let secContent=sec.innerText;
let secBreakContent=secBreak.innerText;
console.log(showBreak.innerText);



buttonIncBreak.addEventListener('click', increaseBreakValue);

function increaseBreakValue (){
 showBreakContent=parseInt(showBreakContent);
 showBreakContent+=1;
 showBreak.innerHTML= showBreakContent;

}


buttonDecBreak.addEventListener('click', decBreakValue);

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
    result.innerHTML=showMinContent+ ":" + "00";

}

buttondecMin.addEventListener('click', decMinValue)

function decMinValue (){
    showMinContent=parseInt(showMinContent);

    showMinContent-=1;
    if(showMinContent===0 || showMinContent<0 ) {  // there is beter solution??? but for now I found this.
        showMinContent=0
     }
    showMin.innerHTML= showMinContent;
    result.innerHTML=showMinContent+ ":" + "00";

}
let control=true; // to prevent run function for second time 
let stopInternal; // to stop setInterval method

 function runFunction() {
        if(control) {
        stopInternal= setInterval(beginClock, 1000);
        control=false;
    }
    
    else {
        alert('you already start the clock')
    }
    }

result.addEventListener('click',runFunction )

secBreakContent=0;
secContent=0;

function beginClock () {
        if(secContent!=0) {
            console.log(secContent);
            secContent--; }
        else if(secContent==0 && showMinContent!=0) {
            secContent=59;
                showMinContent--;
            }
           
        if(secContent==0 && showMinContent==0) {
            
            if(secBreakContent!=0) {
                console.log(secBreakContent);
                secBreakContent--; }
            
            else if(showBreakContent!=0 && secBreakContent==0) {
                secBreakContent=59;
                showBreakContent--;

                }
                if(showBreakContent==0 && secBreakContent==0) {
                    clearInterval(stopInternal);
                    alert('perfect')
                }
            }

            showBreak.innerHTML= showBreakContent;
    secBreak.innerHTML=secBreakContent;
   
    result.innerHTML=showMinContent +":" + secContent ;
}

showBreak.addEventListener('click', runBreak);

let runBreakInterval;
function runBreak() {
    runBreakInterval = setInterval(startBreak,1000)
}



function startBreak() {
    
    clearInterval(stopInternal);
    control=true;
if(secBreakContent!=0) {
    console.log(secBreakContent);
    secBreakContent--; }

else if(showBreakContent!=0 && secBreakContent==0) {
    secBreakContent=59;
    showBreakContent--;
    }
    
if(showBreakContent==0 && secBreakContent==0) {
    clearInterval(runBreakInterval);
    alert('perfect')
}

    showBreak.innerHTML= showBreakContent;
    secBreak.innerHTML=secBreakContent;


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
























































