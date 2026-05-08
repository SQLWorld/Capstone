import React from 'react';
import { motion } from 'framer-motion';
import {
    Gamepad2,
    Code,
    Palette,
    Zap,
    Trophy,
    Users,
    Target,
    Star,
    ChevronRight,
    CheckCircle,
    Award,
    BookOpen,
    Cpu,
    Layers
} from 'lucide-react';

const Gaming = () => {
    // Gaming Theme: Dark background with neon gaming colors
    const theme = {
        primary: 'from-green-500 to-emerald-500',
        secondary: 'from-cyan-500 to-blue-500',
        accent: 'from-purple-500 to-pink-500',
        background: 'from-slate-900 via-slate-800 to-slate-900',
        particleColors: ['bg-green-400', 'bg-cyan-400', 'bg-emerald-400', 'bg-blue-400']
    };

    const engines = [
        {
            name: "Unity",
            description: "Industry-leading game engine for 2D/3D games",
            features: ["Cross-platform deployment", "C# scripting", "Asset store", "VR/AR support"],
            icon: Gamepad2,
            color: "from-gray-600 to-gray-800"
        },
        {
            name: "Unreal Engine",
            description: "Photorealistic graphics and advanced physics",
            features: ["Blueprint visual scripting", "Cinematic tools", "Nanite geometry", "Lumen lighting"],
            icon: Zap,
            color: "from-blue-500 to-cyan-500"
        },
        {
            name: "Godot",
            description: "Open-source engine perfect for indie developers",
            features: ["GDScript/Python", "2D/3D support", "Free & open source", "Lightweight"],
            icon: Code,
            color: "from-green-500 to-emerald-500"
        }
    ];

    const skills = [
        "Game Design Principles",
        "Level Design",
        "Character Animation",
        "Physics Programming",
        "AI & Pathfinding",
        "UI/UX Design",
        "Audio Implementation",
        "Multiplayer Systems",
        "Shader Programming",
        "Performance Optimization"
    ];

    const projects = [
        {
            title: "RPG Adventure Game",
            description: "Complete role-playing game with quests, inventory, and combat system",
            engine: "Unity",
            features: ["Turn-based combat", "Character progression", "Save system"],
            difficulty: "Advanced"
        },
        {
            title: "Racing Simulator",
            description: "Realistic racing game with physics-based driving mechanics",
            engine: "Unreal Engine",
            features: ["Vehicle physics", "Track editor", "Multiplayer"],
            difficulty: "Expert"
        },
        {
            title: "Puzzle Platformer",
            description: "Creative puzzle game with unique mechanics and level design",
            engine: "Godot",
            features: ["Physics puzzles", "Procedural generation", "Score system"],
            difficulty: "Intermediate"
        },
        {
            title: "VR Experience",
            description: "Immersive virtual reality game for Oculus/Meta Quest",
            engine: "Unity",
            features: ["VR interactions", "Spatial audio", "Hand tracking"],
            difficulty: "Advanced"
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
        <div className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative min-h-screen bg-gradient-to-br ${theme.background}`}>
            {/* INCREDIBLE GAMING BACKGROUND EFFECTS */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {/* PIXELATED GRID OVERLAY */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <pattern id="pixel-grid" x="0" y="0" width="2" height="2" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="1" height="1" fill="none" stroke="rgba(34, 197, 94, 0.2)" strokeWidth="0.1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#pixel-grid)" />
                    </svg>
                </div>

                {/* NEON ENERGY BURSTS */}
                <div className="absolute top-1/4 left-1/6 w-52 h-52 bg-gradient-radial from-green-500/30 via-cyan-500/20 to-transparent rounded-full blur-2xl animate-pulse-slow shadow-[0_0_100px_rgba(34,197,94,0.4)]"></div>
                <div className="absolute bottom-1/3 right-1/6 w-60 h-60 bg-gradient-radial from-cyan-500/30 via-emerald-500/20 to-transparent rounded-full blur-2xl animate-pulse-slow delay-1000 shadow-[0_0_110px_rgba(6,182,212,0.4)]"></div>
                <div className="absolute top-2/3 left-2/3 w-44 h-44 bg-gradient-radial from-emerald-500/30 via-blue-500/20 to-transparent rounded-full blur-2xl animate-pulse-slow delay-2000 shadow-[0_0_90px_rgba(16,185,129,0.4)]"></div>

                {/* FLOATING GAME ELEMENTS */}
                <div className="absolute top-20 left-10 w-6 h-6 border-3 border-green-400 rounded animate-ping opacity-40 shadow-[0_0_15px_rgba(34,197,94,0.7)]"></div>
                <div className="absolute top-32 right-20 w-5 h-5 bg-cyan-400 rounded-full animate-bounce delay-300 shadow-[0_0_20px_rgba(6,182,212,0.8)]"></div>
                <div className="absolute bottom-40 left-20 w-4 h-4 bg-emerald-400 rounded animate-pulse delay-700 shadow-[0_0_18px_rgba(16,185,129,0.6)]"></div>
                <div className="absolute bottom-60 right-32 w-7 h-7 border-2 border-blue-400 rotate-45 animate-spin-slow shadow-[0_0_22px_rgba(59,130,246,0.6)]"></div>

                {/* PIXEL PARTICLES */}
                <div className="absolute top-16 right-32 w-2 h-2 bg-green-400 rounded animate-float-bob-small shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                <div className="absolute bottom-24 left-32 w-3 h-3 bg-cyan-400 rounded-full animate-float-bob-small delay-500 shadow-[0_0_12px_rgba(6,182,212,0.5)]"></div>
                <div className="absolute top-1/3 right-1/5 w-1.5 h-1.5 bg-emerald-400 rounded animate-float-bob-small delay-1000 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                <div className="absolute bottom-1/3 left-1/3 w-4 h-1 bg-blue-400 rounded animate-float-bob-small delay-700 shadow-[0_0_16px_rgba(59,130,246,0.5)]"></div>

                {/* GAMING SYMBOLS */}
                <div className="absolute top-1/4 right-1/4 opacity-20">
                    <div className="text-green-400 text-2xl animate-pulse">🎮</div>
                </div>
                <div className="absolute bottom-1/4 left-1/3 opacity-15">
                    <div className="text-cyan-400 text-2xl animate-pulse delay-1000">⚡</div>
                </div>
                <div className="absolute top-2/3 left-1/4 opacity-18">
                    <div className="text-emerald-400 text-xl animate-pulse delay-2000">🏆</div>
                </div>

                {/* SCAN LINES EFFECT */}
                <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-gradient-x opacity-20"></div>
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-green-500/20 via-cyan-500/20 to-emerald-500/20 animate-gradient-x delay-1000 opacity-30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">

            {/* INCREDIBLE GAMING HERO SECTION */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-20 relative"
            >
                {/* DYNAMIC NEON GLOW EFFECTS */}
                <div className="absolute inset-0 bg-gradient-radial from-green-500/20 via-transparent to-transparent blur-3xl animate-pulse-slow -z-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent rounded-full blur-2xl animate-pulse-slow delay-1000 -z-10"></div>

                <motion.div
                    initial={{ rotate: -5, scale: 0.95 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 1, type: 'spring' }}
                    className="inline-block bg-gradient-to-br from-green-500 to-emerald-500 px-6 py-2 rounded-full mb-6 shadow-lg hover:shadow-green-500/50 transition-all duration-500 relative overflow-hidden group"
                >
                    {/* ANIMATED BACKGROUND */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="text-white text-lg font-semibold tracking-wider uppercase relative z-10">Gaming & Simulation</span>
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
                    Build Worlds,
                    <motion.span
                        className="block bg-gradient-to-r from-green-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent relative"
                        initial={{ backgroundPosition: '0% 50%' }}
                        animate={{ backgroundPosition: '100% 50%' }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                    >
                        Change Reality
                        {/* NEON UNDERLINE */}
                        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-cyan-400 to-emerald-400 rounded-full blur-sm opacity-60"></div>
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 relative"
                >
                    Master the art and science of game development. From indie projects to AAA titles,
                    <motion.span
                        className="text-cyan-400 font-semibold"
                        animate={{ textShadow: ['0 0 10px rgba(6, 182, 212, 0.5)', '0 0 20px rgba(6, 182, 212, 0.8)', '0 0 10px rgba(6, 182, 212, 0.5)'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        learn to create immersive experiences that captivate millions of players worldwide.
                    </motion.span>
                </motion.p>

                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-full">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        <span className="text-gray-300">Full Year Program</span>
                    </div>
                    <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-full">
                        <Trophy className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-gray-300">Advanced Level</span>
                    </div>
                    <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-full">
                        <Gamepad2 className="w-4 h-4 text-emerald-400 mr-2" />
                        <span className="text-gray-300">Unity Certification</span>
                    </div>
                </div>
            </motion.div>

            {/* Game Engines */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="mb-20"
            >
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Professional Game Engines
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Learn industry-standard tools used by game studios worldwide
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engines.map((engine, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-1"
                        >
                            <div className="flex items-center mb-6">
                                <div className={`p-4 rounded-2xl bg-gradient-to-br ${engine.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <engine.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">{engine.name}</h3>
                            </div>

                            <p className="text-gray-300 mb-6 leading-relaxed">{engine.description}</p>

                            <div className="space-y-3">
                                {engine.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center text-sm text-gray-300">
                                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Skills Development */}
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
                            Master These Skills
                        </h2>
                        <p className="text-xl text-gray-300">
                            Comprehensive technical and creative skills for game development
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.4 }}
                                className="bg-slate-700/30 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 group"
                            >
                                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <Target className="w-4 h-4 text-white" />
                                </div>
                                <div className="text-sm font-medium text-white">{skill}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Student Projects */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-20"
            >
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Student Game Showcase
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Complete games built by our students, featuring advanced mechanics and polished experiences
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-500/30`}>
                                    {project.engine}
                                </div>
                                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                                    project.difficulty === 'Advanced' ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' :
                                    project.difficulty === 'Expert' ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
                                    'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                }`}>
                                    {project.difficulty}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                            <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                            <div className="mb-4">
                                <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                                <div className="flex flex-wrap gap-2">
                                    {project.features.map((feature, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-slate-700/50 text-cyan-300 text-sm rounded-full border border-cyan-500/30">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Career Opportunities */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-20"
            >
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Game Industry Careers
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Join the fastest-growing entertainment industry in the world
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-3xl p-6 text-center"
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Code className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Game Programmer</h3>
                        <p className="text-gray-400 text-sm mb-3">Implement game mechanics and systems</p>
                        <div className="text-blue-400 font-semibold">$95K avg salary</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-6 text-center"
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Palette className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Game Artist</h3>
                        <p className="text-gray-400 text-sm mb-3">Create 3D models, textures, and animations</p>
                        <div className="text-purple-400 font-semibold">$85K avg salary</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-3xl p-6 text-center"
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Layers className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Level Designer</h3>
                        <p className="text-gray-400 text-sm mb-3">Design engaging game worlds and experiences</p>
                        <div className="text-green-400 font-semibold">$80K avg salary</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-3xl p-6 text-center"
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Trophy className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Game Producer</h3>
                        <p className="text-gray-400 text-sm mb-3">Manage game development projects and teams</p>
                        <div className="text-orange-400 font-semibold">$110K avg salary</div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <div className="bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
                    {/* Animated game elements */}
                    <div className="absolute top-6 left-6 w-4 h-4 bg-green-400 rounded-full animate-bounce"></div>
                    <div className="absolute top-8 right-8 w-3 h-3 bg-emerald-400 rounded-full animate-ping delay-300"></div>
                    <div className="absolute bottom-6 left-8 w-5 h-5 border-2 border-teal-400 rounded animate-spin-slow"></div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">
                        Ready to Game?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
                        Join the Gaming & Simulation program and start building the games of tomorrow.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <motion.a
                            href="/admissions"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Start Your Journey
                            <ChevronRight className="ml-2 w-5 h-5" />
                        </motion.a>

                        <motion.a
                            href="/admissions"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-bold rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                        >
                            Apply to Argyle
                        </motion.a>
                    </div>
                </div>
            </motion.div>
            </div>
        </div>
    );
};

export default Gaming;
