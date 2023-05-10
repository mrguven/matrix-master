// Exercise 1
// The following function returns true if the parameter age is greater than 18.

// Otherwise, it asks for a confirmation and returns its result.

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Do you have your parents permission to access this page?');
//     }
//   }

let age=19;
  let newCheckAge= (age) => (age>18)?  true:  console.log('Do you have your parents permission to access this page?');

 console.log( newCheckAge(age));




//  Exercise 2
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.


function caPow(a,b) {
// if(b==0) {
//   return 1;

// }
// else {
//   return a*caPow(a,b-1)
// }


return (b==0) ?  1 : a*caPow(a,b-1);   

   
}

console.log(caPow(4,2));



// Exercise 3
// Replace Function Expressions with arrow functions in the code:

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no()
// }

//I did not understand what should I s

// let newAsk = (question, yes, no) => {(confirm(question))?yes():no()};



// console.log(newAsk(
//   "Do you agree?",
//   function() { alert("You agreed.") },
//   function() { alert("You canceled the execution.") }
// ));



// Exercise 4
// Create an object calculator with three methods:


 
// let calculator = {//I am not sure solution of this exercise
//   read(a,b){return calculator.obj1=a, calculator.obj2=b},
//   sum(a,b) {return a+b},
//   mul(a,b) {return a*b}
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );





// Exercise 5
// Write a function min(a,b) which returns the least of two numbers a and b. Use arrow function along with the question mark operator ?


let MinValue= (a,b) =>   (a>b)? b : a ;

console.log(MinValue(3,5));
