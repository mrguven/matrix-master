const express = require('express');
const {userSchema,Comment} = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const makeRegister= async (req,res)=> {

    const checkUser= await userSchema.findOne({email:req.body.email})

 if(checkUser) {
     res.render('index',{erremail: 'this email already exist', errpassword:"" })
 } 
 else {

     const cryptePassword= await bcrypt.hashSync(req.body.password,12);

     const userRegister= {
        ...req.body,
        password:cryptePassword
     }

        const     newUserRegister = new userSchema(userRegister);

        newUserRegister.save().then(()=> {

        const userToken=jwt.sign(newUserRegister,'this is new Token');
        res.cookie('jwt-token',userToken,{httpOnly:true});
        res.render('index',{addMessage: 'user added',erremail: '', errpassword:"" })


     })
     .catch()
     
 }

    

}


module.exports= makeRegister;