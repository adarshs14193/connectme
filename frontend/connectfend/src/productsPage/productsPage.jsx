import React, { useState } from "react";
import "./productsPage.css";
import products from "../data/product";
import { Link } from "react-router-dom";
import FilterMenu from "../filters/FilterMenu";

export default function ProductsPage() {
  const ITEMS_PER_PAGE = 20;

  const [currentPage, setCurrentPage] = useState(1);
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  // 🔥 Auto-generate categories from actual data (fixes mismatch!)
  const categories = [...new Set(products.map((p) => p.subtitle))];

  const applyFilter = () => {
    if (filters.length === 0) {
      setFilteredProducts(products);
    } else {
      const fp = products.filter((p) => filters.includes(p.subtitle));
      setFilteredProducts(fp);
    }

    setShowFilter(false);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="products-section">

      {/* FILTER BUTTON */}
      <div className="filter-container">
        <button className="filter-btn" onClick={() => setShowFilter(!showFilter)}>
          Filter
        </button>

        {showFilter && (
          <FilterMenu
            filters={filters}
            setFilters={setFilters}
            onApply={applyFilter}
            categories={categories}   // ✅ FIX
          />
        )}
      </div>

      {/* PRODUCT GRID */}
      <div className="products-grid">
        {currentItems.map((p, index) => (
          <div key={index} className="product-card">
            <div className="product-image-wrapper">
              <img src={p.image} className="product-image" alt={p.title} />
            </div>

            <div className="product-details">
              <p className="product-subtitle">{p.subtitle}</p>
              <h2 className="product-title">{p.title}</h2>
              <Link to={p.link} className="view-more-link">
                View More &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* LOAD MORE */}
      {currentPage < totalPages && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={() => setCurrentPage(currentPage + 1)}>
            Load More
          </button>
        </div>
      )}

      {/* PAGINATION */}
      <div className="pagination">
        <span
          className={`arrow ${currentPage === 1 ? "disabled" : ""}`}
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
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
          onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
        >
          &#62;
        </span>
      </div>

    </div>
  );
}
