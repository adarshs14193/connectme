import "./header.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

import ProductsDropdown from "./productsDropdown.jsx";
import ServicesDropdown from "./ServicesDropdown.jsx";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeAll = () => setOpenDropdown("");
    window.addEventListener("click", closeAll);
    return () => window.removeEventListener("click", closeAll);
  }, []);

  const toggleDropdown = (type, e) => {
    e.stopPropagation();
    setOpenDropdown(openDropdown === type ? "" : type);
  };

  // Close dropdown when selecting menu item
  const handleMenuClick = () => {
    setOpenDropdown("");
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">

      {/* LOGO */}
      <div className="logo">
        <a href="/"><img src={Logo} alt="Company Logo" /></a>
      </div>

      {/* HAMBURGER ICON */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* NAV */}
      <nav className={`nav ${mobileMenuOpen ? "active" : ""}`}>
        <ul>

          {/* PRODUCTS DROPDOWN */}
          <li>
            <span
              className="nav-link"
              onClick={(e) => toggleDropdown("products", e)}
            >
              Products
            </span>

            {/* SHOW DROPDOWN */}
            {openDropdown === "products" && (
              <ProductsDropdown onClose={handleMenuClick} />
            )}
          </li>

          {/* SERVICES DROPDOWN */}
          <li>
            <span
              className="nav-link"
              onClick={(e) => toggleDropdown("services", e)}
            >
              Services
            </span>

            {/* SERVICES DROPDOWN PANEL */}
            {openDropdown === "services" && (
              <ServicesDropdown onClose={handleMenuClick} />
            )}
          </li>

          <li><Link to="/work" onClick={handleMenuClick}>Work</Link></li>
          <li><Link to="/blog" onClick={handleMenuClick}>Blog</Link></li>
          <li><Link to="/about" onClick={handleMenuClick}>About</Link></li>
          <li className="mobile-only"><Link to="/contact" className="mobile-contact-btn" onClick={handleMenuClick}>Contact</Link></li>
        </ul>
      </nav>

      {/* CONTACT BUTTON (Desktop Only) */}
      <Link to="/contact" className="contact-btn desktop-only">Contact</Link>
    </header>
  );
}


