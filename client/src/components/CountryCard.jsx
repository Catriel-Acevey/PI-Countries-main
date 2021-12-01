import React from "react";
import { Link } from "react-router-dom";

const CountryCard = () => {
  return (
    <div>
      <h1>Soy un CountryCard</h1>
      <Link to="/home/0">
        <button> boton de card </button>
      </Link>
    </div>
  );
};

export default CountryCard;
