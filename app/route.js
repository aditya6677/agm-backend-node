const express = require('express');
const router = express.Router();

const agService = require('./controller');
const studentService = require('./controller/school')

router.post('/getRcDetails', agService.getRc);
router.post('/addNewVehicle', agService.addNewVehicle);
router.post('/updateVehicle', agService.updateVehicle);
router.get('/getRcList', agService.getRcList);
router.get('/info', agService.getInfo);
router.post('/addNewStudent', studentService.addNewStudent);
router.get('/students', studentService.getAllStudents)

module.exports = router;
