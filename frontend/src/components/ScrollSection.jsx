// src/components/ScrollPanel.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollSection({ children, className = "" }) {
  const ref = useRef(null);

  // Controls animation based on section scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Upward movement (cover takeover effect)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  // Fade out slowly
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  // Slight zoom-out like Apple
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <div ref={ref} className="relative h-[180vh]">
      <motion.div
        style={{ y, opacity, scale }}
        className={
          "sticky top-0 h-screen flex items-center justify-center " + className
        }
      >
        {children}
      </motion.div>
    </div>
  );
}
