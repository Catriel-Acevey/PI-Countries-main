const { Router } = require("express");
const { Op } = require("sequelize");
const axios = require("axios");
const { Country, Activity, countries_activities } = require("../db.js");

const router = Router();

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
const getCountries = async (query) => {
  const { name, order, orderBy } = query;
  if (name) {
    try {
      let countries = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: "%" + name + "%",
          },
        },
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
    let country = await Country.findByPk(id, {
      include: { model: Activity },
    });
    return country;
  } catch (err) {
    console.log(err);
  }
};

router.get("/", async (req, res) => {
  const apiCountries = await getApiCountries();

  // console.log("los paises de la api: ", apiCountries);

  if (await emptyDb()) await fillDb(apiCountries);

  const countries = await getCountries(req.query);

  res.json(countries);
});

router.get("/:id", async (req, res) => {
  const country = await getCountry(req.params.id);
  res.json(country);
});

module.exports = router;
