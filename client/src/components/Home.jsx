import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import CountryCard from "./CountryCard";

const Home = () => {
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
