const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Op } = require("sequelize");
const axios = require("axios");
const { Country, Activity, countries_activities } = require("../db.js");

const router = Router();

const ITEMS_PER_PAGE = 9;

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApiCountries = async () => {
  const paises = await axios.get("https://restcountries.com/v3/all");
  return paises.data;
};
const emptyDb = async () => {
  let db = await Country.findAll();
  if (!db.length) return true;
  return false;
};
const rowCountry = (country) => {
  const {
    cca3,
    name,
    flags,
    continents,
    capital,
    subregion,
    area,
    population,
  } = country;
  if (!cca3 || !name || !flags || !continents || !capital)
    throw new Error("no recive todos los campos necesarios");
  return {
    ID: cca3,
    name: name.common,
    flag_image: flags[1],
    continent: continents[0],
    capital: capital[0],
    subregion: subregion ? subregion : null,
    area: area ? area : 0,
    population: population ? population : 0,
  };
};
const fillDb = async (apiCountries) => {
  try {
    // console.log("La cantidad de paises q me viene son: ", apiCountries.length);
    // if (await emptyDb()) {
    const countriesLength = apiCountries.length;
    for (let i = 0; i < countriesLength; i++) {
      try {
        const country = rowCountry(apiCountries[i]);

        await Country.create(country);
      } catch (err) {
        console.log(err);
      }

      // }
      // console.log("La cantidad de paises en la db es: ", i);
    }
  } catch (err) {
    console.log(err);
  }
};
const getAll = async () => {
  try {
    let countries = await Country.findAll();
    return countries;
  } catch (err) {
    console.log(err);
  }
};
//revisar los include model
const getCountries = async (query) => {
  const { name, filter, page, order, orderBy } = query;
  if (name) {
    try {
      let countries = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: "%" + name + "%",
          },
        },
      });
      return countries;
    } catch (err) {
      console.log(err);
    }
  } else if (filter) {
    try {
      let countries = await Country.findAll({
        where: {
          continent: filter,
        },
        limit: ITEMS_PER_PAGE,
        offset: page * ITEMS_PER_PAGE,
        order: [[orderBy, order]],
        include: { model: Activity },
      });
      return countries;
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      let countries = await Country.findAll({
        limit: ITEMS_PER_PAGE,
        offset: page * ITEMS_PER_PAGE,
        order: [[orderBy, order]],
        include: { model: Activity },
      });
      return countries;
    } catch (err) {
      console.log(err);
    }
  }
};
const getCountry = async (id) => {
  try {
    let country = await Country.findByPk(id);
    return country;
  } catch (err) {
    console.log(err);
  }
};
const createActivity = async (body) => {
  try {
    let [activity, create] = await Activity.findOrCreate({
      where: {
        name: body.name,
        difficulty: body.difficulty,
        duration: body.duration,
        season: body.season,
      },
    });
    await activity.setCountries(body.countriesIds);
    return activity;
  } catch (err) {
    console.log(err);
  }
};

const deleteDbData = async () => {
  try {
    await Country.destroy({
      where: {},
    });
  } catch (err) {
    console.log(err);
  }
};

router.get("/countries", async (req, res) => {
  const apiCountries = await getApiCountries();

  // console.log("los paises de la api: ", apiCountries);

  if (await emptyDb()) await fillDb(apiCountries);

  const countries = await getCountries(req.query);

  res.json(countries);
});

router.get("/countries/:id", async (req, res) => {
  const country = await getCountry(req.params.id);
  res.json(country);
});

router.post("/activity", async (req, res) => {
  // console.log("El body que me pasan es: ", req.body);
  const activity = await createActivity(req.body);
  res.json(activity);
});

module.exports = router;
