import React from "react";
import "./Women.css";

// Array of women's collection products
const womenProducts = [
  { id: 1, name: "Floral Kurti", img: "/img/floral.jpg" },
  { id: 2, name: "Silk Saree", img: "/img/silk.jpg" },
  { id: 3, name: "Western Dress", img: "/img/western.jpg" },
  { id: 4, name: "Casual Top", img: "/img/top.jpg" },
  { id: 5, name: "High Waist Jeans", img: "/img/high.jpg" },
  { id: 6, name: "Evening Gown", img: "/img/gown.jpg" },
  { id: 7, name: "Stylish Skirt", img: "/img/skirt.jpg" },
  { id: 8, name: "Denim Jacket", img: "/img/denim.jpg" },
  { id: 9, name: "Comfort Leggings", img: "/img/leggins.jpg" },
];

function Women() {
  return (
    <>
      <header className="header">
        <p>Modern Lifestyle Dress</p>
      </header>

      <section className="container">
        {womenProducts.map((item) => (
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

export default Women;