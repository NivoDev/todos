const usersModel = require('../service/users');

const checkUserHeaders = (req,res,next) =>{

    if(req.headers.user){
        req.userId = req.headers.user;
        next();
    }else{
        res.status(401).json({message: "Please provide valid user"});
    }
}


const checkExistUser = async (req,res,next) =>{
    req.user = await userModel.getUser(req.userId)
    if(req.user){
        next();
    }else{
        res.status(401).json({message: "User is not recognized"})
    }
};

module.exports = {
    checkUserHeaders,
    checkExistUser
}