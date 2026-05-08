import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar,
    Clock,
    MapPin,
    Phone,
    Mail,
    FileText,
    CheckCircle,
    AlertCircle,
    Info,
    ChevronRight,
    ArrowRight,
    Users,
    Award,
    Target,
    BookOpen
} from 'lucide-react';

const Admissions = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const admissionRequirements = [
        {
            category: "Academic Requirements",
            icon: BookOpen,
            color: "from-blue-500 to-cyan-500",
            items: [
                "Currently enrolled in 8th grade",
                "Minimum 2.5 GPA (unweighted)",
                "Strong interest in technology/STEM",
                "Completion of pre-algebra or higher mathematics",
                "Basic computer literacy skills"
            ]
        },
        {
            category: "Application Materials",
            icon: FileText,
            color: "from-green-500 to-emerald-500",
            items: [
                "Completed application form",
                "Current report card/transcript",
                "Teacher recommendation letter",
                "Personal statement (300-500 words)",
                "Parent/guardian consent form"
            ]
        },
        {
            category: "Technical Assessment",
            icon: Target,
            color: "from-purple-500 to-pink-500",
            items: [
                "Basic coding/logic assessment",
                "Creative problem-solving exercises",
                "Digital portfolio review (optional)",
                "Group interview session",
                "Technology interest questionnaire"
            ]
        }
    ];

    const importantDates = [
        { date: "December 15", event: "Early Application Deadline", type: "deadline" },
        { date: "January 31", event: "Regular Application Deadline", type: "deadline" },
        { date: "February 15-28", event: "Technical Assessments", type: "assessment" },
        { date: "March 1-15", event: "Interviews & Decisions", type: "interview" },
        { date: "March 22", event: "Acceptance Notifications", type: "notification" },
        { date: "April 15", event: "Enrollment Confirmation Deadline", type: "deadline" }
    ];

    const faqs = [
        {
            question: "What makes Argyle different from other middle schools?",
            answer: "Argyle is Maryland's only public magnet middle school specializing in digital design and development. We offer advanced STEM courses, 1:1 iPad programs, and industry-standard software training that most students don't get until college."
        },
        {
            question: "Do I need prior coding experience to apply?",
            answer: "No prior coding experience is required! We look for students with curiosity, problem-solving skills, and interest in technology. Our curriculum starts with fundamentals and builds from there."
        },
        {
            question: "What transportation options are available?",
            answer: "Students can use MCPS transportation if they live within the designated attendance area. For magnet students from outside areas, MCPS provides depot stops. Private transportation is also an option."
        },
        {
            question: "What extracurricular activities are available?",
            answer: "We offer robotics club, coding club, digital arts club, jazz band, student government association (SGA), and various sports teams. Activity buses run on Tuesdays and Thursdays."
        },
        {
            question: "How do I prepare for the technical assessment?",
            answer: "Focus on logical thinking and problem-solving rather than specific technical skills. Practice basic math, explore free coding platforms like Scratch or Code.org, and think about why you're interested in technology."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-20"
            >
                <motion.div
                    initial={{ rotate: -5, scale: 0.95 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 1, type: 'spring' }}
                    className="inline-block bg-gradient-to-br from-argyle-blue to-purple-400 px-6 py-2 rounded-full mb-6 shadow-lg"
                >
                    <span className="text-white text-lg font-semibold tracking-wider uppercase">Admissions</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
                    Join the
                    <span className="block bg-gradient-to-r from-argyle-blue to-purple-400 bg-clip-text text-transparent">
                        Argyle Eagles
                    </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                    Take the first step toward becoming a future innovator. Our admissions process is designed to
                    identify students ready to embrace technology, creativity, and leadership.
                </p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="inline-block"
                >
                    <a
                        href="https://www.montgomeryschoolsmd.org/curriculum/specialprograms/admissions/applications/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-argyle-blue to-purple-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        Start Your Application
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                </motion.div>
            </motion.div>

            {/* Tab Navigation */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center mb-12"
            >
                <div className="bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-1 flex">
                    {[
                        { id: 'overview', label: 'Overview' },
                        { id: 'requirements', label: 'Requirements' },
                        { id: 'timeline', label: 'Timeline' },
                        { id: 'faq', label: 'FAQ' }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                                activeTab === tab.id
                                    ? 'bg-gradient-to-r from-argyle-blue to-purple-500 text-white shadow-lg'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </motion.div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
                {activeTab === 'overview' && (
                    <motion.div
                        key="overview"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-12"
                    >
                        {/* Why Choose Argyle */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                        Why Argyle?
                                    </h2>

                                    <div className="space-y-6">
                                        <div className="flex items-start">
                                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                                                <Award className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-white mb-1">Advanced Curriculum</h3>
                                                <p className="text-gray-400">College-level courses in middle school with industry-standard tools and certifications.</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                                                <Users className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-white mb-1">Expert Faculty</h3>
                                                <p className="text-gray-400">Learn from industry professionals and certified educators passionate about technology education.</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                                                <Target className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-white mb-1">Personalized Learning</h3>
                                                <p className="text-gray-400">Small class sizes and individualized attention ensure every student reaches their potential.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative">
                                    {/* Stats */}
                                    <div className="grid grid-cols-2 gap-6 mb-8">
                                        <div className="bg-slate-700/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                                            <div className="text-3xl font-bold text-argyle-blue mb-1">1:1</div>
                                            <div className="text-sm text-gray-400">Device Ratio</div>
                                        </div>
                                        <div className="bg-slate-700/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                                            <div className="text-3xl font-bold text-purple-400 mb-1">4</div>
                                            <div className="text-sm text-gray-400">Magnet Programs</div>
                                        </div>
                                        <div className="bg-slate-700/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                                            <div className="text-3xl font-bold text-pink-400 mb-1">25+</div>
                                            <div className="text-sm text-gray-400">Clubs & Activities</div>
                                        </div>
                                        <div className="bg-slate-700/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                                            <div className="text-3xl font-bold text-green-400 mb-1">98%</div>
                                            <div className="text-sm text-gray-400">STEM Focus</div>
                                        </div>
                                    </div>

                                    {/* Quote */}
                                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6">
                                        <blockquote className="text-lg text-gray-300 italic mb-4">
                                            "Argyle doesn't just prepare students for college—it prepares them to create the future."
                                        </blockquote>
                                        <cite className="text-sm text-gray-400">— Principal James Allrich</cite>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}

                {activeTab === 'requirements' && (
                    <motion.div
                        key="requirements"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {admissionRequirements.map((req, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    className="bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
                                >
                                    <div className={`w-16 h-16 bg-gradient-to-br ${req.color} rounded-2xl flex items-center justify-center mb-6`}>
                                        <req.icon className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-6">{req.category}</h3>

                                    <div className="space-y-3">
                                        {req.items.map((item, idx) => (
                                            <div key={idx} className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {activeTab === 'timeline' && (
                    <motion.div
                        key="timeline"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="space-y-6">
                            {importantDates.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    className={`flex items-center p-6 rounded-2xl border backdrop-blur-xl ${
                                        item.type === 'deadline'
                                            ? 'bg-red-500/10 border-red-500/20'
                                            : item.type === 'assessment'
                                            ? 'bg-blue-500/10 border-blue-500/20'
                                            : item.type === 'interview'
                                            ? 'bg-purple-500/10 border-purple-500/20'
                                            : 'bg-green-500/10 border-green-500/20'
                                    }`}
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-6 ${
                                        item.type === 'deadline'
                                            ? 'bg-red-500'
                                            : item.type === 'assessment'
                                            ? 'bg-blue-500'
                                            : item.type === 'interview'
                                            ? 'bg-purple-500'
                                            : 'bg-green-500'
                                    }`}>
                                        <Calendar className="w-6 h-6 text-white" />
                                    </div>

                                    <div className="flex-1">
                                        <div className="text-lg font-bold text-white mb-1">{item.date}</div>
                                        <div className="text-gray-300">{item.event}</div>
                                    </div>

                                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                                        item.type === 'deadline'
                                            ? 'bg-red-500/20 text-red-300'
                                            : item.type === 'assessment'
                                            ? 'bg-blue-500/20 text-blue-300'
                                            : item.type === 'interview'
                                            ? 'bg-purple-500/20 text-purple-300'
                                            : 'bg-green-500/20 text-green-300'
                                    }`}>
                                        {item.type}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {activeTab === 'faq' && (
                    <motion.div
                        key="faq"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto space-y-6"
                    >
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
                            >
                                <h3 className="text-xl font-bold text-white mb-4 flex items-start">
                                    <Info className="w-6 h-6 text-argyle-blue mr-3 mt-1 flex-shrink-0" />
                                    {faq.question}
                                </h3>
                                <p className="text-gray-300 leading-relaxed pl-9">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Contact Information */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12"
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Apply?
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                        Start your journey to becoming an Argyle Eagle. We're here to help you through every step.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Phone className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Call Us</h3>
                        <p className="text-gray-400">(301) 555-0123</p>
                        <p className="text-sm text-gray-500">Mon-Fri, 8AM-4PM</p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Mail className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Email Us</h3>
                        <p className="text-gray-400">admissions@argylems.org</p>
                        <p className="text-sm text-gray-500">Response within 24 hours</p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <MapPin className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Visit Us</h3>
                        <p className="text-gray-400">2400 Bel Pre Rd</p>
                        <p className="text-gray-400">Silver Spring, MD 20906</p>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-argyle-blue to-purple-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        Schedule a Visit
                        <ChevronRight className="ml-2 w-5 h-5" />
                    </motion.a>
                </div>
            </motion.div>
        </div>
    );
};

export default Admissions;

