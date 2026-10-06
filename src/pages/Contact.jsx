import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import Navbar from '../components/Navbar';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: '📍',
      title: t('ourLocation'),
      details: ['Kurdistan – Erbil – Behind Rojawa Hospital'],
      actionText: 'Get Directions',
      actionLink: 'https://www.google.com/maps?cid=1060633841655270829',
    },
    {
      icon: '📞',
      title: t('phoneNumbers'),
      details: ['+964 750 424 3524'],
      actionText: 'Call Directly',
      actionLink: 'tel:+9647504243524',
    },
    {
      icon: '✉️',
      title: t('emailAddress'),
      details: ['Info@paytakhtinstitute.com'],
      actionText: 'Send Email',
      actionLink: 'mailto:Info@paytakhtinstitute.com',
    },
    {
      icon: '⏰',
      title: t('workingHours'),
      details: [t('workingDays'), t('workingTime')],
      actionText: 'Official Hours',
      actionLink: null,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <>
      <Navbar />

      <div className="pt-24 pb-20 bg-gradient-to-b from-gray-50 via-emerald-50/20 to-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium inline-block mb-3">
              Get In Touch
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              {t('contactTitle')}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              {t('contactSubtitle')}
            </p>
            <div className="w-20 h-1.5 bg-emerald-500 mx-auto mt-5 rounded-full shadow-sm" />
          </motion.div>

          {/* Contact Cards Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-gray-100/80 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Decorative Glow */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors" />

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                  <div className="space-y-1 mb-6">
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>

                {item.actionLink && (
                  <a
                    href={item.actionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gray-50 hover:bg-emerald-500 text-gray-700 hover:text-white font-medium text-sm transition-all duration-300 group-hover:shadow-md"
                  >
                    <span>{item.actionText}</span>
                    <span className="text-xs">↗</span>
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Interactive Map & Quick Action Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid lg:grid-cols-3 gap-8 items-stretch"
          >
            {/* Interactive Map */}
            <div className="lg:col-span-2 bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between min-h-[380px]">
              <div className="rounded-2xl overflow-hidden h-full min-h-[320px] relative border border-gray-100">
                <iframe
                  src="https://maps.google.com/maps?cid=1060633841655270829&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '340px' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Institute Location Map"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>

            {/* Quick Action Card */}
            <div className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 rounded-3xl p-8 text-white flex flex-col justify-between shadow-xl shadow-emerald-900/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-100 text-xs font-medium backdrop-blur-md mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Fast Response
                </span>
                
                <h3 className="text-2xl font-bold mb-3">
                  Need Help with Admission?
                </h3>
                <p className="text-emerald-100/90 text-sm leading-relaxed mb-8">
                  Our team is ready to assist you with course inquiries, enrollment procedures, and requirements.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href="https://wa.me/9647504243524"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-white text-emerald-800 font-bold hover:bg-emerald-50 transition-all duration-300 shadow-lg"
                >
                  <span className="text-xl">💬</span>
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href="tel:+9647504243524"
                  className="flex items-center justify-center gap-3 w-full py-3.5 px-6 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 backdrop-blur-md"
                >
                  <span>📞</span>
                  <span>+964 750 424 3524</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default Contact;