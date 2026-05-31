import React from "react";
import  "./styles/style.css";
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from"./pages/Menu";
import Contact from "./pages/Contact";
import Backtotop from "./components/Backtotop";
import Rating from "./components/Rating";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Rating />
      <Footer />
      
      <Backtotop />
    </BrowserRouter>
  );
}
export default App;