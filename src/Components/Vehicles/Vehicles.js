import React from "react";
import "./Vehicles.css";
import ModelCard from "../ModelListCard/ModelCard";
import {carList} from "../../Constents/carlist";
function Vehicles() {
  return (
    <div className="card">
      {carList.map((car) => (
        <div key={car.id}>
          <ModelCard
            name={car.name}
            price={car.price}
            range={car.range}
            description={car.description}
            imageUrl={car.image_url}
            maxSpeed={car.max_speed}
            mileage={car.mileage}
            dimensions={car.dimensions}
            motorSpec={car.motor_spec}
            batteryLife={car.battery_life}
            drivingMode={car.driving_mode}
          />
        </div>
      ))}
    </div>
  );
}

export default Vehicles;
