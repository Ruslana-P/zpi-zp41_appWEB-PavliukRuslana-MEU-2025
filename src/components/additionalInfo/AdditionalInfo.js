import React from "react";
import { SectionWrapper } from "./styled";
import Logo from "../../images/Logo";
import location from "../../images/location.png";

const AdditionalInfo = () => {
  return (
    <SectionWrapper>
      <div className="flex-left">
        <Logo width="100%" height="100%" />
      </div>
      <div className="middle-block">
        <h5>YOU CAN FIND OUR SHOPS HERE</h5>
        <ul>
          <li>
            <img src={location} alt="location icon" />
            Street, 15, Kyiv, 01001
          </li>
          <li>
            <img src={location} alt="location icon" />
            Saksahanskoho Street, 35A, Kyiv, 01033
          </li>
          <li>
            <img src={location} alt="location icon" />
            Velyka Vasylkivska Street, 72, Kyiv, 03150
          </li>
          <li>
            <img src={location} alt="location icon" />
            Peremohy Avenue, 45, Kharkiv, 03056
          </li>
        </ul>
        Check how to get to us on the{" "}
        <a href="https://www.google.com/maps">map</a>
      </div>
      <div className="right-block">
        <h5>5 Reasons Why Having a Houseplant is AWESOME</h5>
        <ol>
          <li>Improves air quality</li>
          <li>Boosts mood and reduces stress</li>
          <li>Enhances home decor</li>
          <li>Promotes mindfulness and responsibility</li>
          <li>Increases productivity</li>
        </ol>
      </div>
    </SectionWrapper>
  );
};

export default AdditionalInfo;
