import React, { useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/aljannah.jpg";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const navigation = [
  { key: "home", href: "/" },
  { key: "booking", href: "/booking" },
  { key: "catalog", href: "/jets" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  // Effet de scroll pour changer l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Déterminer l'item actif
  useEffect(() => {
    const currentPath = location.pathname;
    const activeNav = navigation.find(item => item.href === currentPath);
    setActiveItem(activeNav?.key || "");
  }, [location.pathname]);

  return (
    <>
      <Disclosure
        as="nav"
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-gradient-to-r from-[#154453FF]/95 to-[#0D2E36FF]/95 backdrop-blur-lg shadow-xl border-b border-white/10" 
            : "bg-gradient-to-r from-[#154453FF] to-[#0D2E36FF] shadow-lg"
        }`}
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-20 items-center justify-between">
                {/* Logo avec animations */}
                <div className="flex-shrink-0 flex items-center group">
                  <a href="/" className="relative block">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-150"></div>
                    <img
                      src={logo}
                      alt="Aljannah Jet"
                      className={`relative z-10 w-auto object-contain transition-all duration-500 transform group-hover:scale-105 ${
                        scrolled ? "h-12" : "h-16"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </a>
                </div>

                {/* Navigation Desktop avec animations */}
                <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-8 w-full">
                  {navigation.map((item, index) => {
                    const isActive = activeItem === item.key;

                    return (
                      <div key={item.key} className="relative group">
                        <a
                          href={item.href}
                          className={`relative px-4 py-2 text-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                            isActive
                              ? "text-yellow-400"
                              : "text-white hover:text-yellow-300"
                          }`}
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {/* Texte principal */}
                          <span className="relative z-10">
                            {t(`header.${item.key}`)}
                          </span>
                          
                          {/* Effet de fond au hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100"></div>
                          
                          {/* Barre de soulignement animée */}
                          <div className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-300 transform -translate-x-1/2 ${
                            isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}></div>
                          
                          {/* Effet de particules au hover */}
                          <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transform -translate-x-1/2 -translate-y-1/2 group-hover:animate-ping"></div>
                          </div>
                        </a>
                      </div>
                    );
                  })}
                </div>

                {/* Bouton Contact avec animations spectaculaires */}
                <div className="hidden lg:flex lg:items-center lg:space-x-4">
                  <a
                    href="/contact"
                    className="group relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
                  >
                    <span className="relative z-10">{t('header.contact')}</span>
                    
                    {/* Effet de brillance */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    
                    {/* Effet de pulsation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                  </a>
                </div>

                {/* Sélecteur de langue avec animations */}
                <div className="hidden lg:flex items-center gap-2 ml-4">
                  {["en", "fr"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => i18n.changeLanguage(lang)}
                      className={`relative px-3 py-1 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-110 group ${
                        i18n.language === lang
                          ? "text-yellow-400 bg-yellow-400/20"
                          : "text-white hover:text-yellow-300 hover:bg-white/10"
                      }`}
                    >
                      <span className="relative z-10">{lang.toUpperCase()}</span>
                      
                      {/* Indicateur actif */}
                      {i18n.language === lang && (
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-yellow-600/30 rounded-lg animate-pulse"></div>
                      )}
                      
                      {/* Effet au hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </button>
                  ))}
                </div>

                {/* Bouton menu mobile avec animations */}
                <div className="lg:hidden">
                  <DisclosureButton className="group inline-flex items-center justify-center p-2 rounded-lg text-white hover:text-yellow-400 hover:bg-white/10 focus:outline-none transition-all duration-300 transform hover:scale-110">
                    <span className="sr-only">Open main menu</span>
                    <div className="relative">
                      {open ? (
                        <XMarkIcon className="w-6 h-6 transform rotate-0 group-hover:rotate-90 transition-transform duration-300" />
                      ) : (
                        <Bars3Icon className="w-6 h-6 transform rotate-0 group-hover:rotate-12 transition-transform duration-300" />
                      )}
                    </div>
                  </DisclosureButton>
                </div>
              </div>
            </div>

            {/* Menu mobile avec animations */}
            <DisclosurePanel 
              className="lg:hidden bg-gradient-to-b from-[#02171FFF] to-[#154453FF] border-t border-white/10 backdrop-blur-lg"
              style={{
                animation: open ? "slideDown 0.3s ease-out" : "slideUp 0.3s ease-out"
              }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item, index) => {
                  const isActive = activeItem === item.key;
                  
                  return (
                    <DisclosureButton
                      key={item.key}
                      as="a"
                      href={item.href}
                      className={`group relative flex items-center px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 transform hover:scale-105 ${
                        isActive
                          ? "text-yellow-400 bg-yellow-400/20"
                          : "text-white hover:text-yellow-300 hover:bg-white/10"
                      }`}
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        animation: "fadeInUp 0.4s ease-out forwards"
                      }}
                    >
                      <span className="relative z-10">
                        {t(`header.${item.key}`)}
                      </span>
                      
                      {/* Indicateur actif */}
                      <div className={`absolute left-0 top-1/2 w-1 bg-gradient-to-b from-yellow-400 to-yellow-600 transition-all duration-300 transform -translate-y-1/2 rounded-r-full ${
                        isActive ? "h-8 opacity-100" : "h-0 opacity-0 group-hover:h-4 group-hover:opacity-100"
                      }`}></div>
                      
                      {/* Effet de fond au hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </DisclosureButton>
                  );
                })}

                {/* Bouton Contact mobile */}
                <div className="pt-4 pb-2 animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
                  <a
                    href="/contact"
                    className="group relative flex items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105 mx-4 overflow-hidden"
                  >
                    <span className="relative z-10">{t('header.contact')}</span>
                    
                    {/* Effet de brillance */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </a>
                </div>

                {/* Sélecteur de langue mobile */}
                <div className="flex justify-center gap-4 pt-2 pb-4 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
                  {["en", "fr"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => i18n.changeLanguage(lang)}
                      className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-110 ${
                        i18n.language === lang
                          ? "text-yellow-400 bg-yellow-400/20 ring-1 ring-yellow-400/50"
                          : "text-white hover:text-yellow-300 hover:bg-white/10"
                      }`}
                    >
                      <span className="relative z-10">{lang.toUpperCase()}</span>
                      
                      {/* Indicateur actif */}
                      {i18n.language === lang && (
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-lg animate-pulse"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>

      {/* Styles CSS personnalisés */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        /* Effet de ripple pour les clics */
        .ripple-click {
          position: relative;
          overflow: hidden;
        }

        .ripple-click:active::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: ripple 0.6s ease-out;
        }

        @keyframes ripple {
          to {
            width: 200px;
            height: 200px;
            opacity: 0;
          }
        }

        /* Amélioration des transitions pour les écrans tactiles */
        @media (hover: none) {
          .group:hover .group-hover\\:opacity-100 {
            opacity: 1;
          }
        }

        /* Effet de parallax léger */
        .parallax-bg {
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </>
  );
}