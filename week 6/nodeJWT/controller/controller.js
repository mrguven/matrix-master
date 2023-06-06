const express = require('express');
const {userSchema,Comment} = require('../model/userModel');



const getHomePage= (req,res)=> {
res.render('index.html')


}



const getLogInPage = (req,res) => {
res.render('login')
}






const getRegisterPage= (req,res)=> {
    res.render('register')
}


const makeRegister= (req,res)=> {

        const userRegister = new userSchema(req.body);

        userInfo.save().then().catch()

}






module.exports={getHomePage,getLogInPage,getRegisterPage,
    makeRegister}