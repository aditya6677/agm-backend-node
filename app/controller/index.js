const VehicleModel = require('../models/index');

const getRc = (req, res) => {
    console.log(req.body.rcNumber);
    let vehicleInfo = {
        rcNumber: '7676',
        name: 'Aditya',
        pucIssue: null,
        pucExpiry: null,
        fitnessIssue: null,
        fitnessExpiry: null,
        insuranceIssue: null,
        insuranceExpiry: null
    }
    let data = [];
    data.push(vehicleInfo);
    data.push(vehicleInfo);
    return res.send(data);
}

const addNewVehicle = (req, res) => {
    VehicleModel.addNewVehicle(req.body.info).then((result) => {
        return result ? res.json({
            status : 200,
            message : "Saved"
        }) : res.json({
            status : 404,
            message : "Saving Failed"
        })
    })
    .catch((err)=>{
        res.json({
            status : 404,
            message : 'Vehicle Update Failed'
        });
        return;
    })
}

module.exports = {
    getRc,
    addNewVehicle
}