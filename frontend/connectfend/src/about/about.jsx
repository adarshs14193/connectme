import React from "react";
import "./about.css";
import dubai from "../assets/dubai.png";
import heroImg from "../assets/logo.png";

export default function AboutPage() {
    return (

        <div className="about-wrapper">

            {/* HERO SECTION */}
            <div className="about-hero">
                <img src={heroImg} alt="About ConnectME" className="about-hero-img" />

                <div className="about-hero-overlay">
                    <h1>ConnectME</h1>
                    <p>Connecting Business Needs With IoT Technology</p>
                </div>
            </div>
            <div className="about-section">

                {/* TOP TWO-COLUMN SECTION */}
                <div className="about-top">

                    {/* LEFT IMAGE */}
                    <div className="about-image-box">
                        <img
                            src={dubai}
                            alt="Dubai"
                            className="about-image"
                        />
                    </div>

                    {/* RIGHT TEXT */}
                    <div className="about-text">
                        <p>
                            ConnectME solutions is leading Industrial IoT technology solution company since 2016 in UAE
                            with delivery record of 100+ IoT solutions. We are turnkey software development company with
                            specialization in Utility metering and Billing solutions (UBILL), Energy management software’s,
                            IoT platforms, Cloud connectivity tools and customized software solutions.
                            Our UBILL billing solutions running over 180+ building with 50000+ connected meters
                            with 80+ happy customers/clients.
                        </p>

                        <p>
                            We are manufacturer and distributor of TECHKNAVE meters, MBUS devices and
                            UCONNECT customized gateways.
                        </p>

                        <p>
                            We build highly secure IoT solutions to Automate and Monitor all your business
                            processes remotely and securely.
                        </p>
                    </div>
                </div>

                {/* SECOND PARAGRAPH BLOCK */}
                <p className="about-full-text">
                    We are expertise in LPWAN technologies primarily of LoRaWAN and had setup
                    50+ private LoRa network across various residential / commercial building &
                    Malls in GCC.
                </p>

                <p className="about-full-text">
                    Our expertise extends to Remote connectivity solutions for connecting
                    remote equipment/ plants/ building to central command center over secure
                    and reliable VPN over internet. We have connected over 1000+ VPN devices.
                </p>

            </div>
            {/* QUALITY | MISSION | VISION */}
            <div className="about-cards-section">

                <div className="about-card">
                    <h2 className="about-card-title">Quality Standards</h2>
                    <h3 className="about-card-sub">We have implemented</h3>

                    <ul>
                        <li>methodical approach to ensuring consistently high quality in our products and services</li>
                        <li>systematic approach to identifying and controlling workplace risks,
                            preventing accidents and injuries, and enhancing employee wellness</li>
                        <li>mechanism to identify and manage environmental risks, reduce environmental
                            impacts, and promote sustainable practices.</li>
                    </ul>
                </div>

                <div className="about-card">
                    <h2 className="about-card-title">Our Mission</h2>
                    <h3 className="about-card-sub">We have implemented</h3>

                    <ul>
                        <li>Processes across all business areas for Increased revenue</li>
                        <li>Real-time analysis allows for Increased equipment uptime and transparency</li>
                        <li>Better service and more individualized offerings for Increased customer Satisfaction</li>
                    </ul>
                </div>

                <div className="about-card">
                    <h2 className="about-card-title">Our Vision</h2>
                    <h3 className="about-card-sub">We have implemented</h3>

                    <ul>
                        <li>18+ years of expertise in Industrial Automation and BMS (PLC, SCADA, BMS) delivering
                            reliable, efficient solutions.</li>
                        <li>Developing a SaaS-based IoT platform offering scalable, OPEX-friendly,
                            usage-based solutions aligned with industrial standards.</li>
                    </ul>
                </div>

            </div>
            {/* ISO CERTIFICATIONS SECTION */}
            <div className="iso-section">

                <div className="iso-card">
                    <img src={heroImg} alt="ISO 9001" className="iso-img" />
                    <p className="iso-label">ISO 9001:2015</p>
                </div>

                <div className="iso-card">
                    <img src={heroImg} alt="ISO 14001" className="iso-img" />
                    <p className="iso-label">ISO 14001:2015</p>
                </div>

                <div className="iso-card">
                    <img src={heroImg} alt="ISO 45001" className="iso-img" />
                    <p className="iso-label">ISO 45001:2018</p>
                </div>

            </div>
            {/* ABOUT THE FOUNDER SECTION */}
            <div className="founder-section">

                <h2 className="founder-title">About the Founder</h2>

                {/* FOUNDER 1 — IMAGE LEFT, TEXT RIGHT */}
                <div className="founder-row">
                    <img src="/images/founder1.jpg" alt="Founder 1" className="founder-img" />

                    <div className="founder-info">
                        <h3 className="founder-name">Mr. Kothandapani</h3>
                        <p className="founder-role">Sales Director</p>

                        <ul className="founder-list">
                            <li>He has 22 years of experience in Industrial automation with last 7 years in IoT technology.</li>
                            <li>During his last tenure as Head of Operations, he saw the strong potential of IoT trends.</li>
                            <li>His expertise in Automation projects and Control Centers shaped his role in the industry.</li>
                            <li>This inspired him to begin the process of launching a tech startup in IoT.</li>
                            <li>Expertise: Corporate management, Project Management, Technical architect & LoRaWAN expert.</li>
                        </ul>
                    </div>
                </div>

                {/* FOUNDER 2 — IMAGE RIGHT, TEXT LEFT */}
                <div className="founder-row">

                    <div className="founder-info">
                        <h3 className="founder-name">Mr. Esakimuthu</h3>
                        <p className="founder-role">Technical Director</p>

                        <ul className="founder-list">
                            <li>18+ years experience in metering, software development, and IoT hardware.</li>
                            <li>Expert in billing software (IBM), AMR solutions, and smart valve technology.</li>
                            <li>Founder of TECHKNAVE and co-founded CONNECTME in 2022.</li>
                            <li>Specializes in metering & BMS protocols for new smart metering verticals.</li>
                            <li>Expertise: Innovation technologies, Metering & Billing, Embedded systems.</li>
                        </ul>
                    </div>

                    <img src="/images/founder2.jpg" alt="Founder 2" className="founder-img" />
                </div>

            </div>
            {/* TECHNOLOGY HERO SECTION */}
            <div className="tech-hero">
                <div className="tech-overlay">
                    <h1 className="tech-title">
                        Connecting People & <br /> Business With Technology
                    </h1>

                    <p className="tech-sub">
                        We make the best use of technology to serve your <br />
                        organizational goals
                    </p>

                    <p className="tech-sub">
                        We provide unrivalled technical support to ensure the <br />
                        successful delivery of your project.
                    </p>

                    <p className="tech-sub">
                        We consistently spend over Research & Development, <br />
                        Quality Improvement & innovative technologies.
                    </p>
                </div>
            </div>


        </div>
    );
}
