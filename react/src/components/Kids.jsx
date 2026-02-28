import React from "react";
import "./Kids.css";

const kidsProducts = [
  {
    id: 1,
    name: "Cartoon T-Shirt",
    img: "/img/cartoon.jpg",
  },
  {
    id: 2,
    name: "Party Wear Dress",
    img: "/img/party.jpg",
  },
  {
    id: 3,
    name: "Denim Shorts",
    img: "/img/short.jpg",
  },
  {
    id: 4,
    name: "Warm Hoodie",
    img: "/img/warm.jpg",
  },
  {
    id: 5,
    name: "Ethnic Wear",
    img: "/img/last.webp",
  },
];

function Kids() {
  return (
    <>
      <header className="header">
        <p>Modern Lifestyle Dress</p>
      </header>

      <section className="container">
        {kidsProducts.map((item) => (
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

export default Kids;