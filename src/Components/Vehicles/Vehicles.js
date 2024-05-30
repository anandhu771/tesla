import React from "react";
import "./Vehicles.css";
import ModelCard from "../ModelListCard/ModelCard";
function Vehicles() {
  return (
    <div className="card">
      <div>
        <ModelCard />
        </div>
        <div>
        <ModelCard />
        </div>
        <div>
        <ModelCard />
        </div>
        <div>
        <ModelCard />
        </div>
      
    </div>
  );
}

export default Vehicles;
