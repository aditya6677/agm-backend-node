const express = require('express');
const router = express.Router();

const agService = require('./controller');

router.post('/getRcDetails', agService.getRc);
router.post('/addNewVehicle', agService.addNewVehicle);
router.post('/updateVehicle', agService.updateVehicle);
router.get('/getRcList', agService.getRcList);
router.get('/info', agService.getInfo);

module.exports = router;
