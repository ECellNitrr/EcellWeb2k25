


import { useEffect, useRef, useState } from "react";

export default function PastSpeakers() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const carouselRef = useRef(null);

  const speakers = [
    {
      name: "Dr. Gajendra Purohit",
      role: "Founder @MathsCare,Mathematics Educator",
      image: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766851697/gp_c3opaq.jpg",
    },
    {
      name: "Anubhav Dubey",
      role: "Co-Founder @Chai Sutta Bar",
      image: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766851697/anubhavdubey_gnevsx.jpg",
    },
    {
      name: "Sandeep Jain",
      role: "Founder of GeeksforGeeks",
      image: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766851696/sandeepjain_h6oftr.jpg",
    },
    {
      name: "Sandeep Chadda",
      role: "Product Manager at Microsoft",
      image: "https://res.cloudinary.com/daoth3ia9/image/upload/v1767269995/sandeep_chadda2_ibw9hr.jpg",
    },
    {
      name: "Raj Shamani",
      role: "Entrepreneur , keynote speaker",
      image: "https://res.cloudinary.com/daoth3ia9/image/upload/v1767269993/raj-shamani2_ssvnb8.webp",
    },
    {
      name: "Dr. Gopichand Katragadda",
      role: "Ec - CTOTataSons , CEO Myelin Foundry",
      image: "https://res.cloudinary.com/daoth3ia9/image/upload/v1767269683/gopichand_z9ltmk.jpg",
    },
    {
      name: "Rahul Subramanian",
      role: "Observational comic & mentor on Comicstaan",
      image: "https://res.cloudinary.com/daoth3ia9/image/upload/v1767269684/rahul_subramanian_1850-orig1694507494_n7rclo.jpg",
    },
    {
      name: "Nishant Tanwar",
      role: "Stand-up comedian known for culture & life humour",
      image: "https://res.cloudinary.com/daoth3ia9/image/upload/v1767269683/nishant_high_res_qewax8.jpg",
    },
    {
      name: "Gurleen Pannu",
      role: "Breakout star from Comicstaan Season 3",
      image: "https://res.cloudinary.com/daoth3ia9/image/upload/v1767269683/Gurleen-Pannu_pjhekw.webp",
    },
    {
      name: "Aashish Solanki",
      role: "Comicstaan S3 winner & touring stand-up comedian",
      image: "https://res.cloudinary.com/daoth3ia9/image/upload/v1767269682/aashish_solanki_nhqouk.jpg",
    },
  ];

  // ▶️ Start Auto Slide
  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % speakers.length);
    }, 4000);
  };

  // ⏸️ Stop Auto Slide
  const stopAutoPlay = () => {
    clearInterval(intervalRef.current);
  };

  // Setup autoplay + cleanup
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  // Pause on hover
  useEffect(() => {
    const node = carouselRef.current;
    if (!node) return;
    node.addEventListener("mouseenter", stopAutoPlay);
    node.addEventListener("mouseleave", startAutoPlay);

    return () => {
      node.removeEventListener("mouseenter", stopAutoPlay);
      node.removeEventListener("mouseleave", startAutoPlay);
    };
  }, []);

  // Visible-on-scroll animation
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.15 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Arrow navigation
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? speakers.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % speakers.length);
  };

  return (
    <section
      ref={sectionRef}
      id="past-speakers"
      className="relative py-28 bg-ecell-bg overflow-hidden"
    >
      {/* Decorative glow */}
      <div className="absolute -top-40 after:after:from-transparent via-ecell-mine to-transparent blur-[120px] rounded-full" />

      {/* Heading + Spark line */}
      <div
        className={`
          h-[2px] w-full mb-16 bg-linear-to-r from-transparent via-ecell-mine to-transparent
          transition-all duration-500
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-50"}
        `}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <h2
          className={`
            text-center text-4xl md:text-5xl font-extrabold mb-16
            bg-linear-to-r from-ecell-primary via-ecell-mine to-ecell-accent
            bg-clip-text text-transparent
            transition-all duration-500
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          Past Speakers
        </h2>

        {/* 🎠 Carousel */}
        <div ref={carouselRef} className="relative w-full overflow-hidden">

          {/* Slide Container */}
          <div
            className="flex transition-transform duration-[1500ms] ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {speakers.map((speaker) => (
              <div key={speaker.name} className="min-w-full px-6 flex justify-center">
                <div
                  className={`
                    group relative rounded-2xl overflow-hidden
                    bg-white/5 border border-white/10 backdrop-blur-xl
                    shadow-xl transition-all duration-250 w-full max-w-sm
                    
                    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                  `}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-ecell-mine/20 via-transparent to-purple-500/10 opacity-70 animate-[pulse_6s_ease-in-out_infinite]" />

                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>

                  <div className="relative p-6 text-center">
                    <h3 className="text-xl font-bold text-white">{speaker.name}</h3>
                    <p className="text-ecell-mine text-sm font-medium mb-3">{speaker.role}</p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-ecell-mine to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* ◀️▶️ Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-lg border border-white/10 shadow-lg"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-lg border border-white/10 shadow-lg"
          >
            ›
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-6 gap-3">
          {speakers.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-3 w-3 rounded-full transition-all ${
                current === i ? "bg-ecell-mine scale-125" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
