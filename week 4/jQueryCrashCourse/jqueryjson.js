//$('button') this is select all button in the html file
//$('button .submit') this is to select button element with submit class name

$('#getdt').click(function (){
    getData_1()
    
})

function getData_1 () {
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


$('#get-Data').click(function () {
    httpRequest('GET','https://jsonplaceholder.typicode.com/posts/1').then((respondData)=> {let returnData= respondData;
    document.getElementById('show-Data').innerHTML=returnData;
    
    console.log(returnData);
});
})


let httpRequest = (method,url,data)=> {
    let promise = new Promise((res,rej)=>{
        let newXhttp= new XMLHttpRequest();
        newXhttp.open(method,url);
            newXhttp.responseType='json';
            if(data) {
            newXhttp.setRequestHeader('Content-Type', 'application/json')
            }
        newXhttp.onload=()=> {
           res(newXhttp.response);
        }
        newXhttp.onerror=()=>{
            rej('something went wrong')
        }
        newXhttp.send(JSON.stringify(data));
    })
return promise;
}



$('#send-data').click(function () {
    httpRequest('PUT','https://jsonplaceholder.typicode.com/posts/1',
    { email:'test@askdf.com'}).then((respondData) => 
    console.log(respondData)).catch((err) => console.log(err))
})

