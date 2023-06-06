const express = require('express');
const {userSchema,Comment} = require('../model/userModel');




const getHomePage= (req,res)=> {
res.render('index')


}






const makeRegister= (req,res)=> {

        const userRegister = new userSchema(req.body);

        userRegister.save().then().catch()

}






module.exports={getHomePage,
    makeRegister}