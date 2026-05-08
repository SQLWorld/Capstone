import React from 'react';
import { motion } from 'framer-motion';
import {
    Code,
    Palette,
    Gamepad2,
    Cpu,
    Music,
    Camera,
    Film,
    Zap,
    Star,
    Clock,
    Users,
    Award,
    ArrowRight,
    CheckCircle,
    Sparkles
} from 'lucide-react';

const Programs = () => {
    const programs = [
        {
            id: 'computer-science',
            title: 'Advanced Computer Science',
            icon: Code,
            color: 'from-blue-500 to-cyan-500',
            rgb: '59, 130, 246',
            description: 'Master Python, C++, and modern programming paradigms',
            courses: ['Python Programming', 'C++ Development', 'Web Development', 'Mobile Apps'],
            duration: 'Full Year',
            level: 'Advanced',
            highlights: ['1:1 iPad Program', 'Industry Certifications', 'Real Projects', 'STEM Focus']
        },
        {
            id: 'digital-arts',
            title: 'Digital Arts & Multimedia',
            icon: Palette,
            color: 'from-purple-500 to-pink-500',
            rgb: '168, 85, 247',
            description: 'Create stunning visuals using Adobe Creative Cloud',
            courses: ['3D Modeling', 'Digital Animation', 'Graphic Design', 'UX/UI Design'],
            duration: 'Full Year',
            level: 'Intermediate to Advanced',
            highlights: ['Adobe Suite Mastery', 'Portfolio Development', 'Creative Projects', 'Industry Tools']
        },
        {
            id: 'gaming',
            title: 'Gaming & Simulation',
            icon: Gamepad2,
            color: 'from-green-500 to-emerald-500',
            rgb: '34, 197, 94',
            description: 'Build games and simulations with Unity and modern engines',
            courses: ['Unity Development', 'Game Design', '3D Animation', 'Level Design'],
            duration: 'Full Year',
            level: 'Advanced',
            highlights: ['Unity Certification', 'Game Jams', 'Portfolio Games', 'VR/AR Exploration']
        },
        {
            id: 'cybersecurity',
            title: 'Cybersecurity & Ethics',
            icon: Cpu,
            color: 'from-red-500 to-orange-500',
            rgb: '239, 68, 68',
            description: 'Learn to protect and secure digital systems',
            courses: ['Network Security', 'Ethical Hacking', 'Digital Forensics', 'Privacy & Ethics'],
            duration: 'Semester',
            level: 'Advanced',
            highlights: ['CompTIA Certifications', 'Real-world Scenarios', 'Ethical Framework', 'Career Pathways']
        }
    ];

    const activities = [
        {
            icon: Music,
            title: 'Music & Audio Production',
            description: 'Digital music creation and audio engineering'
        },
        {
            icon: Camera,
            title: 'Photography & Videography',
            description: 'Visual storytelling and media production'
        },
        {
            icon: Film,
            title: 'Film & Media Arts',
            description: 'Cinematic storytelling and video production'
        },
        {
            icon: Zap,
            title: 'Robotics Club',
            description: 'Build and program autonomous robots'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
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
                stiffness: 50,
                damping: 20
            }
        }
    };

    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-20 relative overflow-hidden"
            >
                {/* Background glow animation */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-argyle-blue/15 via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-[80px] animate-float-slow" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[60px] animate-float-reverse delay-1000" />

                <motion.div
                    initial={{ rotate: -5, scale: 0.95 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 1, type: 'spring' }}
                    className="inline-block bg-gradient-to-br from-argyle-blue to-purple-400 px-6 py-2 rounded-full mb-6 shadow-lg relative z-10"
                >
                    <span className="text-white text-lg font-semibold tracking-wider uppercase">Academic Programs</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 relative z-10">
                    Where Innovation
                    <span className="block bg-gradient-to-r from-argyle-blue to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                        Meets Imagination
                    </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed relative z-10">
                    Discover our comprehensive magnet programs designed to prepare tomorrow's innovators,
                    creators, and leaders in a rapidly evolving digital world.
                </p>
            </motion.div>

            {/* Magnet Programs Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="mb-20"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                    Magnet Programs
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.id}
                            variants={itemVariants}
                            className="group bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 relative overflow-hidden"
                            style={{ '--program-color-rgb': program.rgb }}
                        >
                            {/* Background glow on hover */}
                            <div className="absolute inset-0 bg-[rgba(var(--program-color-rgb),0.2)] blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
                            {/* Header */}
                            <div className="flex items-center mb-6">
                                <div className={`p-4 rounded-2xl bg-gradient-to-br ${program.color} mr-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(var(--program-color-rgb),0.4)] group-hover:shadow-[0_0_30px_rgba(var(--program-color-rgb),0.6)] relative overflow-hidden`}>
                                    <program.icon className="w-8 h-8 text-white relative z-10" />
                                    {/* Subtle internal glow */}
                                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 transition-colors">{program.title}</h3>
                                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                                        <span className="flex items-center">
                                            <Clock className="w-4 h-4 mr-1" />
                                            {program.duration}
                                        </span>
                                        <span className="flex items-center">
                                            <Star className="w-4 h-4 mr-1" />
                                            {program.level}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {program.description}
                            </p>

                            {/* Courses */}
                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-white mb-3">Key Courses:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {program.courses.map((course, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full border border-white/10"
                                        >
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Highlights */}
                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-white mb-3">Program Highlights:</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    {program.highlights.map((highlight, idx) => (
                                        <div key={idx} className="flex items-center text-sm text-gray-300">
                                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                            {highlight}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                        <motion.a
                            href={`/${program.id}`}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(var(--program-color-rgb), 0.7)" }}
                            whileTap={{ scale: 0.95 }}
                            className={`w-full py-3 px-6 bg-gradient-to-r ${program.color} text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:shadow-2xl relative overflow-hidden`}
                        >
                            <span className="relative z-10">Learn More</span>
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                            {/* Button shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </motion.a>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Activities & Clubs Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-20"
            >
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Activities & Clubs
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Beyond the classroom, explore our diverse range of extracurricular activities
                        that foster creativity, leadership, and personal growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group relative overflow-hidden"
                        >
                            {/* Animated background glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                                <activity.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{activity.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{activity.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Why Choose Argyle Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-20"
            >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Why Choose Argyle?
                            </h2>

                            <div className="space-y-6">
                                <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.1 }} className="flex items-start group hover:scale-[1.02] transition-transform duration-300">
                                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4 mt-1 shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]">
                                        <Sparkles className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-green-300 transition-colors">Innovation First</h3>
                                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">We don't follow trends—we create them. Our curriculum evolves with technology.</p>
                                    </div>
                                </motion.div>

                                <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.2 }} className="flex items-start group hover:scale-[1.02] transition-transform duration-300">
                                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 mt-1 shadow-[0_0_15px_rgba(56,189,248,0.3)] group-hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]">
                                        <Users className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">Expert Faculty</h3>
                                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Learn from industry professionals and certified educators passionate about technology.</p>
                                    </div>
                                </motion.div>

                                <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.3 }} className="flex items-start group hover:scale-[1.02] transition-transform duration-300">
                                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4 mt-1 shadow-[0_0_15px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]">
                                        <Award className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">Real-World Impact</h3>
                                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Build portfolios, earn certifications, and create projects that matter.</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        <div className="relative group">
                            {/* Decorative elements with hover animations */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-argyle-blue/20 to-purple-500/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500 animate-float-slow"></div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-full blur-lg group-hover:scale-110 transition-transform duration-500 animate-float-reverse delay-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-700 rounded-3xl -z-10" />

                            <div className="bg-slate-700/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 relative z-10 group-hover:border-white/20 transition-colors">
                                <h3 className="text-2xl font-bold text-white mb-6 text-center group-hover:text-blue-200 transition-colors">Program Stats</h3>

                                <div className="grid grid-cols-2 gap-6">
                            <div className="text-center group-hover:scale-[1.03] transition-transform duration-300">
                                <div className="text-3xl font-bold text-argyle-blue mb-1 glow-text-blue">4</div>
                                <div className="text-sm text-gray-400 group-hover:text-gray-200">Magnet Programs</div>
                            </div>
                            <div className="text-center group-hover:scale-[1.03] transition-transform duration-300">
                                <div className="text-3xl font-bold text-purple-400 mb-1 glow-text-purple">25+</div>
                                <div className="text-sm text-gray-400 group-hover:text-gray-200">Clubs & Activities</div>
                            </div>
                            <div className="text-center group-hover:scale-[1.03] transition-transform duration-300">
                                <div className="text-3xl font-bold text-pink-400 mb-1 glow-text-pink">1:1</div>
                                <div className="text-sm text-gray-400 group-hover:text-gray-200">Device Ratio</div>
                            </div>
                            <div className="text-center group-hover:scale-[1.03] transition-transform duration-300">
                                <div className="text-3xl font-bold text-green-400 mb-1 glow-text-green">100%</div>
                                <div className="text-sm text-gray-400 group-hover:text-gray-200">STEM Focus</div>
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center relative overflow-hidden"
            >
                {/* Background glow and particles */}
                <div className="absolute inset-0 bg-gradient-to-r from-argyle-blue/15 via-purple-500/15 to-pink-500/15 blur-2xl animate-pulse-slow" />
                <div className="absolute top-10 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-ping opacity-70" />
                <div className="absolute bottom-10 right-10 w-3 h-3 bg-fuchsia-400 rounded-full animate-bounce delay-1000 opacity-70" />

                <div className="bg-gradient-to-r from-argyle-blue/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-8 md:p-12 border border-white/10 relative z-10 shadow-2xl shadow-purple-500/20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 glow-text-white">
                        Ready to Join Our Community?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed glow-text-gray">
                        Take the next step in your educational journey. Apply to become part of the Argyle Eagles family.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.a
                            href="/admissions"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(56,189,248,0.7)" }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-argyle-blue to-purple-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                        >
                            <span className="relative z-10">Learn About Admissions</span>
                            <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </motion.a>

                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168,85,247,0.7)" }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-bold rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 relative overflow-hidden group"
                        >
                            <span className="relative z-10">Schedule a Visit</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Programs;
