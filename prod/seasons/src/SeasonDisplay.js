import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

/* Functional Component */
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const textDisplay =
    season === "winter" ? "Burr!!, it is chilly" : "Lets hit the beach!!";
  const iconName = season === "winter" ? "snowflake" : "sun";

  return (
    <div>
      <i className={`${iconName} icon`} />
      <h1>{textDisplay}</h1>
      <i className={`${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
