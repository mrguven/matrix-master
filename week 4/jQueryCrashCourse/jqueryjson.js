//$('button') this is select all button in the html file
//$('button .submit') this is to select button element with submit class name

$('#getdt').click(function (){
    getData ()
    console.log('info.txt');
})

function getData () {
let xhttp= new XMLHttpRequest();

xhttp.onreadystatechange=function(){

    if(this.readyState==4 && this.status==200)  {
        let screen = this.responseText
        document.getElementById('result').innerHTML=this.responseText;
       // $('#result').val(screen); it does not work?????

    }


};

xhttp.open('GET',"info.txt",true);

xhttp.send();

}