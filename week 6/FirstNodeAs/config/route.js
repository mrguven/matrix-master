const express=require('express');

const router=express.Router();

const {getHomePage,getRegisterPage,
    getCommentPage,sendComment,
    getFullArticle,deleteComment,addCommentPage,
    getBackPage,getEditComment,updateComment,
    makeCommentPage,saveSubCom,getSubPost}= require('../controller/taskController');
const { update } = require('lodash');


router.get('/', getHomePage)

router.get('/register', getRegisterPage)

router.get('/comment', getCommentPage,getSubPost)

router.post('/sendComment', sendComment)

router.get('/fullarticle/:id', getFullArticle)



router.post('/deleteUser/:id', deleteComment)

router.get('/addComment', addCommentPage)

router.get('/back', getBackPage)


router.get('/editArticle/:id', getEditComment)

router.post('/updateComment/:id', updateComment)

router.get('/makeComment',makeCommentPage)

router.post('/sendSubComment',saveSubCom)

// router.get('/getSub',getSubPost)


module.exports= router