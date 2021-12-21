import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <NavLink
        exact
        to="/home"
        className={styles.link}
        activeClassName={styles.active}
      >
        <p>Home</p>
      </NavLink>
      <NavLink
        to="/home/activity"
        className={styles.link}
        activeClassName={styles.active}
      >
        {/* <img src="../../img/activity.png" /> */}
        <p>Create Activity</p>
      </NavLink>
    </div>
  );
};

export default Nav;
