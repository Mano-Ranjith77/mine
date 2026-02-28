import React from "react";
import './Index.css'
import {Link} from 'react-router-dom'

// Cards data
const cards = [
  {
    id: 1,
    title: "Trend-Driven Collections",
    text: "Stay ahead of fashion with our carefully curated collections that reflect modern lifestyle trends. Each design is selected to match comfort, elegance, and everyday wear needs."
  },
  {
    id: 2,
    title: "Premium Fabric & Perfect Fit",
    text: "Our dresses are made using high-quality fabrics that ensure durability, breathability, and a perfect fit. Every piece is designed to offer confidence and comfort all day long."
  },
  {
    id: 3,
    title: "Easy Ordering & Fast Delivery",
    text: "Experience a smooth shopping journey with easy browsing, secure checkout, and fast delivery. We make sure your style reaches you on time, hassle-free."
  }
];

function Home() {
  return (
    <>
     

      <section className="hero">
        <h1>Winter Mega Sale</h1>
        <p>This Offer ends at 30/01/2026.</p>
        <a href="/get">
          <button>Get Started</button>
        </a>
      </section>

      <section className="sections">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </section>

      <footer>
        <p>© 2025 MyWebsite | All Rights Reserved</p>
      </footer>
    </>
  );
}

export default Home;