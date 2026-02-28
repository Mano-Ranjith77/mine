import React from "react";
import "./Services.css";

const servicesData = [
  {
    id: 1,
    title: "Personal Style Assistance",
    description:
      "Get expert guidance to choose outfits that match your personality, occasion, and modern lifestyle needs.",
  },
  {
    id: 2,
    title: "Premium Quality Products",
    description:
      "We offer carefully selected dresses made with high-quality fabrics ensuring comfort, durability, and elegance.",
  },
  {
    id: 3,
    title: "Easy Ordering & Support",
    description:
      "Enjoy smooth shopping with simple ordering, secure payment, and reliable customer support at every step.",
  },
];

function Services() {
  return (
    <>
      <header className="services-header">
        <p>Modern fashion services designed for your lifestyle</p>
      </header>

      <section className="services-container">
        <div className="services-grid">
          {servicesData.map((service) => (
            <div className="service-card" key={service.id}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="services-footer">
        <p>© 2025 Modern Lifestyle | All Rights Reserved</p>
      </footer>
    </>
  );
}

export default Services;