// src/productDetails/ProductDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import details from "../data/productDetails";
import "./productDetails.css";

export default function ProductDetails() {
  const { slug } = useParams();
  const product = details[slug];

  if (!product) return <h2 className="not-found">Product Not Found</h2>;

  return (
    <div className="product-details-page">

      {/* TITLE */}
      <h1 className="pd-title">
        <span>{product.title}</span>
      </h1>

      {/* TOP SECTION */}
      <div className="pd-top">
        <img src={product.heroImage} alt={product.title} className="pd-image" />

        <div className="pd-info">
          <p className="pd-desc">{product.description}</p>

          {product.brochure && (
            <a href={product.brochure} download className="pd-download">
              Download Brochure 📥
            </a>
          )}
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="pd-features">
        <h2>Features</h2>
        <ul>
          {product.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>

      {/* ADVANTAGES */}
      <div className="pd-advantages">
        <h2>Advantages</h2>
        <ul>
          {product.advantages.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>

      {/* COMMUNICATION INTERFACE */}
      <div className="pd-communication">
        <h2>Communication Interface</h2>

        <div className="pd-icons-row">
          {product.communicationIcons.map((c, i) => (
            <div key={i} className="pd-icon-block">
              <img src={c.icon} alt={c.label} />
              <p>{c.label}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
