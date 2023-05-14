$('#btn-submit').click(function(){

})

let httpRequestAction=(method,theUrl,data)=>{
    let promise = new Promise((res,rej) => {
let xmlrequest=new XMLHttpRequest();

xmlrequest.open(method,theUrl)

xmlrequest.onload=()=>{
    res(xmlrequest.response)
}

xmlrequest.onerror=()=> {
    rej((err)=> console.log(err))
}

xmlrequest.send(JSON.stringify(data))

})





}


