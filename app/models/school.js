const { Student } = require('../schema/school');
const mongoose = require('mongoose');

const StudentModel = mongoose.model('students', Student);

const addNewStudent = (info) => {
    const newDoc = new StudentModel(info);
    let saveObj = newDoc.save()
        .then((res) => res)
        .catch(() => false)
    return saveObj;
}

const getAllStudents = () => {
    return StudentModel.find({}).exec();
}

module.exports = {
    addNewStudent,
    getAllStudents
}