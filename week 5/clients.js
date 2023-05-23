let http = require('http');
let fs=require('fs')

let server= http.createServer((req,res)=> {
    console.log(req.url,req.method);

    
    res.setHeader('Content-Type','text/html');
    // res.write( '<img src="download.jpeg"></img>' ) 
    // res.write('<h1>is is ninja</h1>'); this is used for text to send to browser

    // to send  the html file to browser of and data, we use first fs. first we read the file and then 
    // we write the data 




let path = './views';
switch(req.url) {
    case '/' :
    path+='index.html';
    break;
    case './about': 
    path+='about.html';
    break;
    default: 
    path+='404.html';
    break;
}









    fs.readFileSync('./views/index.html', (err,data)=> {
        if(err) {
            console.log(err);
            res.end();
        }
        else {
            //res.write(data); // if we send only one data we use end method
            res.end(data);
        }
    })



   
});
//local host is like a domain name on the web
//port number is like doors into a computer
server.listen(3010,'localhost', ()=> {
    console.log('listining the port 3010');
});





