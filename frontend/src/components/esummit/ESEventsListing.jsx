





import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { eventData } from "../../assets/Data/ESEventListing.json";


export default function ESEventsListing() {
  return (
    <section className="relative w-full py-24 bg-transparent overflow-hidden px-4 md:px-8" id="events">
    
  {/* Subtle Background Glow */}
  <div className="pointer-events-none absolute inset-0 -z-10">

    <div className="absolute -top-40 left-10 h-80 w-80 bg-ecell-primary/30 rounded-full blur-3xl opacity-50" />

    <div className="absolute top-40 right-0 h-96 w-96 bg-ecell-secondary/20 rounded-full blur-[110px]" />

    <div className="absolute bottom-20 left-1/2 h-72 w-72 -translate-x-1/2 bg-ecell-accent/15 rounded-full blur-3xl" />

    {/* Added Glows */}

    <div className="absolute top-10 left-1/3 h-60 w-60 bg-purple-500/20 rounded-full blur-3xl" />

    <div className="absolute bottom-0 right-1/1.5 h-80 w-80 bg-pink-500/20 rounded-full blur-[120px]" />

    <div className="absolute top-1/2 left-0 h-72 w-72 bg-blue-500/20 rounded-full blur-[100px]" />

    <div className="absolute bottom-10 right-10 h-64 w-64 bg-indigo-500/20 rounded-full blur-3xl" />

    <div className="absolute top-1/3 right-1/3 h-56 w-56 bg-cyan-400/20 rounded-full blur-3xl" />

  </div>
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ecell-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* 🌟 Massive, Attractive Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 flex flex-col "
        >
          <h2 className="text-5xl md:text-4xl lg:text-7xl font-black  tracking-tighter mb-4 ">
            <span className="text-white md:ml-4 block md:inline mt-2 md:mt-0">What's </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecell-primary via-ecell-secondary to-ecell-accent animate-gradient block md:inline">
              happening
            </span>
          </h2>
          {/* <p className="text-gray-400 text-lg md:text-xl max-w-2xl text-center font-light mt-4">
            Mark your calendars. Experience the most awaited entrepreneurial sessions, competitions, and networking mixers of the year.
          </p> */}
        </motion.div>

        {/* ⏳ Timeline Container */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-ecell-primary/50 via-ecell-secondary/50 to-transparent md:-translate-x-1/2 z-0" />

          {/* Events Feed */}
          <div className="flex flex-col gap-12 md:gap-8 relative z-10">
            {eventData.map((event, index) => {
              // Alternate left and right for desktop
              const isLeft = index % 2 === 0;

              return (
                <div key={event.id} className="relative flex items-center w-full group">
                  
                  {/* Timeline Glowing Dot */}
                  <div className="absolute left-[24px] md:left-1/2 w-4 h-4 rounded-full bg-ecell-bg border-2 border-ecell-secondary md:-translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 z-20 group-hover:scale-150 group-hover:bg-ecell-primary transition-all duration-300 shadow-[0_0_15px_rgba(var(--ecell-primary),0.5)]" />

                  {/* Event Content Block */}
                  <motion.div 
                    initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`w-full pl-16 md:w-1/2 ${
                      isLeft 
                        ? "md:pr-16 md:pl-0 text-left md:text-right" 
                        : "md:pl-16 md:ml-auto text-left"
                    }`}
                  >
                    {/* Time / Category tag */}
                    <p className="text-ecell-secondary font-bold text-sm md:text-base tracking-widest mb-2 uppercase flex items-center gap-2 md:justify-end">
                      {!isLeft && <span className="w-8 h-[1px] bg-ecell-secondary/50 hidden md:block"></span>}
                      {event.time}
                      {isLeft && <span className="w-8 h-[1px] bg-ecell-secondary/50 hidden md:block"></span>}
                    </p>
                    
                    {/* Event Title */}
                    <h3 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight mb-3 group-hover:text-ecell-primary transition-colors duration-300">
                      {event.title}
                    </h3>
                    
                    {/* Event Description */}
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-5 font-light">
                      {event.description}
                    </p>
                    
                    {/* Interactive Link */}
                    <a 
                      href={event.url}
                      className={`inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-ecell-accent transition-all duration-300 group/link ${
                        isLeft ? "md:flex-row-reverse" : "flex-row"
                      }`}
                    >
                      <span className="relative overflow-hidden">
                        {event.linkText}
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-ecell-accent -translate-x-full group-hover/link:translate-x-0 transition-transform duration-300"></span>
                      </span>
                      <ArrowRight className={`w-4 h-4 group-hover/link:translate-x-1 transition-transform ${isLeft ? "md:rotate-180 md:group-hover/link:-translate-x-1" : ""}`} />
                    </a>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

        {/* 🚀 View All Events Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 flex justify-center w-full relative z-10"
        >
          <Link to="/events"  onClick={() => window.scrollTo(0, 0)} className="inline-block" >
            <button className="relative overflow-hidden group px-8 py-4 rounded-xl font-bold border border-ecell-primary/30 text-white transition-all duration-500 hover:border-ecell-primary/80 hover:shadow-[0_0_20px_rgba(var(--ecell-primary),0.4)] flex items-center gap-3 bg-[#0f172a]/50 backdrop-blur-sm">
              {/* Background hover fill */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-ecell-primary to-ecell-secondary translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
              
              {/* Text and Icon */}
              <span className="relative z-10 group-hover:text-white transition-colors duration-500 tracking-wider">
                VIEW ALL EVENTS
              </span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}