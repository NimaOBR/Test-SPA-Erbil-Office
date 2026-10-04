import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import Navbar from '../components/Navbar';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // اینجا به جای ارسال واقعی، فقط پیام نمایش می‌ده (برای تست)
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setIsLoading(false);
    }, 2000);
  };

  const contactInfo = [
    { icon: '📍', title: t('ourLocation'), details: ['German Bazar, Erbil', 'Kurdistan Region, Iraq'] },
    { icon: '📞', title: t('phoneNumbers'), details: ['0750 856 7733', '0750 856 7733'] },
    { icon: '✉️', title: t('emailAddress'), details: ['Info@paytakhtinstitute.con'] },
    { icon: '⏰', title: t('workingHours'), details: [t('workingDays'), t('workingTime')] },
  ];

  return (
    <>
      <Navbar />

      <div className="pt-20 pb-20 mt-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <motion.h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {t('contactTitle')}
            </motion.h1>
            <motion.p className="text-gray-600 max-w-2xl mx-auto">
              {t('contactSubtitle')}
            </motion.p>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* اطلاعات تماس */}
            <div className="lg:col-span-2 space-y-5">
              {contactInfo.map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* فرم */}
            <motion.div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {t('sendMessage')}
                </h2>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 rounded-2xl p-6 text-center">
                    <p className="font-semibold">{t('messageSent')}</p>
                    <p className="text-sm mt-1">{t('willReply')}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          {t('fullName')} *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                          placeholder={t('yourName')}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          {t('emailLabel')} *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          {t('phoneLabel')}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                          placeholder="07xx xxx xxxx"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          {t('subjectLabel')} *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                          placeholder={t('howCanHelp')}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {t('messageLabel')} *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"
                        placeholder={t('writeMessage')}
                      />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white font-semibold py-3.5 rounded-xl transition-colors shadow-lg shadow-amber-200"
                    >
                      {isLoading ? 'در حال ارسال...' : t('sendBtn')}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;