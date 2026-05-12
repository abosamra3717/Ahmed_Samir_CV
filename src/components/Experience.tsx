import { Building2, Megaphone, Server } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';

export function Experience() {
  const { t } = useLanguage();

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low" id="experience">
      <motion.div 
        className="max-w-container-max mx-auto space-y-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-4">
          <h2 className="font-headline-lg text-headline-lg text-primary">{t.experienceTitle}</h2>
          <p className="font-body-lg text-body-lg text-secondary max-w-3xl">{t.experienceSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Highlighted Role */}
          <div className="md:col-span-12 bg-surface rounded-2xl p-8 md:p-12 border border-outline-variant shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
            <div className="absolute top-0 end-0 w-32 h-32 bg-primary-fixed/20 rounded-es-full -z-0"></div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
                  <Building2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary">{t.role1Title}</h3>
                  <p className="font-body-lg text-body-lg text-secondary">{t.role1Company}</p>
                </div>
              </div>
              <div className="bg-surface-variant px-4 py-2 rounded-full font-label-sm text-on-surface-variant">
                {t.present}
              </div>
            </div>
            <ul className="space-y-4 font-body-md text-secondary ms-4 border-s-2 border-outline-variant/50 ps-6">
              <li className="relative before:content-[''] before:absolute before:-start-[29px] before:top-2 before:w-3 before:h-3 before:bg-primary before:rounded-full">{t.role1Point1}</li>
              <li className="relative before:content-[''] before:absolute before:-start-[29px] before:top-2 before:w-3 before:h-3 before:bg-outline-variant before:rounded-full">{t.role1Point2}</li>
              <li className="relative before:content-[''] before:absolute before:-start-[29px] before:top-2 before:w-3 before:h-3 before:bg-outline-variant before:rounded-full">{t.role1Point3}</li>
              <li className="relative before:content-[''] before:absolute before:-start-[29px] before:top-2 before:w-3 before:h-3 before:bg-outline-variant before:rounded-full">{t.role1Point4}</li>
            </ul>
          </div>
          {/* Secondary Roles */}
          <div className="md:col-span-6 bg-surface rounded-2xl p-8 border border-outline-variant shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-surface-variant text-on-surface-variant flex items-center justify-center shrink-0">
                <Megaphone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-label-sm text-label-sm text-primary uppercase tracking-wide">{t.role2Title}</h4>
                <p className="font-body-md text-body-md text-secondary">{t.role2Company}</p>
              </div>
            </div>
            <p className="font-body-md text-secondary mb-4">{t.role2Desc}</p>
          </div>
          <div className="md:col-span-6 bg-surface rounded-2xl p-8 border border-outline-variant shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-surface-variant text-on-surface-variant flex items-center justify-center shrink-0">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-label-sm text-label-sm text-primary uppercase tracking-wide">{t.role3Title}</h4>
                  <p className="font-body-md text-body-md text-secondary">{t.role3Company}</p>
                </div>
              </div>
              <span className="font-label-sm text-outline">{t.role3Date}</span>
            </div>
            <p className="font-body-md text-secondary mb-4">{t.role3Desc}</p>
          </div>
          {/* Past Leadership */}
          <div className="md:col-span-12 bg-surface rounded-2xl p-8 border border-outline-variant shadow-sm">
            <h4 className="font-headline-md text-headline-md text-primary mb-8 border-b border-outline-variant/30 pb-4">{t.previousLeadership}</h4>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 group">
                <div className="md:w-1/4 font-label-sm text-outline pt-1">{t.role4Date}</div>
                <div className="md:w-3/4">
                  <h5 className="font-label-sm text-label-sm text-primary uppercase tracking-wide">{t.role4Title}</h5>
                  <p className="font-body-md text-secondary italic mb-2">{t.role4Company}</p>
                  <p className="font-body-md text-secondary">{t.role4Desc}</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 group">
                <div className="md:w-1/4 font-label-sm text-outline pt-1">{t.role5Date}</div>
                <div className="md:w-3/4">
                  <h5 className="font-label-sm text-label-sm text-primary uppercase tracking-wide">{t.role5Title}</h5>
                  <p className="font-body-md text-secondary italic mb-2">{t.role5Company}</p>
                  <p className="font-body-md text-secondary">{t.role5Desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
