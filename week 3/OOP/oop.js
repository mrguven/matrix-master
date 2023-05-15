

// I am looking for a skilled web developer to create a beauty 
// website that will allow my clients to pay and book their appointments.
//  The website will focus on skin care services only. 
//  I require an integrated calendar feature that will allow clients 
//  to see my availability and schedule appointments accordingly. Payment 
//  processing will be done through credit/debit card only. The ideal candidate
//   will have experience in web development and payment processing.








// const myPromise = new Promise(resolve,reject)

class Person {
    name1;
    constructor(name1){  // this variable is using in the class
        this.name1=name1;
    };

    introduceyourself() {  //this is method of class
        console.log(`my name is ${this.name1} `);
    }



}

const gril= new Person('Gril');  //create an object of class with its parameter

gril.introduceyourself(); 

//---------------------------------


class Comment extends Person {  // this is sub-class- inherited of person class

constructor (name1,post,userComment){
super(name1);

this.post= post;
this.userComment=userComment;

}
addPost (){  console.log(`this is my ${this.post} and ${this.userComment} ${this.name1}`)
}
}

let userPost= new Comment('name ','asdfasdf','this is my name');
console.log(userPost)
userPost.addPost();




//--------------------------


const myPromise= new Promise((resolve,reject) => {
    if(Math.random()*100<90) {
        console.log('resolving the promise..');
        resolve('Hello,Promises')
    }
    reject(new Error('In 10% of the case, I fail. Miserable'))

});

const onResolved= (resolvedValue)=> console.log(resolvedValue);
const onRejected=(error)=> console.log(error);

myPromise.then(onResolved,onRejected);
myPromise.then( (resolvedValue)=> console.log(resolvedValue),
(error)=> console.log(error)

);

let usersInfo= {
    firstName:'dfj',
    age:20,
    city:'Rotterdam',
    admin:true
}

let secretObj= {
    id:2323523,
    accountnumber:'nl3534634643',

}

function getData(info,newData) {

    return new Promise((resolve,reject) =>{
        let userAge=info.age;

        if(userAge>18 && info.admin) {
            resolve(newData)
        }
        else {
            reject('you must older then 18')
        }

    }).then((resolved)=>{console.log(resolved)})
    .catch((rejected=> console.log(rejected)))

}
console.log(getData(usersInfo,secretObj));


let userInput= document.getElementById('user');
let acceptButton= document.getElementById('accept-btn');


let outPut= document.getElementById('outPut');
acceptButton.addEventListener('click',  function() {
    getData(usersInfo,secretObj);
    newUser.sendOutPut()
} )

class UserInfo {
    birhtDate;
    accountInfo;

    constructor(birhtDate,accountInfo,tlfNumber) {
        this.birhtDate=birhtDate;
        this.accountInfo=accountInfo;
        this.tlfNumber=tlfNumber;
    }

    
}

function NewConstructor (title,auther,year) {
this.title=title;
this.auther-auther;
this.year=year;

this.sendOutPut=function() { return  outPut.innerHTML= `this is ${this.title}, and my name is ${this.auther}, publish date is ${this.year}`
}
}

let newUser = new NewConstructor('bla bla bla','andre','1987')




//with prototype, we can add new method to Class .

// UserInfo.prototype.getNewage=()=> {
// let years= new Date().getFullYear()- this.year;

// return `${this.birhtDate} is bla bla bla....`

// }