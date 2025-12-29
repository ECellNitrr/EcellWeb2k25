import {
  Rocket,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-ecell-card/50 border-t border-white/10 text-gray-300"
    >
      {/* Top glowing line */}
      <div className="h-px bg-linear-to-r from-transparent via-ecell-mine to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-14 md:py-16">

        {/* 🌟 MAIN FLEX CONTAINER (REPLACES GRID) */}
        <div className="flex flex-col lg:flex-row flex-wrap justify-around items-center  text-center">

          {/* BRAND */}
          <div className="flex flex-col items-center max-w-xs">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg  flex items-center justify-center">
                <Logo className="w-5 h-5 text-ecell-primary" />
              </div>
              <span className="text-xl font-bold">
                E-Cell <span className="text-ecell-primary">NITRR</span>
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Fostering entrepreneurship and innovation at NIT Raipur.
              Building the next generation of changemakers.
            </p>

            <div className="flex justify-center items-center gap-3">
              {[Instagram, Linkedin, Twitter, Youtube].map((Icon, i) => {
                const links = [
                  "https://www.instagram.com/ecell_nitraipur_/",
                  "https://www.linkedin.com/company/entrepreneurship-cell-nit-raipur/posts/?feedView=all",
                  "https://x.com/Ecell_NITRR",
                  "https://www.youtube.com/@entrepreneurshipcellnitrai3198",
                ];
                return (
                  <a
                    key={i}
                    href={links[i]}
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-ecell-primary hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col items-center">
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", to: "/" },
                { name: "About Us", to: "/about" },
                { name: "Events", to: "/events" },
                { name: "Team", to: "/team" },
                { name: "Gallery", to: "/gallery" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-ecell-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT SECTION */}
          <div className="flex flex-col items-center max-w-xs">
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-center items-center gap-3">
                <MapPin className="w-5 h-5 text-ecell-primary" />
                <span className="text-gray-400">
                  NIT Raipur, G.E. Road, Raipur, Chhattisgarh - 492010
                </span>
              </li>
              <li className="flex justify-center items-center gap-3">
                <Mail className="w-5 h-5 text-ecell-primary" />
                <a
                  href="mailto:ecell@nitrr.ac.in"
                  className="text-gray-400 hover:text-ecell-primary"
                >
                  ecell@nitrr.ac.in
                </a>
              </li>
              <li className="flex justify-center items-center gap-3">
                <Phone className="w-5 h-5 text-ecell-primary" />
                <a
                  href="tel:+919876543210"
                  className="text-gray-400 hover:text-ecell-primary"
                >
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col items-center text-center gap-2">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} E-Cell NIT Raipur. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
