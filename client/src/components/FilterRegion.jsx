import React from "react";
import { filterRegion } from "../actions/index";
import { useDispatch } from "react-redux";
import styles from "./FilterRegion.module.css";

export default function FilterRegion({ handleFilterRegion }) {
  const dispatch = useDispatch();
  function changeFilterRegion(e) {
    e.preventDefault();
    dispatch(filterRegion(e.target.value));
  }
  return (
    <div>
      <select
        className={styles.controls}
        onChange={(e) => changeFilterRegion(e)}
      >
        <option value="All">All</option>

        <option value="Africa">Africa</option>
        <option value="South America">South America</option>
        <option value="North America">North America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
