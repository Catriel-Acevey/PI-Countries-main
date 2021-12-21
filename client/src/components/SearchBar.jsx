import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCountries } from "../actions";
import styles from "./SearchBar.module.css";

const SearchBar = ({ orderBy, order }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const inputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const runClick = (e) => {
    e.preventDefault();
    dispatch(getNameCountries(orderBy, order, name));
  };

  return (
    <div>
      <input
        className={styles.controls}
        type="text"
        placeholder="Search"
        onChange={(e) => inputChange(e)}
      ></input>
      <button
        type="submit"
        className={styles.btnActivity}
        onClick={(e) => runClick(e)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
