import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

const FAQ = () => {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState(null);

  const faqs = [
    { id: 1, question: t('faq1q'), answer: t('faq1a') },
    { id: 2, question: t('faq2q'), answer: t('faq2a') },
    { id: 3, question: t('faq3q'), answer: t('faq3a') },
    { id: 4, question: t('faq4q'), answer: t('faq4a') },
    { id: 5, question: t('faq5q'), answer: t('faq5a') },
    { id: 6, question: t('faq6q'), answer: t('faq6a') },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t('faqTitle')}
          </h2>
          <p className="text-gray-600">{t('faqSubtitle')}</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:border-emerald-300 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-emerald-50/40 transition-colors"
              >
                <span className="font-medium text-gray-800 pr-4">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;