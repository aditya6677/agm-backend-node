const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

let Student = new Schema ({ 
    enrollmnentNo : {
        type : Number
    },
    studentName : {
        type : String,
        require : true
    },
    fatherName : {
        type : String
    },
    mobileNumber : {
        type : String,
        require : true
    },
    form5Serial : {
        type : String,
        require : false
    },
    trainingEndDate : {
        type : String,
        require : true
    },
    trainigStartDate : {
        type : String,
        require : true
    },
    learningNumber : {
        type : String,
        require : false
    },
    dlNumber : {
        type : String,
        require : false
    },
    address : {
        type : String,
        require : false
    },
    dob : {
        type : String,
        require : false
    }
})

Student.plugin(AutoIncrement, {inc_field: 'enrollmnentNo'});
Student.set('timestamps', true);

module.exports = {
    Student
}