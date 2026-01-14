import "./footer.css";
import React from "react";
import { FaLinkedin, FaFacebook, FaMapMarkerAlt } from "react-icons/fa";
import Logo from "../assets/connectME_logo_transparent.png"; // Updated logo

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* LEFT SECTION */}
                <div className="footer-left">
                    <div className="footer-logo">
                        <img src={Logo} alt="ConnectME Logo" />
                    </div>

                    <h2 className="footer-title">Stay Connected</h2>

                    <div className="footer-input">
                        <input type="email" placeholder="Email Address" />
                        <button>➜</button>
                    </div>

                    <p className="footer-desc">
                        ConnectME Manufacturing LLC is a UAE-based Industrial IoT technology and manufacturing company,
                        delivering cyber-secure and scalable smart metering and IoT solutions since 2016.
                    </p>

                    <div className="footer-icons">
                        <a href="#"><FaLinkedin size={45} /></a>
                        <a href="#"><FaFacebook size={45} /></a>
                    </div>

                    <a href="#" className="footer-privacy">Privacy Policy</a>
                </div>

                {/* MIDDLE SECTION */}
                <div className="footer-middle">
                    <h2 className="footer-heading">Navigate</h2>
                    <ul>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/work">Work</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>

                {/* RIGHT SECTION */}
                <div className="footer-right">
                    <h2 className="footer-heading">Get In Touch</h2>

                    <a href="mailto:info@connectme.biz">info@connectme.biz</a>
                    <a href="mailto:sales@connectme.biz">sales@connectme.biz</a>
                    <a href="tel:+97142349525">+97142349525</a>
                    <a href="tel:+97142348480">+97142348480</a>

                    {/* LOCATION: HQ */}
                    <h2 className="footer-heading" style={{ marginTop: "25px" }}>
                        UAE HQ <FaMapMarkerAlt size={16} color="#fff" style={{ marginLeft: "8px" }} />
                    </h2>
                    <div className="footer-location-block">
                        <strong>Dubai</strong>
                        <p className="footer-location">
                            Warehouse-7, Al Qaseer Warehouse, Ras Al Khor Ind. Area-2, Dubai.
                        </p>
                    </div>

                    {/* LOCATION: REGIONAL */}
                    <h2 className="footer-heading" style={{ marginTop: "25px" }}>
                        Regional Offices <FaMapMarkerAlt size={16} color="#fff" style={{ marginLeft: "8px" }} />
                    </h2>

                    <div className="footer-location-block">
                        <strong>Saudi Arabia</strong>
                        <p className="footer-location">
                            Office 14, 2nd Floor, Al Khobar Center, Al Khobar, KSA.
                        </p>
                    </div>

                    <div className="footer-location-block">
                        <strong>Qatar</strong>
                        <p className="footer-location">
                            Office 202, Almana Tower, C-Ring Road, Doha, Qatar.
                        </p>
                    </div>

                    <div className="footer-location-block">
                        <strong>India</strong>
                        <p className="footer-location">
                            Bangalore, India.
                        </p>
                    </div>
                </div>

            </div>

            <div className="footer-bottom-container">
                <hr className="footer-line" />
                <p className="footer-bottom">
                    © ConnectME Manufacturing LLC 2024 | All Rights Reserved
                </p>
            </div>

        </footer>
    );
}
