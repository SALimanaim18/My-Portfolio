import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between bg-white/80 backdrop-blur-md shadow-md rounded-b-lg">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center text-white font-bold">S</div>
          <div className="text-xl font-semibold text-primary tracking-wide">Salima Naim</div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-primary font-medium">
          <HashLink smooth to="/#home">{t('navbar.home')}</HashLink>
          <HashLink smooth to="/#about">{t('navbar.about')}</HashLink>
          <HashLink smooth to="/#skills">{t('navbar.skills')}</HashLink>
          <Link to="/projects-page">{t('navbar.projects')} </Link>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={() => i18n.changeLanguage('en')} className="px-3 py-1 rounded border border-primary text-primary hover:bg-primary hover:text-white transition">EN</button>
          <button onClick={() => i18n.changeLanguage('fr')} className="px-3 py-1 rounded border border-primary text-primary hover:bg-primary hover:text-white transition">FR</button>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-primary"
          >
            {open ? '✖' : '☰'}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow p-4 flex flex-col gap-3">
          <HashLink smooth to="/#home">{t('navbar.home')}</HashLink>
          <HashLink smooth to="/#about">{t('navbar.about')}</HashLink>
          <HashLink smooth to="/#skills">{t('navbar.skills')}</HashLink>
          <Link to="/projects-page">{t('navbar.projects')}</Link>
        </div>
      )}
    </header>
  );
}
