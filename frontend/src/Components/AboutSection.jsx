import React from 'react';
import plane from '../assets/plane.png';
import 'animate.css';

const AboutSection = () => {
  return (
    <section
      className="bg-gradient-to-r from-[#02171FFF] to-[#184C58FF] text-white py-20 overflow-hidden"
      id="about"
    >
      <div className="container mx-auto px-6 md:px-20">
        <h1 className="text-5xl font-extrabold text-yellow-500 text-center mb-12 animate__animated animate__fadeInDown animate__delay-1s">
          About Us
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 animate__animated animate__fadeInUp animate__delay-2s">
          {/* Texte à gauche */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed animate__animated animate__fadeInLeft animate__delay-2s">
              At <strong>Aljannah Address</strong>, we offer an unparalleled luxury travel experience with our private jets. Whether you're looking for a quick getaway or need to transport clients in style, we provide tailored services that meet your exact needs.
            </p>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed animate__animated animate__fadeInLeft animate__delay-2-5s">
              We believe that time is the most valuable asset, and our services are designed to give you more of it. Skip the long security lines, avoid the delays, and enjoy a truly personalized flight experience.
            </p>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed animate__animated animate__fadeInLeft animate__delay-3s">
              Experience luxury redefined with <strong>Aljannah Address</strong>—your gateway to exclusive private air travel. Our fleet is equipped with the latest amenities to ensure comfort, efficiency, and privacy, so you can travel on your own terms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4 animate__animated animate__fadeInUp animate__delay-3-5s">
              <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:scale-105 transition duration-300">
                Discover Our Fleet
              </button>
              <button className="border border-white px-6 py-3 rounded-full text-white hover:bg-white hover:text-black hover:scale-105 transition duration-300">
                Meet the Team
              </button>
            </div>
          </div>

          {/* Image à droite */}
          <div className="md:w-1/2 animate__animated animate__zoomIn animate__delay-2s">
            <img
              src={plane}
              alt="About Us"
              className="w-full max-w-md rounded-lg shadow-lg transform transition duration-1000 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
