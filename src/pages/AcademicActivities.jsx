import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import SEO from '../components/SEO';

const AcademicActivities = () => {
  const { t } = useLanguage();

  const stories = [
    {
      id: 1,
      title: t('story1Title'),
      excerpt: t('story1Excerpt'),
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80',
      overlayText: 'چیرۆکی سەرکەوتن',
      date: '2022-09-11',
      category: 'Pharmacy',
    },
    {
      id: 2,
      title: t('story2Title'),
      excerpt: t('story2Excerpt'),
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      overlayText: 'سەرکەوتنی پەرستاری',
      date: '2023-03-15',
      category: 'Nursing',
    },
    {
      id: 3,
      title: t('story3Title'),
      excerpt: t('story3Excerpt'),
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      overlayText: 'سەرکەوتنی تۆڕی کۆمپیوتەر',
      date: '2023-07-22',
      category: 'IT',
    },
    {
      id: 4,
      title: t('story4Title'),
      excerpt: t('story4Excerpt'),
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
      overlayText: 'سەرکەوتنی ژمێریاری',
      date: '2024-01-10',
      category: 'Accounting',
    },
    {
      id: 5,
      title: t('story5Title'),
      excerpt: t('story5Excerpt'),
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
      overlayText: 'خەڵاتی توێژینەوە',
      date: '2024-05-18',
      category: 'Research',
    },
    {
      id: 6,
      title: t('story6Title'),
      excerpt: t('story6Excerpt'),
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80',
      overlayText: 'دەستپێشخەری تەندروستی',
      date: '2024-09-05',
      category: 'Community',
    },
  ];

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <SEO 
        title="Academic Activities"
        description="Success stories and academic achievements of students and graduates of Paitaxt Technical Institute."
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
          >
            {t('academicTitle')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            {t('academicSubtitle')}
          </motion.p>
          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold text-center drop-shadow-lg px-4" dir="rtl">
                    {story.overlayText}
                  </h3>
                </div>
                <span className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {story.category}
                </span>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {story.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">
                  {story.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <button className="text-emerald-600 font-medium text-sm hover:text-emerald-700 transition-colors flex items-center gap-1">
                    {t('readMore')}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <span className="text-gray-400 text-sm">{story.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicActivities;