//Factorialize a Number

//create variable with 0 value
// check varible <0
//else varible >0
//use while loop
// minimize the number and multiply each number
//equal to result

// n=(n-1)(n-2)(n-3)(n-4)....(n-n)






function factorialize2(num) {
    let result=num;
   
    if(num<0) {
        console.log('the number should be more than 0');

    }
   
    // else if (num>0) {
    //     while(num>1) {
    //     num--;
    //     result= result* num;
        
    //     }

        for(let i=num-1;i>0;i--) {
            result=result * i;
            
        }
    
    return result;
}

console.log(factorialize2(5));




//--------
function fac(nu) {
    if(nu==0) {
        return 1;
    }
    else {
        return nu * fac(nu-1)
    }
}

console.log(fac(5));

//Wednesday : Title Case a Sentence

//create a function that can get arguments
// create an empty array
//given string  is converted to array and we can read each word.
//use for loop to reach each word and with charAt and toUpperCase method first letter of element of array make uppercase
//use join method in order to concert from array to string
//return variable



let titleCase="I'm a little tEa pot";

function Wednesday(titleCase) {
let titleString=[];
titleString= titleCase.split(' ');
console.log(titleString);
for(let i=0;i<titleString.length;i++) {
    titleString[i] = titleString[i].charAt(0).toUpperCase() + titleString[i].toLowerCase().slice(1);

}
titleCase= titleString.join(' ');
return titleCase;
}

console.log(Wednesday(titleCase));





// let fistUp= 'return the provided string with the first letter of each word capitalized.';

// function convertUpperCase(str) {
//     let newArray=[];
    
//     str= str.split(' ');
    
//     for(let i=0;i<str.length;i++) {
//         str[i]=str[i].charAt(0).toUpperCase() + str[i].toLowerCase().slice(1)
    
//     }
//     str=str.join(' ')
   
//     return str;
   
// }

// console.log(convertUpperCase(fistUp));









//Wednesday: Power N


function power(firsNumber,squareNumber) {
    if(squareNumber==0){
        return 1;
    }
    else{
        return  firsNumber * power(firsNumber,squareNumber-1)
    }
}


console.log(power(3,3));







//Wednesday : Search and Replace






let= replaceString="A quick brown fox jumped over the lazy dog";
function myReplace(str, before, after) {

    // str= str.replace(before,after);

str = str.split(' ')
for(let i=0;i<str.length;i++) {
if(str[i]===before) {
    str[i]=after;
}
}
str=str.join(' ');
        
    return str;
  }
console.log( myReplace(replaceString, "jumped", "leaped"));





 




