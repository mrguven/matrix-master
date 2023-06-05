const express = require('express');



const getHomePage= (req,res)=> {
res.render('index.html')


}



const getLogInPage = (req,res) => {
res.render('login')
}






const getRegisterPage= (req,res)=> {
    res.render('register')
}









module.exports={getHomePage,getLogInPage,getRegisterPage}