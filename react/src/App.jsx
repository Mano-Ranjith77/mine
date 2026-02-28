import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'
import Index from './components/Index'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'  
import Get from './components/Get'
import Men from './components/Men'
import Kids from './components/Kids'
import Women from './components/Women'
import Navbar from './components/Navbar'    


function App() {
  return (
    <>
    < Navbar />
    <Routes>
     <Route path="/" element={<Index />} />
     <Route path="/about" element={<About />} />
     <Route path="/services" element={<Services />} />
     <Route path="/contact" element={<Contact />} />  
     <Route path="/men" element={<Men />} />
     <Route path="/get" element={<Get />} />
     <Route path="/kids" element={<Kids />} />
     <Route path="/women" element={<Women />} />
    </Routes>
    </>
  );
}

export default App;