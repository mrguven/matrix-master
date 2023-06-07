const express= require('express');


const checkToken = (req,res,next)=> {

    const isToken= req.header('cookie');
    if(!isToken){
        next()
    }else {
        res.redirect('/main')
    }


}

const checkTokenPage = (req,res,next) => {
    const isToken= req.header('cookie');
    if(isToken){
        next()
    }else {
        res.redirect('/')
    }

}





module.exports= {checkToken,checkTokenPage};