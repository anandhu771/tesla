import React, { useState } from "react";
import "./ColorChange.css";

function ColorChange({ colorOptions }) {
  const [colorIndex, setColorIndex] = useState(0);

  //colorChnage function will set the selected color's id and we use this id to show the car with same color.
  const colorChange = (id) => {
    setColorIndex(id);
  };
  return (
    <>
      {colorOptions.length > 1 ? (
        <div
          className="color-options-wrap"
          style={{
            backgroundImage: `linear-gradient(to right,black,transparent,transparent,black),url(${colorOptions[colorIndex].colorUrl})`,
          }}
        >
          <div className="color-picker">
            {colorOptions.map((color) => {
              return (
                <div
                key={color.id}
                  className="indicator"
                  onClick={() => colorChange(color.id)}
                  style={{
                    backgroundColor: color.colorCode,
                    filter: `${
                      color.id === colorIndex
                        ? "Brightness(1)"
                        : "Brightness(.2)"
                    }`,
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ColorChange;
