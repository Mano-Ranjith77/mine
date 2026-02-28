import React from "react";
import './about.css'
const About = () => {
  return (
    <>
   

<div className="container">
  <div className="about">
    <h2>Our Story</h2>
    <p>Modern Lifestyle is committed to offering...</p>
    <p>We focus on style, comfort, and elegance...</p>
  </div>

  <div className="values">
    <div className="value">
      <h3>Quality</h3>
      <p>High-quality fabrics and attention to detail.</p>
    </div>
    <div className="value">
      <h3>Innovation</h3>
      <p>Trend-driven collections that reflect modern tastes.</p>
    </div>
    <div className="value">
      <h3>Customer Focus</h3>
      <p>Easy ordering, fast delivery, and great support.</p>
    </div>
  </div>
</div>

<footer>
  <p>© 2025 Modern Lifestyle | All Rights Reserved</p>
</footer>
    </>
  );
};

export default About;