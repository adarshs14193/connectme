import React from "react";
import "./products1.css";
import products from "../data/product";
import { Link } from "react-router-dom"; 


export default function Products() {

  // show only the first 4 products in marquee
  const displayProducts = products.slice(0, 4);

  return (
    <div className="products-section">
      <h1 className="products-title">Our Products</h1>

      <div className="marquee">
        <div className="marquee-track">

          {/* duplicate exactly 4 items for seamless infinite loop */}
          {[...displayProducts, ...displayProducts].map((p, index) => (
            <div key={index} className="product-card">

              <img src={p.image} alt={p.title} className="product-image" />

              <div className="product-overlay">
                <div className="overlay-top">
                  <p>{p.subtitle}</p>
                  <h2>{p.title}</h2>
                </div>

                <div className="overlay-bottom">
                  <Link to={p.link}><button>View More</button></Link>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
}
