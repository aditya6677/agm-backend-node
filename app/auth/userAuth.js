const express = require('express');
const router = express.Router();

const userService = require('../controller/user');

router.post('/login', userService.login);

module.exports = router;