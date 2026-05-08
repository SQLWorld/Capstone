import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Brain, Code, Palette, Laptop, Briefcase, Users, Award, Star, Trophy, Target, Zap, Heart, TrendingUp, Calendar, CheckCircle, ExternalLink, PlayCircle, BarChart3, Globe, BookOpen, Lightbulb, GraduationCap, Building, ChevronRight, Quote, User, Clock, DollarSign, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';


// Capstone Timeline Component
const CapstoneTimeline = () => {
    const [selectedPhase, setSelectedPhase] = useState(0);

    const phases = [
        {
            title: "Discovery Phase",
            subtitle: "Weeks 1-4",
            icon: <Lightbulb className="w-8 h-8" />,
            color: "from-yellow-500 to-orange-500",
            tasks: [
                "Meet with client organization",
                "Identify problem statement",
                "Conduct user research interviews",
                "Define project scope and goals",
                "Create initial project proposal"
            ],
            deliverables: ["Project Brief", "User Research Report", "Project Timeline"]
        },
        {
            title: "Design Phase",
            subtitle: "Weeks 5-8",
            icon: <Palette className="w-8 h-8" />,
            color: "from-purple-500 to-pink-500",
            tasks: [
                "Create wireframes and mockups",
                "Design user interface and experience",
                "Develop user personas and journey maps",
                "Plan technical architecture",
                "Create design system and style guide"
            ],
            deliverables: ["UI/UX Mockups", "Technical Specification", "Design System"]
        },
        {
            title: "Development Phase",
            subtitle: "Weeks 9-16",
            icon: <Code className="w-8 h-8" />,
            color: "from-blue-500 to-cyan-500",
            tasks: [
                "Set up development environment",
                "Build core functionality",
                "Implement user interface",
                "Integrate APIs and databases",
                "Conduct code reviews and testing",
                "Debug and optimize performance"
            ],
            deliverables: ["Working Prototype", "Source Code Repository", "Test Documentation"]
        },
        {
            title: "Testing & Refinement",
            subtitle: "Weeks 17-20",
            icon: <Target className="w-8 h-8" />,
            color: "from-green-500 to-emerald-500",
            tasks: [
                "User acceptance testing",
                "Bug fixes and improvements",
                "Performance optimization",
                "Security and accessibility review",
                "Prepare deployment environment"
            ],
            deliverables: ["Test Reports", "Security Audit", "Deployment Plan"]
        },
        {
            title: "Launch & Showcase",
            subtitle: "Weeks 21-24",
            icon: <Rocket className="w-8 h-8" />,
            color: "from-pink-500 to-rose-500",
            tasks: [
                "Deploy to production",
                "Create marketing materials",
                "Present to stakeholders",
                "Collect user feedback",
                "Document lessons learned"
            ],
            deliverables: ["Live Product", "Marketing Materials", "Final Presentation", "Project Retrospective"]
        }
    ];

    return (
        <div className="max-w-6xl mx-auto">
            {/* Timeline Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {phases.map((phase, index) => (
                    <motion.button
                        key={index}
                        onClick={() => setSelectedPhase(index)}
                        className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                            selectedPhase === index
                                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_20px_rgba(236,72,153,0.5)]'
                                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="flex items-center gap-2">
                            {phase.icon}
                            <span className="hidden sm:inline">{phase.title}</span>
                            <span className="sm:hidden">Phase {index + 1}</span>
                        </div>
                    </motion.button>
                ))}
            </div>

            {/* Selected Phase Details */}
            <motion.div
                key={selectedPhase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="glass-card p-8 rounded-3xl"
            >
                <div className="text-center mb-8">
                    <motion.div
                        className={`w-20 h-20 bg-gradient-to-br ${phases[selectedPhase].color} rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(236,72,153,0.3)]`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-white">{phases[selectedPhase].icon}</div>
                    </motion.div>
                    <h3 className="text-3xl font-bold text-white mb-2">{phases[selectedPhase].title}</h3>
                    <p className="text-xl text-purple-400 font-semibold">{phases[selectedPhase].subtitle}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            Key Tasks
                        </h4>
                        <div className="space-y-3">
                            {phases[selectedPhase].tasks.map((task, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-xl border border-gray-700/50"
                                >
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                                    <span className="text-gray-300">{task}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Award className="w-5 h-5 text-yellow-400" />
                            Deliverables
                        </h4>
                        <div className="space-y-3">
                            {phases[selectedPhase].deliverables.map((deliverable, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20"
                                >
                                    <FileText className="w-4 h-4 text-purple-400 flex-shrink-0" />
                                    <span className="text-gray-300">{deliverable}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Progress Indicator */}
                <div className="mt-8">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                        <span>Project Progress</span>
                        <span>{Math.round(((selectedPhase + 1) / phases.length) * 100)}% Complete</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                            className={`h-full bg-gradient-to-r ${phases[selectedPhase].color} rounded-full`}
                            initial={{ width: 0 }}
                            animate={{ width: `${((selectedPhase + 1) / phases.length) * 100}%` }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Capstone = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-20 min-h-screen relative">
            {/* INCREDIBLE CAPSTONE-THEMED BACKGROUND EFFECTS */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {/* VIBRANT CAPSTONE ENERGY BURSTS */}
                <div className="absolute top-1/4 left-1/5 w-52 h-52 bg-gradient-radial from-purple-400/40 via-pink-400/25 to-transparent rounded-full blur-2xl animate-pulse-slow shadow-[0_0_120px_rgba(168,85,247,0.5)]"></div>
                <div className="absolute bottom-1/3 right-1/6 w-60 h-60 bg-gradient-radial from-purple-500/35 via-indigo-400/25 to-transparent rounded-full blur-2xl animate-pulse-slow delay-1000 shadow-[0_0_130px_rgba(147,51,234,0.5)]"></div>
                <div className="absolute top-2/3 left-2/3 w-44 h-44 bg-gradient-radial from-purple-300/35 via-pink-300/25 to-transparent rounded-full blur-2xl animate-pulse-slow delay-2000 shadow-[0_0_110px_rgba(196,181,253,0.5)]"></div>

                {/* FLOATING CAPSTONE ELEMENTS */}
                <div className="absolute top-20 left-16 w-6 h-6 border-3 border-purple-400 rounded animate-ping opacity-50 shadow-[0_0_18px_rgba(168,85,247,0.8)]"></div>
                <div className="absolute top-32 right-20 w-5 h-5 bg-purple-400 rounded-full animate-bounce delay-300 shadow-[0_0_22px_rgba(147,51,234,0.9)]"></div>
                <div className="absolute bottom-40 left-28 w-4 h-4 bg-purple-300 rounded animate-pulse delay-700 shadow-[0_0_20px_rgba(196,181,253,0.7)]"></div>
                <div className="absolute bottom-52 right-24 w-8 h-2 bg-pink-400 rounded-full animate-pulse delay-1000 shadow-[0_0_24px_rgba(236,72,153,0.7)]"></div>

                {/* ANIMATED CAPSTONE SYMBOLS */}
                <div className="absolute top-1/4 right-1/4 opacity-25">
                    <div className="text-purple-400 text-3xl animate-pulse">🚀</div>
                </div>
                <div className="absolute bottom-1/4 left-1/3 opacity-20">
                    <div className="text-purple-300 text-3xl animate-pulse delay-1000">💎</div>
                </div>
                <div className="absolute top-2/3 left-1/4 opacity-22">
                    <div className="text-pink-400 text-2xl animate-pulse delay-2000">🏆</div>
                </div>

                {/* CAPSTONE WAVES */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-400/35 via-pink-400/35 to-purple-500/35 animate-gradient-x opacity-50"></div>
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500/35 via-indigo-400/35 to-purple-400/35 animate-gradient-x delay-1000 opacity-50"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16 relative z-10"
            >
                {/* DYNAMIC CAPSTONE GLOW EFFECTS */}
                <div className="absolute inset-0 bg-gradient-radial from-pink-500/20 via-transparent to-transparent blur-3xl animate-pulse-slow -z-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-purple-500/10 via-transparent to-transparent rounded-full blur-2xl animate-pulse-slow delay-1000 -z-10"></div>

                <motion.span
                    initial={{ rotate: -5, scale: 0.95 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 1, type: 'spring' }}
                    className="inline-block bg-gradient-to-br from-purple-400 to-pink-400 px-6 py-2 rounded-full mb-6 shadow-lg hover:shadow-purple-400/60 transition-all duration-500 relative overflow-hidden group"
                >
                    {/* ANIMATED BACKGROUND */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="text-white text-lg font-semibold tracking-wider uppercase relative z-10">The Magnet Experience</span>
                    {/* SPARKLE EFFECTS */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                    <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-500 opacity-75"></div>
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
                    className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 relative"
                >
                    Capstone
                    <motion.span
                        className="block bg-gradient-to-r from-purple-300 via-pink-300 to-purple-400 bg-clip-text text-transparent relative"
                        initial={{ backgroundPosition: '0% 50%' }}
                        animate={{ backgroundPosition: '100% 50%' }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                    >
                        Project
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 relative"
                >
                    The crowning achievement of the Argyle Magnet experience.
                    <motion.span
                        className="text-purple-400 font-semibold"
                        animate={{ textShadow: ['0 0 10px rgba(147, 51, 234, 0.5)', '0 0 20px rgba(147, 51, 234, 0.8)', '0 0 10px rgba(147, 51, 234, 0.5)'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        Every 8th grader solves a real-world problem through technology and entrepreneurship.
                    </motion.span>
                </motion.p>
            </motion.div>

            {/* INCREDIBLE CAPSTONE HERO SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
                    whileHover={{
                        scale: 1.02,
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(236, 72, 153, 0.2)'
                    }}
                    className="glass-panel p-8 rounded-3xl relative overflow-hidden border-2 border-pink-400/30 shadow-[0_0_30px_rgba(236,72,153,0.2)] hover:shadow-[0_0_60px_rgba(236,72,153,0.4)]"
                >
                    {/* DYNAMIC CAPSTONE GLOW */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/8 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                    {/* CAPSTONE PARTICLE EFFECTS */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-0 group-hover:opacity-80 transition-opacity duration-300 shadow-[0_0_10px_rgba(236,72,153,0.8)]"></div>
                    <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-300 opacity-0 group-hover:opacity-80 transition-opacity duration-300 shadow-[0_0_8px_rgba(147,51,234,0.6)]"></div>

                    <motion.div
                        className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                        <Rocket className="w-32 h-32 text-pink-400" />
                    </motion.div>

                    <div className="flex items-center gap-4 mb-6 relative z-10">
                        <motion.div
                            className="p-4 bg-pink-500/10 rounded-2xl group-hover:bg-pink-500/20 transition-all duration-300"
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* ICON GLOW RING */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-pink-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                            <Brain className="w-8 h-8 text-pink-400 relative z-10" />
                        </motion.div>

                        <motion.h2
                            className="text-3xl font-bold text-white group-hover:text-pink-100 transition-colors duration-300"
                            initial={{ opacity: 0.9 }}
                            whileHover={{ opacity: 1, scale: 1.02 }}
                        >
                            More Than Just Code
                        </motion.h2>
                    </div>

                    <motion.p
                        className="text-gray-300 leading-relaxed mb-6 relative z-10 text-lg group-hover:text-gray-200 transition-colors duration-300"
                        initial={{ opacity: 0.9 }}
                        whileHover={{ opacity: 1 }}
                    >
                        The Capstone isn't just a final exam; it's a launchpad. Through our unique partnership with <motion.span
                            className="text-pink-400 font-bold"
                            animate={{ textShadow: ['0 0 10px rgba(236, 72, 153, 0.5)', '0 0 15px rgba(236, 72, 153, 0.8)', '0 0 10px rgba(236, 72, 153, 0.5)'] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Junior Achievement
                        </motion.span>, students don't just complete assignments—they form small businesses.
                    </motion.p>

                    <motion.p
                        className="text-gray-300 leading-relaxed relative z-10 group-hover:text-gray-200 transition-colors duration-300"
                        initial={{ opacity: 0.9 }}
                        whileHover={{ opacity: 1 }}
                    >
                        Working in teams, they identify real needs for local businesses and non-profits, then design, build, and deliver technology-based solutions.
                    </motion.p>

                    {/* BOTTOM GLOW BORDER */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                        whileHover={{
                            scale: 1.05,
                            y: -10,
                            boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)'
                        }}
                        className="glass-card p-6 rounded-2xl text-center hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden border border-blue-400/20 hover:border-blue-400/50"
                    >
                        {/* BLUE GLOW BACKGROUND */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/8 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                        {/* PARTICLE EFFECTS */}
                        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping opacity-0 group-hover:opacity-70 transition-opacity duration-300 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>

                        <motion.div
                            className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Briefcase className="w-8 h-8 text-blue-400" />
                        </motion.div>

                        <motion.h3
                            className="text-white font-bold mb-2 group-hover:text-blue-100 transition-colors duration-300"
                            initial={{ opacity: 0.9 }}
                            whileHover={{ opacity: 1 }}
                        >
                            Entrepreneurship
                        </motion.h3>

                        <motion.p
                            className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                        >
                            Students build business plans, marketing strategies, and client pitches.
                        </motion.p>

                        {/* BOTTOM BORDER GLOW */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 100 }}
                        whileHover={{
                            scale: 1.05,
                            y: -10,
                            boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(147, 51, 234, 0.3)'
                        }}
                        className="glass-card p-6 rounded-2xl text-center hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden border border-purple-400/20 hover:border-purple-400/50"
                    >
                        {/* PURPLE GLOW BACKGROUND */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-indigo-500/8 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                        {/* PARTICLE EFFECTS */}
                        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-0 group-hover:opacity-70 transition-opacity duration-300 shadow-[0_0_8px_rgba(147,51,234,0.6)]"></div>

                        <motion.div
                            className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.3)]"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Users className="w-8 h-8 text-purple-400" />
                        </motion.div>

                        <motion.h3
                            className="text-white font-bold mb-2 group-hover:text-purple-100 transition-colors duration-300"
                            initial={{ opacity: 0.9 }}
                            whileHover={{ opacity: 1 }}
                        >
                            Collaboration
                        </motion.h3>

                        <motion.p
                            className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                        >
                            Teams assign roles: Project Manager, Lead Developer, UX Designer.
                        </motion.p>

                        {/* BOTTOM BORDER GLOW */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 100 }}
                        whileHover={{
                            scale: 1.05,
                            y: -10,
                            boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(16, 185, 129, 0.3)'
                        }}
                        className="glass-card p-6 rounded-2xl text-center hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden border border-green-400/20 hover:border-green-400/50"
                    >
                        {/* GREEN GLOW BACKGROUND */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/8 to-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                        {/* PARTICLE EFFECTS */}
                        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping opacity-0 group-hover:opacity-70 transition-opacity duration-300 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>

                        <motion.div
                            className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Code className="w-8 h-8 text-green-400" />
                        </motion.div>

                        <motion.h3
                            className="text-white font-bold mb-2 group-hover:text-green-100 transition-colors duration-300"
                            initial={{ opacity: 0.9 }}
                            whileHover={{ opacity: 1 }}
                        >
                            Development
                        </motion.h3>

                        <motion.p
                            className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                        >
                            Building real apps, websites, and games using industry tools.
                        </motion.p>

                        {/* BOTTOM BORDER GLOW */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5, type: "spring", stiffness: 100 }}
                        whileHover={{
                            scale: 1.05,
                            y: -10,
                            boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(234, 179, 8, 0.3)'
                        }}
                        className="glass-card p-6 rounded-2xl text-center hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden border border-yellow-400/20 hover:border-yellow-400/50"
                    >
                        {/* GOLD GLOW BACKGROUND */}
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-orange-500/8 to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                        {/* PARTICLE EFFECTS */}
                        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping opacity-0 group-hover:opacity-70 transition-opacity duration-300 shadow-[0_0_8px_rgba(234,179,8,0.6)]"></div>

                        <motion.div
                            className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Award className="w-8 h-8 text-yellow-400" />
                        </motion.div>

                        <motion.h3
                            className="text-white font-bold mb-2 group-hover:text-yellow-100 transition-colors duration-300"
                            initial={{ opacity: 0.9 }}
                            whileHover={{ opacity: 1 }}
                        >
                            The Showcase
                        </motion.h3>

                        <motion.p
                            className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                        >
                            Presenting final products to community leaders and industry pros.
                        </motion.p>

                        {/* BOTTOM BORDER GLOW */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                    </motion.div>
                </div>
            </div>

            {/* The Challenge Steps */}
            <h2 className="text-3xl font-bold text-white mb-10 text-center">The Project Lifecycle</h2>
            <div className="relative border-l-2 border-white/10 ml-4 md:ml-auto md:mx-auto max-w-4xl space-y-12 pl-8 pb-12">

                <div className="relative">
                    <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-slate-900 border-4 border-pink-500"></span>
                    <div className="glass-card p-6 rounded-2xl">
                        <span className="text-pink-400 font-mono text-xs font-bold uppercase mb-2 block">Phase 1: Discovery</span>
                        <h3 className="text-2xl font-bold text-white mb-2">Problem Identification</h3>
                        <p className="text-gray-400">
                            Students consult with a "client"—often a local non-profit or small business—to understand their challenges. Does the animal shelter need a better adoption app? Does the food requests need a digital inventory system?
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-slate-900 border-4 border-purple-500"></span>
                    <div className="glass-card p-6 rounded-2xl">
                        <span className="text-purple-400 font-mono text-xs font-bold uppercase mb-2 block">Phase 2: Development</span>
                        <h3 className="text-2xl font-bold text-white mb-2">Agile & Iteration</h3>
                        <p className="text-gray-400">
                            Teams enter the "Sprint" phase. They wireframe designs, write code (Python, HTML/CSS, C#), and debug issues. This teaches resilience—when the code breaks, they must fix it together.
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-slate-900 border-4 border-blue-500"></span>
                    <div className="glass-card p-6 rounded-2xl">
                        <span className="text-blue-400 font-mono text-xs font-bold uppercase mb-2 block">Phase 3: Delivery</span>
                        <h3 className="text-2xl font-bold text-white mb-2">The Tech Showcase</h3>
                        <p className="text-gray-400">
                            The final exam is public. Students set up booths, demo their live software, and answer questions from parents, teachers, and real tech professionals.
                        </p>
                    </div>
                </div>

            </div>

            {/* CAPSTONE PROGRAM HIGHLIGHTS */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-24"
            >
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-white text-center mb-4"
                >
                    Capstone Program Highlights
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-purple-300 to-pink-300 mx-auto mt-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    />
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto"
                >
                    What makes our Capstone experience unique and transformative for every student.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Real-World Problem Solving",
                            description: "Students work with local businesses and non-profits to identify technology needs and develop practical solutions that make a real impact in our community.",
                            icon: "🌍",
                            skills: ["Problem Analysis", "Client Communication", "Requirements Gathering"],
                            impact: "Community Impact Focus"
                        },
                        {
                            title: "Entrepreneurial Mindset",
                            description: "Through our Junior Achievement partnership, students learn business fundamentals while developing technology products with real market potential.",
                            icon: "💼",
                            skills: ["Business Planning", "Market Research", "Product Development"],
                            impact: "Business Acumen"
                        },
                        {
                            title: "Full-Stack Development",
                            description: "From concept to deployment, students master the complete software development lifecycle using industry-standard tools and methodologies.",
                            icon: "⚡",
                            skills: ["Full-Stack Development", "Version Control", "Testing"],
                            impact: "Production-Ready Code"
                        },
                        {
                            title: "Team Collaboration",
                            description: "Students form diverse teams and learn to work together effectively, assigning roles and responsibilities to achieve shared goals.",
                            icon: "🤝",
                            skills: ["Team Leadership", "Project Management", "Communication"],
                            impact: "Professional Collaboration"
                        },
                        {
                            title: "Innovation & Creativity",
                            description: "The Capstone encourages creative problem-solving and innovative thinking, pushing students to explore new technologies and approaches.",
                            icon: "💡",
                            skills: ["Creative Design", "Innovation", "Critical Thinking"],
                            impact: "Creative Solutions"
                        },
                        {
                            title: "Professional Presentation",
                            description: "Students learn to present their work professionally, demonstrating both technical expertise and communication skills to diverse audiences.",
                            icon: "🎯",
                            skills: ["Public Speaking", "Demo Creation", "Professional Communication"],
                            impact: "Presentation Excellence"
                        }
                    ].map((highlight, index) => (
                        <motion.div
                            key={highlight.title}
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 50px rgba(168, 85, 247, 0.4)'
                            }}
                            className="glass-card p-6 rounded-3xl relative overflow-hidden group cursor-pointer"
                        >
                            {/* Animated Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/8 via-pink-400/10 to-purple-400/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                            {/* Floating Elements */}
                            <div className="absolute top-4 right-4 text-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                                {highlight.icon}
                            </div>

                            <div className="flex items-center gap-4 mb-4">
                                <motion.div
                                    className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center"
                                    whileHover={{ scale: 1.1, rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Lightbulb className="w-6 h-6 text-purple-400" />
                                </motion.div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">{highlight.title}</h4>
                                    <p className="text-purple-400 text-sm">{highlight.impact}</p>
                                </div>
                            </div>

                            <div className="mb-4">
                                <p className="text-gray-300 leading-relaxed">{highlight.description}</p>
                            </div>

                            <div className="mb-4">
                                <p className="text-xs text-gray-400 mb-2">Key Skills Developed:</p>
                                <div className="flex flex-wrap gap-2">
                                    {highlight.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: (index * 0.1) + (skillIndex * 0.1) }}
                                            className="px-3 py-1 bg-pink-500/10 text-pink-300 text-xs rounded-full border border-pink-500/20"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            {/* Hover Glow Border */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>


            {/* SKILLS & COMPETENCIES MATRIX */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-24"
            >
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-white text-center mb-4"
                >
                    Skills Mastered
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    />
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto"
                >
                    The Capstone isn't just a project—it's a comprehensive training ground for real-world technology careers.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            category: "Technical Skills",
                            icon: <Code className="w-8 h-8" />,
                            skills: [
                                { name: "Python Programming", level: 95 },
                                { name: "Web Development", level: 90 },
                                { name: "Database Design", level: 85 },
                                { name: "API Development", level: 80 },
                                { name: "Version Control", level: 88 }
                            ],
                            color: "from-blue-500 to-cyan-500"
                        },
                        {
                            category: "Design & UX",
                            icon: <Palette className="w-8 h-8" />,
                            skills: [
                                { name: "UI/UX Design", level: 92 },
                                { name: "Wireframing", level: 88 },
                                { name: "User Research", level: 85 },
                                { name: "Prototyping", level: 82 },
                                { name: "Design Systems", level: 78 }
                            ],
                            color: "from-purple-500 to-pink-500"
                        },
                        {
                            category: "Business Skills",
                            icon: <Briefcase className="w-8 h-8" />,
                            skills: [
                                { name: "Project Management", level: 90 },
                                { name: "Client Relations", level: 85 },
                                { name: "Budget Planning", level: 80 },
                                { name: "Marketing Strategy", level: 75 },
                                { name: "Business Ethics", level: 88 }
                            ],
                            color: "from-green-500 to-emerald-500"
                        },
                        {
                            category: "Soft Skills",
                            icon: <Users className="w-8 h-8" />,
                            skills: [
                                { name: "Team Collaboration", level: 95 },
                                { name: "Communication", level: 92 },
                                { name: "Problem Solving", level: 98 },
                                { name: "Time Management", level: 90 },
                                { name: "Leadership", level: 85 }
                            ],
                            color: "from-yellow-500 to-orange-500"
                        }
                    ].map((category, index) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{
                                y: -10,
                                scale: 1.05,
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)'
                            }}
                            className="glass-card p-6 rounded-3xl relative overflow-hidden group"
                        >
                            {/* Category Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />

                            <div className="flex items-center gap-3 mb-6">
                                <motion.div
                                    className={`p-3 bg-gradient-to-br ${category.color} rounded-2xl text-white`}
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {category.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold text-white">{category.category}</h3>
                            </div>

                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: (index * 0.1) + (skillIndex * 0.1) }}
                                        className="space-y-2"
                                    >
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-300">{skill.name}</span>
                                            <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                                            <motion.div
                                                className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    delay: (index * 0.1) + (skillIndex * 0.2),
                                                    duration: 1.5,
                                                    ease: "easeOut"
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Animated Border */}
                            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-${category.color.split(' ')[1]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>



            {/* INTERACTIVE PROJECT TIMELINE */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-24"
            >
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-white text-center mb-4"
                >
                    Your Capstone Journey
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mt-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    />
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto"
                >
                    Follow the complete Capstone process—from idea to impact. Click on each phase to see what you'll accomplish.
                </motion.p>

                <CapstoneTimeline />
            </motion.div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
                <Link to="/about" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-bold hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all transform hover:-translate-y-1">
                    Read About Our History <Rocket className="ml-2 w-5 h-5" />
                </Link>
            </div>

        </div>
    );
};

export default Capstone;