import React from "react";
import { motion } from "framer-motion";
import sponsorsData from "../../assets/Data/spons.json";

const SectionHeader = ({ title }) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    viewport={{ once: true, amount: 0.5 }}
  >
    <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mt-20 mb-6 tracking-tight">
      {title}
    </h2>
    <div className="w-24 h-1 bg-ecell-primary mx-auto mb-12 rounded-full"></div>
  </motion.div>
);

const LogoItem = ({ sponsor }) => (
  <motion.a
    href={sponsor.link || "#"}
    target={sponsor.link && sponsor.link !== "#" ? "_blank" : undefined}
    rel={sponsor.link && sponsor.link !== "#" ? "noopener noreferrer" : undefined}
    className="flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 px-6 py-5 hover:border-ecell-mine/70 transition-colors"
    whileHover={{
      scale: 1.09,
      transition: { duration: 0.2, ease: "easeOut" },
    }}
  >
    <img
      src={sponsor.logo}  
      alt={sponsor.name}
      className="max-h-16 w-auto object-contain opacity-85 hover:opacity-100 transition-opacity"
    />
  </motion.a>
);


const BrochureButton = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex justify-center mb-12"
  >
    <a
      href="../../../public/sponsorship-brochure.pdf"  
      download="ecell-brochure.pdf"
      className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-ecell-primary to-ecell-mine text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-white/20 backdrop-blur-sm"
    >
      <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10l-5.5 5.5m0 0L12 21l5.5-5.5m-5.5 5.5V7a1 1 0 012 0v10.5" />
      </svg>
      Download E-Cell Brochure
    </a>
  </motion.div>
);


const Sponsors = () => {
  const logos = sponsorsData.sponsors || [];

  return (
    <div className="min-h-screen bg-ecell-bg relative overflow-hidden pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-10 h-80 w-80 bg-ecell-primary/30 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-40 right-0 h-96 w-96 bg-ecell-secondary/20 rounded-full blur-[110px]" />
        <div className="absolute bottom-20 left-1/2 h-72 w-72 -translate-x-1/2 bg-ecell-accent/15 rounded-full blur-3xl" />
      </div>

      <div className="pt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true }}
          className="text-6xl font-black text-white text-center mb-10 tracking-tighter"
        >
          SPONSORS
        </motion.h1>

        <SectionHeader title="Past Sponsors" />
        <BrochureButton />
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10">
            {logos.map((s, i) => (
              <LogoItem key={i} sponsor={s} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
