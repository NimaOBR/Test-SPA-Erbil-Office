import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';

const Activities = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('academic');

  const activitiesData = {
    academic: {
      title: 'Academic Activities',
      icon: '🎓',
      color: 'text-emerald-600',
      description: 'Success stories and academic achievements of our students and graduates',
      items: [
        {
          title: 'Success stories',
          desc: "Success story of one of the graduates of our institute's pharmacy department Isra Zorab – Graduated from the Department of Pharmacy of our institute is currently...",
          date: '2022-09-11',
          category: 'Pharmacy',
        },
        {
          title: 'Outstanding Graduate in Nursing',
          desc: 'One of our talented nursing graduates has joined a leading hospital in Erbil and is making a significant impact in patient care and emergency response.',
          date: '2023-03-15',
          category: 'Nursing',
        },
        {
          title: 'Computer Networking Success',
          desc: 'A graduate from the Computer Networking department has successfully launched his own IT solutions company and is now employing other alumni from the institute.',
          date: '2023-07-22',
          category: 'IT',
        },
        {
          title: 'Accounting Professional Achievement',
          desc: 'Our accounting graduate has been promoted to senior financial analyst at a major company in the Kurdistan Region after only two years of experience.',
          date: '2024-01-10',
          category: 'Accounting',
        },
        {
          title: 'Research Excellence Award',
          desc: 'Students from the Pathological Analyses department won first place in a regional scientific research competition for their innovative laboratory techniques.',
          date: '2024-05-18',
          category: 'Research',
        },
        {
          title: 'Community Health Initiative',
          desc: 'A group of our Emergency Nursing students organized a free health screening campaign that served more than 500 people in underserved areas of Erbil.',
          date: '2024-09-05',
          category: 'Community',
        },
      ],
    },
    student: {
      title: 'Student Activities',
      icon: '🎓',
      color: 'text-blue-600',
      description: 'Student clubs, events, and extracurricular activities',
      items: [
        { title: 'Academic Clubs', desc: 'Various student organizations and clubs', date: '2024', category: 'Clubs' },
        { title: 'Sports Events', desc: 'Annual sports tournaments', date: '2024', category: 'Sports' },
        { title: 'Cultural Nights', desc: 'Traditional and cultural celebrations', date: '2024', category: 'Culture' },
        { title: 'Charity Projects', desc: 'Volunteering and community service', date: '2024', category: 'Social' },
      ],
    },
    events: {
      title: 'Events',
      icon: '📅',
      color: 'text-emerald-600',
      description: 'Seminar, conferences, and special events',
      items: [
        { title: 'Annual Research Conference', desc: 'Regional scientific conference', date: '2024-06', category: 'Conference' },
        { title: 'Graduation Ceremony', desc: 'Annual graduation and awards', date: '2024-07', category: 'Ceremony' },
        { title: 'Open Day', desc: 'Open campus event for students', date: '2024', category: 'Event' },
        { title: 'Career Fair', desc: 'Job and internship opportunities', date: '2024', category: 'Career' },
      ],
    },
  };

  return (
    <>
      <Navbar />

      <div className="pt-28 pb-20 mt-20 bg-gray-50 min-h-screen">
        <SEO
          title="Activities"
          description="Success stories, academic activities, student events and conferences at Paitaxt Technical Institute"
        />

        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
            >
              {t('activities')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Success stories, academic achievements and events of Paitaxt Technical Institute
            </motion.p>
            <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {Object.keys(activitiesData).map((key) => (
              <motion.button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 capitalize ${
                  activeTab === key
                    ? 'bg-emerald-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-emerald-50'
                }`}
              >
                {t(key)}
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {activitiesData[activeTab].items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 bg-gray-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-10">
                    {activitiesData[activeTab].icon}
                  </div>
                  <div className="absolute top-4 right-4 bg-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{item.date}</span>
                    <span className={`font-medium ${activitiesData[activeTab].color}`}>
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Activities;