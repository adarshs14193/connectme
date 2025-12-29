import React from "react";
import { Link } from "react-router-dom";
import productsMenu from "../data/productsMenu";
import "./productsDropdown.css";

export default function ProductsDropdown({ onClose }) {
  const categories = productsMenu.items; // Access the main items array

  return (
    <div className="prod-dropdown" onClick={(e) => e.stopPropagation()}>
      <div className="prod-grid-container">
        {categories.map((catBlock, idx) => (
          <div key={idx} className="prod-col">
            <h1 className="prod-main-title">{catBlock.category}</h1>
            <div className="prod-list">
              {catBlock.items.map((item, i) => (
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
            {/* Divider for visual separation if needed, or remove if CSS handles spacing */}
            {idx < categories.length - 1 && <div className="prod-mobile-divider"></div>}
          </div>
        ))}
      </div>

      {/* VIEW MORE / CONTACT BUTTON */}
      <Link to="/products" className="prod-view-more" onClick={onClose}>
        View All Products →
      </Link>
    </div>
  );
}