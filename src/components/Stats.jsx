import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

const Stats = () => {
  const { t } = useLanguage();

  const stats = [
    { id: 1, number: '88', label: t('teachers'), icon: '👨‍🏫' },
    { id: 2, number: '28', label: t('employees'), icon: '👥' },
    { id: 3, number: '9', label: t('departmentsCount'), icon: '🏛️' },
    { id: 4, number: '1351', label: t('students'), icon: '🎓' },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=80"
          alt="Students"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="text-center"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</h3>
              <p className="text-gray-300 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;