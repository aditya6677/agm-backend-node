const agService = require('./controller');
module.exports = function (app) {
    app.get('/api/getRcDetails', agService.getRc);
    app.post('/api/updateRcDetails', agService.updateRc);
};