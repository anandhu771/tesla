import React from "react";
import "./Content.css";
function Content(props) {
  return (
    <div className="content-wrap"  style={{"backgroundImage":`url(${props.imgUrl})`,"backgroundAttachment":`${props.backgroundAttachment}`}}>
      <div className="car-description">
      {/* <div className="title">Cyber Truck</div> */}
      <div className="sub-title" style={{"textAlign":`${props.textalign}`}} >
        <h1 data-aos={"fade-"+props.aosdir} data-aos-once="true" >{props.title}</h1>
        

        <br/>

        <p data-aos={"fade-"+props.aosdir} data-aos-once="true" data-aos-delay="300"> {props.content}</p>
      </div>
        
        </div>
    
      
    </div>
  );
}

export default Content;
