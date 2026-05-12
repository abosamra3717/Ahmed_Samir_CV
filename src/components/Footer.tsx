import { useLanguage } from '../i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full py-16 bg-primary-container border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-8">
        <div className="font-headline-md text-headline-md font-bold text-white">
          {t.name}
        </div>
        <div className="flex gap-6 font-body-md text-body-md">
          <a className="text-on-primary-container hover:text-white underline transition-all opacity-80 hover:opacity-100" href="#">LinkedIn</a>
          <a className="text-on-primary-container hover:text-white underline transition-all opacity-80 hover:opacity-100" href="#">Twitter</a>
          <a className="text-on-primary-container hover:text-white underline transition-all opacity-80 hover:opacity-100" href="mailto:asamir@eg-fit.com">{t.emailMe}</a>
          <a className="text-on-primary-container hover:text-white underline transition-all opacity-80 hover:opacity-100" href="#">{t.privacyPolicy}</a>
        </div>
        <div className="font-body-md text-body-md text-on-primary-container opacity-80 text-center">
          {t.allRightsReserved}
        </div>
      </div>
    </footer>
  );
}
