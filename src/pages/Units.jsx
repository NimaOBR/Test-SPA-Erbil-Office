import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import SEO from '../components/SEO';

const Units = () => {
  const { t } = useLanguage();

  const units = [
    { id: 1, name: t('unitAdmin'), image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', icon: '🛡️' },
    { id: 2, name: t('unitRegistration'), image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80', icon: '🗂️' },
    { id: 3, name: t('unitQuality'), image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80', icon: '✅' },
    { id: 4, name: t('unitLibrary'), image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80', icon: '📚' },
    { id: 5, name: t('unitMedia'), image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80', icon: '📱' },
    { id: 6, name: t('unitBusiness'), image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', icon: '📈' },
    { id: 7, name: t('unitResearch'), image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80', icon: '🔬' },
    { id: 8, name: t('unitHealth'), image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80', icon: '⚕️' },
    { id: 9, name: t('unitAccounting'), image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80', icon: '🧮' },
    { id: 10, name: t('unitLegal'), image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80', icon: '⚖️' },
    { id: 11, name: t('unitWarehouse'), image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', icon: '📦' },
    { id: 12, name: t('unitIT'), image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80', icon: '💻' },
  ];

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <SEO 
        title="Units of the Institute"
        description="Administrative and support units of Paitaxt Technical Institute including Registration, Quality Assurance, Library, Media and more."
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
          >
            {t('unitsTitle')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            {t('unitsSubtitle')}
          </motion.p>
          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {units.map((unit, index) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer aspect-[4/3]"
            >
              <img
                src={unit.image}
                alt={unit.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30 group-hover:from-black/90 transition-all duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {unit.icon}
                </div>
                <h3 className="text-white font-semibold text-lg leading-tight drop-shadow-md">
                  {unit.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Units;