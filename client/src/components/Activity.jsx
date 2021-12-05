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
    <div>
      <form onSubmit={(e) => submit(e)}>
        <input
          type="text"
          placeholder=" Name "
          onChange={(e) => changeName(e)}
        ></input>
        <select
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
        <input
          type="text"
          placeholder=" Duration "
          onChange={(e) => changeDuration(e)}
        ></input>
        <select
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
          type="text"
          placeholder="Nombre del pais"
          onChange={(e) => changeNameCountry(e)}
        ></input>
        <button onClick={(e) => getCountryName(e)}> Buscar </button>
        <div>
          {countries.map((country) => {
            return (
              <div key={country.ID}>
                <button onClick={(e) => deleteCountry(e, country.ID)}>X</button>
                <CountryCard
                  //Revisar warning con la key
                  name={country.name}
                  continent={country.continent}
                  flag_image={country.flag_image}
                />
              </div>
            );
          })}
        </div>
        <input type="submit" />
      </form>
      <Link to="/home">
        <button> Volver </button>
      </Link>
    </div>
  );
};

export default Activity;
