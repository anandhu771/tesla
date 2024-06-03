import React from "react";
import './VideoContainer.css'
function VideoContainer({videoLink}) {

  return (
    <div className="video-container">
      <video autoPlay muted width="100%" loop>
        <source
          src= {videoLink}
          type="video/mp4"
        ></source>
      </video>
    </div>
  );
}

export default VideoContainer;
