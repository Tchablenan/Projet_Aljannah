import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import 'animate.css';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#07171D] to-[#184C58FF] text-white pt-12 pb-6 animate__animated animate__fadeInUp">
      <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-8">
        
        {/* Branding */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-bold text-yellow-500">{t("footer.brand.title")}</h2>
          <p className="text-sm text-gray-400">
            {t("footer.brand.tagline")}<br />
            {t("footer.brand.description")}
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-3 text-center md:text-left">
          <h3 className="text-lg font-semibold text-white">{t("footer.links.title")}</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><a href="/jets" className="hover:text-yellow-400 transition">{t("footer.links.jets")}</a></li>
            <li><a href="/about" className="hover:text-yellow-400 transition">{t("footer.links.about")}</a></li>
            <li><a href="/experience" className="hover:text-yellow-400 transition">{t("footer.links.experience")}</a></li>
            <li><a href="/contact" className="hover:text-yellow-400 transition">{t("footer.links.contact")}</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-lg font-semibold text-white">{t("footer.social.title")}</h3>
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
        © {currentYear} {t("footer.brand.title")}. {t("footer.copyright")}
      </div>
    </footer>
  );
};

export default Footer;
