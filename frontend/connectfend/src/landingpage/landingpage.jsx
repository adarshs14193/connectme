import React from "react";
import "./landingPage.css";
import bgVideo from "../assets/hero-video.mp4"; // change path
import Products from "../products1/products1";
import Testimonials from "../testimonials/testimonial";
import WhyTrust from "../whytrust/whytrust";
import Licensing from "../licenses/licensing";
import LatestNews from "../newsdata/latestNews";
import Services from "../services/services";

export default function LandingPage() {
  return (
    <div>
    <div className="landing">
      {/* Background Video */}
      <video className="landing-video" autoPlay loop muted playsInline>
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Overlay Content */}
     
        
    </div>
    <Products />
    <Testimonials />
    <WhyTrust />
    <Licensing />
    <Services /> 
    <LatestNews />
       </div>
    
  );
}
