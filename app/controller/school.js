const StudentModel = require('../models/school');

const addNewStudent = (req,res) => {
    let student = req.body;
    if(student){
        StudentModel.addNewStudent(student)
        .then(result => {
            return res.status(200).json({
                status: 200,
                data : result
            });
            
        })
        .catch(e => {
            return res.status(400).json({
                status: 400,
                message: "Unable to save data"
            });
        })
    }
}

const getAllStudents = (req,res) => {
    StudentModel.getAllStudents()
    .then((result) => {
        res.json({
            status: 200,
            message: 'Success',
            info : result
        });
        return;
    })
    .catch((e)=>{
        res.json({
            status: 404,
            message: 'Failed to Get List'
        });
        return;
    })
}

module.exports = {
    addNewStudent,
    getAllStudents
}