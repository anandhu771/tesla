import React, { useState } from "react";
import "./Vehicles.css";
import ModelCard from "../ModelListCard/ModelCard";
import { carList } from "../../Constents/carlist";
function Vehicles() {
  const [models, setModels] = useState(carList);
  const [allModels, setAllModels] = useState(carList)

  const searchHandler = (e) =>{
    const value = e.target.value.toLowerCase()
    const filteredModels = allModels.filter((model)=>{
      return model.name.toLowerCase().includes(value)? model: null
    })
    setModels(filteredModels);
  }
  
  return (
    <div className="vehicles-wrap">
      <div className="input">
        <input type="text" className="search-bar" placeholder="Search vehicle here" onKeyUp={(e)=>searchHandler(e)}/>
      </div>
      <div className="card">
        {models.map((car) => (
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
    </div>
  );
}

export default Vehicles;
