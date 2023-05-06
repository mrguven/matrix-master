

// Exercise 1
// We have a simple object:



let user1 = {
    name1: "John junior",
    years: 30
  }
  let {name1,years} = user1;

  console.log(name1);


  //Exercise 2 
  //Give the right name:


  let planet= 'World';
  let visitor='Human';





  //Exercise 3 
  //Look at the code. What will be result of the call at the last line and why?


  let phrase = "Hello";

if (true) {
  let user = "John";
  
  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi()

//output:  'Hello, John'



//Exercise 4
//Write the code, one line for each action:


let user ={ name:'John',
            surname:'Smith',
            
}

user.name='Pete';


console.log(user.name);
delete user.name;
console.log(user);


//Exercise 5
//Is it possible to change an object declared with const, how do you think and why?

const user2 = {
    name: "John"
  }
  
  // does it work?
  user.name = "Pete"


  console.log(user.name);


  //if a const is an object or array its properties or items can be updated or removed. Thus it is works


  //Exercise 6
//We have an object storing salaries of our team:


let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
  }

//   let sum= obj => Object.values(obj).reduce((a, b) => a + b, 0);

//   console.log(sum (salaries) 
//     );

function objectValueSum (x){
let valueObject= Object.values(x);
let sum=0;
for(let i=0;i<valueObject.length;i++) {
    
    sum+=valueObject[i];
   
}


if (sum==0) {
    return 0;
}

else {
    return sum;
}

}

console.log(objectValueSum(salaries));


//Exercise 7
//Rewrite this if using the ternary operator '?':

// if (a + b < 4) {
//     result = 'Below';
//   } else {
//     result = 'Over';
//   }

  let a=5;
  let b=0;

  let opIF= (a+b<4) ? result='below' : result='over';

  console.log(opIF);

//Exercise 8
//Rewrite if..else using multiple ternary operators '?'.






// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }


 let message= (login)=> (login == 'Employee')?  message = 'Hello': (login == 'Director')? message = 'Greetings' : (login == '') ? message = 'No login' :  message = '';

console.log(message("Director"));



/*assignment 2
- you have string contain character and numbers "1,2,3,MM,a,t,r,i,x,_,_,M,a,s,t,e,r,5,2,0,7"
- you have to get in the result just the string after remove the repeat char and num
*/
// 1- convert string to Array
// 2- filter to get the characters
// 3- check for the characters and special characters to remove special characters
// 4- use reduce to concat
// 5- replace _ with ''
// 6- print the result


// let text="1,2,3,MM,a,t,r,i,x,_,_,M,a,s,t,e,r,5,2,0,7";

// let textArray= text.split('');
// console.log(textArray);
// let newArray= textArray.filter((a)=> a== RegExp("[a-z]"));
// console.log(newArray);

//--constructor function

// function User (name,uername,salary) { {
//   this.i=id;
//   this.u=username;
//   this.s=salary;
// }

// }