import "./footer.css";
import React from "react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import Logo from "../assets/logo.png"; // your logo

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
                        ConnectME Manufacturing LLC is a battle-hardened team of IoT in GCC.
                        Partner with us today to see how IoT can revolutionize the way to
                        automate your Business process.
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

                    <h2 className="footer-heading" style={{ marginTop: "25px" }}>
                        Location
                    </h2>

                    <p className="footer-location">
                        Warehouse-7, Al Qaseer Warehouse, Ras Al Khor Industrial area-2,
                        Dubai - UAE.
                    </p>
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
