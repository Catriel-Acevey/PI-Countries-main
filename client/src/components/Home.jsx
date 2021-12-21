import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../actions";
import SearchBar from "./SearchBar";
import CountryCard from "./CountryCard";
import FilterRegion from "./FilterRegion";
import FilterActivity from "./FilterActivity";
import Paging from "./Paging";
import styles from "./Home.module.css";

const ORDER = {
  ASCENDENTE: "ASC",
  DESCENDENTE: "DESC",
};
const ORDER_BY = {
  NAME: "name",
  POPULATION: "population",
  AREA: "area",
};

const Home = () => {
  const dispatch = useDispatch();

  const [orderBy, setOrderBy] = useState(ORDER_BY.NAME);
  const [order, setOrder] = useState(ORDER.ASCENDENTE);
  //---------------------------------------------

  useEffect(() => {
    dispatch(getCountries(orderBy, order));
  }, [dispatch, orderBy, order]);

  const countries = useSelector((state) => state.countries);

  const changeOrderBy = (e) => {
    e.preventDefault();
    setOrderBy(e.target.value);
  };
  const changeOrder = (e) => {
    e.preventDefault();
    setOrder(e.target.value);
  };
  //---------------------------------------------
  const [page, setPage] = useState(1);
  const COUNTRIES_PER_PAGE = 9;
  const indexLastCountry = page * COUNTRIES_PER_PAGE;
  const indexFirstCountry = indexLastCountry - COUNTRIES_PER_PAGE;
  const currentCountries = countries.slice(indexFirstCountry, indexLastCountry);

  const paging = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div className={styles.containerHome}>
      <div className={styles.containerOptions}>
        <div>
          <select
            className={styles.controls}
            onChange={(e) => {
              changeOrderBy(e);
            }}
          >
            <option value={ORDER_BY.NAME}>Name</option>
            <option value={ORDER_BY.POPULATION}>population</option>
            <option value={ORDER_BY.AREA}>Area</option>
          </select>
        </div>
        <div>
          <select
            className={styles.controls}
            onChange={(e) => {
              changeOrder(e);
            }}
          >
            <option value={ORDER.ASCENDENTE}>Ascendente</option>
            <option value={ORDER.DESCENDENTE}>Descendente</option>
          </select>
        </div>

        <FilterRegion className={styles.controls} />
        <FilterActivity className={styles.controls} />
        <SearchBar orderBy={orderBy} order={order} />
      </div>
      <div>
        <Paging
          countriesPerPage={COUNTRIES_PER_PAGE}
          numberOfCountries={countries.length}
          paging={paging}
        />
      </div>
      <div className={styles.containerCountry}>
        {currentCountries.map((country) => {
          return (
            <div key={country.ID}>
              <Link to={"/home/" + country.ID}>
                <CountryCard
                  //Revisar warning con la key
                  name={country.name}
                  continent={country.continent}
                  flag_image={country.flag_image}
                />
              </Link>
            </div>
          );
        })}
        {/* Mostrar mensaje cuando no encuentra paises */}
      </div>
    </div>
  );
};

export default Home;
