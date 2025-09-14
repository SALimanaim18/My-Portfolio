import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-[#76665D]/20 to-sky-100 animate-fade-in">
      <h1 className="text-5xl md:text-6xl font-extrabold text-[#76665D] mb-6 animate-slide-up">Hi, I'm Salima</h1>
      <p className="text-lg md:text-xl text-[#76665D]/90 max-w-3xl mb-8 animate-fade-in delay-300">{t('home.intro')}</p>
      <a
        href="#contact"
        className="bg-sky-400 text-white px-8 py-3 rounded-full shadow-lg hover:bg-sky-500 transition transform hover:scale-105"
      >
        Contact Me
      </a>
    </section>
  );
};

export default Home;
