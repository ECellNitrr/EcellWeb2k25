import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Eye, Award, TrendingUp, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
    {
        icon: Target,
        title: "India's Leading Summit",
        description:
            "Experience India's leading entrepreneurship summit, bringing together the brightest minds and startup culture.",
    },
    {
        icon: Eye,
        title: "Founders & Innovators",
        description:
            "Learn and get inspired by successful founders, industry leaders, and innovators shaping the future.",
    },
    {
        icon: Award,
        title: "Networking & Innovation",
        description:
            "A platform for unparalleled networking, mentorship, and fostering breakthrough innovation.",
    },
    {
        icon: TrendingUp,
        title: "Our Impact",
        description:
            "Building a thriving ecosystem where students learn, network, and build the future of entrepreneurship.",
    },
];

export default function ESHomeAbout() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const parallaxRef = useRef(null);

    // ⭐ LOCAL SCROLL PARALLAX FIXED OFFSETS
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"],
    });

    // Fade only when the section is LEAVING
    const sectionOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);
    const sectionY = useTransform(scrollYProgress, [0, 1], ["0px", "-100px"]);

    // Card grid parallax
    const gridY = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);
    const gridOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

    /** ⭐ Reveal Animation */
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setIsVisible(true),
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    /** ⭐ Blob cursor parallax */
    useEffect(() => {
        const move = (e) => {
            if (!parallaxRef.current) return;

            const x = (window.innerWidth / 2 - e.clientX) / 50;
            const y = (window.innerHeight / 2 - e.clientY) / 50;

            parallaxRef.current.style.transform = `translate(${x}px, ${y}px)`;
        };

        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative py-32 overflow-hidden bg-ecell-bg"
        >
            {/* 🌈 Background Blobs */}
            <div
                ref={parallaxRef}
                className="absolute inset-0 -z-10 pointer-events-none"
            >
                <div className="absolute top-10 left-20 w-80 h-80 bg-ecell-primary/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-10 right-28 w-96 h-96 bg-ecell-secondary/20 blur-[140px] rounded-full" />
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-ecell-accent/20 blur-[100px] rounded-full" />
            </div>

            {/* Borders */}
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-ecell-primary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-ecell-primary/40 to-transparent" />

            {/* ⭐ CONTENT WRAPPER — NOW FADES CORRECTLY */}
            <motion.div
                style={{ opacity: sectionOpacity, y: sectionY }}
                className="max-w-6xl mx-auto px-6 text-center relative z-10"
            >
                {/* Header Label */}
                <span
                    className={`
            inline-block text-ecell-primary uppercase tracking-wider text-sm font-semibold mb-4
            transition-all duration-700 flex justify-center
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
                >
                    About E-Summit
                </span>

                {/* Main Heading */}
                <h2
                    className={`
            text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 
            transition-all duration-700 delay-100
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
                >
                    Empowering{" "}
                    <span className="bg-linear-to-r from-ecell-primary to-ecell-accent bg-clip-text text-transparent">
                        Tomorrow's
                    </span>{" "}
                    Innovators
                </h2>

                {/* Subheading */}
                <p
                    className={`
            text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed
            transition-all duration-700 delay-200
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
                >
                    E-Summit NIT Raipur is India's leading entrepreneurship summit fostering a vibrant startup culture. It brings together brilliant founders, innovators, and investors for unparalleled networking and innovation.
                </p>

                {/* ⭐ FEATURE CARDS — FRAMER STAGGER */}
                <motion.div
                    style={{ y: gridY, opacity: gridOpacity }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: {},
                        show: {
                            transition: { staggerChildren: 0.15 }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-16"
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                                }}
                                className={`
                                    relative group rounded-2xl p-8 bg-white/5 backdrop-blur-lg border border-white/10
                                    transition-all duration-400
                                    hover:border-ecell-primary/50 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_var(--tw-shadow-color)] hover:shadow-ecell-primary/30

                                    before:content-[''] before:absolute before:-inset-[2px] before:-z-10 before:rounded-[inherit] before:bg-gradient-to-r before:from-ecell-primary/50 before:via-ecell-secondary/50 before:to-ecell-accent/50 before:blur-md before:opacity-30 group-hover:before:opacity-100 group-hover:before:blur-lg group-hover:before:-inset-[3px] before:transition-all before:duration-400
                                `}
                            >
                                <div className="relative z-10 flex items-start gap-5">

                                    {/* Icon */}
                                    <div
                                        className="
                      w-14 h-14 rounded-xl 
                      bg-ecell-vibrant-orange/10 border border-ecell-vibrant-orange/30  /* 🛠️ MODIFIED: Orange BG/Border */
                      flex items-center justify-center shrink-0
                      group-hover:bg-ecell-vibrant-orange/20 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,165,0,0.4)]
                      transition-all duration-300
                    "
                                    >
                                        {/* 🛠️ MODIFIED: Magenta Icon Color */}
                                        <Icon className="w-7 h-7 text-ecell-vibrant-orange transition-colors duration-300 group-hover:text-ecell-vibrant-magenta group-hover:brightness-125" />
                                    </div>

                                    {/* Text */}
                                    <div>
                                        {/* 🛠️ MODIFIED: Magenta Hover Title Color */}
                                        <h3 className="font-bold text-xl mb-2 group-hover:text-ecell-vibrant-magenta transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed text-left">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <div className={`mt-25 flex justify-center transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}>
                    <Link to="/about" className="inline-block">
                        <button className="relative overflow-hidden group px-6 py-3 border rounded-xl font-medium flex items-center gap-2 border-ecell-primary text-ecell-primary transition-all duration-500 hover:border-sky-400/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]">
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-sky-500 to-cyan-400 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                            <span className="relative z-10 flex items-center gap-2 font-bold group-hover:text-white transition-colors duration-500 tracking-wide">
                                Know More <ArrowUpRight className="w-4 h-4 group-hover:text-white" />
                            </span>
                        </button>
                    </Link>
                </div>

            </motion.div>

        </section>
    );
}
