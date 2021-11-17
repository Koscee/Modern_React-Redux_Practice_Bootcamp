import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    // TODO: add the key prop
    return <VideoItem video={video} />;
  });

  return <div>{renderedList}</div>;
};

export default VideoList;
