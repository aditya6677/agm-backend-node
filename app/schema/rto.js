const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema ({
    rcId : ObjectId,
    Name : {
        type : String,
        require : true
    },
    Mobile : {
        type : String,
        require : true
    },
    Vehicle : {
        type : String,
        require : true
    },
    Medium : {
        type : String,
        require : false
    },
    Address : {
        type : String,
        require : false
    },
    PUCC : {
        type : String,
        require : false
    },
    Insurance : {
        type : String,
        require : false
    }
});

module.exports = {
    user
}