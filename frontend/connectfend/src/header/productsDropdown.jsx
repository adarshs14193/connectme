import React from "react";
import { Link } from "react-router-dom";
import productsMenu from "../data/productsMenu";
import "./productsDropdown.css";

export default function ProductsDropdown({ onClose }) {
  return (
    <div className="prod-dropdown" onClick={(e) => e.stopPropagation()}>
      
      {/* --- COLUMN 1: HARDWARE --- */}
      <div className="prod-col">
        <h1 className="prod-main-title">Hardware</h1>

        {productsMenu.hardware.map((block, idx) => (
          <div key={idx} className="prod-block">
            <h3 className="prod-cat">{block.category}</h3>
            <div className="prod-list">
              {block.items.map((item, i) => (
                <Link
                  key={i}
                  to={`/products/${item.slug}`}
                  className="prod-link"
                  onClick={onClose}
                >
                  <span className="prod-link-label">{item.label}</span>
                </Link>
              ))}
            </div>
            <div className="prod-divider-line"></div>
          </div>
        ))}
      </div>

      {/* --- COLUMN 2: TECHKNAVE (Middle) --- */}
      <div className="prod-col">
        {/* Spacer to align first category with Hardware/Software sub-headers */}
        <div className="prod-col-header-spacer"></div> 

        <div className="prod-block">
          <h3 className="prod-cat">TechKnave</h3>
          
          <div className="prod-list">
            {productsMenu.techknave.map((item, i) => (
              <Link
                key={i}
                to={`/products/${item.slug}`}
                className="prod-link"
                onClick={onClose}
              >
                 <span className="prod-link-label">{item.label}</span>
              </Link>
            ))}
            <div className="prod-divider-line"></div>
            <div className="line1">Iot & LoRaWAN</div>
            <div className="prod-divider-line"></div>
            <div className="line2">Remote Connectivity & VPN</div>
          </div>
          <div className="prod-divider-line"></div>
        </div>
      </div>

      {/* --- COLUMN 3: SOFTWARE --- */}
      <div className="prod-col">
        <h1 className="prod-main-title">Software</h1>

        {productsMenu.software.map((block, idx) => (
          <div key={idx} className="prod-block">
            <h3 className="prod-cat">{block.category}</h3>
            <div className="prod-list">
              {block.items.map((item, i) => (
                <Link
                  key={i}
                  to={`/products/${item.slug}`}
                  className="prod-link"
                  onClick={onClose}
                >
                  <span className="prod-link-label">{item.label}</span>
                </Link>
              ))}
            </div>
            <div className="prod-divider-line"></div>
          </div>
        ))}
      </div>

      {/* VIEW MORE / CONTACT BUTTON (Moved to bottom) */}
      <Link to="/products" className="prod-view-more" onClick={onClose}>
        View More →
      </Link>

    </div>
  );
}