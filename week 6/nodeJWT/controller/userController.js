const express = require('express');
const {userSchema,postSchema} = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { error } = require('jquery');


const makeRegister= async (req,res)=> {

    const checkUser= await userSchema.findOne({email:req.body.email})

 if(checkUser) {
     res.render('logSignPage',{errmail: 'this email already exist', errpassword:"" })
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

        
        res.render('logSignPage',{addMessage: 'user added',erremail: '', errpassword:"" })


     })
     .catch((err)=> {
        console.log(err);
     })
     
 }

    

}


const login= async (req,res) =>{

  const checkUser= await userSchema.findOne({email:req.body.email })

  if(!checkUser) {
   res.render('logSignPage',{error: 'user is not exist'})
  } else {
   const checkPassword=await bcrypt.compareSync(req.body.password,checkUser.password);

   if(!checkPassword) {
      res.render('/logSignPage',{error:'user password is not correct'})
   } else {
      const userToken=jwt.sign({checkUser},process.env.JWT_SECRET);
      console.log(userToken);
      res.cookie('jwt-token',userToken,{httpOnly:true});
      res.redirect('/main')
   }

  }

}


const logOut =(req,res)=> {

   res.clearCookies('userToken');
   res.redirect('/')

}













module.exports= {makeRegister,login,logOut};