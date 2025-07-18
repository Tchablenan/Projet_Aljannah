import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import 'animate.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#07171D] to-[#184C58FF] text-white pt-12 pb-6 animate__animated animate__fadeInUp">
      <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-8">
        
        {/* Branding */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-bold text-yellow-500">Aljannah Address</h2>
          <p className="text-sm text-gray-400">
            Prestige. Privacy. Performance. ✈️<br />
            Your gateway to luxury aviation.
          </p>
        </div>

        {/* Liens de navigation */}
        <div className="space-y-3 text-center md:text-left">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><a href="/jets" className="hover:text-yellow-400 transition">Our Jets</a></li>
            <li><a href="/about" className="hover:text-yellow-400 transition">About Us</a></li>
            <li><a href="/experience" className="hover:text-yellow-400 transition">Experience</a></li>
            <li><a href="/contact" className="hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-yellow-400 text-xl">
            <a href="#" className="hover:text-white transition"><FaFacebook /></a>
            <a href="#" className="hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition"><FaInstagram /></a>
            <a href="#" className="hover:text-white transition"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-6">
        © {currentYear} Aljannah Address. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
