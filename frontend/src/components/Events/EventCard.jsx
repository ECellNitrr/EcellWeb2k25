import React, { useRef } from 'react'; // 💡 Import useRef
import { Calendar, MapPin } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion'; 

const EventCard = ({ event, onClick, index }) => { 
    
    // --- Framer Motion Load-in Variants (Level 2) ---
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1, // Staggered delay based on index
                duration: 0.5,
                ease: "easeOut"
            },
        }),
    };

    // --- Framer Motion Parallax Scroll ---
    const cardRef = useRef(null); 
    const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
    const yImage = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <motion.div 
            ref={cardRef}
            onClick={() => onClick(event)}
            aria-label={`View details for ${event.title}`}
            
            // 👇 MODIFIED: Dark Card Base Style
            className="bg-gray-800/80 shadow-lg rounded-xl overflow-hidden cursor-pointer flex flex-col h-full 
                       border border-white/10 hover:border-ecell-primary hover:z-10"
            
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index} 
            
            // Hover scale and shadow look good, keep them
            whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)", // Adjusted shadow for dark theme
                transition: { duration: 0.3 }
            }}
        >
            {/* Top glowing line - Keep this, it looks great on dark mode */}
            <div className="h-px bg-linear-to-r from-transparent via-ecell-mine to-transparent" />
            
            {/* Image Wrapper (no changes needed) */}
            <div className="aspect-w-3 aspect-h-2 overflow-hidden"> 
                <motion.img 
                    style={{ y: yImage }}
                    src={event.imageUrl} 
                    alt={event.title} 
                    className="object-cover w-full h-full"
                    initial={{ scale: 1.1 }} 
                    animate={{ scale: 1.1 }} 
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/9ca3af/ffffff?text=Image+Missing"; }}
                />
            </div>
            
            <div className="p-4 flex flex-col grow">
                {/* 👇 MODIFIED: Light Title */}
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                
                {/* 👇 MODIFIED: Light Description */}
                <p className="text-sm text-gray-300 mb-4 grow">{event.shortDescription}</p>

                {/* 👇 MODIFIED: Lighter Footer text and border-t */}
                <div className="space-y-2 text-sm text-gray-400 border-t border-white/10 pt-3 mt-auto">
                    <p className="flex items-center gap-2"><Calendar className="w-4 h-4 text-ecell-primary" />{event.date}</p>
                    <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-ecell-primary" />{event.location}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default EventCard;