import React from 'react';
import { useTranslation } from 'react-i18next';

import planeInteriorImage from '../assets/nettoyer-l-interieur-de-l-avion.jpg';
import scheduleImage from '../assets/schedule.png';
import qualityImage from '../assets/qualite.jpg';
import customerServiceImage from '../assets/sourire.jpg';

const WhyChooseUs = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-r from-[#101213FF] to-[#255e6d] text-gray-900 py-16">
      <div className="container mx-auto px-6 md:px-20 text-center">
        <h2 className="text-4xl font-extrabold text-yellow-500 mb-12">
          {t("whyChooseUs.title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Security */}
          <div className="bg-gradient-to-r from-[#0B2B3BFF] to-[#255e6d] p-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <img src={planeInteriorImage} alt={t("whyChooseUs.alt.interior")} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">
              {t("whyChooseUs.cards.security.title")}
            </h3>
            <p className="text-lg text-justify text-gray-100">
              {t("whyChooseUs.cards.security.text")}
            </p>
          </div>

          {/* Schedule */}
          <div className="bg-gradient-to-r from-[#0B2B3BFF] to-[#255e6d] text-white py-16 p-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <img src={scheduleImage} alt={t("whyChooseUs.alt.schedule")} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">
              {t("whyChooseUs.cards.schedule.title")}
            </h3>
            <p className="text-lg text-gray-100">
              {t("whyChooseUs.cards.schedule.text")}
            </p>
          </div>

          {/* Quality */}
          <div className="bg-gradient-to-r from-[#0B2B3BFF] to-[#255e6d] p-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <img src={qualityImage} alt={t("whyChooseUs.alt.quality")} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">
              {t("whyChooseUs.cards.quality.title")}
            </h3>
            <p className="text-lg text-justify text-gray-100">
              {t("whyChooseUs.cards.quality.text")}
            </p>
          </div>

          {/* Customer */}
          <div className="bg-gradient-to-r from-[#0B2B3BFF] to-[#255e6d] p-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <img src={customerServiceImage} alt={t("whyChooseUs.alt.customer")} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">
              {t("whyChooseUs.cards.customer.title")}
            </h3>
            <p className="text-lg text-gray-100">
              {t("whyChooseUs.cards.customer.text")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
