import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    // TODO: add the key prop
    return <VideoItem video={video} />;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
