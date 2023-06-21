import React from "react";
import AboutBackground from "../Assets/hero second image.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        {/* <img src={AboutBackgroundImage} alt="" /> */}
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Stay Ahead of Heart Failure: Predicting Your Health, Saving Your Heart
        </h1>
        <p className="primary-text">
          nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras
          ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas
          
        </p>
        <p className="primary-text">
          nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras
          ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas
          
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
