const express = require('express');
const {checkToken,checkTokenPage,ifToken}=require('../middleware/middleware')
const router=express.Router();

const {getloginSignUpPage,getMainPage,sendPost,getPostPage}= require('../controller/controller')
 
const {makeRegister,login,logOut}= require('../controller/userController')


router.get('/',checkToken, getloginSignUpPage)








router.post('/userRegister', makeRegister);

router.post('/userlogin', login)


router.get('/main',checkTokenPage,getMainPage)

router.post('/logOut', logOut)

router.post('/sendPost/:id',ifToken, sendPost)


router.get('/post',checkTokenPage,getPostPage);


router.post('/deletePost',)

module.exports=router;