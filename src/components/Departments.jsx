import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';

const Departments = () => {
  const { t } = useLanguage();

  const departments = [
    {
      id: 'pharmacy',
      name: t('pharmacy') || 'Pharmacy',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
      icon: '💊',
    },
    {
      id: 'pathological-analyses',
      name: t('pathological') || 'Pathological Analyses',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
      icon: '🔬',
    },
    {
      id: 'nursing',
      name: t('nursing') || 'Nursing',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80',
      icon: '👩‍⚕️',
    },
    {
      id: 'computer-networking',
      name: t('computerNetworking') || 'Computer Networking',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      icon: '💻',
    },
    {
      id: 'accounting',
      name: t('accounting') || 'Accounting',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
      icon: '🧮',
    },
    {
      id: 'english-language',
      name: t('englishLanguage') || 'English Language',
      image: 'https://plus.unsplash.com/premium_photo-1682088176629-0f48d58a614c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZW5nbGlzaHxlbnwwfHwwfHx8MA%3D%3D',
      icon: '📚',
    },
    {
      id: 'business-administration',
      name: t('businessAdmin') || 'Business Administration',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
      icon: '💼',
    },
    {
      id: 'electricity-mechanics',
      name: t('electricity') || 'Electricity And Mechanics',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
      icon: '⚡',
    },
    {
      id: 'agricultural-instruction',
      name: t('agricultural') || 'Agricultural Instruction',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
      icon: '🌿',
    },
    {
      id: 'emergency-nursing',
      name: t('emergencyNursing') || 'Emergency Nursing',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80',
      icon: '🚑',
    },
    {
      id: 'anesthesia-technology',
      name: t('anesthesia') || 'Anesthesia Technology',
      image: 'https://images.unsplash.com/photo-1579154491781-5e199df316aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QW5lc3RoZXNpYXxlbnwwfHwwfHx8MA%3D%3D',
      icon: '💉',
    },
  ];

  return (
    <section id="departments" className="py-20 mt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
          >
            {t('departmentsTitle') || 'Departments of the Paitax Technical Institute'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            {t('departmentsSubtitle') || 'Paitax Technical Institute offers the following departments'}
          </motion.p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <Link to={`/departments/${dept.id}`} key={dept.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer aspect-[4/3]"
              >
                {/* Image */}
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 transition-all duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
                  <div className="w-14 h-14 rounded-full bg-amber-500/90 flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {dept.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg leading-tight drop-shadow-md">
                    {dept.name}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;