const usersModel = require('../models/users');

const checkUserHeaders = (req,res,next) =>{

    if(req.headers.user){
        req.userId = Number(req.headers.user);
        next();
    }else{
        res.status(401).json({message: "Please provide valid user"});
    }
}


const checkExistUser =(req,res,next) =>{
    req.user = await userModel.getUser(req.userId)
    if(req.user){
        next();
    }else{
        res.status(401).json({message: "User is not recognized"})
    }
};

module.exports = {
    checkUserHeaders,
    checkUserHeaders
}