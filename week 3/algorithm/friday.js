//3rd Highest Number in Array


//create a function 
// create variable, their name ara firNumber,secNumber, thirdNumber
//use for loop check each element of array
//use if conditions
// if one element of highestNumber is bigger then firNumber
// first, thirdNumber equal secNumber
//then, secNumber equal to firNumber
//and firNumber equal to highestNumber[i]
//the logic is we begin smallest number. and we equalize to groter one.
// in first if statement we find firNumber(highest number in array)
//in the second if statement we find mid number
// in de third if statement we find 3rd highest number


let highestNumber= [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];

function findNumber (highestNumber) {

        let firNumber=0;
        let secNumber=0;
        let thirdNumber=0;
       


    for(let i=0;i<highestNumber.length;i++) {
        

        if(highestNumber[i]>firNumber) {
            thirdNumber=secNumber;
            secNumber=firNumber;
                firNumber=highestNumber[i];      
        
            }

           else  if(highestNumber[i]>secNumber) {
                thirdNumber=secNumber;
                secNumber=highestNumber[i];
                

            }
            else if(highestNumber[i]>thirdNumber) {
                thirdNumber=highestNumber[i];

            }
    }

return thirdNumber;
        
}

console.log(findNumber(highestNumber));








//Friday: Fibonacci Sequence


// create a function 
//create variable as firstNumber and its value=0
//Create second variable as SecNumber and its value=1
//create  variable as name total and its value 0
//crate empty value
//use for loop to reach till higheset number 
// we begin 0, thus we push 0 to empty array
//and total equalize firstNumber+secNumber
// and then firstNumber equalize to secNumner
//and then secNumber equalize total
//return fibArray



function  Fibonacci(fib) {

    let firstNumber=0;
    let secNumber=1;
    let total=0;
    let fibArray=[];
    

for (let i=0;i<fib;i++) {
        fibArray.push(firstNumber);
    total = firstNumber+secNumber;
    firstNumber=secNumber;
    secNumber=total;
    


}
return fibArray[fib-1]; // we use min (-1) because we have zero in the array. thus we must ignore it. 
}

console.log(Fibonacci(43));





//Friday: r Triangle