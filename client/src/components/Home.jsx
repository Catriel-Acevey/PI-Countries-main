import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../actions";
import SearchBar from "./SearchBar";
import CountryCard from "./CountryCard";

const Home = () => {
  const dispatch = useDispatch();

  const [pages, setPages] = useState(0);
  const [orderBy, setOrderBy] = useState("name");
  const [order, setOrder] = useState("ASC");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(getCountries(pages, orderBy, order, filter));
  }, [dispatch, pages, orderBy, order, filter]);

  const countries = useSelector((state) => state.countries);

  return (
    <div>
      <h1> Soy Home en "/home" </h1>
      <Link to="/home/activity">
        <button> Crear actividad </button>
      </Link>
      <SearchBar />
      <CountryCard />
    </div>
  );
};

export default Home;
