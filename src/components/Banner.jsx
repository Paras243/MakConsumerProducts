// src/components/Banner.jsx
import banner1 from "../assets/mixedBanner.png";
import banner2 from "../assets/mixedBanner.png";
import banner3 from "../assets/mixedBanner.png";

import React from "react";
import Slider from "react-slick";
import "./Banner.css";

const bannerImages = [
  banner1,
  banner2,
  banner3,
  //"/images/banner3.jpg",
];

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="banner-slider-container">
      <Slider {...settings}>
        {bannerImages.map((src, index) => (
          <div key={index} className="banner-slide">
            <img src={src} alt={`Banner ${index + 1}`} className="banner-image" />
            <div className="banner-quote">
              <h2>Cleanliness adds shine to life.</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
