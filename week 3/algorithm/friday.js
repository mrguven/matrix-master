//3rd Highest Number in Array



let highestNumber= [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];

function findNumber (highestNumber) {

        let firNumber=0;
        let secNumber=0;
        let thirdNumber=0;

        for( let i=0;i<highestNumber.length;i++) {

            if(highestNumber[i] >firNumber) {
                
                 thirdNumber=secNumber;
                 secNumber=firNumber;
                 firNumber=highestNumber[i];
                
                
                    
                }

                if (highestNumber[i]>secNumber ) {
                    
                    thirdNumber=secNumber;
                    secNumber=highestNumber[i];
                    
                    
                    
                }
                if (highestNumber[i]>thirdNumber ) {

                    thirdNumber=highestNumber[i]; 

                   
                }
                
                
            }

           

             console.log(thirdNumber);


}

findNumber(highestNumber);








//Friday: Fibonacci Sequence