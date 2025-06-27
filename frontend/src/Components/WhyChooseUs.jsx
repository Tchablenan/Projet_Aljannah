// src/components/WhyChooseUs.jsx
import React from 'react';
import planeInteriorImage from '../assets/nettoyer-l-interieur-de-l-avion.jpg'; // Image de l'intérieur de l'avion
import scheduleImage from '../assets/schedule.png'; // Image pour la flexibilité de l'horaire
import qualityImage from '../assets/qualite.jpg'; // Image pour la qualité du service
import customerServiceImage from '../assets/sourire.jpg'; // Image pour le service client

const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-r from-[#101213FF] to-[#255e6d]  text-gray-900 py-16">
      <div className="container mx-auto px-6 md:px-20 text-center">
        <h2 className="text-4xl font-extrabold text-yellow-500 mb-12">Why Choose Us?</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Avantage 1: Security */}
          <div className="bg-gradient-to-r from-[#0B2B3BFF] to-[#255e6d] p-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <img src={planeInteriorImage} alt="Interior of private jet" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">Security & Privacy</h3>
            <p className="text-lg text-justify text-gray-100">
              Your safety and privacy are our top priorities. All our flights ensure confidentiality, with fully private cabins and dedicated security measures.
            </p>
          </div>

          {/* Avantage 2: Flexible Scheduling */}
          <div className="bg-gradient-to-r from-[#0B2B3BFF] to-[#255e6d]  text-white py-16 p-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <img src={scheduleImage} alt="Interior of private jet" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">Flexible Scheduling</h3>
            <p className="text-lg  text-gray-100">
              We provide fully flexible scheduling. You decide when and where you want to fly, without the constraints of commercial airlines.
            </p>
          </div>

          {/* Avantage 3: Quality Service */}
          <div className="bg-gradient-to-r from-[#0B2B3BFF] to-[#255e6d] p-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <img src={qualityImage} alt="Interior of private jet" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">Unmatched Quality</h3>
            <p className="text-lg text-justify text-gray-100">
              We offer a level of service and luxury that goes beyond your expectations. From gourmet catering to personalized flight experiences.
            </p>
          </div>

          {/* Avantage 4: Customer-Centric */}
          <div className="bg-gradient-to-r from-[#0B2B3BFF] to-[#255e6d] p-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <img src={customerServiceImage} alt="Interior of private jet" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">Customer-Centric Approach</h3>
            <p className="text-lg  text-gray-100">
              Our team is dedicated to providing personalized service tailored to your needs. We are here to ensure every part of your journey exceeds expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
