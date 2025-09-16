import React from 'react';
import { useTranslation } from 'react-i18next';
import '../index.css';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import { Link } from 'react-router-dom';
import Contact from './Contact';


export default function Home() {
  const { t } = useTranslation();

  const bubbles = Array.from({ length: 12 }).map(() => ({
    size: 50 + Math.random() * 150,
    left: Math.random() * 90 + '%',
    duration: 6 + Math.random() * 6,
    delay: Math.random() * 5,
    hue: Math.random() * 360
  }));

  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-[rgba(93,79,72,0.2)] to-white"
      >
        {/* bulles */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {bubbles.map((b, i) => (
            <div
              key={i}
              className="bubble"
              style={{
                width: b.size,
                height: b.size,
                left: b.left,
                top: '-150px',
                background: `hsla(${b.hue}, 70%, 40%, 0.25)`,
                animation: `floatDown ${b.duration}s linear ${b.delay}s forwards, bobble ${2 + Math.random() * 2}s ease-in-out infinite`
              }}
            />
          ))}
        </div>

        {/* contenu */}
        <div className="relative z-10 max-w-5xl text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-[rgba(80,60,50,1)] via-[rgba(118,80,60,0.9)] to-[#413e9eff]
            animate-slide-up shiny-text">
            {t('home.greeting')}
          </h1>

          <p className="mx-auto text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed mb-8 animate-fade-in">
            {t('home.intro')}
          </p>

          <div className="flex justify-center gap-4">
          <Link
  to="/projects-page"
  className="px-6 py-3 rounded-full btn-blue font-semibold shadow-lg transform transition btn-1 btn-hover"
>
  {t('home.cta_projects')}
</Link>
           <button
  onClick={() => {
    const contact = document.getElementById('contact');
    if (contact) {
      const yOffset = -80; // hauteur de la navbar
      const y = contact.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }}
  className="px-6 py-3 rounded-full btn-white border-blue-900 text-blue-900 border-2 font-semibold transform transition btn-2 btn-hover"
>
  {t('home.cta_contact')}
</button>

          </div>
        </div>
      </section>

      {/* sections */}
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
    </>
  );
}
