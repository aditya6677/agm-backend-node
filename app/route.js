const express = require('express');
const router = express.Router();

const agService = require('./controller');

router.post('/getRcDetails', agService.getRc);
router.post('/addNewVehicle', agService.addNewVehicle)

module.exports = router;
