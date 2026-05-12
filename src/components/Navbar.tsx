import { Menu, Globe } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary-container/95 backdrop-blur-md border-b border-white/10 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <a className="font-headline-md text-headline-md font-bold tracking-tight text-white hover:text-white/90 transition-colors" href="#">
          {t.name}
        </a>
        <div className="hidden md:flex gap-8 items-center">
          <a className="font-label-sm text-label-sm text-white border-b-2 border-tertiary-fixed pb-1 transition-colors ease-in-out duration-200" href="#home">{t.home}</a>
          <a className="font-label-sm text-label-sm text-on-primary-container hover:text-white hover:border-b-2 hover:border-tertiary-fixed/50 pb-1 transition-colors ease-in-out duration-200" href="#experience">{t.experience}</a>
          <a className="font-label-sm text-label-sm text-on-primary-container hover:text-white hover:border-b-2 hover:border-tertiary-fixed/50 pb-1 transition-colors ease-in-out duration-200" href="#projects">{t.projects}</a>
          <a className="font-label-sm text-label-sm text-on-primary-container hover:text-white hover:border-b-2 hover:border-tertiary-fixed/50 pb-1 transition-colors ease-in-out duration-200" href="#skills">{t.skills}</a>
          <a className="font-label-sm text-label-sm text-on-primary-container hover:text-white hover:border-b-2 hover:border-tertiary-fixed/50 pb-1 transition-colors ease-in-out duration-200" href="#education">{t.education}</a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors font-label-sm"
          >
            <Globe className="w-4 h-4" />
            {t.switchLang}
          </button>
          <a className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-container font-label-sm rounded-full hover:shadow-[0_4px_14px_0_rgba(255,255,255,0.1)] transition-all ease-in-out duration-200 border-2 border-transparent hover:border-white/50" href="mailto:asamir@eg-fit.com">
            {t.contactMe}
          </a>
        </div>
        <button 
          className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-primary-container border-b border-white/10 px-margin-mobile py-4 flex flex-col gap-4">
          <div className="flex justify-between items-center mb-2">
            <button 
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors font-label-sm"
            >
              <Globe className="w-4 h-4" />
              {t.switchLang}
            </button>
          </div>
          <a className="font-label-sm text-label-sm text-white" href="#home" onClick={() => setIsOpen(false)}>{t.home}</a>
          <a className="font-label-sm text-label-sm text-on-primary-container hover:text-white transition-colors" href="#experience" onClick={() => setIsOpen(false)}>{t.experience}</a>
          <a className="font-label-sm text-label-sm text-on-primary-container hover:text-white transition-colors" href="#projects" onClick={() => setIsOpen(false)}>{t.projects}</a>
          <a className="font-label-sm text-label-sm text-on-primary-container hover:text-white transition-colors" href="#skills" onClick={() => setIsOpen(false)}>{t.skills}</a>
          <a className="font-label-sm text-label-sm text-on-primary-container hover:text-white transition-colors" href="#education" onClick={() => setIsOpen(false)}>{t.education}</a>
        </div>
      )}
    </nav>
  );
}
