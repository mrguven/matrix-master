

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
    constructor(name1){
        this.name1=name1;
    };

    introduceyourself() {
        console.log(`my name is ${this.name1} `);
    }



}

const gril= new Person('Gril');

gril.introduceyourself();

//---------------------------------


class Comment extends Person {


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





