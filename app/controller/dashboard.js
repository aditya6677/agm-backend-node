const VehicleModel = require('../models/index');
const StudentModel = require('../models/school');
const moment = require('moment');

const Dashboard = async(req, res) => {
    try{
        const total = (await VehicleModel.getRcList())
        const puccList = (await VehicleModel.getPucList())
        const fitList = (await VehicleModel.getFitnessList())
        const insList = (await VehicleModel.getInsuranceList())

        const totalStudent = (await StudentModel.getAllStudents())

        const expiredPuc = puccList.filter(x => moment(x.pucExpiry).diff(Date.now(), 'days') <=0 );
        const expiredFitness = fitList.filter(x => moment(x.fitnessExpiry).diff(Date.now(), 'days') <=0 );
        const expiredIns = insList.filter(x => moment(x.insuranceExpiry).diff(Date.now(), 'days') <=0 );
        const totalExpired = expiredPuc.length + expiredFitness.length + expiredIns.length;

        const weeklyExpiringPucc = puccList.filter(x => moment(x.pucExpiry).diff(Date.now(), 'days') >=0 &&  moment(x.pucExpiry).diff(Date.now(), 'days') <= 7);
        const weeklyExpiringFitness = fitList.filter(x => moment(x.fitnessExpiry).diff(Date.now(), 'days') >=0 &&  moment(x.fitnessExpiry).diff(Date.now(), 'days') <= 7);
        const weeklyExpiringInsurance = insList.filter(x => moment(x.insuranceExpiry).diff(Date.now(), 'days') >=0 &&  moment(x.insuranceExpiry).diff(Date.now(), 'days') <= 7);

        const todayPucc = puccList.filter(x => moment(x.date).diff(Date.now(), 'days') == 0 );
        const todayFit = fitList.filter(x => moment(x.date).diff(Date.now(), 'days') == 0 );
        const todayIns = insList.filter(x => moment(x.date).diff(Date.now(), 'days') == 0 ); 
        const totalToday = total.filter( x => {
            if(moment(x.date).diff(Date.now(), 'days') == 0)
                return true;

            if(x.updatedAt){
                const someday = moment(x.updatedAt).utcOffset("+05:30");
                if(moment(someday).diff(Date.now(), 'days') == 0)
                    return true
            }
            
            return false;
        });
        

        return res.status(200).send({
            status: 200,
            message: 'Successfull',
            data : {
                vehiclesData : { total : total.length, puccList : puccList.length, fitList : fitList.length, insList : insList.length },
                student : { totalStudent : totalStudent.length },
                expiredData : { totalExpired, expiredPuc : expiredPuc.length, expiredFitness : expiredFitness.length, expiredIns : expiredIns.length },
                weeklyExpiring : { weeklyExpiringPucc, weeklyExpiringFitness, weeklyExpiringInsurance },
                todayEntries : { totalToday : totalToday.length, todayPucc : todayPucc.length, todayFit : todayFit.length, todayIns : todayIns.length}
            }
        })
    }catch(e){
        res.status(404).json({
            status: 404,
            message: 'No Record Found'
        });
    }
    
}

module.exports = {
    Dashboard
}