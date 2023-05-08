//Factorialize a Number

//create variable with 0 value
// check varible <0
//else varible >0
//use while loop
// minimize the number and multiply each number
//equal to result

// n=(n-1)(n-2)(n-3)(n-4)....(n-n)






function Factorialize2(num) {
    let result=num;
   
    if(num<0) {
        console.log('the number should be more than 0');

    }
   

    else if (num>0) {

        while(num>1) {
        num--;
        result= result* num;
        
        }
    }
    return result;
}


console.log(Factorialize2(5));



//Wednesday : Title Case a Sentence

//create a function that can get arguments
// create an empty array
//given string  is converted to array and we can read each word.
//use for loop to reach each word and with charAt and toUpperCase method first letter of element of array make uppercase
//use join method in order to concert from array to string
//return variable



let titleCase="I'm a little tea pot";

function Wednesday(titleCase) {
let titleString=[];
titleString= titleCase.split(' ');
console.log(titleString);
for(let i=0;i<titleString.length;i++) {

    titleString[i] = titleString[i].charAt(0).toUpperCase() + titleString[i].slice(1);

}
titleCase= titleString.join(' ');
return titleCase;
}

console.log(Wednesday(titleCase));



//Wednesday: Power N











//Wednesday : Search and Replace








