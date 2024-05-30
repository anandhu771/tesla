import React from "react";
import "./Home.css";
import heroimg from "../../Assets/heroimg";
import cyberinterior from "../../Assets/cyberinterior.jpg";
import Content from "../Content/Content";
import VideoContainer from "../Video/VideoContainer";
import Footer from "../Footer/Footer";
function Home() {
  return (
    <div>
      <Content
        aosdir="right"
        textalign="left"
        imgUrl={heroimg}
        backgroundAttachment="fixed"
        title="Cyber TrucK"
        content="TRAVEL UP TO 340 MILES¹ ON A SINGLE CHARGE—ENOUGH TO GET YOU INTO THE BACKCOUNTRY AND BEYOND. RECOVER UP TO 136 MILES OF RANGE WITH JUST 15 MINUTES OF SUPERCHARGING."
      />

      <Content
        aosdir="left"
        textalign="right"
        imgUrl={cyberinterior}
        backgroundAttachment="fixed"
        title="COMFORTABLE INSIDE"
        content="IMMERSE YOURSELF IN A SPACIOUS, MODERN CABIN PACKED WITH ADVANCED TECHNOLOGY FEATURES AND ENTERTAINMENT.PLENTY OF ROOM FOR FIVE ADULTS, WITH EXPANSIVE CABIN VIEWS THROUGH AN ALL-GLASS ROOF."
      />
      {/* <Content aosdir="left" textalign="right"  imgUrl={modelydark} backgroundAttachment="fixed"  title="model x" content="GO 0-60 MPH IN JUST 2.6 SECONDS† IN BEAST MODE WHILE MAINTAINING HIGH-SPEED STABILITY. WITH STEER-BY-WIRE AND REAR STEERING, YOU GET THE HANDLING OF A SPORTS CAR AND A BETTER TURNING RADIUS THAN MOST SEDANS." / > */}
      <VideoContainer />
    </div>
  );
}

export default Home;
