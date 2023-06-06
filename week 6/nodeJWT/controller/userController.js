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
console.log(req.body.password);
     const cryptePassword= await bcrypt.hashSync(req.body.password,12);

     console.log(cryptePassword);
     const userRegister= {
        ...req.body,
        password:cryptePassword
     }

     console.log(userRegister);
        const     newUserRegister = new userSchema(userRegister);

        newUserRegister.save().then(()=> {

        const userToken=jwt.sign({newUserRegister},'this is new Token');
        console.log(userToken);
        res.cookie('jwt-token',userToken,{httpOnly:true});
        res.render('index',{addMessage: 'user added',erremail: '', errpassword:"" })


     })
     .catch((err)=> {
        console.log(err);
     })
     
 }

    

}


module.exports= makeRegister;