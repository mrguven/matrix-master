//3rd Highest Number in Array



let highestNumber= [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];

function findNumber (highestNumber) {

        let firNumber=0;
        let secNumber=0;
        let thirdNumber=0;
        let newArray=[];


    for(let i=0;i<highestNumber.length;i++) {

        if(highestNumber[i]>firNumber) {

        }



    }


        
}

findNumber(highestNumber);








//Friday: Fibonacci Sequence



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
return fibArray;
}

console.log(Fibonacci(43));