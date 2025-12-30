
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './GallerySlider.css'; // Custom CSS for styling
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import gallery_img from '../../assets/Data/gallerydata.json';


// ******************************************************
// CHANGE 1: Import the Autoplay module
// ******************************************************
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';



export default function GallerySlider({ images = gallery_img.sliderImg }) {
  return (
    <div className="flower-gallery-container* *relative** bg-white/10 backdrop-blur-md p-6 rounded-xl
    /* --- GLOW EFFECT STARTS HERE --- */
      
      /* 1. Base Container Styling (Glass + Shadow) */
      shadow-2xl z-10 overflow-visible
      
      /* 2. Inner Glow (Subtle Indigo Light) */
      shadow-[0_0_20px_0_rgba(99,102,241,0.5)] 
      
      /* 3. Outer Bleed/Border Glow (Vibrant Cyan) */
      
      /* 4. Remove custom glowing-border class */
      /* Note: We no longer need the 'glowing-border' class */ ">
     
      
      <Swiper
        effect={'coverflow'} 
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        
        // CHANGE 2: Add the autoplay configuration
        autoplay={{
          delay: 3000, // Wait 3.5 seconds before moving to the next slide
          disableOnInteraction: false, // Keep autoplating even if user interacts
          pauseOnMouseEnter: true, // Pause slideshow when mouse hovers over it
        }}

        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        
        navigation={true}
        pagination={{ clickable: true }}
        
        // CHANGE 3: Add Autoplay to the modules array
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="flower-swiper-gallery"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <img 
              src={image.url} 
              alt={image.alt} 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                borderRadius: '15px'
              }} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}