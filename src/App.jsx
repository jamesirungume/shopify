
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Products from './components/Products';
import Aboutus from './components/Aboutus';
import Cart from './components/Cart';
import Footer from './components/Footer';
import  Login from './components/Login';
import  Onlinestores from './components/Onlinestores';

export default function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Cart " element={<Cart />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/Onlinestores" element={<Onlinestores/>} />
          <Route path="/1" element={<Footer/>} />
        </Routes>
      </BrowserRouter>
    
  );
}
