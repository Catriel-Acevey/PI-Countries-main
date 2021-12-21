import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../actions";
import styles from "./Detail.module.css";

const Detail = (props) => {
  // console.log("A Details me llega por props: ", props);
  // console.log("La id esta en la ruta: ", props.match.params.id);
  const ID = props.match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetails(ID));
  }, [dispatch, ID]);
  const country = useSelector((state) => state.detail);
  // console.log("El pais contiene: ", country);
  return (
    <div className={styles.container}>
      <h1> Name: {country.name} </h1>
      <h3> Abreviatura: {country.ID}</h3>
      <img src={country.flag_image} alt="flag not found" />
      <h3> Capital: {country.capital}</h3>
      <h3> Continente: {country.continent}</h3>
      <h3> Subregion: {country.subregion}</h3>
      <h3> Area: {country.area} KM²</h3>
      <h3> Poblacion: {country.population}</h3>
      <div className={styles.activitys}>
        <h2>Data Activity</h2>
        {country.activities?.length ? (
          country.activities.map((activity) => (
            <div>
              <h4>
                {" "}
                {activity.name.charAt(0).toUpperCase() +
                  activity.name.slice(1).toLowerCase()}
              </h4>
              <p>Difficulty: {activity.difficulty}</p>
              <p>Duration: {activity.duration} minutes</p>
              <p>Season: {activity.season}</p>
            </div>
          ))
        ) : (
          <p>It has no tourist activities assigned</p>
        )}
      </div>
    </div>
  );
};

export default Detail;
