import React from "react";

const ActivityCard = ({ name, difficulty, duration, season }) => {
  return (
    <div>
      <h3>{name}</h3>
      <h5>{difficulty}</h5>
      <h5>{duration}</h5>
      <h5>{season}</h5>
    </div>
  );
};

export default ActivityCard;
