/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import HomePage from './Landing_page/Home/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HomePage />
  </React.StrictMode>
);
*/

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./Landing_page/Home/HomePage";
//import Signup from "./Landing_page/Signup/Signup";
import AboutPage from "./Landing_page/about/AboutPage";
import ProductPage from "./Landing_page/Products/ProductPage";
import PricingPage from "./Landing_page/Pricing/PricingPage";
import SupportPage from "./Landing_page/Support/SupportPage";

import NotFound from "./Landing_page/NotFound";
import Navbar from "./Navbar";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/product" element={<ProductPage/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
      <Route path="/support" element={<SupportPage/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer />
  </BrowserRouter>
);