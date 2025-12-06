import React from "react";
import { Link } from "react-router-dom";
import {
  Rocket,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import Logo from "./Logo";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/home" },
    { name: "About Us", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Sponsors", href: "/sponsors" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Startups", href: "/startups" },
    { name: "Mentorship", href: "/mentorship" },
    { name: "Incubation", href: "/incubation" },
    { name: "FAQs", href: "/faq" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export default function Footer() {
  const smoothScroll = (e, href) => {
    e.preventDefault();
    if (href.includes("#")) {
      const id = href.split("#")[1];
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                <Logo/>
              </div>
              <span className="font-bold text-xl text-white">E-Cell NITRR</span>
            </Link>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering student entrepreneurs to transform ideas into impactful
              ventures.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  className="w-10 h-10 rounded-lg bg-gray-800 text-gray-400 flex items-center justify-center hover:bg-gray-700 hover:text-white transition"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    // onClick={(e) => smoothScroll(e, link.href)}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span className="text-gray-400">
                  Entrepreneurship Cell Building, NIT Raipur Campus,
                  Chhattisgarh
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a
                  href="mailto:ecell@nitrr.ac.in"
                  className="text-gray-400 hover:text-white transition"
                >
                  ecell@nitrr.ac.in
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a
                  href="tel:+91123456789"
                  className="text-gray-400 hover:text-white transition"
                >
                  +91 12345 67890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} E-Cell NIT Raipur. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm mt-4 md:mt-0">
            <Link to="#" className="text-gray-500 hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-500 hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
