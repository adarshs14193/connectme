import "./header.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

import ProductsDropdown from "./productsDropdown.jsx";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState("");

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
  const handleMenuClick = () => setOpenDropdown("");

  return (
    <header className="header">

      {/* LOGO */}
      <div className="logo">
        <Link to="/"><img src={Logo} alt="Company Logo" /></Link>
      </div>

      {/* NAV */}
      <nav className="nav">
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
          </li>

          <li><Link to="/work">Work</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      {/* CONTACT BUTTON */}
      <Link to="/contact" className="contact-btn">Contact</Link>

      {/* SERVICES DROPDOWN PANEL */}
      {openDropdown === "services" && (
        <div className="mega-dropdown" onClick={(e) => e.stopPropagation()}>
          
          <div className="mega-col">
            <h3 className="mega-title">Solutions</h3>

            <Link to="/services1#smart-metering" className="mega-link" onClick={handleMenuClick}>
              Smart Metering & Utility Billing
            </Link>

            <Link to="/services1#remote-connect" className="mega-link" onClick={handleMenuClick}>
              Remote Connectivity & VPN
            </Link>

            <Link to="/services1#lorawan" className="mega-link" onClick={handleMenuClick}>
              IoT & LoRaWAN
            </Link>

            <Link to="/services1#lorawan-sensors" className="mega-link" onClick={handleMenuClick}>
              LoRaWAN Sensors
            </Link>
          </div>

          <div className="mega-divider"></div>

          <div className="mega-col">
            <h3 className="mega-title">Services</h3>

            <Link to="/services2#utility-maintenance" className="mega-link" onClick={handleMenuClick}>
              Utility Meter Maintenance
            </Link>

            <Link to="/services2#billing" className="mega-link" onClick={handleMenuClick}>
              Billing Managed Service
            </Link>

            <Link to="/services2#amc" className="mega-link" onClick={handleMenuClick}>
              AMC & Training
            </Link>

            <Link to="/services2#consultancy" className="mega-link" onClick={handleMenuClick}>
              Technical Consultancy
            </Link>

            <Link to="/services2#plc" className="mega-link" onClick={handleMenuClick}>
              PLC & SCADA
            </Link>

            <Link to="/services2#development" className="mega-link" onClick={handleMenuClick}>
              Development & Services
            </Link>
          </div>

        </div>
      )}

    </header>
  );
}
