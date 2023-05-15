
let  newGif;

$('#btn-submit').click(function(){
    let searchWord= $('#search').val();
    if(searchWord=='') {
        alert('you write something')
     }
    console.log(searchWord);
    if(searchWord) {
    
console.log(searchWord);
    httpRequestAction('GET', 'https://tenor.agoogleapis.com/v2/search?q='+ searchWord + '&key=AIzaSyAAtnVuL7-_6mbI1w08TsOU_rGFiBrMVBI&limit=8')  // it should be assign to variable to use easier way.
    .then((rData)=>{
         newGif=rData
       newGif=JSON.parse(newGif)
        console.log(newGif);
 $('#result').attr('src',newGif.results[0]["media_formats"]["nanogif"]["url"]);
 
for(let i= 0;i<newGif.results.length;i++) {
    $("#result").append("<img src="+ newGif.results[i]["media_formats"]["nanogif"]["url"] +" >")
}
    }).catch((err)=>alert(err));
    }
$('#search').val("");
return newGif;
});



let httpRequestAction=(method,theUrl,data)=>{
    let promise = new Promise((res,rej) => {
let xmlrequest=new XMLHttpRequest();
xmlrequest.open(method,theUrl);
if(data) {
    xmlrequest.setRequestHeader('Content-Type', 'application/json')
}
xmlrequest.onload=()=>{            //shoul I use if statement with this.status=200 or 
    res(xmlrequest.response)      //if I would use promise method, it is not necessary
  
}
xmlrequest.onerror=()=> {
    rej('went wrong something')   }
xmlrequest.send(JSON.stringify(data))
})
return promise;
}


//why this file gives error in terminal.