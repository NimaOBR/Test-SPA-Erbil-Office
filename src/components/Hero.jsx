import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

const Hero = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      id: 1,
      title: t('heroTitle1'),
      subtitle: t('heroSubtitle1'),
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80',
    },
    {
      id: 2,
      title: t('heroTitle2'),
      subtitle: t('heroSubtitle2'),
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80',
    },
    {
      id: 3,
      title: t('heroTitle3'),
      subtitle: t('heroSubtitle3'),
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].id + '-content'}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.65 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-5">
                {slides[current].title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 mb-9 leading-relaxed">
                {slides[current].subtitle}
              </p>
              <motion.a
                href="#register"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-amber-500/30 transition-colors"
              >
                {t('clickToKnowMore')}
              </motion.a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === current ? 'bg-amber-500 w-9' : 'bg-white/50 w-2.5 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;