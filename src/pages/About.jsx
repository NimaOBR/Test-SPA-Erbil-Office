import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import SEO from '../components/SEO';

const About = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title="About Institute"
        description="Learn about Paitaxt Technical Institute established in 2015-2016 in Erbil, Kurdistan Region. Officially authorized by the Ministry of Higher Education."
      />

      <div className="pt-28 pb-20 bg-gray-50 min-h-screen">
        
        {/* ========== HERO SECTION ========== */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50" />
          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                {t('aboutHeroBadge')}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {t('aboutHeroTitle')}
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t('aboutHeroDesc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ========== STATS ========== */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center"
              >
                <div className="text-5xl font-bold text-emerald-500 mb-2">2</div>
                <div className="text-gray-600 font-medium">{t('yearsOfStudy')}</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center"
              >
                <div className="text-5xl font-bold text-emerald-500 mb-2">11+</div>
                <div className="text-gray-600 font-medium">{t('academicDepartments')}</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========== INTRODUCTION ========== */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {t('introductionTitle')}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t('introductionText')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ========== MISSION ========== */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {t('missionTitle')}
              </h2>
              <p className="text-emerald-600 font-medium mb-8">
                {t('missionSubtitle')}
              </p>
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
                <p className="text-xl font-semibold text-gray-800 mb-6">
                  {t('missionMain')}
                </p>
                <ul className="space-y-4">
                  {[
                    'Participation in improving the level of science in the Kurdistan Region.',
                    'Training high-level professionals according to the specialties of the institute.',
                    'Offering individuals with practical experience to the labor market.',
                    'Providing educational opportunities and continuing higher education.',
                    'Training cadres of vocational technical centers to obtain job opportunities.',
                    'Expertise and skills in science and teaching are important aspects of our staff.',
                    'The courses are organized according to the modern programs of the world\'s leading institutes.',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========== FLAG & LOGO ========== */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                {t('flagTitle')}
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { color: 'bg-red-500', title: 'Red', desc: 'Refers to the blood of the martyrs and the wall of the Kurdistan border line' },
                  { color: 'bg-green-500', title: 'Green', desc: 'Refers to the nature and green spring of Kurdistan' },
                  { color: 'bg-emerald-400', title: 'Yellow', desc: 'Refers to the sun sign of knowledge and freedom' },
                  { color: 'bg-white border-2 border-gray-200', title: 'White', desc: 'Symbolizes peace and coexistence of the Kurdish people' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
                  >
                    <div className={`w-12 h-12 rounded-xl ${item.color} flex-shrink-0`} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========== STRUCTURE ========== */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
                {t('structureTitle')}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-emerald-600 mb-4 text-lg">
                    {t('leadership')}
                  </h3>
                  <ul className="space-y-2.5 text-gray-700">
                    {[
                      'Board of Trustees',
                      'Institute Director',
                      "Director's Office / Secretariat",
                      'Assistant Director',
                      'Quality Assurance Unit',
                      'Audit Unit',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-emerald-600 mb-4 text-lg">
                    {t('departments')}
                  </h3>
                  <ul className="space-y-2.5 text-gray-700">
                    {[
                      'Labor Administration',
                      'English',
                      'Accounting',
                      'Electrical Mechanics',
                      'Agricultural Instruction',
                      'Computer Network',
                      'Pharmacy',
                      'Disease Analysis',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm md:col-span-2">
                  <h3 className="font-bold text-emerald-600 mb-4 text-lg">
                    {t('unitsCenters')}
                  </h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2.5 text-gray-700">
                    {[
                      'IT Unit',
                      'Health & Safety Unit',
                      'Library',
                      'Media Unit',
                      'Scientific Unit',
                      'Legal Unit',
                      'Administrative & Identity Unit',
                      'Student Affairs Unit',
                      'Records Unit',
                      'Finance Unit',
                      'Usage Center',
                      'Gender Studies Center',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========== ANTHEM ========== */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-xl shadow-emerald-200"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                {t('anthemTitle')}
              </h2>
              <div className="space-y-6 text-lg leading-relaxed font-medium" dir="rtl">
                <p>
                  پایتەخت مەنزڵگای فێرکردن .... ئەی ڕێگای سەرکەوتن<br />
                  پایتەخت.... شوێنی پێگەیاندن.... جێی پەروەردەکردن
                </p>
                <p>
                  لە سایەی تۆدا حەسامەوە.... وەکو سێبەری درەخت<br />
                  خەونەکەت بە دیهێنام... سوپاس پەیمانگەی پایتەخت
                </p>
                <p>
                  بووم بە خاوەن بڕوانامە..... خەون و ئاواتم هاتەدی<br />
                  پایتەخت فێریکردم.... داهاتووم چۆن بێتەدی
                </p>
                <p className="pt-2">
                  پایتەخت مەنزڵگای فێرکردن .... ئەی ڕێگای سەرکەوتن
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;