import React from "react";
import "./Content.css";
function Content(props) {
  return (
    <div
      className="content-wrap"
      style={{
        backgroundImage: `url(${props.imgUrl})`,
        backgroundAttachment: `${props.backgroundAttachment}`,
      }}
    >
      <div className="car-description">
        <div className="sub-title" style={{ textAlign: `${props.textalign}` }}>
          <h1>{props.title}</h1>

          <br />
          <p> {props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
