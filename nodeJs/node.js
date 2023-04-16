const http = required ("http");
var nodemailer = require("nodemailer");

http.createServer (function(req,res) {
    res.write("")
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
    to:recievers,
subject:'email ',
text:'text was easy'}