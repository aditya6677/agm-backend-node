const express = require('express');
const router = express.Router();

const agService = require('./controller');
const studentService = require('./controller/school')
const dashboardService = require('./controller/dashboard');

router.post('/getRcDetails', agService.getRc);
router.post('/addNewVehicle', agService.addNewVehicle);
router.post('/updateVehicle', agService.updateVehicle);
router.get('/getRcList', agService.getRcList);
router.get('/info', agService.getInfo);
router.post('/addNewStudent', studentService.addNewStudent);
router.get('/students', studentService.getAllStudents)
router.get('/dashboard', dashboardService.Dashboard);

module.exports = router;
