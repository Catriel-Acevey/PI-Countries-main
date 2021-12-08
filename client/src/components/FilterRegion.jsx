import React from "react";
import { filterRegion } from "../actions/index";
import { useDispatch } from "react-redux";
//spoiler: antartida no tiene paises, pero si es un continente, por eso lo dejamos nomas

export default function FilterRegion({ handleFilterRegion }) {
  const dispatch = useDispatch();
  function changeFilterRegion(e) {
    e.preventDefault();
    dispatch(filterRegion(e.target.value));
  }
  return (
    <div>
      <select onChange={(e) => changeFilterRegion(e)}>
        <option value="All">All</option>

        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
