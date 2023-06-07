const express = require('express');
const {checkToken,checkMainPage}=require('../middleware/middleware')
const router=express.Router();

const {getloginSignUpPage,getMainPage,sendPost,getPost}= require('../controller/controller')
 
const {makeRegister,login,logOut}= require('../controller/userController')


router.get('/',checkToken, getloginSignUpPage)








router.post('/userRegister', makeRegister);

router.post('/userlogin', login)


router.get('/main',checkMainPage,getMainPage,getPost)

router.post('/logOut', logOut)

router.post('/sendPost', sendPost)


module.exports=router;