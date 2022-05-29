import React from "react";
import "./index.scss";

const VideoPlayer = ({ src }) => {
  return (
    <div className="video-player-block">
      <video src={src} autoPlay></video>
    </div>
  );
};

export default VideoPlayer;
