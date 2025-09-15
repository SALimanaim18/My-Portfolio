import React from 'react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  const quickFacts = [
    { label: 'Education', value: `${t('about.quickFacts.school')} - ${t('about.quickFacts.currentYear')}` },
    { label: 'Diploma', value: t('about.quickFacts.diploma') },
    { label: 'Baccalaureate', value: t('about.quickFacts.baccalaureate') }
  ];

  return (
    <section
      id="about"
      className="min-h-screen px-6 py-16 flex items-start justify-center"
      style={{
        background: 'rgba(255,255,255,0.15)', // léger fond transparent
        backdropFilter: 'blur(8px)'
      }}
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-start mt-10">
        {/* Texte descriptif */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#413e9eff] relative inline-block">
            {t('about.title')}
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#643e9eff] via-[#413e9eff] to-[#87CEEB] rounded-full animate-pulse"></span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        {/* Quick Facts */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-[#413e9eff] mb-4">{t('about.quickFactsTitle')}</h3>
          <div className="grid grid-cols-1 gap-4">
            {quickFacts.map((fact, idx) => (
              <div
                key={idx}
                className="p-5 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg border-l-4 border-[#413e9eff] hover:scale-105 transform transition"
              >
                <h4 className="font-semibold text-[rgba(80,60,50,1)]">{fact.label}</h4>
                <p className="text-gray-700/90 mt-1">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
