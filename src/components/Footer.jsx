import { useLanguage } from '../hooks/useLanguage';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Location */}
          <div>
            <h3 className="text-amber-400 font-semibold text-lg mb-5 flex items-center gap-2">
              <span>📍</span> {t('location')}
            </h3>
            <div className="rounded-xl overflow-hidden border border-gray-700 mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.5!2d44.0!3d36.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDExJzI0LjAiTiA0NMKwMDAnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
            <p className="text-sm">German Bazar, Erbil<br />Paitax Technical Private Institute</p>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-amber-400 font-semibold text-lg mb-5 flex items-center gap-2">
              <span>🏛️</span> {t('departments')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[t('pharmacy'), t('pathological'), t('nursing'), t('computerNetworking'), t('englishLanguage'), t('businessAdmin'), t('electricity'), t('agricultural')].map((item) => (
                <li key={item}>
                  <a href="#departments" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-amber-400 font-semibold text-lg mb-5 flex items-center gap-2">
              <span>🔗</span> {t('quickLinks')}
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
                  <a href={link.href} className="hover:text-amber-400 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>{t('allRights')}</p>
          <p className="text-amber-500 font-medium">په‌یمانگه‌ی ته‌کنیکی پایته‌خت</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;