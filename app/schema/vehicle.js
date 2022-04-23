const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Vehicle = new Schema ({
    rcId : mongoose.Schema.ObjectId,
    rcNumber : {
        type : String,
        require : true
    },
    name : {
        type : String,
        require : true
    },
    mobile : {
        type : String,
        require : true
    },
    pucIssue : {
        type : String,
        require : false
    },
    pucExpiry : {
        type : String,
        require : false
    },
    fitnessIssue : {
        type : String,
        require : false
    },
    fitnessExpiry : {
        type : String,
        require : false
    },
    insuranceIssue : {
        type : String,
        require : false
    },
    insuranceExpiry : {
        type : String,
        require : false
    },
    date : {
        type : String,
        require : false
    },
    isDeleted : {
        type : Boolean,
        default : false
    }
});

Vehicle.set('timestamps', true);

module.exports = {
    Vehicle
}