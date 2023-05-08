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