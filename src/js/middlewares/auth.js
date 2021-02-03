const checkUserHeaders = (req,res,next) =>{

    if(req.headers.userid){
        req.userId = Number(req.headers.userid);
        next();
    }else{
        res.status(401).json({message: "Please provid valid user"});
    }
}


const checkExistUser =(req,res,next) =>{
    req.user = await userModel.getUser(req.userid)
    if(req.user){
        next();
    }else{
        res.status(401).json({message: "User is not recognized"})
    }
};
