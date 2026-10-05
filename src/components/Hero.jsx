import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { useLanguage } from '../hooks/useLanguage';

const Hero = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  // Memoize slides array so references stay stable across renders
  const slides = useMemo(
    () => [
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
    ],
    [t]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between pt-16 pb-6 sm:py-0">
      {/* Slide Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
        </motion.div>
      </AnimatePresence>

      {/* Main Hero Content */}
      <div className="relative z-10 my-auto w-full">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].id + '-content'}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              {/* Typewriter Title */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-snug mb-3 sm:mb-5 min-h-[70px] sm:min-h-[100px]">
                <Typewriter
                  key={slides[current].id}
                  options={{
                    delay: 35,
                    cursor: '|',
                  }}
                  onInit={(typewriter) => {
                    typewriter.typeString(slides[current].title).start();
                  }}
                />
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed line-clamp-3 sm:line-clamp-none">
                {slides[current].subtitle}
              </p>

              {/* CTA Button */}
              <motion.a
                href="#register"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-7 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base rounded-xl shadow-lg shadow-emerald-500/25 transition-colors"
              >
                {t('clickToKnowMore')}
              </motion.a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Floating Bar & Navigation Dots */}
      <div className="relative z-10 w-full flex flex-col items-center gap-4 px-4 sm:mb-8">
        {/* باکس تماس: افزایش عرض در دسکتاپ تا max-w-3xl */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative p-[1.5px] rounded-2xl overflow-hidden w-full max-w-sm sm:max-w-2xl md:max-w-3xl"
        >
          {/* نور چرخان قطاری */}
          <div
            className="absolute inset-[-100%] animate-[spin_4s_linear_infinite]"
            style={{
              background: 'conic-gradient(from 0deg, transparent 0 310deg, #10b981 360deg)',
            }}
          />
          {/* هاله بلوری دور باکس */}
          <div
            className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] blur-sm opacity-60"
            style={{
              background: 'conic-gradient(from 0deg, transparent 0 310deg, #34d399 360deg)',
            }}
          />

          {/* محتوای داخلی باکس */}
          <div className="relative z-10 bg-black/85 backdrop-blur-xl px-5 py-4 sm:px-8 sm:py-4 rounded-[15px] flex flex-col sm:flex-row items-start sm:items-center justify-center gap-3 sm:gap-12 text-white">

            {/* لینک مستقیم تماس تلفنی */}
            <a
              href="tel:07504243524"
              className="flex items-center gap-3 w-full sm:w-auto justify-start sm:justify-center hover:opacity-85 transition-opacity whitespace-nowrap"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm sm:text-base tracking-wide">+964 750 424 3524</div>
                <div className="text-[10px] sm:text-xs text-gray-400">Phone</div>
              </div>
            </a>

            {/* خط جداکننده */}
            <div className="w-full h-px sm:w-px sm:h-8 bg-white/20 flex-shrink-0" />

            {/* لینک مستقیم ارسال ایمیل */}
            <a
              href="mailto:Info@paytakhtinstitute.com"
              className="flex items-center gap-3 w-full sm:w-auto justify-start sm:justify-center hover:opacity-85 transition-opacity whitespace-nowrap"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-semibold text-xs sm:text-base">
                  Info@paytakhtinstitute.com
                </div>
                <div className="text-[10px] sm:text-xs text-gray-400">Email</div>
              </div>
            </a>

          </div>
        </motion.div>

        {/* دکمه‌های ناوبری اسلاید (Dots) */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${index === current ? 'bg-emerald-500 w-6 sm:w-8' : 'bg-white/50 w-1.5 sm:w-2 hover:bg-white/80'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;