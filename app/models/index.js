const { Vehicle } = require('../schema/vehicle');
const mongoose = require('mongoose');

const VehicleModel = mongoose.model('vehicles', Vehicle);

const addNewVehicle = (rcInfo) => {
    const newDoc = new VehicleModel(rcInfo);
    let saveObj = newDoc.save()
        .then((res) => res)
        .catch(() => false)
    return saveObj;
}

const findByMobile = (mobile) => {
    return VehicleModel.find({ mobile: mobile }).exec();
}

const findByRc = async (rc) => {
    return VehicleModel.find({ rcNumber: rc }).exec();
}

const findByMobOrRc = (rc) => {
    return VehicleModel.find(
        {
            $or: [
                { 'mobile': rc },
                { 'rcNumber': rc }
            ]
        }
    ).exec();
}

const updateVehicle = (filter,update) => {
    return VehicleModel.findOneAndUpdate({rcNumber : filter}, {...update}, {useFindAndModify: false}).exec();
}

const getRcList = () => {
    return VehicleModel.find({}).exec();
}

module.exports = {
    addNewVehicle,
    findByMobile,
    findByRc,
    findByMobOrRc,
    updateVehicle,
    getRcList
}