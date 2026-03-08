import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const events = [
    {
        title: "B Case study",
        date: "E-Summit Weekend",
        location: "NIT Raipur Campus",
        description:
            "Pitch your startup ideas to top investors and industry leaders for funding and mentorship.",
        type: "Competition",
        status: "Upcoming",
    },
    {
        title: "Cricknometrica",
        date: "E-Summit Weekend",
        location: "DDU",
        description:
            "Cricket ",
        type: "Hackathon",
        status: "Registration Open",
    },
    {
        title: "Founder Talks",
        date: "E-Summit Weekend",
        location: "Seminar Hall",
        description:
            "Inspiring keynote sessions from successful founders and innovators sharing their entrepreneurial journeys.",
        type: "Talk Series",
        status: "Upcoming",
    },
    {
        title: "Investor Connect",
        date: "E-Summit Weekend",
        location: "Virtual & Offline",
        description:
            "Exclusive networking sessions with investors and hands-on workshops on startup culture and scaling.",
        type: "Networking",
        status: "Ongoing",
    },
];

export default function ESHomeEvent() {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const sectionRef = useRef(null);

    /** ⭐ LOCAL SCROLL PARALLAX  */
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"], // FIX: Section fully bright when entering
    });

    // Entire section fade + lift on leaving
    const sectionOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0]);
    const sectionY = useTransform(scrollYProgress, [0, 1], ["0px", "-120px"]);

    // Grid parallax movement
    const gridY = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);
    const gridOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

    /** ⭐ Reveal Animation */
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setIsVisible(true),
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="events"
            ref={sectionRef}
            className="relative py-32 bg-ecell-bg overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-ecell-primary/10 blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-ecell-secondary/10 blur-3xl" />

            {/* ⭐ FADE + PARALLAX WRAPPER */}
            <motion.div
                style={{ opacity: sectionOpacity, y: sectionY }}
                className="max-w-6xl mx-auto px-6 relative z-10"
            >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <span
                            className={`
                inline-block text-ecell-primary uppercase font-semibold tracking-wider text-sm mb-4
                transition-all duration-700
                ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
              `}
                        >
                            Events
                        </span>

                        <h2
                            className={`
                text-4xl md:text-5xl lg:text-6xl font-extrabold
                transition-all duration-700 delay-100
                ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
              `}
                        >
                            What's <span className="text-ecell-mine">Happening</span>
                        </h2>
                    </div>

                    <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}>
                        <Link to="/events" className="inline-block">
                            <button className="relative overflow-hidden group px-6 py-3 border rounded-xl font-medium flex items-center gap-2 border-ecell-primary text-ecell-primary transition-all duration-500 hover:border-sky-400/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]">
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-sky-500 to-cyan-400 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                                <span className="relative z-10 flex items-center gap-2 font-bold group-hover:text-white transition-colors duration-500 tracking-wide">
                                    View All Events <ArrowUpRight className="w-4 h-4 group-hover:text-white" />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* ⭐ EVENTS GRID — FRAMER MOTION ENTRANCE + PARALLAX + FADE */}
                <motion.div
                    style={{ y: gridY, opacity: gridOpacity }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                        hidden: {},
                        show: {
                            transition: { staggerChildren: 0.15 }
                        }
                    }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                >
                    {events.map((event, index) => (
                        <motion.div
                            key={event.title}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                            }}
                            className={`
                                group relative rounded-2xl p-6 cursor-pointer
                                bg-white/5 backdrop-blur-lg border border-white/10
                                transition-all duration-400
                                hover:border-ecell-primary/50 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_var(--tw-shadow-color)] hover:shadow-ecell-primary/30

                                before:content-[''] before:absolute before:-inset-[2px] before:-z-10 before:rounded-[inherit] before:bg-gradient-to-r before:from-ecell-primary/50 before:via-ecell-secondary/50 before:to-ecell-accent/50 before:blur-md before:opacity-30 group-hover:before:opacity-100 group-hover:before:blur-xl group-hover:before:-inset-[3px] before:transition-all before:duration-400
                            `}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="relative z-10 w-full h-full flex flex-col">
                                {/* Status Tags */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-ecell-primary/20 text-ecell-primary border border-ecell-primary/30">
                                        {event.type}
                                    </span>

                                    <span
                                        className={`
                    px-3 py-1 text-xs font-semibold rounded-full
                    ${event.status === "Upcoming"
                                                ? "bg-ecell-accent/20 text-ecell-accent border border-ecell-accent/30"
                                                : event.status === "Completed"
                                                    ? "bg-gray-700 text-gray-400 border border-gray-600"
                                                    : "bg-ecell-secondary/20 text-ecell-secondary border border-ecell-secondary/30"
                                            }
                  `}
                                    >
                                        {event.status}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="font-bold text-2xl mb-3 group-hover:text-ecell-mine transition-colors duration-300">
                                    {event.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-300 mb-6 line-clamp-2">
                                    {event.description}
                                </p>

                                {/* Meta Info */}
                                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mt-auto">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-ecell-primary transition-colors duration-300 group-hover:text-white group-hover:brightness-125 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                                        <span>{event.date}</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-ecell-primary transition-colors duration-300 group-hover:text-white group-hover:brightness-125 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                                        <span>{event.location}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
