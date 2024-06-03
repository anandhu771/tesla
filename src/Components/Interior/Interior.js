import React from "react";
import "./Interior.css";

function Interior({ interiorImg }) {
  return (
    <div className="interior-wrap">
      <div className="interior-content">
        <p className="content-head">COMFORTABLE INSIDE</p>
        <p className="content-body">
          IMMERSE YOURSELF IN A SPACIOUS, MODERN CABIN PACKED WITH ADVANCED
          TECHNOLOGY FEATURES AND ENTERTAINMENT.
        </p>
      </div>
      <div
        className="interior-img"
        style={{
          backgroundImage: `linear-gradient(to right, #000a, transparent, transparent, #000a), url('${interiorImg}')`,
        }}
      ></div>
    </div>
  );
}

export default Interior;
