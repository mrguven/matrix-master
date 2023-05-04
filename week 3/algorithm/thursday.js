//Check for Palindromes



let str='covoc'


function isPalindrome(str) {

    let pal=[];

    pal=str.split('');

    for(let i=0; i<pal/2;i++) {

        if(pal[i]!==pal[pal.length-1-i]) {
            return false;
        }
       
    }

return true;

}


console.log(isPalindrome(str));


//Thursday: Sum All Numbers in a Range