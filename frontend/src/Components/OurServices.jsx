// src/components/OurServices.jsx
import React from 'react';
import { FaPlane, FaClock, FaShieldAlt, FaUserAlt } from 'react-icons/fa'; // Utilisation de Font Awesome pour les icônes

const OurServices = () => {
  return (
    <section className="bg-gradient-to-r from-[#101213FF] to-[#255e6d] text-white py-16" id="services">
      <div className="container mx-auto px-6 md:px-20">
        <h2 className="text-4xl font-extrabold text-yellow-500 text-center mb-12 animate-slide-up">
         Why Choose Us?
        </h2>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1: Private Jet Rental */}
          <div className="bg-gray-800 p-8 rounded-lg text-center shadow-lg hover:scale-105 transition-all duration-300">
            <FaPlane className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-2xl font-semibold text-yellow-500 mb-4">Private Jet Rental</h3>
            <p className="text-lg text-gray-300">
              Experience the comfort of flying in a private jet tailored to your schedule and needs.
            </p>
          </div>

          {/* Service 2: Flexible Timings */}
          <div className="bg-gray-800 p-8 rounded-lg text-center shadow-lg hover:scale-105 transition-all duration-300">
            <FaClock className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-2xl font-semibold text-yellow-500 mb-4">Flexible Timings</h3>
            <p className="text-lg text-gray-300">
              Choose the time that works best for you with our flexible and on-demand scheduling options.
            </p>
          </div>

          {/* Service 3: Security & Privacy */}
          <div className="bg-gray-800 p-8 rounded-lg text-center shadow-lg hover:scale-105 transition-all duration-300">
            <FaShieldAlt className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-2xl font-semibold text-yellow-500 mb-4">Security & Privacy</h3>
            <p className="text-lg text-gray-300">
              Your privacy and safety are our top priorities with all our flights ensuring confidentiality.
            </p>
          </div>

          {/* Service 4: Personalized Service */}
          <div className="bg-gray-800 p-8 rounded-lg text-center shadow-lg hover:scale-105 transition-all duration-300">
            <FaUserAlt className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-2xl font-semibold text-yellow-500 mb-4">Personalized Service</h3>
            <p className="text-lg text-gray-300">
              Our team provides a tailored experience, from catering to in-flight entertainment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
