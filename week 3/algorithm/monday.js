//  1. Print 1 - 135
//create a variable and use for loop.
// And each time i plus +1. and we see it with console.log on screen.




for(let i=1;i<136;i++) { 
    console.log(i);
}


// 2. Print Odd Numbers 1 - 135

//create for loop
// use if statement with divide condition. if i can not divide without remaninding 
// run on screen with console.log methode.

for(let i=1;i<136;i++) {

    if(i%2!==0) {
    console.log(i);
    }
}


//3. Sum of Printed Numbers

// create a variable
// use for loop to reach aimed number
// increase number each time as much as value of i
//and sum number with value of i
//equalize it again number


let number=0;
for(let i=0;i<136;i++) {
    
     number +=i;
    console.log('Number is: '+ i + 'Sum: ' + number );
    }


//  4. Print the elements of an array

 //create a array, 
    //and use for loop and it is length equal array`s element.
    //run on screen element`s of array

let x = [1,4,2,12];

for (let i =0;i<x.length;i++) {  
   
    console.log(x[i]);
}



//5. Find Max 


// create a variable
// create a array
// create for loop, 
//use if statement if an element of array is bigger than variable equalize that element to variable
// 



let maxNumber=0;

let findMaxArray = [2,-3,10];

for(let i=0;i<findMaxArray.length;i++) {
    if (findMaxArray[i]>maxNumber) {
        maxNumber=findMaxArray[i];
        console.log(maxNumber);
    }

}



//6. Get Average


//create a  variable with 0 value, 
//use for loop to sum all elements of array and equalize totalaverage
//later this value equalize  total of elements in array
// totalaverage divided number length of array




let totalAverage=0;
let avargeArray=[2,1,3];
 
for( let i=0;i<avargeArray.length;i++) {
    totalAverage += avargeArray[i];
    
    
}

console.log(totalAverage/avargeArray.length);


//7. Eliminate the Negatives

//create an array
//use for loop to control each elements of array
//use if statement to control each element of array
//if an element of array smaller than 0 
// change that element with 0



let eliminate= [2,-1,4,-3];

for(let i=0;i<eliminate.length;i++) {
    if (eliminate[i]<0) {
        eliminate[i]=0;

    }
}
console.log(eliminate);


//8. Number to String


//create an array
//use for loop to control each elements of array
//use if statement to control each element of array
//if an element of array smaller than 0 
// change that element with string


let numberToString=[1,-4,0,-1];

for(let i=0;i<numberToString.length;i++) {
    if (numberToString[i]<0) {
        numberToString[i]="Turing";

    }
}
console.log(numberToString);