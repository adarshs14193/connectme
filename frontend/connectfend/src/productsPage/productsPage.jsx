import React, { useState } from "react";
import "../productsPage/productsPage.css";
import products from "../data/product";
import { Link } from "react-router-dom"; 

export default function ProductsPage() {
  const ITEMS_PER_PAGE = 20;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = products.slice( startIndex, startIndex + ITEMS_PER_PAGE );

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="products-section">

      {/* FILTER BUTTON */}
      <div className="filter-container">
        <button className="filter-btn">
          Filter <span className="filter-icon"></span>
        </button>
      </div>

      {/* PRODUCT GRID */}
      <div className="products-grid">
        {currentItems.map((p, index) => (
          <div key={index} className="product-card">
            <img src={p.image} className="product-image" />

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

      {/* LOAD MORE BUTTON */}
      {currentPage < totalPages && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={handleNext}>
            Load More
          </button>
        </div>
      )}

      {/* PAGINATION */}
      <div className="pagination">
        <span
          className={`arrow ${currentPage === 1 ? "disabled" : ""}`}
          onClick={handlePrev}
        >
          &#60;
        </span>

        {Array.from({ length: totalPages }, (_, i) => (
          <span
            key={i}
            className={`page-number ${currentPage === i + 1 ? "active" : ""}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </span>
        ))}

        <span
          className={`arrow ${currentPage === totalPages ? "disabled" : ""}`}
          onClick={handleNext}
        >
          &#62;
        </span>
      </div>

    </div>
  );
}
