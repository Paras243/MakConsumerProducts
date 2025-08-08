import React, { useState } from "react";
import "./Footer.css";
import footerLogo from "../assets/Logo.jpeg";
import insta_logo from "../assets/instagram_logo.jpeg";
import facebook_logo from "../assets/facebook_logo.png";
import x_logo from "../assets/X_icon_2.svg.png";

function Footer() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <footer className="footer-container">
      <div className="footer-main">
        {/* Logo Section */}
        <div className="footer-section footer-logo">
          <img src={footerLogo} alt="Mak Logo" className="footer-logo-img" />
          <p>
            <strong><em>"Empowering every home with quality products for a cleaner, brighter future."</em></strong>
          </p>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li>Help Center</li>
            <li>Product Guide</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section contact-section">
          <h3>Contact Us</h3>
          <p><strong>Phone:</strong> +91 99******203</p>
          <p><strong>Email:</strong> info@makconsumerproducts.com</p>
          <p><strong>Address:</strong> XYZ Street, City, India</p>

          {/* Popup Message Below Contact Us */}
          {showPopup && (
            <div className="popup-message below-contact">Thanks for subscribing!</div>
          )}
        </div>

        {/* Newsletter */}
        <div className="footer-section stay-touch">
          <h3>Stay in Touch</h3>
          <p>Subscribe to our newsletter</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="footer-input"
          />
          <button className="subscribe-btn" onClick={handleSubscribe}>
            Subscribe
          </button>

          <div className="footer-social-icons">
            <a href="#"><img src={facebook_logo} alt="Facebook" /></a>
            <a href="#"><img src={x_logo} alt="X" /></a>
            <a href="#"><img src={insta_logo} alt="Instagram" /></a>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2025 Mak Consumer Products. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
