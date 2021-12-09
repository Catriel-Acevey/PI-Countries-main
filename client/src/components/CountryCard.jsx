import React from "react";
import styles from "./CountryCard.module.css";

const CountryCard = ({ name, continent, flag_image }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={flag_image} alt="flag not found" />
        <h3>{name}</h3>
        <h4>{continent}</h4>
        <p> Details.. </p>
      </div>
    </div>
  );
};

export default CountryCard;
