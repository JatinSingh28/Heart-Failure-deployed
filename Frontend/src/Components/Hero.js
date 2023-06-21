import React from "react";
import BannerBackground from "../Assets/blob.svg";
import BannerImage from "../Assets/hero image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Empowering Health through Early Awareness
          </h1>
          <p className="primary-text">
            nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras
            ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas
          </p>
          <button className="secondary-button">
            Give it a try  <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
