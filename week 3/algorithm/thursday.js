//Check for Palindromes


//create a function
//create an empty array
// change to all word lowercase in order to check all word
//convert to array elements that each elements of string by using split 
//use for loop in order to check each letters
//if they are not same, return false
//otherwise return true



let str='cov voc'


function isPalindrome(str) {

    let pal=[];

    pal=str.toLowerCase().split('')  ;
    console.log(pal);
    for(let i=0; i<pal.length/2;i++) {

        if(pal[i]!=pal[pal.length-1-i]) {
             return false;
            
        }
       
    }

return true;

}


console.log(isPalindrome(str));







//Thursday: Sum All Numbers in a Range


//create a function to get value
//first variable equalize first element of array
// second variable equalize second element
// create variable with 0 value
// if first element of array bigger than second element, 
//we change variable values
// and then use for loop to sum each elements values  between that variable
//return total


arr=[10, 5];


function sumAll(asrr) {
    let smallNummer=asrr[0];
    let bigNumber=asrr[1];
let total=0;
if(asrr[0]>asrr[1]) {
smallNummer=asrr[1];
bigNumber=asrr[0];
}

for(i=smallNummer;i<=bigNumber;i++){
    
total+=i

}
//return total
    console.log( total);
  }


 sumAll(arr); 
  


 //--------------------------------





//Thursday: Sum All Primes


let numbers=0 ;
function sumPrimes(num) {
    
    if(num>3) {
for ( index = 4; index <= num; index++) {
    let con=true;
    
    for(let i=2;i<=index-1;i++) {
        
      if(index%i==0){
         con=false;
       break;
       }
   
}
    if(con) {
    let neew=index;
    numbers+=neew;
  
}
}
    return numbers+=5;
    }

    if(num==3) {
        return 5;
    }

    if(num==2) {
        return 2;
    }
  }
  console.log(sumPrimes(10));;
