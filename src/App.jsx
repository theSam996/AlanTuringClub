import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen text-primary selection:bg-black selection:text-white overflow-x-hidden">
      {/* Background Technical Grid */}
      <div className="fixed inset-0 grid-bg-pattern pointer-events-none z-0" aria-hidden="true" />

      {/* Top right cross decoration */}
      <div
        className="hidden min-[993px]:block absolute font-extralight text-[#cccccc] z-0 text-[3.5rem] top-[100px] right-[120px] pointer-events-none select-none leading-none"
        aria-hidden="true"
      >
        +
      </div>

      {/* Right side abstract circuit lines */}
      <div
        className="hidden min-[993px]:block absolute right-[50px] top-1/2 -translate-y-1/2 w-[300px] h-[400px] z-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="absolute w-[100px] h-[1px] bg-[#d0d0d0] top-[50px] right-[100px] rotate-45" />
        <div className="absolute w-[1px] h-[200px] bg-[#d0d0d0] top-[85px] right-[65px]" />
        <div className="absolute w-[150px] h-[1px] bg-[#d0d0d0] top-[285px] right-[-10px] rotate-45" />
        <div className="absolute w-1 h-1 rounded-full bg-[#a0a0a0] top-[15px] right-[135px]" />
        <div className="absolute w-1 h-1 rounded-full bg-[#a0a0a0] top-[285px] right-[63px]" />
      </div>

      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Unified Container */}
      <div className="max-w-[1600px] mx-auto px-4 min-[481px]:px-5 md:px-[30px] min-[993px]:px-10 pt-[75px] min-[481px]:pt-[85px] md:pt-[95px] min-[993px]:pt-[100px] relative min-h-screen flex flex-col z-10">
        <Hero />
        <About />
      </div>
    </div>
  );
}
