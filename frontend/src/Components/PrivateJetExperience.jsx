// src/components/PrivateJetExperience.jsx
import React from 'react';
import planeImage from '../assets/avions-prives-sur-le-terrain.jpg'; // Image de l'avion

const PrivateJetExperience = () => {
  return (
    <section className="bg-gradient-to-r from-[#101213FF] to-[#255e6d] text-white py-16" id="experience">
      <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Image avec animation */}
        <div className="w-full md:w-1/2 relative animate-slide-left">
          <img
            src={planeImage}
            alt="Private Jet Experience"
            className="w-full max-w-md mx-auto rounded-lg"
          />
        </div>

        {/* Texte avec description */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-yellow-500 mb-4">The Private Jet Experience</h2>
          <p className="text-lg text-gray-300 mb-6">
            Step into a world of comfort, luxury, and exclusivity with our private jet experience. Enjoy the flexibility to choose your departure time, travel in complete privacy, and savor every moment in our fully-equipped aircraft.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Our jets offer a level of comfort and style that's unmatched in commercial aviation. From personalized catering to a peaceful and serene cabin atmosphere, we cater to your every need for an unforgettable journey.
          </p>
          <a
            href="/jets"
            className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 hover:text-white transition duration-300"
          >
            Book Your Jet Experience
          </a>
        </div>
      </div>
    </section>
  );
};

export default PrivateJetExperience;
