const express = require('express');
const userSchema = require('../model/userModel');



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