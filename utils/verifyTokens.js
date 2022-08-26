const jwt = require("jsonwebtoken");

exports.verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return next(res.status(401).json({
            success:false,
            message:"You are not authenticated"
        }));
    }
    jwt.verify(token,process.env.JWT,(error,user)=>{
        if(error)return res.status(404).json({success:false,message:"token is not valid"});
        
        req.user=user;
        next();
    });
}


exports.verifyUser = (req,res,next)=>{
   veryfyToken(req,res,()=>{
if(req.user.id===req.params.id ||req.user.isAdmin){
    next();
}else{

}
   });
}