const { Router } = require("express");
const godsAllCreateCtrl = require('../controllers/gods/godsAllCreateCtrl.js');
const godsAllCtrl = require('../controllers/gods/godsAllCtrl.js');

const godsRoutes = Router()

godsRoutes.get('/', godsAllCtrl);
godsRoutes.post('/', godsAllCreateCtrl);

module.exports = godsRoutes;