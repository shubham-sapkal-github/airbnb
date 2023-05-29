import React from "react";
import "./hero.css";

import img1 from "../../Image/img1.png";
import img2 from "../../Image/img2.png";
import img3 from "../../Image/img3.png";
import img4 from "../../Image/img4.png";
import img5 from "../../Image/img5.png";
import img6 from "../../Image/img6.png";
import img7 from "../../Image/img7.png";
import img8 from "../../Image/img8.png";
import img9 from "../../Image/img9.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero_img_container">
        <div className="col col1">
          <img src={img1} alt="cup" />
        </div>
        <div className="col col2">
          <img className="img" src={img2} alt="woman" />
          <img src={img3} alt="dancing_woman" />
        </div>
        <div className="col col3">
          <img className="img" src={img4} alt="bowl" />
          <img src={img5} alt="guitar" />
        </div>
        <div className="col col4">
          <img className="img" src={img6} alt="piano" />
          <img src={img7} alt="man_swimming" />
        </div>
        <div className="col col5">
          <img className="img" src={img8} alt="yoga" />
          <img src={img9} alt="singer" />
        </div>
      </div>
      <div className="hero_txt">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}

export default Hero;
