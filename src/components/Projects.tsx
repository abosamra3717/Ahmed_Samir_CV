import { Landmark, Code2, CreditCard, Database } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';

export function Projects() {
  const { t } = useLanguage();

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop relative overflow-hidden" id="projects">
      <div className="absolute inset-0 z-0 bg-surface-bright"></div>
      <motion.div 
        className="max-w-container-max mx-auto relative z-10 space-y-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-primary">{t.projectsTitle}</h2>
          <p className="font-body-lg text-body-lg text-secondary">{t.projectsSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface/60 backdrop-blur-xl border border-outline-variant/40 rounded-2xl p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.02)] hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] transition-all duration-300">
            <div className="w-14 h-14 bg-primary-container text-on-primary-container rounded-xl flex items-center justify-center mb-6">
              <Landmark className="w-7 h-7" />
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-4">{t.proj1Title}</h3>
            <p className="font-body-md text-body-md text-secondary">
              {t.proj1Desc}
            </p>
          </div>
          <div className="bg-surface/60 backdrop-blur-xl border border-outline-variant/40 rounded-2xl p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.02)] hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] transition-all duration-300">
            <div className="w-14 h-14 bg-tertiary-container text-on-tertiary-container rounded-xl flex items-center justify-center mb-6">
              <Code2 className="w-7 h-7" />
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-4">{t.proj2Title}</h3>
            <p className="font-body-md text-body-md text-secondary">
              {t.proj2Desc}
            </p>
          </div>
          <div className="bg-surface/60 backdrop-blur-xl border border-outline-variant/40 rounded-2xl p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.02)] hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] transition-all duration-300">
            <div className="w-14 h-14 bg-secondary-container text-on-secondary-container rounded-xl flex items-center justify-center mb-6">
              <CreditCard className="w-7 h-7" />
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-4">{t.proj3Title}</h3>
            <p className="font-body-md text-body-md text-secondary">
              {t.proj3Desc}
            </p>
          </div>
          <div className="bg-surface/60 backdrop-blur-xl border border-outline-variant/40 rounded-2xl p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.02)] hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] transition-all duration-300">
            <div className="w-14 h-14 bg-surface-variant text-on-surface-variant rounded-xl flex items-center justify-center mb-6">
              <Database className="w-7 h-7" />
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-4">{t.proj4Title}</h3>
            <p className="font-body-md text-body-md text-secondary">
              {t.proj4Desc}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
