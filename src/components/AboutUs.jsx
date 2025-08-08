import React from "react";
import "./AboutUs.css";
import banner_background from "../assets/banner_background.jpg";
const AboutUs = () => {
  return (
    <section className="about-section" id="about-us">
      <h2 className="about-title">About Us</h2>
      <div className="about-container">
        {/* Left: Text Content */}
        <div className="about-text">
          <h3>Mak Consumer Products</h3>
          <p>
            At Mak Consumer Products, we are dedicated to making your home cleaner,
            fresher, and healthier. Our wide range of cleaning tools and solutions –
            including fabric conditioners, kitchen cleaners, window sprays, and more –
            are designed to deliver exceptional results with minimal effort.
          </p>
          <p>
            We believe cleanliness isn't just a task — it's a lifestyle. Backed by
            quality, innovation, and customer trust, we continue to develop products
            that meet the everyday needs of households across the country.
          </p>
        </div>

        {/* Right: Image */}
        <div className="about-image">
          <img src={banner_background} alt="About Mak Products" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
