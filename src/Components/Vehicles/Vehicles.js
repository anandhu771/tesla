import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import "./Vehicles.css";
import ModelCard from "../ModelListCard/ModelCard";
import { carList } from "../../Constents/carlist";

function Vehicles() {
  const [models, setModels] = useState(carList);
  const [allModels, setAllModels] = useState(carList);

  //navigate is to navigate to different urls 
  const navigate = useNavigate();

  //searchHandler function is to search the car from the car list.
  const searchHandler = (e) =>{
    const value = e.target.value.toLowerCase()
    const filteredModels = allModels.filter((model)=>{
      return model.name.toLowerCase().includes(value)? model: null
    })
    setModels(filteredModels);
  }



  function goToViewDetailPage(car){
    navigate(`/deatilView/${car?.id}`);
  }

  return (
    <div className="vehicles-wrap">
      <div className="input">
        <input type="text" className="search-bar" placeholder="Search vehicle here" onKeyUp={(e)=>searchHandler(e)}/>
      </div>
      <div className="card">
        {models.map((car) => (
          <div key={car.id}  onClick={()=>goToViewDetailPage(car)}>
            <ModelCard
              id={car.id}
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
