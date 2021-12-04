import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  postActivity,
  getNameCountriesForm,
  clearNameCountriesForm,
} from "../actions";

const Activity = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  console.log("A Details me llega por props: ", props);

  const country = useSelector((state) => state.countriesForm);

  const [name, setName] = useState("");
  const [nameCountry, setNameCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [countriesIds, setCountriesIds] = useState([]);

  return (
    <div>
      <h1> Soy Activity en "/home/activity"</h1>
    </div>
  );
};

export default Activity;
