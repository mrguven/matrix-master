var  http = require ('http');
var nodemailer = require('nodemailer');

http.createServer (function(req,res) {
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end('Merhaba')
}).listen(8080);

var transport = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user:'',
        pass:'yourpassword'
    }
});

var mailOptions = {
    from:'myemail@gmail.com',
    to:recievers, //q: can we use  arraylist instead of string?
subject:'email ',
text:'text was easy'}