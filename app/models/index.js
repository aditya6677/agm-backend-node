const { Vehicle } = require('../schema/rto');
const mongoose = require('mongoose');

const VehicleModel = mongoose.model('vehicles', Vehicle);

const addNewVehicle = (rcInfo) => {
    const newDoc = new VehicleModel(rcInfo);
    let saveObj = newDoc.save()
        .then((res) => res)
        .catch(() => false)
    return saveObj;
}

module.exports = {
    addNewVehicle
}