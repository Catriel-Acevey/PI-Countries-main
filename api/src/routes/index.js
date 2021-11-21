const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require("axios");
const { Country, Activity, countries_activities } = require("../db.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const obtenerPaises = async () => {
  const paises = axios.get("https://restcountries.com/v3/all");
  console.log(paises);
  return paises; //revisar
};

module.exports = router;
