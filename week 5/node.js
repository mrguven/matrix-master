let http= require('http');
const fs = require('fs');
const express= require('express')

http.createServer(function (req,res)  {
    
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('erssdasdfsdfdsfldf   ');
    res.end('hello world');
    
    }).listen(8080)


//reading file------------

fs.readFile('./index.html', (err,data) => {

if(err) {
    console.log(err);
}

else {
    console.log(data.toString());
}

});
console.log('last line');


//writing file-------------



fs.writeFile('./test.txt', 'it is write',()=> {
console.log( 'file is written');
});

fs.writeFile('./test1.txt', 'this is test' , ()=> {
    console.log('the file is written');
})



//directories------------


if(!fs.existsSync ('./assets'))  {

fs.mkdir('./assets' , (err)=> {
            if(err) {
                console.log(err);
            } else {
                console.log('folder created');}
            
})
}else {
    fs.rmdir('./assets', (err)=> {
        if(err) {
            console.log(err);
        } else {
            console.log('the folder deleted');
        }
    })
}


//deleting file-------------


if(fs.existsSync('./deleteme.txt')) {
    fs.unlink('./deleteme.txt', (err)=> {
        if (err) {
            console.log(err);
        } else {
            console.log('the folder is deleted');
        }
    })
}

//Streams & Buffers

  