//  1. Print 1 - 135
//create a variable and use for loop.
// And each time i plus +1. and we see it with console.log on screen.




for(let i=1;i<136;i++) { 
    console.log(i);
}


//i  |0|1|2|3|4|5|6|7|8|...

// 2. Print Odd Numbers 1 - 135

//create for loop
// use if statement with divide condition. if i can not divide without remaninding 
// run on screen with console.log methode.

for(let i=1;i<136;i++) {

    if(i%2!==0) {
    console.log(i);
    }
}


// i           |1|2|3|4|5|6|7|8...
// %2          |1|0|3|0|5|0|7|0....
// console.log |1|3|5|7|....


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


    // i           | 1|2 |3 |4 |5 |6 |7 |8 |9
    // sum         |1 |3 |6 |10 |15 |21 |28 |36 |45 


//  4. Print the elements of an array

 //create a array, 
    //and use for loop and it is length equal array`s element.
    //run on screen element`s of array

let x = [1,4,2,12];

for (let i =0;i<x.length;i++) {  
   
    console.log(x[i]);
}


// i |0 |1 |2 |3
// x |1 |4 |2 |12



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



// findMaxArray  | 2|-3 |-1|4
// i             |0 |1 |2 |3
// maxNumber     |2 |2 |2 |4


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




// avargeArray  |4 |5 |1 |3 |6
// i            |0 |1 |2 |3 |4
// totalAverage |6




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


// eliminate       |2 |-1 |4 |-3
// eliminate[i]    |2 |0 |4 |0
// i               |0 |1 |2 |3
// console.log     |2 |0 |4 |0



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



// numberToString          |2 |-1 |4 |-3
// numberToString [i]      |2 |"Turing"|4 |"Turing"   
// i                       |0 |1       |2 |3
// console.log             |2 |"Turing"|4 |"Turing"



//Monday: Largest Number in Arrays

let maxArray=[];
let maximumNumber=0;

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

function largestOfFour(largestOfFour) {
    
    for(let i=0;i<largestOfFour.length;i++) {
        maximumNumber=0;
        for(let j=0;j<largestOfFour[i].length;j++) {
            if(largestOfFour[i][j] > maximumNumber) {
                maximumNumber=largestOfFour[i][j] ;
                        
            }
        }
        console.log(maximumNumber);
        maxArray.push(maximumNumber);
    }
    return maxArray;
  }

console.log(maxArray);





//Monday: Bubble Sort

//create 2 for loop
// but first loop start end of the array to check together all array with second loop
//





let bubbleArray=[9,7,5,4,3,1];


function bubbleSort(argd) {

 

    for(let i= argd.length-1;i>=0;i--) {
        for(let j=1;j<i;j++) {
            if(argd[j-1]>argd[i]) {
                let temp=argd[i];
                argd[i]=argd[j-1];
                argd[j-1]=temp;

            }
        }
    }
 


return argd;

}
console.log(bubbleSort(bubbleArray));



//Monday: Game of 3s


function divNumber(asd) {
    if(asd==1){
        return 1;
       }
    
if(asd%3==0) {
    return divNumber(asd/3)
}
else if(asd%3!=0){
    if((asd+1)%3==0) {
        
       return divNumber((asd+1)/3)

    }
    if((asd-1)%3==0) {
        
        return divNumber((asd-1)/3)
    }
}
}

 console.log(divNumber(14));