import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      id="contact" // <-- Ajoute cet id !
      className="bg-gradient-to-r from-[#413e9eff] to-[rgba(93,79,72,0.9)] text-white py-6 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Section contact */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">{t('contact.title')}</h3>
          <div className="flex items-center gap-2">
            <FaPhone className="text-white" />
            <span>+212637845874</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-white" />
            <a href="mailto:salimanaim18@gmail.com" className="underline hover:text-gray-300">
              salimanaim18@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaLinkedin className="text-white" />
            <a
              href="https://www.linkedin.com/in/salima-naim-a9ab24317/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaGithub className="text-white" />
            <a
              href="https://github.com/SALimanaim18"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Section copyright */}
        <div className="text-gray-300 text-sm mt-6 md:mt-0">
          &copy; {new Date().getFullYear()} Salima Naim. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
