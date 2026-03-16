import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import React from "react";
import { ArrowRight, Sparkles, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

// Standard Components
import ESHomeEvent from "./ESHomeEvent";
import ESHomeAbout from "./ESHomeAbout";
import ESHomeGallery from "./ESHomeGallery";
import ESHomeSponsors from "./ESHomeSponsors";
import PastSpeakers from "../PastSpeaker"; // Adjusted path to PastSpeaker.jsx
import ESEventsListing from "./ESEventsListing";
export default function ESHome() {
    const ref = useRef(null);
    const [offsetY, setoffsetY] = useState(0);

    const handleScroll = () => setoffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const bgImage = "https://res.cloudinary.com/daoth3ia9/image/upload/v1766953561/Copy_of_IMG_8935_xutg4o.jpg";

    return (
        <div className="relative w-full">
            {/* 📱 1. FIXED SOCIAL BAR (Stays on screen) */}
            <div className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-[100] hidden sm:flex flex-col gap-6 items-center">
                <div className="w-[1px] h-16 bg-gradient-to-t from-ecell-primary to-transparent opacity-50" />
                <SocialIcon href="https://www.instagram.com/ecell_nitraipur_/" icon={<Instagram size={20} />} />
                <SocialIcon href="https://www.linkedin.com/company/entrepreneurship-cell-nit-raipur/" icon={<Linkedin size={20} />} />
                <SocialIcon href="https://twitter.com/ecell_nitrr" icon={<Twitter size={20} />} />
                <div className="w-[1px] h-16 bg-gradient-to-b from-ecell-primary to-transparent opacity-50" />
            </div>

            {/* 🏗️ 2. HERO SECTION */}
            <section
                id="home"
                ref={ref}
                className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-6 pt-20"
            >
                {/* 🖼️ BACKGROUND IMAGE LAYER */}
                <div
                    className="absolute inset-0 z-[-30] w-full h-full"
                    style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed',
                        transform: `scale(${1 + offsetY * 0.0002})`,
                    }}
                />

                {/* 🌑 OVERLAY LAYER (Darkens image so text is visible) */}
                <div className="absolute inset-0 z-[-20] bg-black/60 bg-gradient-to-b from-black/40 via-transparent to-ecell-bg" />

                {/* 📝 CONTENT LAYER */}
                <motion.div
                    style={{
                        y: offsetY * 0.3,
                        opacity: Math.max(1 - offsetY / 600, 0),
                    }}
                    className="relative z-10 max-w-4xl text-center"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="uppercase tracking-[0.3em] text-ecell-secondary text-xs md:text-sm mb-6 font-bold flex items-center justify-center gap-2"
                    >
                        <Sparkles className="h-4 w-4" />
                        E-Summit • Scale • Succeed
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-8xl font-black text-white leading-[1.1] tracking-tighter"
                    >
                        E-Summit <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecell-primary via-ecell-secondary to-ecell-accent animate-gradient">
                            2025
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-200 mt-8 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed"
                    >
                        India's Leading Entrepreneurship Summit. Join us to experience the biggest confluence of founders, innovators, and investors at NIT Raipur.
                    </motion.p>

                    {/* 🚀 Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.6 }}
                        className="mt-8 flex justify-center gap-4"
                    >
                        <Link to="/events" className="inline-block">
                            <button className="relative overflow-hidden group px-6 py-3 rounded-xl font-medium border border-white/20 text-gray-200 transition-all duration-500 hover:border-sky-400/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]">
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-sky-500 to-cyan-400 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                                <span className="relative z-10 font-bold group-hover:text-white transition-colors duration-500 tracking-wide">
                                    Explore E-Summit Events
                                </span>
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* 🧩 3. REMAINING SECTIONS */}
            <div className="relative z-10 bg-ecell-bg">
                <ESHomeAbout />
                {/* <ESHomeEvent /> */}
                <ESEventsListing />
                <PastSpeakers />
                <ESHomeSponsors />
                <ESHomeGallery />
            </div>
        </div>
    );
}

// 🔵 Social Icon Mini-Component
const SocialIcon = ({ icon, href }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.3, x: 5 }}
        className="text-white/50 hover:text-ecell-primary transition-all duration-300 drop-shadow-lg"
    >
        {icon}
    </motion.a>
);