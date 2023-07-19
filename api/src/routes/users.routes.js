const { Router } = require("express");
const userAllCtrl = require('../controllers/users/userAllCtrl.js')

const userRouters = Router();

userRouters.get('/', userAllCtrl);

module.exports = userRouters;