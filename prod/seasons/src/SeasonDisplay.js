import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    textDisplay: "Let's hit the beach!!",
    iconName: "sun",
  },
  winter: {
    textDisplay: "Burr!!, it is freezing",
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
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{textDisplay}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
