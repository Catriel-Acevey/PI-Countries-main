// const { Router } = require("express");
// // Importar todos los routers;
// // Ejemplo: const authRouter = require('./auth.js');
// const { Op } = require("sequelize");
// const axios = require("axios");
// const { Country, Activity, countries_activities } = require("../db.js");

// const router = Router();

// // Configurar los routers
// // Ejemplo: router.use('/auth', authRouter);

// //revisar los include model

// module.exports = router;
const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRoute = require("./country");
const activityRoute = require("./activity");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", countryRoute);
router.use("/activity", activityRoute);

module.exports = router;
