import React from 'react';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';

const FloatingDownload = () => {
  const handleDownload = () => {
    // Path to your PDF in the public folder
    const pdfUrl = "/sponsorship-brochure.pdf"; 
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "NITRR_Ecell_Brochure.pdf"; // The name the file will have when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      onClick={handleDownload}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ 
        scale: 1.1, 
        backgroundColor: "#00df9a", // Your ecell-primary color
        boxShadow: "0px 0px 20px rgba(0, 223, 154, 0.5)" 
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="absolute bottom-0 right-10 z-50 flex items-center gap-2 px-6 py-4 mb-4 bg-ecell-primary text-black font-bold rounded-full shadow-2xl group "
    >
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap">
        Download Brochure
      </span>
      <FileDown size={24} />
      
      {/* Optional: Simple pulse animation to grab attention */}
      <span className="absolute inset-0 rounded-full bg-ecell-primary/20 animate-ping -z-10" />
    </motion.button>
  );
};

export default FloatingDownload;