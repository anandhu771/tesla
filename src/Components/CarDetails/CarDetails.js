import React, { useEffect, useState } from 'react'
import './CarDetails.css'
import { useParams } from 'react-router-dom'
import { carList } from '../../Constents/carlist'
import HeroSection from './HeroSection'
import ColorChange from '../ColorChange/ColorChange'
import Interior from '../Interior/Interior'
import VideoContainer from '../Video/VideoContainer'

function CarDetails() {

  const [carColors,setCarColors] = useState([{}]);
  const [interior,setInterior] = useState('')
  const [video, setVideo] = useState('')
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
    const carData = carList.filter((item)=>{
      return item.id == id ? item : null 
    })
    setHeroDetails({
      carName:carData[0].name,
      carPrice:carData[0].price,
      carMilege:carData[0].mileage,
      carSpeed:carData[0].max_speed,
      carRange:carData[0].range,
      heroimg:carData[0].heroimg 
    })
    setCarColors(carData[0].colorOptions);
    setInterior(carData[0].interior);
    setVideo(carData[0].video_link)


  },[])

  return (
    <div className='detail-wrap'>
        <HeroSection details={heroDetails} />
        <Interior interiorImg={interior}/>
        <VideoContainer videoLink="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-X-Interior-Carousel-1-Cinematic-Display-Desktop-Global.mp4"/>
        <ColorChange colorOptions={carColors} />
    </div>
  )
}

export default CarDetails