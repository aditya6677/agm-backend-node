const UserModel = require('../models/users');
let jwt = require('jsonwebtoken');

const login = async(req,res) => {
    const userId = req.body.userId || null;
    const password = req.body.password || null;
    if(userId && password){
        let [userInfo] = await UserModel.userLogin(userId,password);
        if(userInfo){
            let token = jwt.sign({username: userId} , 'worldIsFullOfDeveloper');
            res.status(200).send({
                status : 200,
                message : "Successfull",
                token : token
            });
            return;
        }else{
            res.json({
                status : 403,
                message : 'Unauthorized'
            });
            return;
        }
    }
    else{
        res.json({
            status : 403,
            message : 'Unauthorized'
        });
        return;
    }

}

module.exports = {
    login
}