//1. Addition

//create an empty array 
//create a variabe with 0 value
//use for loop between 201 and 2701
//use if condition to check conditions 
// control the conditions and if it is true add the number to array


let divisibleArray=[];
let dividedNumber=0;

for(let i=201;i<2701;i++) {
    if(i%3==0 || i%5==0 && i%15!=0) {
        dividedNumber=i;
        divisibleArray.push(dividedNumber);
                console.log(dividedNumber);
    }
}
console.log(divisibleArray);




//2. Shift the Values


// create an empty array 
// create an array with elements
//use for loop
// and push last elements of array to as a first element of empty array



let shiftedArray=[];

let shiftArray=[2,1,6,4,-7]

for(let i=shiftArray.length-1;i>=0;i--) {
    shiftedArray.push(shiftArray[i])
}
console.log(shiftedArray);



//3. FizzBuzz

let fizzBuzz=[];

for(let i=1;i<135;i++) {
    fizzBuzz.push(i);

    if (fizzBuzz[i-1]%3==0) {
        fizzBuzz[i]="Fizz";
    }
    if(fizzBuzz[i-1]%5==0) {
        fizzBuzz[i]="Buzz";
    }

}

console.log(fizzBuzz);

//4. Fibonacci






//5. Remove the Negative






//6. Communist Censorship