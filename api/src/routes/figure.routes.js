const { Router } = require("express");
const figuresAllCreateCtrl = require('../controllers/HistoricalFigures/figuresAllCreteCtrl.js');
const figuresAllCtrl = require('../controllers/HistoricalFigures/figuresAllCtrl.js');

const figuresRoutes = Router()

figuresRoutes.get('/', figuresAllCtrl);
figuresRoutes.post('/', figuresAllCreateCtrl);

module.exports = figuresRoutes;