//Factorialize a Number

//create variable with 0 value
// check varible <0
//else varible >0
//use while loop
// minimize the number and multiply each number
//equal to result

// n=(n-1)(n-2)(n-3)(n-4)....(n-n)






function Factorialize2(num) {
    let result=num;
   
    if(num<0) {
        console.log('the number should be more than 0');

    }
   

    else if (num>0) {

        while(num>1) {
        num--;
        result= result* num;
        
        }
    }
    return result;
}


console.log(Factorialize2(5));



//Wednesday : Title Case a Sentence


let titleCase="I'm a little tea pot";
