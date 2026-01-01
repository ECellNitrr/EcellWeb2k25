import React, { useState, useEffect, useRef, useCallback } from 'react';

import { GallerySection } from './Gallery/GallerySection';

import GallerySlider from './Gallery/GallerySlider';
import { useLocation } from 'react-router-dom';
import "./Gallery/Gallery.css"
import gallery_img from '../assets/Data/gallerydata.json';

const Gallery = () => {

  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(1);
  const timeoutRef = useRef(null);


useEffect(() => {
    // Scrolls to the top of the page immediately upon loading the Gallery page.
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Use 'instant' for immediate snap, or 'smooth' if preferred.
    });
  }, [location.pathname]); // The effect runs whenever the path changes (i.e., when you navigate here)
 

  return (
    <>
<div className="bg-gradient-to-br from-[#020617] via-slate-900 to-indigo-950 min-h-screen
  /* Required structural classes */
  text-gray-100 min-h-screen pt-10 pb-20 font-sans
">
      {/* --- 1. Glimps of Events (Full-Width Animated Slider) --- */}

       <header className="text-center mt-16 mb-8">

  <h2
    className="
      text-center text-5xl md:text-5xl font-extrabold mb-2
      bg-gradient-to-r from-ecell-primary via-ecell-mine to-ecell-accent
      bg-clip-text text-transparent pb-2
    "
    style={{
  opacity: 0,
  animation: `
    premiumSlide 1.2s cubic-bezier(.19,1,.22,1) forwards,
    premiumGlow 3s ease-in-out 1.3s infinite alternate
  `
}}

  >
    Glimps Of Events
  </h2>

  <p
    className="text-gray-400 italic mt-2"
    style={{
      opacity: 0,
      animation: "premiumFade 1.5s ease-out 0.4s forwards",
    }}
  >
    Moments from our entrepreneurial journey
  </p>

</header>
    <GallerySlider/>
    <GallerySection images={gallery_img.mainSection} />
    </div>

    </>

  );

};



export default Gallery;



