import React from "react";

const seasonConfig = {
  summer: {
    textDisplay: "Let's hit the beach!!",
    iconName: "sun",
  },
  winter: {
    textDisplay: "Burr!!, it is chilly",
    iconName: "snowflake",
  },
};

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
  const { textDisplay, iconName } = seasonConfig[season];

  return (
    <div>
      <i className={`${iconName} icon`} />
      <h1>{textDisplay}</h1>
      <i className={`${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
