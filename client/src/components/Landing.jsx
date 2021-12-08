import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

const Landing = (props) => {
  return (
    <div className={styles.landing}>
      <Link to="/home">
        <button className={styles.btnLanding}> Ingresar </button>
      </Link>
    </div>
  );
};

export default Landing;
