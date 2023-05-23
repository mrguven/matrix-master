let http = require('http');

let server= http.createServer((req,res)=> {
    console.log(req.url,req.method);

    
    res.setHeader('Content-Type','text/html');
    res.write( '<img src="download.jpeg"></img>' )
    res.write('<h1>is is ninja</h1>');
    res.end()
});
//local host is like a domain name on the web
//port number is like doors into a computer
server.listen(3010,'localhost', ()=> {
    console.log('listining the port 3010');
});



