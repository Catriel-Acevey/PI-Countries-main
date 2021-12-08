import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <NavLink to="/home" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/home/activity" activeClassName="active">
        Create Activity
      </NavLink>
    </div>
  );
};

export default Nav;
