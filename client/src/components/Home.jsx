import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../actions";
import SearchBar from "./SearchBar";
import CountryCard from "./CountryCard";
// import ITEMS_PER_PAGE from "../../../api/src/routes/index";
const ITEMS_PER_PAGE = 9;
const ORDER = {
  ASCENDENTE: "ASC",
  DESCENDENTE: "DESC",
};
const ORDER_BY = {
  NAME: "name",
  CONTINENT: "continent",
};
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

const Home = () => {
  const dispatch = useDispatch();

  const [pages, setPages] = useState(0);
  const [orderBy, setOrderBy] = useState("name");
  const [order, setOrder] = useState("ASC");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(getCountries(pages, orderBy, order, filter));
  }, [dispatch, pages, orderBy, order, filter]);

  const countries = useSelector((state) => state.countries);

  const previous = (e) => {
    e.preventDefault();
    if (pages <= 0) {
      setPages(0);
    } else {
      setPages(pages - 1);
    }
  };
  const next = (e) => {
    e.preventDefault();
    if (countries.length < ITEMS_PER_PAGE) return;
    else setPages(pages + 1);
  };
  const typeOrderBy = (e) => {
    e.preventDefault();
    setOrderBy(e.target.value);
  };
  const typeOrder = (e) => {
    e.preventDefault();
    setOrder(e.target.value);
  };
  const typeFilter = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  return (
    <div>
      <Link to="/home/activity">
        <button> Crear actividad </button>
      </Link>
      <SearchBar />
      {/* Agregar un filtro desde el front */}
      <div>
        <h3>Ordenar por </h3>
        <select
          onChange={(e) => {
            typeOrderBy(e);
          }}
        >
          <option value={ORDER_BY.NAME}>Name</option>
          <option value={ORDER_BY.CONTINENT}>Continent</option>
        </select>
      </div>
      <div>
        <h3>Ordenamiento</h3>
        <select
          onChange={(e) => {
            typeOrder(e);
          }}
        >
          <option value={ORDER.ASCENDENTE}>Ascendente</option>
          <option value={ORDER.DESCENDENTE}>Descendente</option>
        </select>
      </div>
      <div>
        <h3>Filtro</h3>
        <select
          onChange={(e) => {
            typeFilter(e);
          }}
        >
          <option value={FILTER_CONTINENT.ALL}>All</option>
          <option value={FILTER_CONTINENT.SOUTH_AMERICA}>South America</option>
          <option value={FILTER_CONTINENT.AFRICA}>Africa</option>
          <option value={FILTER_CONTINENT.EUROPE}>Europe</option>
          <option value={FILTER_CONTINENT.ASIA}>Asia</option>
          <option value={FILTER_CONTINENT.NORTH_AMERICA}>North America</option>
          <option value={FILTER_CONTINENT.OCEANIA}>Oceania</option>
          <option value={FILTER_CONTINENT.ANTARCTICA}>Antarctica</option>
        </select>
      </div>
      <div>
        {countries.map((country) => {
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
        <button
          onClick={(e) => {
            previous(e);
          }}
        >
          Previous
        </button>
        <button
          onClick={(e) => {
            next(e);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
