import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-16 bg-white flex flex-col items-center justify-start relative"
    >
      {/* Titre */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#413e9eff] mt-10 mb-6 relative inline-block animate-slide-up">
        {t('projects.title')}
        <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-[#87CEEB] via-[#413e9eff] to-[rgba(129,108,97,0.9)] rounded-full animate-gradient-bg"></span>
      </h2>

      {/* Description */}
      <p className="text-center text-lg md:text-xl text-gray-700 max-w-3xl mb-8">
        {t('projects.description')}
      </p>

      {/* Bouton "Voir plus" */}
      <Link
        to="/projects-page"
        className="px-6 py-3 bg-[rgba(93,79,72,0.9)] text-white font-semibold rounded-xl hover:bg-[#413e9eff] hover:scale-105 transition transform duration-300"
      >
        {t('projects.cta')}
      </Link>
    </section>
  );
}
