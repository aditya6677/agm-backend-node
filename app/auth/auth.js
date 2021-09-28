let jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    let token = req.headers['x-access-token'];
    if(!token){
        res.status(401).json({
            status : false,
            message : 'Unauthorized'
        });
        return;
    }
    jwt.verify(token,'worldIsFullOfDeveloper',(err,decoded)=>{
        if(err){
            res.status(401).json({
                status : false,
                message : 'Unauthorized && Invalid Token'
            });
            return;
        }else{
            req.user = decoded;
            next();
        }
    });
} 