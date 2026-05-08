import React from 'react';
import { motion } from 'framer-motion';
import {
    Code,
    Cpu,
    Database,
    Smartphone,
    Globe,
    Award,
    Users,
    Zap,
    ChevronRight,
    CheckCircle,
    Star,
    BookOpen,
    Target,
    TrendingUp
} from 'lucide-react';

const ComputerScience = () => {
    // Computer Science Theme: Blue/cyan tech theme with circuit-like patterns
    const theme = {
        primary: 'from-blue-500 to-cyan-500',
        secondary: 'from-cyan-500 to-teal-500',
        accent: 'from-indigo-500 to-purple-500',
        background: 'from-slate-900 via-slate-800 to-slate-900',
        particleColors: ['bg-blue-400', 'bg-cyan-400', 'bg-indigo-400', 'bg-purple-400']
    };
    const curriculum = [
        {
            title: "Python Programming",
            level: "Beginner to Advanced",
            description: "Master Python from basics to advanced concepts including data structures, algorithms, and real-world applications.",
            icon: Code,
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "C++ Development",
            level: "Intermediate to Advanced",
            description: "Learn systems programming, game development, and performance-critical applications with modern C++.",
            icon: Cpu,
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Web Development",
            level: "Intermediate",
            description: "Build full-stack web applications using HTML, CSS, JavaScript, React, and Node.js.",
            icon: Globe,
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Mobile App Development",
            level: "Advanced",
            description: "Create iOS and Android apps using Swift, Kotlin, and cross-platform frameworks like React Native.",
            icon: Smartphone,
            color: "from-orange-500 to-red-500"
        },
        {
            title: "Data Science & AI",
            level: "Advanced",
            description: "Explore machine learning, data analysis, and AI concepts using Python libraries like Pandas and TensorFlow.",
            icon: Database,
            color: "from-indigo-500 to-purple-500"
        },
        {
            title: "Cybersecurity Fundamentals",
            level: "Intermediate",
            description: "Learn basic security principles, encryption, and secure coding practices.",
            icon: Zap,
            color: "from-yellow-500 to-orange-500"
        }
    ];

    const projects = [
        "AI-Powered Chatbot",
        "Mobile Health App",
        "Smart Home Automation",
        "Educational Game Platform",
        "Data Visualization Dashboard",
        "E-commerce Website"
    ];

    const certifications = [
        { name: "AP Computer Science A", issuer: "College Board" },
        { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft" },
        { name: "Google IT Support Professional", issuer: "Google" },
        { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services" },
        { name: "CompTIA A+", issuer: "CompTIA" }
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
        <div className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative min-h-screen bg-gradient-to-br ${theme.background}`}>
            {/* INCREDIBLE TECH-THEMED BACKGROUND EFFECTS */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {/* Matrix-style falling code effect */}
                <div className="absolute inset-0 opacity-3">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute text-cyan-400 text-xs font-mono animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `-20px`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${2 + Math.random() * 3}s`
                            }}
                        >
                            {['{', '}', '[', ']', '(', ')', '<', '>', '0', '1', '/', '\\'].map(char => (
                                <div key={char} className="animate-float-bob-small" style={{ animationDelay: `${Math.random() * 2}s` }}>
                                    {char}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Advanced Circuit Grid */}
                <div className="absolute inset-0 opacity-8">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <pattern id="circuit" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                                <path d="M0,5 L5,5 M5,0 L5,10" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="0.5" fill="none" />
                                <circle cx="5" cy="5" r="0.8" fill="none" stroke="rgba(6, 182, 212, 0.1)" strokeWidth="0.3" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#circuit)" />
                    </svg>
                </div>

                {/* ADVANCED FLOATING ELEMENTS */}
                <div className="absolute top-16 left-12 w-8 h-1 bg-blue-400 rounded animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
                <div className="absolute top-24 right-16 w-6 h-6 border-2 border-cyan-400 rounded-full animate-ping delay-300 shadow-[0_0_20px_rgba(6,182,212,0.5)]"></div>
                <div className="absolute bottom-32 left-24 w-4 h-4 bg-indigo-400 rounded-full animate-bounce delay-700 shadow-[0_0_25px_rgba(99,102,241,0.7)]"></div>
                <div className="absolute bottom-48 right-20 w-10 h-2 bg-purple-400 rounded-full animate-pulse delay-1000 shadow-[0_0_18px_rgba(147,51,234,0.6)]"></div>

                {/* ULTRA-GLOW ORBS */}
                <div className="absolute top-1/4 left-1/6 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl animate-pulse-slow shadow-[0_0_60px_rgba(59,130,246,0.4)]"></div>
                <div className="absolute bottom-1/3 right-1/6 w-48 h-48 bg-cyan-500/20 rounded-full blur-2xl animate-pulse-slow delay-1000 shadow-[0_0_70px_rgba(6,182,212,0.4)]"></div>
                <div className="absolute top-3/4 left-1/3 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl animate-pulse-slow delay-2000 shadow-[0_0_50px_rgba(99,102,241,0.4)]"></div>
                <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse-slow delay-500 shadow-[0_0_40px_rgba(147,51,234,0.4)]"></div>

                {/* FLOATING GEOMETRIC SHAPES */}
                <div className="absolute top-20 right-32 w-3 h-3 bg-blue-400 rotate-45 animate-float-bob-small shadow-[0_0_12px_rgba(59,130,246,0.5)]"></div>
                <div className="absolute bottom-40 left-32 w-4 h-4 border-2 border-cyan-400 rotate-12 animate-float-bob-small delay-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
                <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-indigo-400 rounded-full animate-float-bob-small delay-1000 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                <div className="absolute bottom-1/4 left-1/4 w-5 h-1 bg-purple-400 rounded animate-float-bob-small delay-700 shadow-[0_0_14px_rgba(147,51,234,0.5)]"></div>
                <div className="absolute top-1/3 left-1/2 w-3 h-3 border border-blue-400 rotate-45 animate-spin-slow shadow-[0_0_12px_rgba(59,130,246,0.4)]"></div>

                {/* ANIMATED CODE SNIPPETS */}
                <div className="absolute top-1/4 right-1/4 opacity-20">
                    <code className="text-cyan-400 text-xs font-mono animate-pulse">
                        <span className="text-green-400">def</span> solve_problem():<br />
                        &nbsp;&nbsp;<span className="text-blue-400">return</span> <span className="text-yellow-400">True</span>
                    </code>
                </div>
                <div className="absolute bottom-1/4 left-1/3 opacity-15">
                    <code className="text-purple-400 text-xs font-mono animate-pulse delay-1000">
                        <span className="text-pink-400">const</span> innovation = <span className="text-cyan-400">() =&gt;</span> {'{'}<br />
                        &nbsp;&nbsp;<span className="text-yellow-400">return</span> <span className="text-green-400">'future'</span>;<br />
                        {'}'};
                    </code>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10">

            {/* INCREDIBLE HERO SECTION */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-20 relative"
            >
                {/* DYNAMIC GLOW EFFECTS */}
                <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-transparent blur-3xl animate-pulse-slow -z-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent rounded-full blur-2xl animate-pulse-slow delay-1000 -z-10"></div>

                <motion.div
                    initial={{ rotate: -5, scale: 0.95 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 1, type: 'spring' }}
                    className="inline-block bg-gradient-to-br from-blue-500 to-cyan-500 px-6 py-2 rounded-full mb-6 shadow-lg hover:shadow-blue-500/50 transition-all duration-500 relative overflow-hidden group"
                >
                    {/* ANIMATED BACKGROUND */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="text-white text-lg font-semibold tracking-wider uppercase relative z-10">Advanced Computer Science</span>
                    {/* SPARKLE EFFECTS */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                    <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-500 opacity-75"></div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
                    className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 relative"
                >
                    Code the
                    <motion.span
                        className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent relative"
                        initial={{ backgroundPosition: '0% 50%' }}
                        animate={{ backgroundPosition: '100% 50%' }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                    >
                        Future Today
                        {/* UNDERLINE GLOW */}
                        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 rounded-full blur-sm opacity-60"></div>
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 relative"
                >
                    Master the languages and technologies that power our digital world.
                    <motion.span
                        className="text-cyan-400 font-semibold"
                        animate={{ textShadow: ['0 0 10px rgba(6, 182, 212, 0.5)', '0 0 20px rgba(6, 182, 212, 0.8)', '0 0 10px rgba(6, 182, 212, 0.5)'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        From Python scripting to cloud computing, build the foundation for a limitless career in technology.
                    </motion.span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-4 text-sm"
                >
                    <motion.div
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(234, 179, 8, 0.3)' }}
                        className="flex items-center bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300"
                    >
                        <Star className="w-4 h-4 text-yellow-400 mr-2 animate-pulse" />
                        <span className="text-gray-300">Full Year Program</span>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }}
                        className="flex items-center bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300"
                    >
                        <Users className="w-4 h-4 text-blue-400 mr-2 animate-pulse delay-300" />
                        <span className="text-gray-300">Advanced Level</span>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(147, 51, 234, 0.3)' }}
                        className="flex items-center bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300"
                    >
                        <Award className="w-4 h-4 text-purple-400 mr-2 animate-pulse delay-600" />
                        <span className="text-gray-300">Industry Certifications</span>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Curriculum Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="mb-20"
            >
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Comprehensive Curriculum
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Six interconnected courses designed to build complete programming proficiency
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {curriculum.map((course, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(59, 130, 246, 0.2)'
                            }}
                            className="group bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                        >
                            {/* DYNAMIC BACKGROUND GLOW */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>

                            {/* FLOATING PARTICLES */}
                            <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                            <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-300 opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

                            <motion.div
                                className={`w-14 h-14 bg-gradient-to-br ${course.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative`}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                {/* ICON GLOW */}
                                <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <course.icon className="w-7 h-7 text-white relative z-10" />
                            </motion.div>

                            <motion.h3
                                className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300"
                                initial={{ opacity: 0.9 }}
                                whileHover={{ opacity: 1, textShadow: '0 0 20px rgba(6, 182, 212, 0.5)' }}
                            >
                                {course.title}
                            </motion.h3>

                            <motion.div
                                className="inline-block px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm rounded-full mb-3 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                            >
                                {course.level}
                            </motion.div>

                            <motion.p
                                className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
                                initial={{ opacity: 0.9 }}
                                whileHover={{ opacity: 1 }}
                            >
                                {course.description}
                            </motion.p>

                            {/* BOTTOM BORDER GLOW */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Projects Showcase */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-20"
            >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Real-World Projects
                        </h2>
                        <p className="text-xl text-gray-300">
                            Build a professional portfolio with these industry-relevant applications
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-slate-700/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                                        <Code className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex space-x-1">
                                        {[...Array(3)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{project}</h3>
                                <div className="flex items-center text-sm text-cyan-400">
                                    <Target className="w-4 h-4 mr-1" />
                                    Portfolio Project
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Certifications & Career Paths */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-white mb-8">Industry Certifications</h2>
                    <div className="space-y-4">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
                                        <p className="text-gray-400 text-sm">{cert.issuer}</p>
                                    </div>
                                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                                        <Award className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Career Paths */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-white mb-8">Career Opportunities</h2>
                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-white mb-2">Software Engineering</h3>
                            <p className="text-gray-300 mb-3">Full-stack development, mobile apps, web applications</p>
                            <div className="flex items-center text-sm text-cyan-400">
                                <TrendingUp className="w-4 h-4 mr-1" />
                                $110K average starting salary
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-white mb-2">Data Science & AI</h3>
                            <p className="text-gray-300 mb-3">Machine learning, data analysis, AI development</p>
                            <div className="flex items-center text-sm text-purple-400">
                                <TrendingUp className="w-4 h-4 mr-1" />
                                $125K average starting salary
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-white mb-2">Cloud Computing</h3>
                            <p className="text-gray-300 mb-3">AWS, Azure, Google Cloud architecture and deployment</p>
                            <div className="flex items-center text-sm text-green-400">
                                <TrendingUp className="w-4 h-4 mr-1" />
                                $130K average starting salary
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>


            {/* INCREDIBLE CALL TO ACTION */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center relative"
            >
                {/* MULTI-LAYERED GLOW BACKGROUNDS */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 via-cyan-500/15 to-purple-500/15 rounded-3xl blur-2xl animate-pulse-slow -z-20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl blur-xl animate-pulse-slow delay-1000 -z-20"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-blue-500/8 via-transparent to-transparent rounded-full blur-3xl animate-pulse-slow delay-500 -z-20"></div>

                <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
                    {/* ADVANCED BACKGROUND ANIMATIONS */}
                    <div className="absolute top-4 right-4 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse shadow-[0_0_30px_rgba(59,130,246,0.3)]"></div>
                    <div className="absolute bottom-4 left-4 w-20 h-20 bg-cyan-500/10 rounded-full animate-pulse delay-1000 shadow-[0_0_35px_rgba(6,182,212,0.3)]"></div>
                    <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/8 rounded-full animate-bounce delay-500 shadow-[0_0_25px_rgba(147,51,234,0.3)]"></div>

                    {/* FLOATING CODE PARTICLES */}
                    <div className="absolute top-8 right-12 text-cyan-400 text-xs font-mono animate-float-bob-small opacity-60">
                        {'{ }'}
                    </div>
                    <div className="absolute bottom-8 left-12 text-blue-400 text-xs font-mono animate-float-bob-small delay-500 opacity-60">
                        {'</>'}
                    </div>
                    <div className="absolute top-1/3 right-8 text-purple-400 text-xs font-mono animate-float-bob-small delay-1000 opacity-60">
                        {'01'}
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10"
                    >
                        Ready to Code Your Future?
                        {/* TITLE GLOW UNDERLINE */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 rounded-full blur-sm opacity-60"></div>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10"
                    >
                        Join the Advanced Computer Science program and become part of the next generation of technology leaders.
                        <motion.span
                            className="block text-cyan-400 font-semibold mt-2"
                            animate={{ textShadow: ['0 0 10px rgba(6, 182, 212, 0.5)', '0 0 20px rgba(6, 182, 212, 0.8)', '0 0 10px rgba(6, 182, 212, 0.5)'] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Your journey to innovation starts here.
                        </motion.span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
                    >
                        <motion.a
                            href="/admissions"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.3)'
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                        >
                            {/* BUTTON GLOW EFFECT */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            <span className="relative z-10">Apply Now</span>
                            <ChevronRight className="ml-2 w-5 h-5 relative z-10 animate-pulse" />
                        </motion.a>

                        <motion.a
                            href="/contact"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 0 30px rgba(255, 255, 255, 0.2)'
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-bold rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300 relative overflow-hidden group"
                        >
                            {/* SECONDARY BUTTON GLOW */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            <span className="relative z-10">Schedule Information Session</span>
                        </motion.a>
                    </motion.div>
                </div>
            </motion.div>
            </div>
        </div>
    );
};

export default ComputerScience;
