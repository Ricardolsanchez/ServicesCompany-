import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import About from '../About/About';
import Trabajos from "../Pages/Trabajos";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/trabajos" element={<Trabajos />} />

    </Routes>
  );
};

export default Routers;