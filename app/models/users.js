
const { usersSchema } = require('../schema/users');
const mongoose = require('mongoose');
const UsersModel = mongoose.model('users', usersSchema);

const userLogin = (user,pass) =>{
    return UsersModel.find({ userId: user, password : pass }).exec();
}

module.exports = {
    userLogin
}