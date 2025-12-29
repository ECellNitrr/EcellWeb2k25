import { motion, useScroll, useTransform, useInView } from "framer-motion";
import React, { useRef } from "react";
import HomeSponsorBtn from "./HomeSponsorBtn";
const sponsors = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Zomato", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.svg" },
  { name: "Paytm", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg" },
];

export default function HomeSponsors() {
  const duplicatedSponsors = [...sponsors, ...sponsors];
  const containerRef = useRef(null);
  
  // Parallax Scroll Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // This will move the heading slightly faster/slower than the scroll (Parallax)
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Spark Line Visibility Logic
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  return (
    <>
    <div ref={containerRef} className="relative overflow-hidden">
      {/* ✨ Spark Line / Divider with Scroll Reveal */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 1, ease: "circOut" }}
        className="h-[1px] bg-gradient-to-r from-transparent via-ecell-mine to-transparent origin-center" 
      />

      <section className="py-20 bg-transparent mb-10 overflow-hidden">
        
        {/* 📝 Parallax Heading Section */}
        <motion.div 
          style={{ y, opacity }} 
          className="container mx-auto px-6 mb-16 text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
           className="
            text-4xl md:text-6xl font-extrabold mb-4
            bg-gradient-to-r from-ecell-primary via-ecell-mine to-ecell-accent 
            bg-clip-text text-transparent pb-2
          "
          >
            Partners & Sponsors
            
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base"
          >
            Collaborating with industry leaders to foster entrepreneurship at NIT Raipur.
          </motion.p>
        </motion.div>

        {/* 🏎️ The Infinite Scrolling Track */}
         {/* 🔵 Glowing Background Blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-10 h-80 w-80 bg-ecell-secondary/30 rounded-full blur-3xl" />
        <div className="absolute top-20 right-0 h-96 w-96 bg-ecell-primary/40 rounded-full blur-[130px]" />
        
        <div className="absolute bottom-[-6rem] left-1/2 h-72 w-72 -translate-x-1/2 bg-ecell-accent/20 rounded-full blur-3xl" />
      </div>
      <div className="absolute top-40 after:after:from-transparent via-ecell-mine to-transparent blur-[120px] rounded-full" />

        <div className="relative flex overflow-hidden">
          {/* Edge Fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

          <motion.div
            className="flex whitespace-nowrap gap-12 items-center py-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {duplicatedSponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                className="flex items-center justify-center w-40 md:w-56 h-34 bg-white/5 rounded-2xl border border-white/10 p-6 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </motion.div>
        
        </div>
      </section>
        <HomeSponsorBtn/>
    </div>
        </>
  );
}