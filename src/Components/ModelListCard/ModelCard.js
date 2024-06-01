import React from 'react'
import './ModelCard.css'
import cardimgcybertruck from "../../Assets/card-img-Cybertruck-1x.avif"
function ModelCard({name,price,range,imageUrl}) {

  return (
    <div className='model-card'>
        <div className='card-img' style={{'backgroundImage':`URL(${imageUrl})`}}>
          {/* <img src={imageUrl}/> */}
        </div>
        <div className='content'>
          <p className='model-name'>{name}</p>
          <p className='model-price'>${price} </p>
          <p className='model-range'>Range {range}</p>
        </div>
    </div>
  )
}

export default ModelCard