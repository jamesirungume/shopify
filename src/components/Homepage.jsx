import { useState } from 'react';
import Navbar from './Navbar';
import Home from './Images/Home.png';

export default function Homepage() {
  return (
    <>
      <Navbar prop={true}  />
      <div className="relative w-screen h-[90vh]">
        <img src={Home} alt="My Image" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h2 className="text-white text-3xl font-bold text-center mb-8 font-poppins w-[80%]">
            Get the most out of your shopping
          </h2>
          <h1 className="text-white text-5xl font-bold text-center mb-12 font-poppins w-[80%]">
            All clothes and footwear store
          </h1>
          <button 
            className="text-white text-2xl font-bold py-4 px-16 rounded-md transition-all duration-300 hover:py-4 hover:px-16 hover:scale-105" 
            style={{ backgroundColor: '#0000FF' }}
          >
            Shop now
          </button>
        </div>
      </div>
    </>
  );
}
