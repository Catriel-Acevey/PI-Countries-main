import React from "react";

const CountryCard = ({ name, continent, flag_image }) => {
  return (
    <div>
      <img src={flag_image} alt="flag not found" />
      <h3>{name}</h3>
      <h3>{continent}</h3>
    </div>
  );
};

export default CountryCard;
