import React from "react";
import "./Men.css";

const menProducts = [
  { id: 1, name: "Casual Shirt", img: "/img/casual.jpg" },
  { id: 2, name: "Printed T-Shirt", img: "/img/print.jpg" },
  { id: 3, name: "Slim Fit Jeans", img: "/img/jeans.jpg" },
  { id: 4, name: "Hoodie Jacket", img: "/img/hoodie.jpg" },
  { id: 5, name: "Formal Shirt", img: "/img/formal.jpg" },
  { id: 6, name: "Ethnic Kurta", img: "/img/kurta.jpg" },
  { id: 7, name: "Classic Blazer", img: "/img/classic.jpg" },
  { id: 8, name: "Track Pants", img: "/img/track.jpg" },
  { id: 9, name: "Winter Jacket", img: "/img/winter.jpg" },
];

function Men() {
  return (
    <>
      <header className="header">
        <p>Modern Lifestyle Dress</p>
      </header>

      <section className="container">
        {menProducts.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>

            <div className="b">
              <button className="buy">Buy Now</button>
              <button className="cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Men;