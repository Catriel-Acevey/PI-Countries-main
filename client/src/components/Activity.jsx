import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import CountryCard from "./CountryCard";
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

const Activity = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  // console.log("A Details me llega por props: ", props);

  const countriesForm = useSelector((state) => state.countriesForm);

  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState(1);
  const [duration, setDuration] = useState("");
  const [season, setSeason] = useState("");
  const [nameCountry, setNameCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [countriesIds, setCountriesIds] = useState([]);

  useEffect(() => {
    setCountries([...countries, ...countriesForm]);
    setCountriesIds([...new Set(countries.map((c) => c.ID))]);
  }, [dispatch, countriesForm]);
  useEffect(() => {
    setCountriesIds([...new Set(countries.map((c) => c.ID))]);
  }, [dispatch, countries]);

  const submit = (e) => {
    e.preventDefault();
    dispatch(postActivity(name, difficulty, duration, season, countriesIds));
    alert("Actividad creada con exito");
    dispatch(clearNameCountriesForm());
    history.push("/home");
  };

  const changeNameCountry = (e) => {
    e.preventDefault();
    setNameCountry(e.target.value);
  };
  const changeName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const changeDifficulty = (e) => {
    e.preventDefault();
    setDifficulty(e.target.value);
  };
  const changeDuration = (e) => {
    e.preventDefault();
    setDuration(e.target.value);
  };
  const changeSeason = (e) => {
    e.preventDefault();
    setSeason(e.target.value);
  };
  const getCountryName = (e) => {
    e.preventDefault();
    dispatch(getNameCountriesForm(nameCountry));
  };
  const deleteCountry = (e, id) => {
    e.preventDefault();
    setCountries(countries.filter((c) => c.ID !== id));
    setCountriesIds([...new Set(countries.map((c) => c.ID))]);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => submit(e)}>
        <div className={styles.formRegister}>
          <input
            className={styles.controls + " " + styles.controlsInput}
            type="text"
            placeholder=" Name "
            onChange={(e) => changeName(e)}
          ></input>
          <select
            className={styles.controls + " " + styles.difficulty}
            onChange={(e) => {
              changeDifficulty(e);
            }}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <select
            className={styles.controls + " " + styles.season}
            onChange={(e) => {
              changeSeason(e);
            }}
          >
            <option value={SEASON.SUMMER}>{SEASON.SUMMER}</option>
            <option value={SEASON.AUTUMN}>{SEASON.AUTUMN}</option>
            <option value={SEASON.WINTER}>{SEASON.WINTER}</option>
            <option value={SEASON.SPRING}>{SEASON.SPRING}</option>
          </select>
          <input
            className={styles.controls + " " + styles.controlsInput}
            type="text"
            placeholder=" Duration "
            onChange={(e) => changeDuration(e)}
          ></input>
          <input
            className={styles.controls + " " + styles.search}
            type="text"
            placeholder="Nombre del pais"
            onChange={(e) => changeNameCountry(e)}
          ></input>
          <button
            className={styles.btnActivity}
            onClick={(e) => getCountryName(e)}
          >
            {" "}
            Buscar{" "}
          </button>
          <button className={styles.btnActivity} type="submit">
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
                  //Revisar warning con la key
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
