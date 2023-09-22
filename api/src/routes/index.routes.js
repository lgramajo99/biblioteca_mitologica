const { Router } = require("express");
const userRouters = require('./users.routes.js');
const creaturesRoutes = require('./creatures.routes.js');
const godsRoutes = require('./gods.routes.js');
const figureRoutes = require('./figure.routes.js');

const router = Router();

router.use('/users', userRouters);
// router.use('/creatures', creaturesRoutes);
router.use('/gods', godsRoutes);
router.use('/figures', figureRoutes);

module.exports = router;
