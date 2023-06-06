const express = require('express');
const {userSchema,userLogIn} = require('../model/userModel');




const getHomePage= (req,res)=> {
res.render('index')


}













module.exports=getHomePage