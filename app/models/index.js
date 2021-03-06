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

const updateVehicle = (id,update) => {
    return VehicleModel.findOneAndUpdate({_id : id}, {...update}, {useFindAndModify: false}).exec();
}

const getRcList = () => {
    return VehicleModel.find({}).exec();
}

const getTodayExpPUC = () => {
    return VehicleModel.find({}).exec();
}

const getPucList = () => {
    return VehicleModel.find({"pucExpiry":{$ne:null}}).exec();
}

const getFitnessList = () => {
    return VehicleModel.find({"fitnessExpiry":{$ne:null}}).exec();
}

const getInsuranceList = () => {
    return VehicleModel.find({"insuranceExpiry":{$ne:null}}).exec();
}

module.exports = {
    addNewVehicle,
    findByMobile,
    findByRc,
    findByMobOrRc,
    updateVehicle,
    getRcList,
    getTodayExpPUC,
    getPucList,
    getFitnessList,
    getInsuranceList
}