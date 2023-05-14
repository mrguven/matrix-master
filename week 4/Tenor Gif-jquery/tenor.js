
let  newGif;
$('#btn-submit').click(function(){
    let searchWord= $('#search').val();
    if($('#search').val()=='') {
        alert('you write something')
     }
    console.log(searchWord);
    if(searchWord) {
    
console.log(searchWord);
    httpRequestAction('GET', 'https://tenor.googleapis.com/v2/search?q='+ searchWord + '&key=AIzaSyAAtnVuL7-_6mbI1w08TsOU_rGFiBrMVBI&limit=8')
    .then((rData)=>{
         newGif=rData
       newGif=JSON.parse(newGif)
        console.log(newGif);
 $('#result').attr('src',newGif.results[0]["media_formats"]["nanogif"]["url"])
    }).catch((err)=>console.log(err));
    }
$('#search').val("");
});



let httpRequestAction=(method,theUrl,data)=>{
    let promise = new Promise((res,rej) => {
let xmlrequest=new XMLHttpRequest();
xmlrequest.open(method,theUrl)
if(data) {
    xmlrequest.setRequestHeader('Content-Type', 'application/json')
}
xmlrequest.onload=()=>{            //shoul I use if statement with this.status=200 or 
    res(xmlrequest.response)      //if I would use promise method, it is not necessary
  
}
xmlrequest.onerror=()=> {
    rej((err)=> console.log(err))   }
xmlrequest.send(JSON.stringify(data))
})
return promise;
}


