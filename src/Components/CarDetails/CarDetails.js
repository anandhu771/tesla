import React, { useEffect, useState } from 'react'
import './CarDetails.css'
import { useParams } from 'react-router-dom'
import { carList } from '../../Constents/carlist'
import HeroSection from './HeroSection'

function CarDetails() {
  const [car, setCar] = useState([]);
  const [heroDetails, setHeroDetails] = useState({
    carName:'',
    carPrice:"",
    carMilege:"",
    carSpeed:"",
    carRange:"",
    heroimg:""
  })

  const {id} = useParams();

  useEffect(()=>{
    window.scrollTo(0,0)
    const carData = carList.filter((car)=>{
      return car.id == id ? car : null 
    })
    setCar(carData);
    setHeroDetails({
      carName:carData[0].name,
      carPrice:carData[0].price,
      carMilege:carData[0].mileage,
      carSpeed:carData[0].max_speed,
      carRange:carData[0].range,
      heroimg:carData[0].heroimg 
    })
    

  },[])

  return (
    <div className='detail-wrap'>
        <HeroSection details={heroDetails} />
    </div>
  )
}

export default CarDetails