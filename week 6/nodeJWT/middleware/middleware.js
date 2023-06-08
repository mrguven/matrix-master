
const jwt = require('jsonwebtoken');






const checkToken = (req,res,next)=> {
       const isToken= req.cookies.userToken;
    if(!isToken){
        next()
    }else {
        res.redirect('/main')
    }


}


const checkTokenPage = async(req,res,next) => {
    const isToken= req.cookies.userToken;

    if(isToken){
        await  jwt.verify(isToken, process.env.JWT_SECRET,  (err, userInfo) => {
            if(err){
                console.log(err);
            } else {
               res.locals.user = userInfo.userObj.userName;
              
                
                next();
            }
        })
    }else {
        res.locals.user = false;
        res.redirect('/')
    }

}


const ifToken = async(req,res,next) => {
    const isToken= req.cookies.userToken;

    if(isToken){
        
                
                next();
            
        
    }else {
       
        res.redirect('/')
    }

}







module.exports= {checkToken,checkTokenPage,ifToken};