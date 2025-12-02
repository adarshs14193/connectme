import React from "react";
import "./licensing.css";
import cert1 from "../assets/logo.png"; // replace with your images
import cert2 from "../assets/logo.png";
import cert3 from "../assets/logo.png";
import cert4 from "../assets/logo.png";

export default function Licensing() {
  const images = [cert1, cert2, cert3, cert4];

  return (
    <div className="license-section">
      <h1 className="license-title">Licensing & Certifications</h1>

      <div className="license-grid">
        {images.map((img, index) => (
          <div key={index} className="license-card">
            <img src={img} alt="license" />
          </div>
        ))}
      </div>
    </div>
  );
}
