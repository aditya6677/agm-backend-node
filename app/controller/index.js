const VehicleModel = require('../models/index');

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

module.exports = {
    getRc,
    addNewVehicle,
    updateVehicle,
    getRcList
}