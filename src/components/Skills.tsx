import { Brain, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';

export function Skills() {
  const { t } = useLanguage();

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-outline-variant/20" id="skills">
      <motion.div 
        className="max-w-container-max mx-auto space-y-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-4">
          <h2 className="font-headline-lg text-headline-lg text-primary">{t.skillsTitle}</h2>
          <p className="font-body-lg text-body-lg text-secondary">{t.skillsSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="font-headline-md text-headline-md text-primary mb-8 flex items-center gap-3">
              <Brain className="w-8 h-8 text-on-tertiary-container" />
              {t.leadershipCompetencies}
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                t.skill1,
                t.skill2,
                t.skill3,
                t.skill4,
                t.skill5,
                t.skill6,
                t.skill7
              ].map((skill, index) => (
                <span key={index} className="px-5 py-2.5 bg-surface border border-outline-variant/50 text-primary font-label-sm rounded-full shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-headline-md text-headline-md text-primary mb-8 flex items-center gap-3">
              <Terminal className="w-8 h-8 text-on-tertiary-container" />
              {t.technicalSkills}
            </h3>
            <div className="space-y-6">
              <div className="border-b border-outline-variant/30 pb-4">
                <h4 className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-2">{t.tech1Title}</h4>
                <p className="font-body-md text-primary">{t.tech1Desc}</p>
              </div>
              <div className="border-b border-outline-variant/30 pb-4">
                <h4 className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-2">{t.tech2Title}</h4>
                <p className="font-body-md text-primary">{t.tech2Desc}</p>
              </div>
              <div className="border-b border-outline-variant/30 pb-4">
                <h4 className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-2">{t.tech3Title}</h4>
                <p className="font-body-md text-primary">{t.tech3Desc}</p>
              </div>
              <div>
                <h4 className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-2">{t.tech4Title}</h4>
                <p className="font-body-md text-primary">{t.tech4Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
