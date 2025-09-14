import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-16 bg-[#76665D]/10 animate-fade-in">
      <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-lg animate-slide-left">
        <h2 className="text-4xl font-bold text-[#76665D] mb-6">{t('about.title')}</h2>
        <p className="text-[#76665D]/90 text-lg leading-relaxed">{t('about.description')}</p>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="w-64 h-64 bg-sky-200 rounded-full shadow-xl animate-bounce"></div>
      </div>
    </section>
  );
};

export default About;
