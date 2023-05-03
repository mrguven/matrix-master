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

function FizzBuzzFunction(num) {
    let fizzBuzz=[];

for(let i=1;i<num;i++) {
    fizzBuzz.push(i);

    if((fizzBuzz[i-1]%5==0) && (fizzBuzz[i-1]%3==0)) {
        fizzBuzz[i-1]="FizzBuzz";
    }
    if (fizzBuzz[i-1]%3==0) {
        fizzBuzz[i-1]="Fizz";
    }
    if(fizzBuzz[i-1]%5==0 ) {
        fizzBuzz[i-1]="Buzz";
    }
}
return fizzBuzz;
}
console.log(FizzBuzzFunction(135));

//4. Fibonacci

//0 1 1 2 3 5 8 13 21.


function  Fibonacci(fib) {

    let firstNumber=0;
    let secNumber=1;
    let total=0;



}









// }




//5. Remove the Negative


let removeTheNegative = [1,-2,4,1];

let positiveArray=[];

for(let i=0;i<removeTheNegative.length;i++) {
    if(removeTheNegative[i]>0) {
        positiveArray.push(removeTheNegative[i])
        
    }
}

console.log(positiveArray);


//6. Communist Censorship



let communistCensorship =['Man', 'I','Love','The','Matrix','Program'];

function Censorship(arr, target) {
    let newArray = [];
    let star = "";
    for(let i=0; i<arr.length; i++) {
        if(target === arr[i]){
            for(let j=0; j<target.length; j++){
                star += "*"
            }
            newArray.push(star)
        } else {
            newArray.push(arr[i])
        }
    }
    return newArray;
}

console.log(Censorship(communistCensorship,"Matrix"));





//Tuesday: Find the longest Word in a String
