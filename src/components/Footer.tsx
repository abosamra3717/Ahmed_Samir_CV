import { useLanguage } from '../i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full py-16 bg-surface-container-low dark:bg-surface-container-highest border-t border-outline-variant dark:border-outline">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-8">
        <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">
          {t.name}
        </div>
        <div className="flex gap-6 font-body-md text-body-md">
          <a className="text-secondary dark:text-secondary-fixed-dim hover:text-on-tertiary-container underline transition-all opacity-80 hover:opacity-100" href="#">LinkedIn</a>
          <a className="text-secondary dark:text-secondary-fixed-dim hover:text-on-tertiary-container underline transition-all opacity-80 hover:opacity-100" href="#">Twitter</a>
          <a className="text-secondary dark:text-secondary-fixed-dim hover:text-on-tertiary-container underline transition-all opacity-80 hover:opacity-100" href="mailto:asamir@eg-fit.com">{t.emailMe}</a>
          <a className="text-secondary dark:text-secondary-fixed-dim hover:text-on-tertiary-container underline transition-all opacity-80 hover:opacity-100" href="#">{t.privacyPolicy}</a>
        </div>
        <div className="font-body-md text-body-md text-secondary dark:text-secondary-fixed-dim opacity-80 text-center">
          {t.allRightsReserved}
        </div>
      </div>
    </footer>
  );
}
