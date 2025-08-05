import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import imgIntro from '../assets/sourire.jpg';
import imgComfort from '../assets/qualite.jpg';
import imgFleet from '../assets/jet.jpg';

const AboutSection = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="about"
      className="bg-gradient-to-r from-[#02171FFF] to-[#184C58FF] text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 space-y-16">
        {/* Bloc 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-center" data-aos="fade-up">
          <div>
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">
              {t('about.title')}
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              {t('about.paragraph1')}
            </p>
          </div>
          <img
            src={imgIntro}
            alt={t('about.image_alt1')}
            className="rounded-lg shadow-lg object-cover w-full h-auto transition-transform duration-700 hover:scale-105"
            data-aos="zoom-in"
          />
        </div>

        {/* Bloc 2 */}
        <div className="grid md:grid-cols-2 gap-10 items-center" data-aos="fade-up">
          <img
            src={imgComfort}
            alt={t('about.image_alt2')}
            className="rounded-lg shadow-lg object-cover w-full h-auto transition-transform duration-700 hover:scale-105"
            data-aos="zoom-in"
          />
          <div>
            <p className="text-gray-200 text-lg leading-relaxed">
              {t('about.paragraph2')}
            </p>
          </div>
        </div>

        {/* Bloc 3 */}
        <div className="grid md:grid-cols-2 gap-10 items-center" data-aos="fade-up">
          <div>
            <p className="text-gray-200 text-lg leading-relaxed">
              {t('about.paragraph3')}
            </p>
            <div className="flex gap-4 mt-6" data-aos="fade-up">
              <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300">
                {t('about.button1')}
              </button>
              <button className="border border-white px-6 py-3 rounded-full text-white hover:bg-white hover:text-black transition duration-300">
                {t('about.button2')}
              </button>
            </div>
          </div>
          <img
            src={imgFleet}
            alt={t('about.image_alt3')}
            className="rounded-lg shadow-lg object-cover w-full h-auto transition-transform duration-700 hover:scale-105"
            data-aos="zoom-in"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
