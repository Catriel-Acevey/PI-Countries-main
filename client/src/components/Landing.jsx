import React from "react";
import { Link } from "react-router-dom";

const Landing = (props) => {
  return (
    <div>
      <h1> Soy Landing en "/" </h1>
      <Link to="/home">
        <button> Ingresar </button>
      </Link>
    </div>
  );
};

export default Landing;
