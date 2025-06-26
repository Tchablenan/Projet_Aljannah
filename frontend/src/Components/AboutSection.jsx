// src/pages/HomePage.js
import React from 'react';
import plane from '../assets/plane.png'; // Image de l'avion
const AboutSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#02171FFF] to-[#184C58FF] text-white py-16" id="about">
      <div className="container mx-auto px-6 md:px-20">
       <h1 className="text-6xl font-extrabold text-yellow-500 text-center mb-10 animate-slide-up">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Texte à gauche avec animation */}
          <div className="md:w-1/2 text-center md:text-left animate-slide-up">
            <p className="text-lg md:text-xl mb-6 text-gray-200 leading-relaxed animate-fade-in">
              At **Aljannah Address**, we offer an unparalleled luxury travel experience with our private jets. Whether you're looking for a quick getaway or need to transport clients in style, we provide tailored services that meet your exact needs. With exclusive access to premium aircraft, we ensure every journey is smooth, comfortable, and unforgettable.
            </p>
            <p className="text-lg md:text-xl mb-6 text-gray-200 leading-relaxed animate-fade-in">
              We believe that time is the most valuable asset, and our services are designed to give you more of it. Skip the long security lines, avoid the delays, and enjoy a truly personalized flight experience.
            </p>
            <p className="text-lg md:text-xl mb-6 text-gray-200 leading-relaxed animate-fade-in">
              Experience luxury redefined with **Aljannah Address**—your gateway to exclusive private air travel. Our fleet is equipped with the latest amenities to ensure comfort, efficiency, and privacy, so you can travel on your own terms.
            </p>
          </div>


          {/* Image à droite avec animation */}
          <div className="md:w-1/2 animate-slide-right">
            <img
              src={plane} // Ajoutez ici l'image pertinente
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-1000 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
