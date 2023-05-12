



$('#btn-fadeOut').click(function(){
    $('#text-fadeOut').fadeOut(3000)
})
function NewConstructor (title,auther,year) {
    this.title=title;
    this.auther=auther;
    this.year=year;
    
    this.sendOutPut=function() { return `this is ${this.title}, and author is ${this.auther}, publish date is ${this.year}`
    }
    }


$('#btn-append').click(function() {
   
        
            
        let newUser = new NewConstructor($('#userInput').val(),$('#auther').val(),$('#year').val())
        let result=newUser.sendOutPut()
     
     
        console.log($('#userInput').val());
    $('#idList').append('<li>',result, '</li>') // ?? I can not this code. 
    
    })




    $('#btn-append').click(function() {
       
        console.log( $('#userInput').val())
    })






$('#changeColor').click(function(){
    $('#textColor').css('color','red')
})