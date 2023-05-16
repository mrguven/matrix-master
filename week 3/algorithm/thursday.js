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


 let fistUp= 'return the provided string with the first letter of each word capitalized.';

function convertUpperCase(str) {
    let newArray=[];
    
    str= str.split(' ');
    
    for(let i=0;i<str.length;i++) {
        str[i]=str[i].charAt(0).toUpperCase() + str[i].toLowerCase().slice(1)
    newArray.push(str[i])
    }
    newArray=newArray.join(' ')
    str = newArray
    return str;
   
}

console.log(convertUpperCase(fistUp));



//Thursday: Sum All Primes

function sumPrimes(num) {
    let numbers=0 ;
    if(num>3) {
for ( index = 4; index <= num; index++) {
    for(let i=2;i<=index;i++) {
        
      if(index%i==0){
       break;
       }
     else if(index%i==0) {
        numbers+=numbers
     }
        
    
}
 

console.log(numbers);
}
    }


    else {
        return 5;
    }

    //return index;
  }
  sumPrimes(10);
