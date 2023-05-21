let http= require('http');

http.createServer(function (req,res)  {
    
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.end('Hello World')

}).listen(8080)



const fs = require('fs');



//reading file

fs.readFile('./index.html', (err,data) => {

if(err) {
    console.log(err);
}

else {
    console.log(data.toString());
}

});
console.log('last line');


//writing file



fs.writeFile('./test.txt', 'it is write',()=> {
console.log( 'file is written');
});

fs.writeFile()



//directories





//deleting file