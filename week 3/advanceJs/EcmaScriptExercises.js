

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


