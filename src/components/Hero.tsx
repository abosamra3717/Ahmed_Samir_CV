import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col-reverse md:flex-row items-center gap-16 md:gap-32" id="home">
      <motion.div 
        className="flex-1 space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-4">
          <h2 className="font-label-sm text-label-sm text-on-tertiary-container uppercase tracking-widest">{t.role}</h2>
          <h1 className="font-display-xl text-display-xl text-primary leading-tight">
            {t.heroTitlePart1}<span className="text-on-tertiary-container">{t.heroTitleHighlight}</span>{t.heroTitlePart2}
          </h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
            {t.heroDescription}
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary font-label-sm rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-b-2 hover:border-on-tertiary-container transition-all ease-in-out duration-300 gap-2" href="mailto:asamir@eg-fit.com">
            <Mail className="w-5 h-5" />
            {t.emailMe}
          </a>
          <a className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-outline text-primary font-label-sm rounded-full hover:bg-surface-container-low transition-all ease-in-out duration-300 gap-2" href="tel:+201555553717">
            <Phone className="w-5 h-5" />
            +20 155 555 3717
          </a>
        </div>
        <div className="flex items-center gap-2 text-secondary font-label-sm">
          <MapPin className="w-[18px] h-[18px]" />
          {t.location}
        </div>
      </motion.div>
      <motion.div 
        className="w-full md:w-5/12 flex-shrink-0 relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="aspect-[3/4] rounded-2xl overflow-hidden relative shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-outline-variant/30 bg-surface-variant">
          <img alt={t.name} className="w-full h-full object-cover" src="/profile.png" />
        </div>
        {/* Decorative Element */}
        <div className="absolute -z-10 -bottom-8 -end-8 w-64 h-64 bg-tertiary-fixed/20 rounded-full blur-3xl"></div>
      </motion.div>
    </section>
  );
}
