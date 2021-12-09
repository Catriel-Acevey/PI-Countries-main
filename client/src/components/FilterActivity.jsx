import React, { useEffect } from "react";
import { getActivities, filterActivity } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import styles from "./FilterActivity.module.css";

export default function FilterActivity() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const activities = useSelector((state) => state.activities);

  function changeFilterActivity(e) {
    e.preventDefault();
    dispatch(filterActivity(e.target.value));
  }

  return (
    <div>
      <select
        className={styles.controls}
        onChange={(e) => changeFilterActivity(e)}
      >
        <option>Seleccionar</option>
        {activities?.map((activity) => (
          <option key={activity.name} value={activity.name}>
            {activity.name}
          </option>
        ))}
      </select>
    </div>
  );
}
