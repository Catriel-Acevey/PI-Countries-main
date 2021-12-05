import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
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
