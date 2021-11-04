const VehicleModel = require('../models/index');
const moment = require('moment');

const getRc = async (req, res) => {
    let vehList = await VehicleModel.findByMobOrRc(req.body.rcNumber);
    return res.send(vehList);
}

const addNewVehicle = async (req, res) => {
    let rc = req.body.info.rcNumber || null;
    let isrc = await VehicleModel.findByRc(rc);

    if (isrc && isrc.length > 0) {
        res.json({
            status: 404,
            message: "RC Number Already Exist"
        });
        return;
    }

    VehicleModel.addNewVehicle(req.body.info).then((result) => {
        return result ? res.json({
            status: 200,
            message: "Vehicle Added Successfully"
        }) : res.json({
            status: 404,
            message: "Vehicle Adding Failed"
        })
    })
        .catch((err) => {
            res.json({
                status: 404,
                message: 'Vehicle Update Failed'
            });
            return;
        })
}

const updateVehicle = (req, res) => {
    let id = req.body.info._id || null;
    
    if (id) {
        VehicleModel.updateVehicle(id, req.body.info)
            .then((result) => {
                res.json({
                    status: 200,
                    message: 'Vehicle Update Successfull'
                });
                return;
            })
            .catch((err) => {
                res.json({
                    status: 404,
                    message: 'Vehicle Update Failed'
                });
                return;
            })
    }else{
        res.json({
            status: 404,
            message: 'Vehicle Number Invalid'
        });
        return;
    }

}

const getRcList = (req,res) => {
    VehicleModel.getRcList()
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

const getInfo = async (req,res) => {
    const tep = await VehicleModel.getTodayExpPUC();
    let PUC = 0;
    let FIT = 0;
    let INS = 0;
    let total = 0;
    let today = 0;
    if(tep && tep.length > 0){
        total = tep.length;
        for(let data of tep){
            if(data.pucExpiry){
                let diff = moment(data.pucExpiry).diff(new Date(), 'days');
                if(diff >= 0 && diff <= 7){
                    PUC++;
                }
            }

            if(data.fitnessExpiry){
                let diff = moment(data.fitnessExpiry).diff(new Date(), 'days');
                if(diff >= 0 && diff <= 7){
                    FIT++;
                }
            }

            if(data.insuranceExpiry){
                let diff = moment(data.insuranceExpiry).diff(new Date(), 'days');
                if(diff >= 0 && diff <= 7){
                    INS++;
                }
            }

            if(data.date){
                let diff = moment(data.date).diff(new Date(), 'days');
                if(diff === 0){
                    today++;
                }
            }

            if(data.createdAt){
                let diff = moment(data.createdAt).diff(new Date(), 'days');
                if(diff === 0){
                    today++;
                }
            }

            if(data.modifiedAt){
                let diff = moment(data.modifiedAt).diff(new Date(), 'days');
                if(diff === 0){
                    today++;
                }
            }
        }
    }



    let result = {
        'puc' : PUC,
        'fit' : FIT,
        'ins' : INS,
        'total' : total,
        'today' : today
    }

    res.json({
        status: 200,
        message: 'Success',
        info : result
    });
    return;
    
}

module.exports = {
    getRc,
    addNewVehicle,
    updateVehicle,
    getRcList,
    getInfo
}