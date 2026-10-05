import { useLanguage } from '../hooks/useLanguage';
import { MapPin, Building2, Link2, Phone, Mail, ChevronRight } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-950 text-gray-300 relative border-t border-gray-800/80">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-16">
        
        {/* باکس تماس تلفن و ایمیل با بوردر متحرک سبز در ابتدای فوتر */}
        <div className="mb-14 flex justify-center">
          <div className="relative p-[1.5px] rounded-2xl overflow-hidden w-full max-w-md sm:max-w-2xl">
            {/* نور چرخان سبز قطاری */}
            <div
              className="absolute inset-[-100%] animate-[spin_4s_linear_infinite]"
              style={{
                background: 'conic-gradient(from 0deg, transparent 0 310deg, #10b981 360deg)',
              }}
            />
            {/* هاله نور بلوری */}
            <div
              className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] blur-sm opacity-60"
              style={{
                background: 'conic-gradient(from 0deg, transparent 0 310deg, #34d399 360deg)',
              }}
            />

            {/* محتوای داخلی باکس */}
            <div className="relative z-10 bg-gray-900/90 backdrop-blur-xl px-5 py-3.5 sm:px-8 sm:py-4 rounded-[15px] flex flex-row items-center justify-between sm:justify-around gap-4 text-white">
              {/* لینک تلفن */}
              <a 
                href="tel:0750 424 3524" 
                className="flex items-center gap-3 group hover:opacity-90 transition-opacity"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-500/20 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="font-semibold text-xs sm:text-base tracking-wide">+964 750 424 3524</div>
                  <div className="text-[10px] sm:text-xs text-gray-400">Phone</div>
                </div>
              </a>

              {/* خط جداکننده */}
              <div className="h-7 w-px bg-gray-700" />

              {/* لینک ایمیل */}
              <a 
                href="mailto:Info@paytakhtinstitute.com" 
                className="flex items-center gap-3 min-w-0 group hover:opacity-90 transition-opacity"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-500/20 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-xs sm:text-base truncate max-w-[130px] xs:max-w-[180px] sm:max-w-none">
                    Info@paytakhtinstitute.com
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-400">Email</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* بخش اصلی فوتر (3 ستون) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          
          {/* ستون آدرس و نقشه */}
          <div className="space-y-4">
            <h3 className="text-emerald-400 font-semibold text-lg flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-400" />
              {t('location')}
            </h3>
            <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-xl relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.5!2d44.0!3d36.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDExJzI0LjAiTiA0NMKwMDAnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="160"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="grayscale group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed pt-1">
              German Bazar, Erbil<br />
              <span className="text-gray-200 font-medium">Paitax Technical Private Institute</span>
            </p>
          </div>

          {/* ستون دپارتمان‌ها */}
          <div>
            <h3 className="text-emerald-400 font-semibold text-lg mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-emerald-400" />
              {t('departments')}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2.5 text-sm">
              {[
                t('pharmacy'),
                t('pathological'),
                t('nursing'),
                t('computerNetworking'),
                t('englishLanguage'),
                t('businessAdmin'),
                t('electricity'),
                t('agricultural')
              ].map((item) => (
                <li key={item}>
                  <a href="#departments" className="hover:text-emerald-400 transition-colors flex items-center gap-2 text-gray-400 hover:translate-x-1 duration-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ستون لینک‌های سریع */}
          <div>
            <h3 className="text-emerald-400 font-semibold text-lg mb-4 flex items-center gap-2">
              <Link2 className="w-5 h-5 text-emerald-400" />
              {t('quickLinks')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: t('home'), href: '/' },
                { name: t('aboutInstitute'), href: '/about' },
                { name: t('departmentsOfInstitute'), href: '/departments' },
                { name: t('activitiesOfAcademics'), href: '/activities' },
                { name: t('contact'), href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-emerald-400 transition-colors flex items-center gap-2 text-gray-400 hover:translate-x-1 duration-200">
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* بخش کپی رایت */}
      <div className="border-t border-gray-900 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>{t('allRights')}</p>
          <p className="text-emerald-500 font-semibold tracking-wide">په‌‌یمانگه‌ی ته‌کنیکی پایته‌خت</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;