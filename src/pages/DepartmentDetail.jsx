import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { departmentsData } from '../data/departmentsData';
import SEO from '../components/SEO';

const DepartmentDetail = () => {
    const { id } = useParams();
    const { lang } = useLanguage();
    const dept = departmentsData[id];

    if (!dept) {
        return (
            <div className="pt-40 pb-20 text-center">
                <h1 className="text-2xl font-bold text-gray-800">Department not found</h1>
                <Link to="/departments" className="text-emerald-600 mt-4 inline-block hover:underline">
                    ← Back to Departments
                </Link>
            </div>
        );
    }

    const sections = [
        { id: 'description', title: 'Department Description' },
        { id: 'vision', title: 'Department Vision' },
        { id: 'mission', title: 'Department Mission' },
        { id: 'outcomes', title: 'Learning Outcomes' },
        { id: 'methods', title: 'Study Methods' },
        { id: 'language', title: 'Language' },
        { id: 'duration', title: 'Duration of Studies' },
    ];

    const getText = (field) => {
        if (typeof field === 'object') return field[lang] || field.en;
        return field;
    };

    return (
        <div className="pt-28 pb-20 mt-10 bg-gray-50 min-h-screen">
            <SEO
                title={getText(dept.name)}
                description={getText(dept.description)}
            />
            {/* Hero */}
            <div className="relative h-64 md:h-80 overflow-hidden">
                <img src={dept.image} alt={getText(dept.name)} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
                    <div className="flex items-center gap-4">
                        <span className="text-5xl">{dept.icon}</span>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-white">{getText(dept.name)}</h1>
                            <p className="text-emerald-300 mt-1">Paitaxt Technical Institute</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-10">
                <div className="grid lg:grid-cols-4 gap-10">

                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-32 bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                            <div className="h-1 bg-emerald-500 rounded-full mb-5" />
                            <h3 className="text-xs font-semibold text-gray-400 tracking-wider mb-4">ON THIS PAGE</h3>
                            <nav className="space-y-1">
                                {sections.map((sec) => (
                                    <a
                                        key={sec.id}
                                        href={`#${sec.id}`}
                                        className="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                                    >
                                        {sec.title}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Content */}
                    <div className="lg:col-span-3 space-y-6">

                        <motion.section
                            id="description"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-emerald-50/60 border-l-4 border-emerald-500 rounded-r-2xl p-6 md:p-8"
                        >
                            <h2 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm">★</span>
                                Department Description
                            </h2>
                            <p className="text-gray-700 leading-relaxed">{getText(dept.description)}</p>
                        </motion.section>

                        <motion.section
                            id="vision"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-emerald-50/60 border-l-4 border-emerald-500 rounded-r-2xl p-6 md:p-8"
                        >
                            <h2 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm">★</span>
                                Department Vision
                            </h2>
                            <p className="text-gray-700 leading-relaxed">{getText(dept.vision)}</p>
                        </motion.section>

                        <motion.section
                            id="mission"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-emerald-50/60 border-l-4 border-emerald-500 rounded-r-2xl p-6 md:p-8"
                        >
                            <h2 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm">◎</span>
                                Department Mission
                            </h2>
                            <p className="text-gray-700 leading-relaxed">{getText(dept.mission)}</p>
                        </motion.section>

                        <motion.section
                            id="outcomes"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm"
                        >
                            <h2 className="text-xl font-bold text-gray-900 mb-5">Learning Outcomes</h2>
                            <ul className="space-y-3">
                                {getText(dept.outcomes).map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.section>

                        <div className="grid sm:grid-cols-3 gap-5">
                            <motion.div
                                id="methods"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm"
                            >
                                <h3 className="font-bold text-gray-900 mb-2">Study Methods</h3>
                                <p className="text-sm text-gray-600">{getText(dept.methods)}</p>
                            </motion.div>

                            <motion.div
                                id="language"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm"
                            >
                                <h3 className="font-bold text-gray-900 mb-2">Language</h3>
                                <p className="text-sm text-gray-600">{getText(dept.language)}</p>
                            </motion.div>

                            <motion.div
                                id="duration"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm"
                            >
                                <h3 className="font-bold text-gray-900 mb-2">Duration of Studies</h3>
                                <p className="text-sm text-gray-600">{getText(dept.duration)}</p>
                            </motion.div>
                        </div>

                        <div className="pt-6">
                            <Link to="/departments" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium">
                                ← Back to all Departments
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepartmentDetail;