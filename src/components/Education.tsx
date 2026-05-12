import { GraduationCap, Award, Languages, Globe, Cake } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';

export function Education() {
  const { t } = useLanguage();

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface" id="education">
      <motion.div 
        className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="lg:col-span-7 space-y-8">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8">{t.educationTitle}</h2>
          <div className="bg-surface-container-lowest border border-outline-variant p-8 rounded-2xl hover:border-on-tertiary-container/50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary">{t.edu1Title}</h3>
                <p className="font-body-lg text-secondary mt-1">{t.edu1Sub}</p>
                <p className="font-label-sm text-outline mt-2">{t.edu1Date}</p>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant p-8 rounded-2xl hover:border-on-tertiary-container/50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary">{t.edu2Title}</h3>
                <p className="font-body-lg text-secondary mt-1">{t.edu2Sub}</p>
                <p className="font-label-sm text-outline mt-2 mb-4">{t.edu2Date}</p>
                <div className="bg-surface-variant/50 p-4 rounded-lg">
                  <p className="font-label-sm text-secondary uppercase tracking-wider mb-1">{t.gradProjectLabel}</p>
                  <p className="font-body-md text-primary">{t.gradProjectDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 bg-primary text-on-primary p-10 rounded-3xl relative overflow-hidden">
          <div className="absolute -top-24 -end-24 w-48 h-48 bg-on-tertiary-container/20 rounded-full blur-2xl"></div>
          <h3 className="font-headline-md text-headline-md mb-8 relative z-10">{t.personalDetails}</h3>
          <ul className="space-y-6 relative z-10 font-body-md">
            <li className="flex items-start gap-4">
              <Languages className="w-6 h-6 text-on-tertiary-container mt-1 shrink-0" />
              <div>
                <span className="block font-label-sm uppercase tracking-wider text-on-primary/70 mb-1">{t.languagesLabel}</span>
                {t.lang1}<br />
                {t.lang2}<br />
                {t.lang3}
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Globe className="w-6 h-6 text-on-tertiary-container mt-1 shrink-0" />
              <div>
                <span className="block font-label-sm uppercase tracking-wider text-on-primary/70 mb-1">{t.nationalityLabel}</span>
                {t.nationalityVal}
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Cake className="w-6 h-6 text-on-tertiary-container mt-1 shrink-0" />
              <div>
                <span className="block font-label-sm uppercase tracking-wider text-on-primary/70 mb-1">{t.dobLabel}</span>
                {t.dobVal}
              </div>
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
