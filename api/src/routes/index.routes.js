const { Router } = require("express");
const userRouters = require('./users.routes.js');


const router = Router();

router.use('/users', userRouters);


module.exports = router;
