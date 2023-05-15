let screen= $('#screen');
let startButton= $('#btn-start');
let resetButton= $('#btn-reset');
//let incValue= $('#incValue')
//let minValue= $('#minValue')
let timer= $('#timer');


let cond=true
resetButton.click(function(){
    if(cond==false) {screen.val('00:00:00')}
    cond=true;
    clearInterval(intervalStatus)
    startStatus=true;
})

screen.click(function () {
    if(cond) {screen.val('')}
    cond=false;
 })

let min;
let startStatus=true;
startButton.click(function () {
   if(screen.val()==='00:00:00') {
        alert('you should enter a number')
        return;
    }
        startTime();
})

let intervalStatus
let count=0;
let  startTime = ()=> {
if (startStatus) {
     count+=1;
    min=screen.val()-1
    let lastmin=screen.val()
    let milisec=59;
    let sec=59
  intervalStatus= setInterval(() => {  //it is not got id,when I assign a id(variable) it is not working. If I do not that, I can not stop the setInterval.

        if(milisec!=0){
            milisec-=1;
            screen.val(min+':'+sec+':'+milisec);
            if(sec==0 && min==0 && milisec==0) {
                screen.val('00:00:00');
                $('ol').append('<li>'+' <b>Timer </b>'+'<b> '+ count + '</b> ' +':'+'  ' +lastmin+ ' :00:00'+ '</li>');
                startStatus=true;
                cond=true;
                alert('the count down finished');
            }
        }
       
        else  if (milisec==0 && sec!=0) {
            milisec=59;
            sec-=1;
            screen.val(min+':'+sec+':'+milisec);
                      
        }
        
       else if(sec==0 && min!=0) {
        sec=59;
            min-=1;
            screen.val(min+':'+sec+':'+milisec);
            }
    }, 10);

    intervalStatus;
    startStatus=false;
}}






















// screen.val().keypress( function() {
//     onlyNumberKey(evt)})
// function onlyNumberKey(evt) {
              
//     // Only ASCII character in that range allowed
//     var ASCIICode = (evt.which) ? evt.which : evt.keyCode
//     if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
//         return false;
//     return true;
// }