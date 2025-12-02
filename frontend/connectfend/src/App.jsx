// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./header/header";
import Footer from "./footer/footer";

import LandingPage from "./landingpage/landingpage";
import ProductsPage from "./productsPage/productsPage";
import Blogs from "./blogs1/blogs1";
import BlogPage from "./blogpage/blogpage";
import AboutPage from "./about/about";
import Contact from "./contact/contact";
import Project from "./project/project";
import ProductDetails from "./productDetails/productDetails";
import ServicesPage1 from "./servicespage/servicesPage1";
import ServicesPage2 from "./servicespage/servicesPage2";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Project />} />
        <Route path="/products/:slug" element={<ProductDetails />} />

        {/* Services Pages */}
        <Route path="/services1" element={<ServicesPage1 />} />
        <Route path="/services2" element={<ServicesPage2 />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
