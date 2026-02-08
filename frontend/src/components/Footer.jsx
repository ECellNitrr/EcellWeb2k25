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

          {/* CONTACT SECTION */}
          <div className="flex flex-col max-w-md text-left">
            <h4 className="font-bold text-xl mb-8">Contact</h4>

            {/* WEBSITE QUERIES */}
            <div className="mb-6">
              <p className="text-base font-semibold text-gray-200 mb-4">
                For website queries
              </p>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-ecell-primary" />
                  <span className="text-gray-400">
                    +91 62683 26237 (Ayush Shukla)
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-ecell-primary" />
                  <span className="text-gray-400">
                    +91 70113 14730 (Tanmay Srivastava)
                  </span>
                </li>

                {/* <li className="flex items-center gap-3">
        <Mail className="w-4 h-4 text-ecell-primary" />
        <a
          href="mailto:webops_ecell@smail.iitm.ac.in"
          className="text-gray-400 hover:text-ecell-primary"
        >
          webops_ecell@smail.iitm.ac.in
        </a>
      </li> */}
              </ul>
            </div>

            {/* OTHER UPDATES */}
            <div className="mb-6">
              <p className="text-base font-semibold text-gray-200 mb-4">
                For other updates
              </p>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-ecell-primary" />
                  <span className="text-gray-400">
                    +91 90397 51295 (Shashank Sharma)
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-ecell-primary" />
                  <span className="text-gray-400">
                    +91 80519 96225 (Abhishek Jha)
                  </span>
                </li>

                {/* <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-ecell-primary" />
                    <a
                      href="mailto:sr_ecell@smail.iitm.ac.in"
                      className="text-gray-400 hover:text-ecell-primary"
                    >
                      ecell@smail.iitm.ac.in
                    </a>
                  </li> */}
              </ul>
            </div>

            {/* SPONSORSHIP QUERIES */}
            <div>
              <p className="text-base font-semibold text-gray-200 mb-4">
                For Sponsorship queries
              </p>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-ecell-primary" />
                  <span className="text-gray-400">
                    +91 63975 19309 (Ritik Pathak)
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-ecell-primary" />
                  <span className="text-gray-400">
                    +91 91749 78791 (Ayush Bhardwaj)
                  </span>
                </li>

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