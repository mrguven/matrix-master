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




class Commnent extends Person {

post;
userComment;
constructor (post,userComment,name1){
super(name1);

this.post= post;
this.userComment=userComment;

}
addPost (){ console.log(`this is my ${this.post} and ${this.userComment} ${this.name1}`)

}

}

let userPost= new Commnent('name ','asdfasdf');

//console.log(userPost)

console.log(userPost.addPost());
