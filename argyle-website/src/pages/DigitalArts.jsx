import React from 'react';
import { motion } from 'framer-motion';
import {
    Palette,
    Camera,
    Film,
    Layers,
    Wand2,
    Image,
    Video,
    Music,
    Award,
    Users,
    Zap,
    ChevronRight,
    CheckCircle,
    Star,
    BookOpen,
    Target,
    Sparkles
} from 'lucide-react';

const DigitalArts = () => {
    // Digital Arts Theme: Vibrant artistic colors with creative patterns
    const theme = {
        primary: 'from-purple-500 to-pink-500',
        secondary: 'from-pink-500 to-rose-500',
        accent: 'from-orange-500 to-red-500',
        background: 'from-slate-900 via-slate-800 to-slate-900',
        particleColors: ['bg-purple-400', 'bg-pink-400', 'bg-rose-400', 'bg-orange-400']
    };
    const tools = [
        {
            category: "Design Software",
            items: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Figma", "Sketch"],
            icon: Palette,
            color: "from-purple-500 to-pink-500"
        },
        {
            category: "3D & Animation",
            items: ["Blender", "Maya", "Cinema 4D", "After Effects", "Premiere Pro"],
            icon: Layers,
            color: "from-blue-500 to-cyan-500"
        },
        {
            category: "Web Technologies",
            items: ["HTML/CSS", "JavaScript", "React", "Three.js", "WebGL"],
            icon: Wand2,
            color: "from-green-500 to-emerald-500"
        },
        {
            category: "Audio & Video",
            items: ["Audacity", "Logic Pro", "Final Cut Pro", "DaVinci Resolve"],
            icon: Music,
            color: "from-orange-500 to-red-500"
        }
    ];

    const projects = [
        {
            title: "Interactive Brand Campaign",
            type: "Digital Design",
            description: "Complete branding project from logo to social media graphics",
            tools: ["Photoshop", "Illustrator", "InDesign"],
            outcome: "Won regional design competition"
        },
        {
            title: "3D Character Animation",
            type: "3D Animation",
            description: "Rigged and animated a 3D character for short film",
            tools: ["Blender", "After Effects"],
            outcome: "Featured in student film festival"
        },
        {
            title: "Interactive Web Experience",
            type: "Web Development",
            description: "Created an immersive web experience with 3D elements",
            tools: ["React", "Three.js", "CSS"],
            outcome: "Used in school marketing campaign"
        },
        {
            title: "Documentary Short Film",
            type: "Video Production",
            description: "Produced and edited a 5-minute documentary",
            tools: ["Premiere Pro", "After Effects", "Audacity"],
            outcome: "Screened at local film festival"
        }
    ];

    const skills = [
        "Visual Communication",
        "Color Theory & Psychology",
        "Typography & Layout",
        "User Experience Design",
        "Motion Graphics",
        "3D Modeling",
        "Video Editing",
        "Audio Production",
        "Brand Identity",
        "Digital Storytelling"
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
            {/* INCREDIBLE CREATIVE BACKGROUND EFFECTS */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {/* VIBRANT COLOR BURSTS */}
                <div className="absolute top-1/4 left-1/5 w-48 h-48 bg-gradient-radial from-purple-500/25 via-pink-500/15 to-transparent rounded-full blur-2xl animate-pulse-slow shadow-[0_0_80px_rgba(147,51,234,0.3)]"></div>
                <div className="absolute bottom-1/3 right-1/6 w-56 h-56 bg-gradient-radial from-pink-500/25 via-rose-500/15 to-transparent rounded-full blur-2xl animate-pulse-slow delay-1000 shadow-[0_0_90px_rgba(236,72,153,0.3)]"></div>
                <div className="absolute top-2/3 left-2/3 w-40 h-40 bg-gradient-radial from-orange-500/25 via-red-500/15 to-transparent rounded-full blur-2xl animate-pulse-slow delay-2000 shadow-[0_0_70px_rgba(249,115,22,0.3)]"></div>
                <div className="absolute top-1/2 right-1/3 w-36 h-36 bg-gradient-radial from-rose-500/20 via-purple-500/12 to-transparent rounded-full blur-xl animate-pulse-slow delay-500 shadow-[0_0_60px_rgba(244,114,182,0.3)]"></div>

                {/* FLOATING ARTISTIC ELEMENTS */}
                <div className="absolute top-20 left-16 w-10 h-10 border-3 border-purple-400 rounded-full animate-spin-slow shadow-[0_0_20px_rgba(147,51,234,0.6)]"></div>
                <div className="absolute top-32 right-20 w-8 h-8 bg-pink-400 rounded-full animate-bounce delay-300 shadow-[0_0_25px_rgba(236,72,153,0.7)]"></div>
                <div className="absolute bottom-40 left-28 w-6 h-6 bg-rose-400 rotate-45 animate-pulse delay-700 shadow-[0_0_18px_rgba(244,114,182,0.6)]"></div>
                <div className="absolute bottom-52 right-24 w-12 h-3 bg-orange-400 rounded-full animate-pulse delay-1000 shadow-[0_0_22px_rgba(249,115,22,0.6)]"></div>

                {/* ANIMATED BRUSH STROKES */}
                <div className="absolute top-1/6 right-1/4 w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded animate-pulse opacity-70"></div>
                <div className="absolute bottom-1/6 left-1/4 w-16 h-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded animate-pulse delay-500 opacity-70"></div>
                <div className="absolute top-2/3 right-1/6 w-14 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded animate-pulse delay-1000 opacity-70"></div>

                {/* FLOATING PAINT DROPS */}
                <div className="absolute top-16 right-32 w-3 h-3 bg-purple-400 rounded-full animate-float-bob-small shadow-[0_0_12px_rgba(147,51,234,0.5)]"></div>
                <div className="absolute bottom-24 left-32 w-4 h-4 bg-pink-400 rounded animate-float-bob-small delay-500 shadow-[0_0_15px_rgba(236,72,153,0.5)]"></div>
                <div className="absolute top-1/3 right-1/5 w-2 h-2 bg-rose-400 rounded-full animate-float-bob-small delay-1000 shadow-[0_0_10px_rgba(244,114,182,0.5)]"></div>
                <div className="absolute bottom-1/3 left-1/3 w-3.5 h-3.5 bg-orange-400 rotate-45 animate-float-bob-small delay-700 shadow-[0_0_14px_rgba(249,115,22,0.5)]"></div>

                {/* CREATIVE SYMBOLS */}
                <div className="absolute top-1/4 right-1/4 opacity-20">
                    <div className="text-purple-400 text-2xl animate-pulse">🎨</div>
                </div>
                <div className="absolute bottom-1/4 left-1/3 opacity-15">
                    <div className="text-pink-400 text-2xl animate-pulse delay-1000">✨</div>
                </div>
                <div className="absolute top-2/3 left-1/4 opacity-18">
                    <div className="text-rose-400 text-xl animate-pulse delay-2000">🎭</div>
                </div>

                {/* DYNAMIC COLOR WAVES */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-rose-500/30 animate-gradient-x opacity-40"></div>
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-500/30 via-orange-500/30 to-purple-500/30 animate-gradient-x delay-1000 opacity-40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">

            {/* INCREDIBLE CREATIVE HERO SECTION */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-20 relative"
            >
                {/* DYNAMIC CREATIVE GLOW EFFECTS */}
                <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-transparent to-transparent blur-3xl animate-pulse-slow -z-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-pink-500/10 via-transparent to-transparent rounded-full blur-2xl animate-pulse-slow delay-1000 -z-10"></div>

                <motion.div
                    initial={{ rotate: -5, scale: 0.95 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 1, type: 'spring' }}
                    className="inline-block bg-gradient-to-br from-purple-500 to-pink-500 px-6 py-2 rounded-full mb-6 shadow-lg hover:shadow-purple-500/50 transition-all duration-500 relative overflow-hidden group"
                >
                    {/* ANIMATED BACKGROUND */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="text-white text-lg font-semibold tracking-wider uppercase relative z-10">Digital Arts & Multimedia</span>
                    {/* SPARKLE EFFECTS */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                    <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-rose-400 rounded-full animate-ping delay-500 opacity-75"></div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
                    className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 relative"
                >
                    Create the
                    <motion.span
                        className="block bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent relative"
                        initial={{ backgroundPosition: '0% 50%' }}
                        animate={{ backgroundPosition: '100% 50%' }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                    >
                        Extraordinary
                        {/* UNDERLINE GLOW */}
                        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 rounded-full blur-sm opacity-60"></div>
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 relative"
                >
                    Master the tools and techniques that bring imagination to life.
                    <motion.span
                        className="text-pink-400 font-semibold"
                        animate={{ textShadow: ['0 0 10px rgba(236, 72, 153, 0.5)', '0 0 20px rgba(236, 72, 153, 0.8)', '0 0 10px rgba(236, 72, 153, 0.5)'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        From digital painting to 3D animation, learn to create stunning visuals that captivate and inspire.
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
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(147, 51, 234, 0.3)' }}
                        className="flex items-center bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300"
                    >
                        <Users className="w-4 h-4 text-purple-400 mr-2 animate-pulse delay-300" />
                        <span className="text-gray-300">All Skill Levels</span>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(236, 72, 153, 0.3)' }}
                        className="flex items-center bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-pink-400/20 hover:border-pink-400/50 transition-all duration-300"
                    >
                        <Award className="w-4 h-4 text-pink-400 mr-2 animate-pulse delay-600" />
                        <span className="text-gray-300">Adobe Creative Suite</span>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Tools & Software */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="mb-20"
            >
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Professional Tools & Software
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Industry-standard software and cutting-edge technologies used by professionals worldwide
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.03,
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(147, 51, 234, 0.2)'
                            }}
                            className="group bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-pink-400/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                        >
                            {/* DYNAMIC BACKGROUND GLOW */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>

                            {/* CREATIVE PARTICLES */}
                            <div className="absolute top-4 right-4 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                            <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-300 opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

                            <motion.div
                                className="flex items-center mb-6"
                                initial={{ opacity: 0.9 }}
                                whileHover={{ opacity: 1 }}
                            >
                                <motion.div
                                    className={`p-4 rounded-2xl bg-gradient-to-br ${tool.color} mr-4 relative`}
                                    whileHover={{ scale: 1.1, rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {/* ICON GLOW */}
                                    <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <tool.icon className="w-8 h-8 text-white relative z-10" />
                                </motion.div>

                                <motion.h3
                                    className="text-2xl font-bold text-white group-hover:text-pink-300 transition-colors duration-300"
                                    initial={{ opacity: 0.9 }}
                                    whileHover={{ opacity: 1, textShadow: '0 0 20px rgba(236, 72, 153, 0.5)' }}
                                >
                                    {tool.category}
                                </motion.h3>
                            </motion.div>

                            <motion.div
                                className="grid grid-cols-2 md:grid-cols-3 gap-3"
                                initial={{ opacity: 0.9 }}
                                whileHover={{ opacity: 1 }}
                            >
                                {tool.items.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                                        initial={{ opacity: 0.8 }}
                                        whileHover={{ opacity: 1, x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 animate-pulse" />
                                        <span className="text-sm">{item}</span>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* BOTTOM CREATIVE BORDER */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Featured Projects */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-20"
            >
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Student Showcase
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Real projects created by our students, featured in competitions and exhibitions
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
                            className="group bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-pink-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/10"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30`}>
                                    {project.type}
                                </div>
                                <div className="flex items-center text-yellow-400">
                                    <Award className="w-5 h-5 mr-1" />
                                    <span className="text-sm font-medium">{project.outcome}</span>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                            <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                            <div className="mb-4">
                                <div className="text-sm text-gray-400 mb-2">Tools Used:</div>
                                <div className="flex flex-wrap gap-2">
                                    {project.tools.map((tool, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-slate-700/50 text-cyan-300 text-sm rounded-full border border-cyan-500/30">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
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
                            Skills You'll Master
                        </h2>
                        <p className="text-xl text-gray-300">
                            Comprehensive skill development for creative careers
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
                                className="bg-slate-700/30 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group"
                            >
                                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <Sparkles className="w-4 h-4 text-white" />
                                </div>
                                <div className="text-sm font-medium text-white">{skill}</div>
                            </motion.div>
                        ))}
                    </div>
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
                        Creative Career Paths
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Launch your career in the booming creative economy
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-8 text-center"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Palette className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">UX/UI Designer</h3>
                        <p className="text-gray-300 mb-4">Design digital experiences that millions use daily</p>
                        <div className="text-purple-400 font-semibold">$95K avg salary</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-3xl p-8 text-center"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Camera className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Motion Graphics Artist</h3>
                        <p className="text-gray-300 mb-4">Create stunning animations for film, TV, and digital media</p>
                        <div className="text-blue-400 font-semibold">$85K avg salary</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-3xl p-8 text-center"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Film className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Video Producer</h3>
                        <p className="text-gray-300 mb-4">Produce compelling video content for brands and media</p>
                        <div className="text-green-400 font-semibold">$75K avg salary</div>
                    </motion.div>
                </div>
            </motion.div>

            {/* INCREDIBLE CREATIVE CALL TO ACTION */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center relative"
            >
                {/* MULTI-LAYERED CREATIVE GLOW BACKGROUNDS */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 via-pink-500/15 to-rose-500/15 rounded-3xl blur-2xl animate-pulse-slow -z-20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-rose-500/10 to-purple-500/10 rounded-3xl blur-xl animate-pulse-slow delay-1000 -z-20"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-purple-500/8 via-transparent to-transparent rounded-full blur-3xl animate-pulse-slow delay-500 -z-20"></div>

                <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
                    {/* ADVANCED CREATIVE ANIMATIONS */}
                    <div className="absolute top-4 right-4 w-24 h-24 bg-purple-500/10 rounded-full animate-pulse shadow-[0_0_30px_rgba(147,51,234,0.3)]"></div>
                    <div className="absolute bottom-4 left-4 w-20 h-20 bg-pink-500/10 rounded-full animate-pulse delay-1000 shadow-[0_0_35px_rgba(236,72,153,0.3)]"></div>
                    <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-rose-500/8 rounded-full animate-bounce delay-500 shadow-[0_0_25px_rgba(244,114,182,0.3)]"></div>

                    {/* FLOATING CREATIVE ELEMENTS */}
                    <div className="absolute top-8 right-12 text-pink-400 text-xs font-mono animate-float-bob-small opacity-60">
                        {'</>'}
                    </div>
                    <div className="absolute bottom-8 left-12 text-purple-400 text-xs font-mono animate-float-bob-small delay-500 opacity-60">
                        {'{ }'}
                    </div>
                    <div className="absolute top-1/3 right-8 text-rose-400 text-xl animate-float-bob-small delay-1000 opacity-40">
                        🎨
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10"
                    >
                        Ready to Unleash Your Creativity?
                        {/* TITLE GLOW UNDERLINE */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 rounded-full blur-sm opacity-60"></div>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10"
                    >
                        Join the Digital Arts program and transform your imagination into stunning visual experiences.
                        <motion.span
                            className="block text-pink-400 font-semibold mt-2"
                            animate={{ textShadow: ['0 0 10px rgba(236, 72, 153, 0.5)', '0 0 20px rgba(236, 72, 153, 0.8)', '0 0 10px rgba(236, 72, 153, 0.5)'] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Your masterpiece awaits.
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
                                boxShadow: '0 0 30px rgba(147, 51, 234, 0.5), 0 0 60px rgba(147, 51, 234, 0.3)'
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                        >
                            {/* CREATIVE BUTTON GLOW */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            <span className="relative z-10">Start Creating</span>
                            <ChevronRight className="ml-2 w-5 h-5 relative z-10 animate-pulse" />
                        </motion.a>

                        <motion.a
                            href="/portfolio"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 0 30px rgba(255, 255, 255, 0.2)'
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-bold rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300 relative overflow-hidden group"
                        >
                            {/* SECONDARY CREATIVE BUTTON */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            <span className="relative z-10">View Student Work</span>
                        </motion.a>
                    </motion.div>
                </div>
            </motion.div>
            </div>
        </div>
    );
};

export default DigitalArts;
