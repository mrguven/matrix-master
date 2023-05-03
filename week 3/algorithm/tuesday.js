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

//create a function that take arguments
//create an empty array
//use for loop that reach arg`s value
// push each number to empty array
// use if statement to check which elements dividible 15 or 3 or 5
// and change that elements strigs that given in the question




function FizzBuzzFunction(num) {
    let fizzBuzz=[];

for(let i=1;i<num;i++) {
    fizzBuzz.push(i);

    if((fizzBuzz[i-1]%5==0) && (fizzBuzz[i-1]%3==0)) {
        fizzBuzz[i-1]="FizzBuzz";
    }
    else if (fizzBuzz[i-1]%3==0) {
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
    let fibArray=[];

for (let i=0;i<fib;i++) {




}



}









// }




//5. Remove the Negative


// create an empty array
// use for loop 
//and check each elements of array that smaller than 0
// elements that is bigger than 0, push empty array

let removeTheNegative = [1,-2,4,1];

let positiveArray=[];

for(let i=0;i<removeTheNegative.length;i++) {
    if(removeTheNegative[i]>0) {
        positiveArray.push(removeTheNegative[i])
        
    }
}

console.log(positiveArray);


//6. Communist Censorship

//create a function that take two parameter, 
// create an empty array
// create a variable that is value is empty
// use for loop that reach count of array elements
//use if conditions
// if searching word and elements of array is equal, if statement is active
//use for loop to add star as much as length of searching word
//these words is pushed to empty array

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

let longestWord ="The quick brown fox jumped over the lazy dog";


function findLongestWord() {


}