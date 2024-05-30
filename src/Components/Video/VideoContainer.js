import React from "react";
import './VideoContainer.css'
function VideoContainer() {
  return (
    <div className="video-container">
      <video autoPlay muted width="100%" loop>
        <source
          src="https://digitalassets.tesla.com/tesla-contents/video/upload/Cybertruck-Beyond-Prepared-Desktop.mp4"
          type="video/mp4"
        ></source>
      </video>
    </div>
  );
}

export default VideoContainer;
