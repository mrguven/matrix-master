const express = require('express');
const userInfo = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { error } = require('jquery');


const makeRegister= async (req,res)=> {

    const checkUser= await userInfo.findOne({email:req.body.email})

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
        const     newUserRegister = new userInfo(userRegister);

        newUserRegister.save().then(()=> {

        
        res.render('logSignPage',{addMessage: 'user added' })


     })
     .catch((err)=> {
        console.log(err);
     })
     
 }

    

}


const login= async (req,res) =>{

  const checkUser= await userInfo.findOne({email:req.body.email });



  if(!checkUser) {
   res.render('logSignPage',{error: 'user is not exist'})
  } else {
   const checkPassword=await bcrypt.compareSync(req.body.password,checkUser.password);

   if(!checkPassword) {
      res.render('/logSignPage',{error:'user password is not correct'})
   } else {
      const userObj= {
         userName:checkUser.userName,
         firstName: checkUser.firstName,
         lastName:checkUser.lastName,
         email:checkUser.email,
      userId: checkUser._id
        }
      const userToken=jwt.sign({userObj},process.env.JWT_SECRET);
      console.log(userToken);
      res.cookie('userToken',userToken,{httpOnly:true});
      res.redirect('/main')
   }

  }

}


const logOut =(req,res)=> {

   res.clearCookie('userToken');
   res.redirect('/')

}













module.exports= {makeRegister,login,logOut};