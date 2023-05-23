// const express= require('express');
// const app=express();

// app.route('/home')
//     .get((req,res,nexthandler)=> {
//         res.type('text/html');
//         res.write('<DOCTYPE html>');
//         nexthandler();
//     }).get((req,res) => {
//         res.end( '<html lang="en"> <head><meta charset="utf-8"><title>WebApp by ExpressJS</title></head><body role="application"><h2>Press send!</h2><form method="post" action="/home"><input type="text" /><button type="submit">Send</button></form></body></html>')
    
    
//     }).post((req,res,nexthandler)=> {
//         res.send('got it')
//     })
    
//     app.listen(8040,()=> {
//         console.log('it does work');
//     })