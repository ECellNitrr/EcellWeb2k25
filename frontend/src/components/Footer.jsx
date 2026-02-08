import {
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Phone,
} from "lucide-react";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  const socialLinks = [
    { Icon: Instagram, href: "https://www.instagram.com/ecell_nitraipur_/" },
    { Icon: Linkedin, href: "https://www.linkedin.com/company/entrepreneurship-cell-nit-raipur/" },
    { Icon: Twitter, href: "https://x.com/Ecell_NITRR" },
    { Icon: Youtube, href: "https://www.youtube.com/@entrepreneurshipcellnitrai3198" },
  ];

  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Events", to: "/events" },
    { name: "Team", to: "/team" },
    { name: "Gallery", to: "/gallery" },
  ];

  return (
    <footer id="contact" className="relative bg-ecell-card/50 border-t border-white/10 text-gray-300">
      <div className="h-px bg-gradient-to-r from-transparent via-ecell-primary to-transparent" />

      <div className={`max-w-7xl mx-auto px-6 py-16 ${isContactPage ? 'pt-32 sm:pt-28' : ''}`}>
        {/* MAIN GRID CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* BRAND SECTION */}
          <div className="flex flex-col space-y-6 items-center md:items-start">
            <div className="flex items-center gap-3">
              <Logo className="w-8 h-8 text-ecell-primary" />
              <span className="text-2xl font-bold tracking-tight">
                E-Cell <span className="text-ecell-primary">NITRR</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm text-center md:text-left">
              Fostering entrepreneurship and innovation at NIT Raipur. 
              Building the next generation of changemakers.
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              {socialLinks.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-ecell-primary hover:text-white transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 text-center md:text-left">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.to} className="text-gray-400 hover:text-ecell-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT SECTION (Spans 2 columns on desktop) */}
          <div className="lg:col-span-2 lg:ml-auto">
            <h4 className="font-bold text-lg text-white mb-8 text-center md:text-left">Contact Us</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-center md:text-left">
              
              {/* Website & Updates */}
              <div className="space-y-6 px-4 sm:px-0">
                <div className="flex flex-col items-center sm:items-start">
                  <p className="text-xs uppercase tracking-widest font-bold text-ecell-primary mb-4">Website Queries</p>
                  <div className="space-y-3 text-sm text-gray-400">
                    <p className="flex items-center gap-2 justify-center sm:justify-start"><Phone size={14}/> +91 62683 26237 (Ayush Shukla)</p>
                    <p className="flex items-center gap-2 justify-center sm:justify-start"><Phone size={14}/> +91 70113 14730 (Tanmay Srivastava)</p>
                  </div>
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <p className="text-xs uppercase tracking-widest font-bold text-ecell-primary mb-4">General Updates</p>
                  <div className="space-y-3 text-sm text-gray-400">
                    <p className="flex items-center gap-2 justify-center sm:justify-start"><Phone size={14}/> +91 90397 51295 (Shashank Sharma)</p>
                    <p className="flex items-center gap-2 justify-center sm:justify-start"><Phone size={14}/> +91 80519 96225 (Abhishek Jha)</p>
                  </div>
                </div>
              </div>

              {/* Sponsorship */}
              <div className="flex flex-col items-center sm:items-start px-4 sm:px-0">
                <p className="text-xs uppercase tracking-widest font-bold text-ecell-primary mb-4">Sponsorship</p>
                <div className="space-y-3 text-sm text-gray-400">
                  <p className="flex items-center gap-2 justify-center sm:justify-start"><Phone size={14}/> +91 63975 19309 (Ritik Pathak)</p>
                  <p className="flex items-center gap-2 justify-center sm:justify-start"><Phone size={14}/> +91 91749 78791 (Ayush Bhardwaj)</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} E-Cell NIT Raipur. Empowering Ideas.
          </p>
        </div>
      </div>
    </footer>
  );
}