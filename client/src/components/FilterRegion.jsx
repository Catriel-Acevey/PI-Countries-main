import React from "react";
import { filterRegion } from "../actions/index";
import { useDispatch } from "react-redux";
import styles from "./FilterRegion.module.css";

const FILTER_CONTINENT = {
  ALL: "",
  SOUTH_AMERICA: "South America",
  AFRICA: "Africa",
  EUROPE: "Europe",
  ASIA: "Asia",
  NORTH_AMERICA: "North America",
  OCEANIA: "Oceania",
  ANTARCTICA: "Antarctica",
};

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
        <option value={FILTER_CONTINENT.ALL}>All</option>

        <option value={FILTER_CONTINENT.SOUTH_AMERICA}>
          {FILTER_CONTINENT.SOUTH_AMERICA}
        </option>
        <option value={FILTER_CONTINENT.NORTH_AMERICA}>
          {FILTER_CONTINENT.NORTH_AMERICA}
        </option>
        <option value={FILTER_CONTINENT.AFRICA}>
          {FILTER_CONTINENT.AFRICA}
        </option>
        <option value={FILTER_CONTINENT.EUROPE}>
          {FILTER_CONTINENT.EUROPE}
        </option>
        <option value={FILTER_CONTINENT.ASIA}>{FILTER_CONTINENT.ASIA}</option>
        <option value={FILTER_CONTINENT.OCEANIA}>
          {FILTER_CONTINENT.OCEANIA}
        </option>
        <option value={FILTER_CONTINENT.ANTARCTICA}>
          {FILTER_CONTINENT.ANTARCTICA}
        </option>
      </select>
    </div>
  );
}
