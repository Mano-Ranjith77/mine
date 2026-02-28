import React from "react";
import { Link } from "react-router-dom";
import "./Get.css";

function GetStarted() {
  return (
    <>
      <header className="header">
        <p>Choose your lifestyle category</p>
      </header>

      <section className="container">
        <div className="card">
          <img src="/img/men.jpg" alt="Men Fashion" />
          <h3>Men</h3>
          <Link to="/men">
            <button>Shop Men</button>
          </Link>
        </div>

        <div className="card">
          <img src="/img/wom.jpg" alt="Women Fashion" />
          <h3>Women</h3>
          <Link to="/women">
            <button>Shop Women</button>
          </Link>
        </div>

        <div className="card">
          <img src="/img/kid.jpg" alt="Kids Fashion" />
          <h3>Kids</h3>
          <Link to="/kids">
            <button>Shop Kids</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default GetStarted;