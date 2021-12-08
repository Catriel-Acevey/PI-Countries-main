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
// import ITEMS_PER_PAGE from "../../../api/src/routes/index";
const ORDER = {
  ASCENDENTE: "ASC",
  DESCENDENTE: "DESC",
};
const ORDER_BY = {
  NAME: "name",
  POPULATION: "population",
};
// const COUNTRIES_PER_PAGE = 9;
// const FILTER_CONTINENT = {
//   ALL: "",
//   SOUTH_AMERICA: "South America",
//   AFRICA: "Africa",
//   EUROPE: "Europe",
//   ASIA: "Asia",
//   NORTH_AMERICA: "North America",
//   OCEANIA: "Oceania",
//   ANTARCTICA: "Antarctica",
// };

const Home = () => {
  const dispatch = useDispatch();

  const [orderBy, setOrderBy] = useState("name");
  const [order, setOrder] = useState("ASC");
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
    <div>
      <SearchBar />
      {/* Agregar un filtro desde el front */}
      <div>
        <select
          onChange={(e) => {
            changeOrderBy(e);
          }}
        >
          <option value={ORDER_BY.NAME}>Name</option>
          <option value={ORDER_BY.POPULATION}>population</option>
        </select>
      </div>
      <div>
        <select
          onChange={(e) => {
            changeOrder(e);
          }}
        >
          <option value={ORDER.ASCENDENTE}>Ascendente</option>
          <option value={ORDER.DESCENDENTE}>Descendente</option>
        </select>
      </div>
      <FilterRegion />
      <FilterActivity />
      <div>
        <Paging
          countriesPerPage={COUNTRIES_PER_PAGE}
          numberOfCountries={countries.length}
          paging={paging}
        />
      </div>
      <div>
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
