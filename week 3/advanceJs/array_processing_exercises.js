// Exercise 1
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.



let arr = [5, 3, 8, 1];

//let filtered = filterRange(arr, 1, 4);

// alert( filtered )  // 3,1 (matching values);

// alert( arr )  ;

let betweenArray=[];
function filterRange(arr,a,b) {
   
 (a>b)? betweenArray=arr.filter(element => {
     element<a && element>b}) : betweenArray=arr.filter(element => {
          element>a && element<b
          console.log(betweenArray);
    });
return betweenArray;

}

console.log(filterRange(arr, 1, 4));



// Exercises 2
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.


const cart = [ { name: "Widget", price: 9.95 }, { name: "Gadget", price: 22.95 }] 

const cartName= cart.map((nm)=>nm.name);
const cartPrice=cart.map((pr)=> pr.price);
//const disPrice=  price.map((dis)=>dis*0.10);
console.log(cartPrice);



let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 } 
let mary = { name: "Mary", age: 28 }

let users = [ john, pete, mary ]

let names = users.map(x => x.name)   




console.log( names ) // John, Pete, Mary
