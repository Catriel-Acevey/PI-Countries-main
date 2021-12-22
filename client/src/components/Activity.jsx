import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import CountryCard from "./CountryCard";
import validate from "./../validations/validateActivity";
import {
  postActivity,
  getNameCountriesForm,
  clearNameCountriesForm,
} from "../actions";
import styles from "./Activity.module.css";

const SEASON = {
  SUMMER: "Verano",
  AUTUMN: "Otoño",
  WINTER: "Invierno",
  SPRING: "Primavera",
};
const ORDER = {
  ASCENDENTE: "ASC",
  DESCENDENTE: "DESC",
};
const ORDER_BY = {
  NAME: "name",
  POPULATION: "population",
  AREA: "area",
};

const Activity = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  // console.log("A Details me llega por props: ", props);

  const countriesForm = useSelector((state) => state.countriesForm);

  const [data, setData] = useState({
    name: "",
    difficulty: 1,
    season: SEASON.SUMMER,
    duration: "",
    nameCountry: "",
    countriesIds: [],
  });
  let [error, setError] = useState({});
  const [countries, setCountries] = useState([]);
  // const [countriesIds, setCountriesIds] = useState([]);

  useEffect(() => {
    setCountries([...countries, ...countriesForm]);
    // setCountriesIds([...new Set(countries.map((c) => c.ID))]);
    setData({
      ...data,
      countriesIds: [...new Set(countries.map((c) => c.ID))],
    });
  }, [dispatch, countriesForm]);
  useEffect(() => {
    setData({
      ...data,
      countriesIds: [...new Set(countries.map((c) => c.ID))],
    });
  }, [dispatch, countries]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });

    setError(validate({ ...data, [e.target.name]: e.target.value }));
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(
      postActivity(
        data.name,
        data.difficulty,
        data.duration,
        data.season,
        data.countriesIds
      )
    );
    alert("Actividad creada con exito");
    dispatch(clearNameCountriesForm());
    history.push("/home");
  };

  const getCountryName = (e) => {
    e.preventDefault();
    dispatch(
      getNameCountriesForm(ORDER_BY.NAME, ORDER.ASCENDENTE, data.nameCountry)
    );
  };
  const deleteCountry = (e, id) => {
    e.preventDefault();
    setCountries(countries.filter((c) => c.ID !== id));
    // setCountriesIds([...new Set(countries.map((c) => c.ID))]);
    setData({
      ...data,
      countriesIds: [...new Set(countries.map((c) => c.ID))],
    });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => submit(e)}>
        <div className={styles.formRegister}>
          <input
            name={"name"}
            placeholder=" Name "
            className={
              styles.controls +
              " " +
              styles.controlsInput +
              " " +
              (error.name && styles.danger)
            }
            type="text"
            value={data.name}
            onChange={handleInputChange}
          />
          {error.name && <p className={styles.danger}>{error.name}</p>}
          <select
            name={"difficulty"}
            className={styles.controls + " " + styles.difficulty}
            onChange={handleInputChange}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <select
            name={"season"}
            className={styles.controls + " " + styles.season}
            onChange={handleInputChange}
          >
            <option value={SEASON.SUMMER}>{SEASON.SUMMER}</option>
            <option value={SEASON.AUTUMN}>{SEASON.AUTUMN}</option>
            <option value={SEASON.WINTER}>{SEASON.WINTER}</option>
            <option value={SEASON.SPRING}>{SEASON.SPRING}</option>
          </select>
          <input
            name={"duration"}
            placeholder=" Duration "
            className={
              styles.controls +
              " " +
              styles.controlsInput +
              " " +
              (error.duration && styles.danger)
            }
            type="text"
            value={data.duration}
            onChange={handleInputChange}
          />
          {error.duration && <p className={styles.danger}>{error.duration}</p>}
          <input
            name={"nameCountry"}
            placeholder="Nombre del pais"
            className={styles.controls + " " + styles.search}
            type="text"
            value={data.nameCountry}
            onChange={handleInputChange}
          />
          <button
            className={styles.btnActivity}
            onClick={(e) => getCountryName(e)}
          >
            {" "}
            Buscar{" "}
          </button>
          {error.countriesIds && (
            <p className={styles.danger}>{error.countriesIds}</p>
          )}
          <button
            className={styles.btnSend}
            type="submit"
            disabled={error.name || error.duration || error.countriesIds}
          >
            Enviar
          </button>
        </div>
        <div className={styles.containerCountry}>
          {countries.map((country) => {
            return (
              <Link
                to=""
                key={country.ID}
                onClick={(e) => deleteCountry(e, country.ID)}
              >
                <CountryCard
                  name={country.name}
                  continent={country.continent}
                  flag_image={country.flag_image}
                />
              </Link>
            );
          })}
        </div>
      </form>
    </div>
  );
};

export default Activity;
