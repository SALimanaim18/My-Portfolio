import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang) => i18n.changeLanguage(lang);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#76665D] tracking-wider">Portfolio</div>
        <div className="hidden md:flex gap-8 text-[#76665D] font-medium">
          <a href="#home" className="hover:text-sky-400 transition duration-300">Home</a>
          <a href="#about" className="hover:text-sky-400 transition duration-300">About</a>
          <a href="#projects" className="hover:text-sky-400 transition duration-300">Projects</a>
          <a href="#contact" className="hover:text-sky-400 transition duration-300">Contact</a>
        </div>
        <div className="flex gap-2">
          <button onClick={() => changeLanguage('en')} className="px-3 py-1 border border-[#76665D] text-[#76665D] rounded hover:bg-sky-400 hover:text-white transition">EN</button>
          <button onClick={() => changeLanguage('fr')} className="px-3 py-1 border border-[#76665D] text-[#76665D] rounded hover:bg-sky-400 hover:text-white transition">FR</button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#76665D] focus:outline-none text-2xl">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col gap-4 px-6 py-4 animate-fade-in">
          <a href="#home" className="hover:text-sky-400 transition duration-300">Home</a>
          <a href="#about" className="hover:text-sky-400 transition duration-300">About</a>
          <a href="#projects" className="hover:text-sky-400 transition duration-300">Projects</a>
          <a href="#contact" className="hover:text-sky-400 transition duration-300">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
