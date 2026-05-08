import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Shield, Users, Globe, Zap, Heart, Award } from 'lucide-react';
import { ProgressiveImage } from '../components/LoadingStates';

const PrincipalsPalace = () => {
    const headlines = [
        "National Board of Directors - NASSP",
        "2022 Maryland Principal of the Year",
        "Verizon Innovative Learning School Leader",
        "AI in Education National Presenter",
        "Educational Equity Visionary",
        "21+ Years of MCPS Excellence"
    ];

    const stats = [
        { label: "Argyle Eagles Served", value: "600+", icon: <Users className="text-blue-400" /> },
        { label: "iPads Distributed", value: "1,200+", icon: <Zap className="text-yellow-400" /> },
        { label: "Years of Service", value: "21+", icon: <Shield className="text-purple-400" /> },
        { label: "Digital Magnet Excellence", value: "#1", icon: <Star className="text-argyle-blue" /> }
    ];

    const mantras = [
        { title: "Seen, Heard, Valued", text: "Every student's identity is the foundation of their success." },
        { title: "Digital Equity", text: "Turning the digital divide into a digital bridge for all." },
        { title: "National Impact", text: "Shaping the future of American middle school leadership." }
    ];

    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 }
    };

    const accolades = [
        {
            year: "2022",
            title: "Maryland Principal of the Year",
            organization: "Maryland Association of Secondary School Principals",
            icon: <Trophy className="text-yellow-400" />,
            description: "Recognized as the top secondary school leader in the entire state of Maryland."
        },
        {
            year: "2022",
            title: "Dr. Edward Shirley Award",
            organization: "Excellence in Educational Administration",
            icon: <Star className="text-argyle-blue" />,
            description: "Awarded for exceptional leadership and impact on the Montgomery County educational system."
        },
        {
            year: "2019",
            title: "ESOL Principal of the Year",
            organization: "Montgomery County Public Schools",
            icon: <Globe className="text-green-400" />,
            description: "Recognized for outstanding support and advocacy for English Language Learners."
        }
    ];

    const pillars = [
        {
            icon: <Shield className="w-8 h-8 text-purple-400" />,
            title: "Visionary Leadership",
            text: "Since 2015, Mr. Allrich has led Argyle's transformation into a premier Digital Magnet Powerhouse."
        },
        {
            icon: <Users className="w-8 h-8 text-blue-400" />,
            title: "Student Centered",
            text: "Focusing on equitable access and social-emotional learning for every single Eagle."
        },
        {
            icon: <Zap className="w-8 h-8 text-yellow-400" />,
            title: "Tech Pioneer",
            text: "Integrating cutting-edge technology and iPads to ensure our students are future-ready."
        },
        {
            icon: <Heart className="w-8 h-8 text-pink-400" />,
            title: "Community Heart",
            text: "Building deep relationships through multilingual outreach and family engagement."
        }
    ];

    return (
        <div className="min-h-screen pt-12 pb-12 bg-slate-950 text-white overflow-hidden">
            {/* BRIGHTER GOLD VISIONARY HEADLINES MARQUEE */}
            <div className="bg-gradient-to-r from-yellow-500/20 via-yellow-600/15 to-yellow-700/10 border-y-2 border-yellow-400/60 py-6 mb-12 overflow-hidden whitespace-nowrap relative shadow-[0_0_40px_rgba(234,179,8,0.3),0_0_80px_rgba(234,179,8,0.2)]">
                <div className="inline-block animate-marquee">
                    {[...headlines, ...headlines].map((text, i) => (
                        <span key={i} className="mx-8 text-[12px] font-black uppercase tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 glow-text-gold drop-shadow-[0_0_15px_rgba(234,179,8,0.7)]">
                            {text} <span className="text-yellow-300 mx-2 animate-pulse">👑</span>
                        </span>
                    ))}
                </div>
            </div>
            {/* BRIGHTER ROYAL BACKGROUND ELEMENTS - MAXIMUM GOLD GLOW */}
            <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[1000px] h-[1000px] bg-yellow-300/40 blur-[220px] rounded-full -z-10 animate-pulse shadow-[0_0_250px_rgba(234,179,8,0.6),0_0_400px_rgba(234,179,8,0.3)]" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-400/35 blur-[200px] rounded-full -z-10 animate-pulse delay-700 shadow-[0_0_220px_rgba(234,179,8,0.5),0_0_350px_rgba(234,179,8,0.25)]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-yellow-500/30 blur-[180px] rounded-full -z-10 shadow-[0_0_200px_rgba(234,179,8,0.55),0_0_320px_rgba(234,179,8,0.3)]" />
            <div className="absolute -top-20 right-1/4 w-[500px] h-[500px] bg-yellow-300/35 blur-[140px] rounded-full -z-10 animate-pulse delay-500 shadow-[0_0_150px_rgba(234,179,8,0.5),0_0_250px_rgba(234,179,8,0.2)]" />
            <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-yellow-200/25 blur-[160px] rounded-full -z-10 animate-pulse delay-300 shadow-[0_0_180px_rgba(234,179,8,0.4),0_0_280px_rgba(234,179,8,0.2)]" />
            <div className="absolute bottom-1/4 right-1/3 w-[700px] h-[700px] bg-yellow-400/30 blur-[170px] rounded-full -z-10 animate-pulse delay-1000 shadow-[0_0_200px_rgba(234,179,8,0.5),0_0_250px_rgba(234,179,8,0.25)]" />
            <div className="absolute top-2/3 left-1/3 w-[400px] h-[400px] bg-yellow-500/25 blur-[130px] rounded-full -z-10 animate-pulse-slow delay-800 shadow-[0_0_140px_rgba(234,179,8,0.45)]" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Hero section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400/30 via-yellow-500/25 to-yellow-600/20 border-2 border-yellow-400/60 text-yellow-200 text-sm font-bold mb-6 tracking-widest uppercase shadow-[0_0_25px_rgba(234,179,8,0.5),0_0_50px_rgba(234,179,8,0.3)] hover:shadow-[0_0_40px_rgba(234,179,8,0.7)] transition-all duration-500">
                            <Award size={18} className="animate-pulse" />
                            National-Level Excellence
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                            <span className="glow-text-gold">The Principal's</span> <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-yellow-400 to-yellow-600 animate-shimmer drop-shadow-[0_0_20px_rgba(234,179,8,0.5)] uppercase">Palace</span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-xl">
                            Step into the office of <span className="text-white font-bold">Mr. James Allrich</span>, a National Board Member (NASSP) and award-winning visionary leading Argyle Middle School with passion, equity, and a relentless drive for innovation.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 italic text-gray-300">
                                "Our mission is to ensure every student is seen, heard, and valued."
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        {/* Additional glow around photo */}
                        {/* ULTRA BRIGHT GOLDEN BACKDROP */}
                        <div className="absolute -inset-24 bg-gradient-radial from-yellow-400/25 via-yellow-500/15 to-yellow-300/10 rounded-[6rem] blur-3xl animate-pulse-slow -z-20 shadow-[0_0_100px_rgba(234,179,8,0.5),0_0_150px_rgba(234,179,8,0.3)]"></div>
                        <div className="absolute -inset-16 bg-gradient-radial from-yellow-300/20 via-yellow-400/12 to-transparent rounded-[4rem] blur-2xl animate-pulse-slow delay-1000 -z-20 shadow-[0_0_80px_rgba(234,179,8,0.4)]"></div>

                        {/* FLOATING GOLDEN ELEMENTS THROUGHOUT HERO */}
                        <div className="absolute top-1/4 left-1/6 w-4 h-4 bg-yellow-300 rounded-full animate-float-bob-small opacity-60 shadow-[0_0_15px_rgba(234,179,8,0.6)] -z-10"></div>
                        <div className="absolute top-1/3 right-1/6 w-3 h-3 bg-yellow-400 rounded-full animate-float-bob-small delay-300 opacity-65 shadow-[0_0_12px_rgba(234,179,8,0.7)] -z-10"></div>
                        <div className="absolute bottom-1/4 left-1/4 w-5 h-5 bg-yellow-200 rounded-full animate-float-bob-small delay-700 opacity-55 shadow-[0_0_18px_rgba(234,179,8,0.5)] -z-10"></div>
                        <div className="absolute bottom-1/3 right-1/4 w-3.5 h-3.5 bg-yellow-500 rounded-full animate-float-bob-small delay-1000 opacity-70 shadow-[0_0_14px_rgba(234,179,8,0.8)] -z-10"></div>
                        <div className="absolute top-1/2 left-1/8 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-75 shadow-[0_0_10px_rgba(234,179,8,0.7)] -z-10"></div>
                        <div className="absolute bottom-1/2 right-1/8 w-2.5 h-2.5 bg-yellow-300 rounded-full animate-ping delay-500 opacity-70 shadow-[0_0_12px_rgba(234,179,8,0.6)] -z-10"></div>

                        {/* SURROUNDING GOLDEN AURA */}
                        <div className="absolute -inset-12 bg-gradient-radial from-yellow-500/25 via-yellow-400/12 to-transparent rounded-[4rem] blur-2xl animate-pulse-slow -z-10"></div>
                        <div className="absolute -inset-8 bg-gradient-radial from-yellow-400/18 via-yellow-300/8 to-transparent rounded-[3.5rem] blur-xl animate-pulse-slow delay-1000 -z-10"></div>

                        {/* FLOATING GOLDEN ORBS AROUND THE FRAME */}
                        <div className="absolute -top-8 -left-8 w-10 h-10 bg-gradient-radial from-yellow-300/70 to-transparent rounded-full animate-float-bob-small shadow-[0_0_30px_rgba(234,179,8,0.8)] -z-5"></div>
                        <div className="absolute -top-6 -right-6 w-8 h-8 bg-gradient-radial from-yellow-400/60 to-transparent rounded-full animate-float-bob-small delay-300 shadow-[0_0_25px_rgba(234,179,8,0.7)] -z-5"></div>
                        <div className="absolute -bottom-8 -left-8 w-9 h-9 bg-gradient-radial from-yellow-500/65 to-transparent rounded-full animate-float-bob-small delay-700 shadow-[0_0_28px_rgba(234,179,8,0.9)] -z-5"></div>
                        <div className="absolute -bottom-6 -right-6 w-7 h-7 bg-gradient-radial from-yellow-200/55 to-transparent rounded-full animate-float-bob-small delay-1000 shadow-[0_0_22px_rgba(234,179,8,0.6)] -z-5"></div>

                        <div className="relative glass-panel p-3 rounded-[3.5rem] overflow-hidden border-4 border-yellow-300/80 shadow-[0_0_150px_rgba(234,179,8,0.8),0_0_300px_rgba(234,179,8,0.5),0_0_450px_rgba(234,179,8,0.3),0_0_600px_rgba(234,179,8,0.1)] transition-all duration-700 group hover:border-yellow-200 hover:shadow-[0_0_250px_rgba(234,179,8,1.2),0_0_500px_rgba(234,179,8,0.8),0_0_750px_rgba(234,179,8,0.5),0_0_1000px_rgba(234,179,8,0.2)]">
                            {/* GOLDEN EFFECTS AROUND THE FRAME - NOT ON PHOTO */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-36 h-10 bg-gradient-to-b from-yellow-400/80 to-yellow-600/60 rounded-t-full blur-sm opacity-90 shadow-[0_0_30px_rgba(234,179,8,0.8)] z-30"></div>
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-28 h-7 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-t-full opacity-95 shadow-[0_0_25px_rgba(234,179,8,0.9)] z-30"></div>

                            {/* FLOATING GOLDEN PARTICLES OUTSIDE FRAME */}
                            <div className="absolute -top-4 -left-4 w-4 h-4 bg-yellow-300 rounded-full animate-float-bob-small opacity-80 shadow-[0_0_15px_rgba(234,179,8,0.9)] z-25"></div>
                            <div className="absolute -top-6 -right-6 w-3.5 h-3.5 bg-yellow-400 rounded-full animate-float-bob-small delay-300 opacity-85 shadow-[0_0_12px_rgba(234,179,8,0.8)] z-25"></div>
                            <div className="absolute -bottom-4 -left-4 w-4.5 h-4.5 bg-yellow-200 rounded-full animate-float-bob-small delay-700 opacity-75 shadow-[0_0_18px_rgba(234,179,8,0.7)] z-25"></div>
                            <div className="absolute -bottom-6 -right-6 w-3 h-3 bg-yellow-500 rounded-full animate-float-bob-small delay-1000 opacity-90 shadow-[0_0_10px_rgba(234,179,8,1.0)] z-25"></div>

                            {/* GOLDEN ORBS NEAR FRAME EDGES */}
                            <div className="absolute -top-8 -left-8 w-10 h-10 bg-gradient-radial from-yellow-300/60 to-transparent rounded-full animate-pulse-slow opacity-70 shadow-[0_0_25px_rgba(234,179,8,0.7)] z-25"></div>
                            <div className="absolute -top-10 -right-10 w-12 h-12 bg-gradient-radial from-yellow-400/50 to-transparent rounded-full animate-pulse-slow delay-500 opacity-65 shadow-[0_0_30px_rgba(234,179,8,0.6)] z-25"></div>
                            <div className="absolute -bottom-8 -left-8 w-9 h-9 bg-gradient-radial from-yellow-500/70 to-transparent rounded-full animate-pulse-slow delay-1000 opacity-80 shadow-[0_0_20px_rgba(234,179,8,0.8)] z-25"></div>
                            <div className="absolute -bottom-10 -right-10 w-11 h-11 bg-gradient-radial from-yellow-200/65 to-transparent rounded-full animate-pulse-slow delay-1500 opacity-75 shadow-[0_0_22px_rgba(234,179,8,0.7)] z-25"></div>

                            {/* ROYAL GOLDEN SYMBOLS ABOVE AND BELOW FRAME */}
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-yellow-300 text-4xl animate-pulse opacity-80 z-25">👑</div>

                            {/* GOLDEN STAR FIELD SURROUNDING FRAME */}
                            <div className="absolute -top-2 -left-12 w-2 h-2 bg-yellow-300 rounded-full animate-ping opacity-70 shadow-[0_0_8px_rgba(234,179,8,0.6)] z-25"></div>
                            <div className="absolute -top-8 -right-14 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping delay-300 opacity-75 shadow-[0_0_6px_rgba(234,179,8,0.7)] z-25"></div>
                            <div className="absolute -bottom-2 -left-12 w-2.5 h-2.5 bg-yellow-200 rounded-full animate-ping delay-700 opacity-65 shadow-[0_0_10px_rgba(234,179,8,0.5)] z-25"></div>
                            <div className="absolute -bottom-8 -right-14 w-1.8 h-1.8 bg-yellow-500 rounded-full animate-ping delay-1000 opacity-80 shadow-[0_0_9px_rgba(234,179,8,0.8)] z-25"></div>

                            {/* GOLDEN CORNERS AROUND FRAME */}
                            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-4 border-l-4 border-yellow-400 rounded-tl-lg opacity-70 shadow-[0_0_15px_rgba(234,179,8,0.6)] z-25"></div>
                            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-4 border-r-4 border-yellow-300 rounded-tr-lg opacity-70 shadow-[0_0_15px_rgba(234,179,8,0.6)] z-25"></div>
                            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-4 border-l-4 border-yellow-500 rounded-bl-lg opacity-70 shadow-[0_0_15px_rgba(234,179,8,0.6)] z-25"></div>
                            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-4 border-r-4 border-yellow-200 rounded-br-lg opacity-70 shadow-[0_0_15px_rgba(234,179,8,0.6)] z-25"></div>

                            <ProgressiveImage
                                src="/james_allrich.png"
                                alt="Principal James Allrich"
                                className="w-full h-[600px] object-cover rounded-[2rem] transition-transform duration-1000 group-hover:scale-105"
                                placeholderClassName="rounded-[2rem]"
                            />

                            <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent z-30">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="relative"
                                >
                                    {/* GOLDEN TEXT GLOW BACKGROUND */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-yellow-500/15 to-yellow-400/20 blur-xl -z-10"></div>

                                    <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-50 via-yellow-200 to-yellow-400 glow-text-gold tracking-tight drop-shadow-[0_0_40px_rgba(234,179,8,1.2),0_0_70px_rgba(234,179,8,0.7),0_0_100px_rgba(234,179,8,0.3)] animate-pulse relative z-10">Mr. James Allrich</h2>

                                    <div className="flex items-center gap-4 mt-3 relative z-10">
                                        <div className="h-[4px] w-16 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 shadow-[0_0_30px_rgba(234,179,8,0.9),0_0_50px_rgba(234,179,8,0.5)] rounded-full" />
                                        <p className="text-yellow-100 font-black uppercase tracking-[0.4em] text-[12px] glow-text-gold drop-shadow-[0_0_20px_rgba(234,179,8,0.8),0_0_35px_rgba(234,179,8,0.4)] animate-pulse">National Visionary Leader</p>
                                        <div className="h-[4px] w-16 bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-300 shadow-[0_0_30px_rgba(234,179,8,0.9),0_0_50px_rgba(234,179,8,0.5)] rounded-full" />
                                    </div>

                                    {/* ADDITIONAL GOLDEN SPARKLE EFFECTS */}
                                    <div className="absolute -top-2 left-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-ping opacity-80 shadow-[0_0_8px_rgba(234,179,8,0.8)]"></div>
                                    <div className="absolute -top-1 right-1/4 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping delay-300 opacity-85 shadow-[0_0_10px_rgba(234,179,8,0.9)]"></div>
                                    <div className="absolute -bottom-1 left-1/3 w-1 h-1 bg-yellow-200 rounded-full animate-ping delay-600 opacity-75 shadow-[0_0_6px_rgba(234,179,8,0.6)]"></div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* The Mission Section */}
                <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <Shield className="text-purple-500" />
                            A Legacy of Impact
                        </h2>
                        <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                            <p>
                                Mr. Allrich's tenure at Argyle is defined by a deep commitment to <span className="text-white font-bold">Educational Equity</span>. He has pioneered initiatives that ensure every student, regardless of background, has access to high-level technology and advanced academic pathways.
                            </p>
                            <p>
                                Under his leadership, Argyle has seen a massive surge in <span className="text-argyle-blue font-bold">STEM participation</span>, particularly among underrepresented students. His focus on "social-emotional learning" combined with technical rigor has made Argyle a model for middle schools across the nation.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-[2.5rem] bg-gradient-to-tr from-yellow-500/15 to-slate-900/40 border border-yellow-500/40 shadow-[0_0_30px_rgba(234,179,8,0.1)] hover:shadow-[0_0_40px_rgba(234,179,8,0.2)] transition-all duration-500"
                    >
                        <h3 className="text-2xl font-black mb-4 glow-text-gold">Global Recognition</h3>
                        <p className="text-gray-300 italic mb-6">
                            "Mr. Allrich doesn't just manage a school; he builds a future. His vision for digital literacy and inclusive excellence is why Argyle is a beacon of hope in Montgomery County."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-argyle-blue/20 flex items-center justify-center text-argyle-blue">
                                <Users size={24} />
                            </div>
                            <div>
                                <div className="font-bold">Community Voice</div>
                                <div className="text-xs text-gray-500">Argyle Parents & Staff</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* The Journey Timeline */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4">The Journey of a Visionary</h2>
                        <p className="text-gray-400">Over two decades of dedicated service to Montgomery County students.</p>
                    </motion.div>

                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-yellow-500/50 via-purple-500/50 to-transparent hidden md:block" />

                        <div className="space-y-12">
                            {[
                                { year: "2015 - Present", role: "Principal, Argyle Middle School", detail: "Transformed Argyle into a national model for Digital Design and Equity-based learning." },
                                { year: "Career Start", role: "Math Teacher & Staff Developer", detail: "Began his 21-year MCPS journey with a passion for numbers and student growth." },
                                { year: "Leader", role: "MCPS Administrator", detail: "Served in various administrative roles across the county before finding his home at Argyle." }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                                >
                                    <div className="flex-1 text-right">
                                        <div className={`p-6 rounded-3xl bg-white/5 border border-white/10 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                            <span className="text-yellow-500 font-bold text-sm block mb-1">{item.year}</span>
                                            <h4 className="text-xl font-bold mb-2">{item.role}</h4>
                                            <p className="text-gray-400 text-sm">{item.detail}</p>
                                        </div>
                                    </div>
                                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-[0_0_20px_rgba(234,179,8,0.8)] z-10 hidden md:block animate-pulse" />
                                    <div className="flex-1" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* National Leadership & AI Vision */}
                <div className="mb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2 p-10 rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10"
                        >
                            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <Globe className="text-blue-400" />
                                National Voice in Education
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-400">
                                <div>
                                    <h4 className="text-white font-bold mb-2">NASSP Board of Directors</h4>
                                    <p className="text-sm">As a member of the National Association of Secondary School Principals Board, Mr. Allrich helps shape educational policy and leadership standards across the entire United States.</p>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-2">AI & Tech Thought Leader</h4>
                                    <p className="text-sm">A frequent national speaker on "AI in Education" and "Technology Integration," sharing Argyle's success blueprint with school leaders from coast to coast.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-10 rounded-3xl bg-gradient-to-br from-yellow-500/20 to-yellow-900/40 border-2 border-yellow-500/50 flex flex-col justify-center text-center shadow-[0_0_40px_rgba(234,179,8,0.3)] hover:shadow-[0_0_60px_rgba(234,179,8,0.5)] transition-all duration-500"
                        >
                            <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 via-yellow-400 to-yellow-600 mb-2 drop-shadow-[0_0_20px_rgba(234,179,8,0.4)]">21+</div>
                            <div className="text-yellow-200 font-bold uppercase tracking-widest text-xs mb-4">Years of MCPS Service</div>
                            <div className="w-16 h-1 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 mx-auto rounded-full animate-pulse" />
                        </motion.div>
                    </div>
                </div>

                {/* Global Heart & Digital Blueprint */}
                <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-[3rem] bg-gradient-to-br from-green-600/10 to-blue-600/10 border border-white/5 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-20">
                            <Globe size={120} />
                        </div>
                        <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <Heart className="text-pink-500" />
                            The Global Heart
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Mr. Allrich broke national barriers by implementing <span className="text-white font-bold">multilingual WhatsApp groups</span> for parent communication. This innovation ensures that language is never a barrier to a student's success at Argyle.
                        </p>
                        <div className="flex gap-2">
                            {['English', 'Español', 'Français', 'Tiếng Việt', 'Amharic'].map(lang => (
                                <span key={lang} className="px-3 py-1 rounded-full bg-white/5 text-[10px] text-gray-500 border border-white/10 uppercase tracking-widest">{lang}</span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-[3rem] bg-gradient-to-br from-yellow-500/15 via-slate-900/20 to-orange-600/10 border-2 border-yellow-500/20 relative overflow-hidden shadow-[0_0_30px_rgba(234,179,8,0.1)] hover:shadow-[0_0_40px_rgba(234,179,8,0.2)] transition-all duration-500"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-20 text-yellow-500">
                            <Zap size={120} />
                        </div>
                        <h3 className="text-3xl font-black mb-6 flex items-center gap-3 glow-text-gold">
                            <Zap className="text-yellow-400" />
                            Digital Blueprint
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            Under his visionary leadership, Argyle became a <span className="text-yellow-400 font-black glow-text-gold">Verizon Innovative Learning School (VILS)</span>, securing 1:1 iPad access and high-speed data for every single student.
                        </p>
                    </motion.div>
                </div>

                {/* Leadership Philosophy (Mantras) */}
                <div className="mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {mantras.map((mantra, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20"
                            >
                                <h4 className="text-xl font-bold mb-3 italic text-purple-300">"{mantra.title}"</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{mantra.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* National Influence & Reach */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-12 rounded-[3.5rem] bg-slate-900 border border-white/5 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                            <Globe size={300} />
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-4xl font-black mb-8 text-center md:text-left">National Reach & <span className="text-argyle-blue underline decoration-purple-500">Influence</span></h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
                                            <Shield size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">NASSP National Board</h4>
                                            <p className="text-gray-400 text-sm">Representing secondary school leaders across all 50 states plus international territories.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
                                            <Globe size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">Coast-to-Coast Keynotes</h4>
                                            <p className="text-gray-400 text-sm">Presenting "Argyle's Design for Success" to educators from California to New York.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-10 gap-2 opacity-40">
                                    {Array.from({ length: 50 }).map((_, i) => (
                                        <div key={i} className={`aspect-square rounded-sm ${i < 35 ? 'bg-argyle-blue' : 'bg-slate-700'}`} title={`State ${i + 1} Impact`} />
                                    ))}
                                    <div className="col-span-10 text-[8px] uppercase tracking-widest text-gray-600 mt-2 text-center">Visual Representation of National Impact (50 States Affected)</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Council of Advisors */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4 italic">The Council of Advisors</h2>
                        <p className="text-gray-400">Leading through collaboration with a world-class administrative team.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { name: "Mrs. Gordon", role: "6th Grade Administrator", focus: "Foundational Success" },
                            { name: "Mrs. Chao", role: "7th Grade & Magnet Coordinator", focus: "Innovation & Excellence" },
                            { name: "Ms. Jimenez", role: "8th Grade Administrator", focus: "Future Readiness" }
                        ].map((admin, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
                            >
                                <div className="font-bold text-white mb-1">{admin.name}</div>
                                <div className="text-argyle-blue text-xs font-bold uppercase mb-3 tracking-widest">{admin.role}</div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-widest">{admin.focus}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Impact Dashboard */}
                <div className="mb-24">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.1,
                                    boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.6), 0 0 50px rgba(234, 179, 8, 0.5)'
                                }}
                                className="p-6 rounded-3xl bg-gradient-to-br from-yellow-500/15 via-yellow-600/10 to-yellow-700/8 border-2 border-yellow-400/40 text-center hover:bg-yellow-500/20 hover:border-yellow-400/60 transition-all duration-500 group shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:shadow-[0_0_60px_rgba(234,179,8,0.6)] relative overflow-hidden"
                            >
                                {/* BRIGHT GOLD BACKGROUND GLOW */}
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-yellow-500/15 to-yellow-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-sm"></div>

                                {/* GOLDEN PARTICLE EFFECTS */}
                                <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping opacity-0 group-hover:opacity-70 transition-opacity duration-300 shadow-[0_0_8px_rgba(234,179,8,0.8)]"></div>
                                <div className="absolute bottom-2 left-2 w-1 h-1 bg-yellow-300 rounded-full animate-ping delay-300 opacity-0 group-hover:opacity-70 transition-opacity duration-300 shadow-[0_0_6px_rgba(234,179,8,0.6)]"></div>

                                <motion.div
                                    className="p-4 rounded-full bg-gradient-to-br from-yellow-400/30 to-yellow-600/30 w-fit mx-auto mb-4 group-hover:scale-125 group-hover:bg-yellow-400/40 transition-all duration-500 shadow-[0_0_25px_rgba(234,179,8,0.4)] group-hover:shadow-[0_0_40px_rgba(234,179,8,0.7)] relative"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    {/* ICON GLOW RING */}
                                    <div className="absolute inset-0 rounded-full border-2 border-yellow-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                                    <div className="text-yellow-300 relative z-10">{stat.icon}</div>
                                </motion.div>

                                <motion.div
                                    className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 via-yellow-300 to-yellow-500 mb-1 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(234,179,8,0.8)] transition-all duration-300"
                                    initial={{ opacity: 0.9 }}
                                    whileHover={{ opacity: 1, scale: 1.1 }}
                                >
                                    {stat.value}
                                </motion.div>

                                <motion.div
                                    className="text-[10px] text-yellow-300 uppercase tracking-widest font-black group-hover:text-yellow-100 transition-colors duration-300 relative z-10"
                                    initial={{ opacity: 0.8 }}
                                    whileHover={{ opacity: 1 }}
                                >
                                    {stat.label}
                                </motion.div>

                                {/* BOTTOM BORDER GLOW */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Hall of Fame - Accolades with Horizontal Scrolling */}
                <div className="mb-24">
                    <motion.div
                        {...fadeIn}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4 glow-text-gold">The Hall of Fame</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-purple-500 mx-auto shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                    </motion.div>

                    {/* Horizontal Scrolling Awards Container */}
                    <div className="relative overflow-hidden rounded-3xl">
                        {/* Gradient overlays for smooth fade effect */}
                        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-20 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-20 pointer-events-none" />

                        <div className="flex gap-8 animate-marquee" style={{ width: 'max-content' }}>
                            {/* BRIGHT GOLD AWARDS */}
                            {accolades.map((item, idx) => (
                                <motion.div
                                    key={`award-1-${idx}`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        scale: 1.08,
                                        y: -8,
                                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 60px rgba(234, 179, 8, 0.5)'
                                    }}
                                    className="flex-shrink-0 w-[380px] p-8 rounded-3xl bg-gradient-to-br from-yellow-500/10 via-yellow-600/8 to-yellow-700/6 border-2 border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-500 group relative overflow-hidden shadow-[0_0_40px_rgba(234,179,8,0.3)] hover:shadow-[0_0_80px_rgba(234,179,8,0.7)]"
                                >
                                    {/* BRIGHT GOLD BACKGROUND GLOW */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/8 via-yellow-500/12 to-yellow-600/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                                    {/* GOLDEN PARTICLE EFFECTS */}
                                    <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-0 group-hover:opacity-80 transition-opacity duration-300 shadow-[0_0_10px_rgba(234,179,8,0.8)]"></div>
                                    <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping delay-300 opacity-0 group-hover:opacity-80 transition-opacity duration-300 shadow-[0_0_8px_rgba(234,179,8,0.6)]"></div>
                                    <div className="absolute top-1/2 left-6 w-1 h-1 bg-yellow-500 rounded-full animate-bounce delay-700 opacity-0 group-hover:opacity-90 transition-opacity duration-300 shadow-[0_0_6px_rgba(234,179,8,0.9)]"></div>

                                    <div className="relative z-10">
                                        <motion.div
                                            className="p-4 rounded-full bg-gradient-to-br from-yellow-400/30 to-yellow-600/30 w-fit mb-6 group-hover:scale-125 group-hover:bg-yellow-400/40 transition-all duration-500 shadow-[0_0_25px_rgba(234,179,8,0.4)] group-hover:shadow-[0_0_40px_rgba(234,179,8,0.7)]"
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.8 }}
                                        >
                                            {/* ICON GLOW RING */}
                                            <div className="absolute inset-0 rounded-full border-2 border-yellow-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                                            {item.icon}
                                        </motion.div>

                                        <motion.div
                                            className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 font-black text-2xl mb-2 drop-shadow-[0_0_15px_rgba(234,179,8,0.6)] group-hover:drop-shadow-[0_0_25px_rgba(234,179,8,0.9)] transition-all duration-300"
                                            initial={{ opacity: 0.9 }}
                                            whileHover={{ opacity: 1, scale: 1.1 }}
                                        >
                                            {item.year}
                    </motion.div>

                                        <motion.h3
                                            className="text-xl font-bold mb-1 text-white group-hover:text-yellow-100 transition-colors duration-300"
                                            initial={{ opacity: 0.9 }}
                                            whileHover={{ opacity: 1 }}
                                        >
                                            {item.title}
                                        </motion.h3>

                                        <motion.p
                                            className="text-xs text-yellow-400/80 uppercase tracking-widest mb-4 font-bold group-hover:text-yellow-300 transition-colors duration-300"
                                            initial={{ opacity: 0.8 }}
                                            whileHover={{ opacity: 1 }}
                                        >
                                            {item.organization}
                                        </motion.p>

                                        <motion.p
                                            className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
                                            initial={{ opacity: 0.8 }}
                                            whileHover={{ opacity: 1 }}
                                        >
                                            {item.description}
                                        </motion.p>
                                    </div>

                                    {/* BOTTOM GOLD BORDER GLOW */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                                    {/* CORNER GOLD ACCENTS */}
                                    <div className="absolute top-2 left-2 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute top-2 right-2 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-2 right-2 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </motion.div>
                            ))}

                            {/* DUPLICATE SET FOR SEAMLESS LOOP - BRIGHT GOLD */}
                        {accolades.map((item, idx) => (
                            <motion.div
                                    key={`award-2-${idx}`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                    whileHover={{
                                        scale: 1.08,
                                        y: -8,
                                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 60px rgba(234, 179, 8, 0.5)'
                                    }}
                                    className="flex-shrink-0 w-[380px] p-8 rounded-3xl bg-gradient-to-br from-yellow-500/10 via-yellow-600/8 to-yellow-700/6 border-2 border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-500 group relative overflow-hidden shadow-[0_0_40px_rgba(234,179,8,0.3)] hover:shadow-[0_0_80px_rgba(234,179,8,0.7)]"
                                >
                                    {/* BRIGHT GOLD BACKGROUND GLOW */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/8 via-yellow-500/12 to-yellow-600/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                                    {/* GOLDEN PARTICLE EFFECTS */}
                                    <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-0 group-hover:opacity-80 transition-opacity duration-300 shadow-[0_0_10px_rgba(234,179,8,0.8)]"></div>
                                    <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping delay-300 opacity-0 group-hover:opacity-80 transition-opacity duration-300 shadow-[0_0_8px_rgba(234,179,8,0.6)]"></div>
                                    <div className="absolute top-1/2 left-6 w-1 h-1 bg-yellow-500 rounded-full animate-bounce delay-700 opacity-0 group-hover:opacity-90 transition-opacity duration-300 shadow-[0_0_6px_rgba(234,179,8,0.9)]"></div>

                                    <div className="relative z-10">
                                        <motion.div
                                            className="p-4 rounded-full bg-gradient-to-br from-yellow-400/30 to-yellow-600/30 w-fit mb-6 group-hover:scale-125 group-hover:bg-yellow-400/40 transition-all duration-500 shadow-[0_0_25px_rgba(234,179,8,0.4)] group-hover:shadow-[0_0_40px_rgba(234,179,8,0.7)]"
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.8 }}
                                        >
                                            {/* ICON GLOW RING */}
                                            <div className="absolute inset-0 rounded-full border-2 border-yellow-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                                    {item.icon}
                                        </motion.div>

                                        <motion.div
                                            className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 font-black text-2xl mb-2 drop-shadow-[0_0_15px_rgba(234,179,8,0.6)] group-hover:drop-shadow-[0_0_25px_rgba(234,179,8,0.9)] transition-all duration-300"
                                            initial={{ opacity: 0.9 }}
                                            whileHover={{ opacity: 1, scale: 1.1 }}
                                        >
                                            {item.year}
                                        </motion.div>

                                        <motion.h3
                                            className="text-xl font-bold mb-1 text-white group-hover:text-yellow-100 transition-colors duration-300"
                                            initial={{ opacity: 0.9 }}
                                            whileHover={{ opacity: 1 }}
                                        >
                                            {item.title}
                                        </motion.h3>

                                        <motion.p
                                            className="text-xs text-yellow-400/80 uppercase tracking-widest mb-4 font-bold group-hover:text-yellow-300 transition-colors duration-300"
                                            initial={{ opacity: 0.8 }}
                                            whileHover={{ opacity: 1 }}
                                        >
                                            {item.organization}
                                        </motion.p>

                                        <motion.p
                                            className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
                                            initial={{ opacity: 0.8 }}
                                            whileHover={{ opacity: 1 }}
                                        >
                                            {item.description}
                                        </motion.p>
                                </div>

                                    {/* BOTTOM GOLD BORDER GLOW */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                                    {/* CORNER GOLD ACCENTS */}
                                    <div className="absolute top-2 left-2 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute top-2 right-2 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-2 right-2 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </motion.div>
                        ))}
                        </div>
                    </div>
                </div>

                {/* INCREDIBLE GOLDEN PILLARS OF LEADERSHIP */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
                            whileHover={{
                                y: -15,
                                scale: 1.05,
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 60px rgba(234, 179, 8, 0.4)'
                            }}
                            className="group relative p-8 rounded-3xl bg-gradient-to-br from-yellow-500/10 via-yellow-600/8 to-yellow-700/6 border-2 border-yellow-400/30 flex flex-col items-center text-center overflow-hidden shadow-[0_0_40px_rgba(234,179,8,0.2)] hover:shadow-[0_0_80px_rgba(234,179,8,0.6)] transition-all duration-700"
                        >
                            {/* BRIGHT GOLD BACKGROUND GLOW */}
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-yellow-500/8 to-yellow-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                            {/* GOLDEN PARTICLE EFFECTS */}
                            <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-0 group-hover:opacity-80 transition-opacity duration-300 shadow-[0_0_10px_rgba(234,179,8,0.8)]"></div>
                            <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping delay-300 opacity-0 group-hover:opacity-80 transition-opacity duration-300 shadow-[0_0_8px_rgba(234,179,8,0.6)]"></div>
                            <div className="absolute top-1/2 left-6 w-1 h-1 bg-yellow-500 rounded-full animate-bounce delay-700 opacity-0 group-hover:opacity-90 transition-opacity duration-300 shadow-[0_0_6px_rgba(234,179,8,0.9)]"></div>

                            {/* ENHANCED ICON */}
                            <motion.div
                                className="mb-6 relative"
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl flex items-center justify-center border border-yellow-400/40 group-hover:border-yellow-300/60 transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.3)] group-hover:shadow-[0_0_30px_rgba(234,179,8,0.6)]">
                                    {pillar.icon}
                                </div>
                                {/* ICON GLOW RING */}
                                <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                            </motion.div>

                            {/* ENHANCED TITLE */}
                            <motion.h3
                                className="text-xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 glow-text-gold drop-shadow-[0_0_10px_rgba(234,179,8,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(234,179,8,0.8)] transition-all duration-300"
                                initial={{ opacity: 0.9 }}
                                whileHover={{ opacity: 1, scale: 1.05 }}
                            >
                                {pillar.title}
                            </motion.h3>

                            {/* ENHANCED TEXT */}
                            <motion.p
                                className="text-sm text-gray-300 leading-relaxed group-hover:text-yellow-100 transition-colors duration-300 relative z-10"
                                initial={{ opacity: 0.8 }}
                                whileHover={{ opacity: 1 }}
                            >
                                {pillar.text}
                            </motion.p>

                            {/* BOTTOM GOLD BORDER GLOW */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                            {/* CORNER ACCENTS */}
                            <div className="absolute top-2 left-2 w-1 h-1 bg-yellow-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute top-2 right-2 w-1 h-1 bg-yellow-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-2 left-2 w-1 h-1 bg-yellow-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-2 right-2 w-1 h-1 bg-yellow-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.div>
                    ))}
                </div>

                {/* BRIGHTER GOLD CLOSING QUOTE */}
                <motion.div
                    {...fadeIn}
                    className="max-w-4xl mx-auto p-12 rounded-[3rem] bg-gradient-to-br from-yellow-500/30 via-yellow-600/25 to-yellow-700/20 border-3 border-yellow-400/60 text-center relative overflow-hidden shadow-[0_0_120px_rgba(234,179,8,0.5),0_0_240px_rgba(234,179,8,0.3),0_0_360px_rgba(234,179,8,0.1)]"
                >
                    {/* BRIGHTER GOLD GLOW LAYERS */}
                    <div className="absolute -inset-6 bg-yellow-400/20 blur-[80px] -z-10 rounded-[3rem] animate-pulse-slow" />
                    <div className="absolute -inset-3 bg-yellow-300/15 blur-[40px] -z-10 rounded-[3rem] animate-pulse-slow delay-1000" />
                    <div className="absolute top-0 right-0 opacity-25 text-yellow-300 animate-float-bob-small">
                        <Award size={200} />
                    </div>

                    {/* GOLDEN PARTICLE EFFECTS */}
                    <div className="absolute top-8 left-8 w-4 h-4 bg-yellow-300 rounded-full animate-ping opacity-70 shadow-[0_0_20px_rgba(234,179,8,0.9)]"></div>
                    <div className="absolute bottom-8 right-8 w-3 h-3 bg-yellow-400 rounded-full animate-ping delay-300 opacity-70 shadow-[0_0_18px_rgba(234,179,8,0.8)]"></div>
                    <div className="absolute top-1/2 left-6 w-2 h-2 bg-yellow-500 rounded-full animate-bounce delay-700 opacity-80 shadow-[0_0_15px_rgba(234,179,8,0.9)]"></div>
                    <div className="absolute top-1/3 right-6 w-3.5 h-3.5 bg-yellow-200 rounded-full animate-float-bob-small delay-500 opacity-60 shadow-[0_0_22px_rgba(234,179,8,0.7)]"></div>

                    <h3 className="text-2xl md:text-3xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 glow-text-gold italic drop-shadow-[0_0_25px_rgba(234,179,8,0.8)]">"Leadership is not about being in charge. It's about taking care of those in your charge."</h3>
                    <p className="text-yellow-200 font-bold tracking-widest uppercase text-sm glow-text-gold drop-shadow-[0_0_15px_rgba(234,179,8,0.6)]">— Mr. James Allrich</p>

                    {/* EXTRA BRIGHT FLOATING CROWNS FOR MR. ALLRICH */}
                    <div className="absolute top-1/4 right-1/4 opacity-35">
                        <div className="text-yellow-200 text-3xl animate-pulse delay-1000 drop-shadow-[0_0_15px_rgba(234,179,8,0.7)]">👑</div>
                    </div>
                    <div className="absolute bottom-1/4 left-1/4 opacity-40">
                        <div className="text-yellow-300 text-2xl animate-bounce delay-2000 drop-shadow-[0_0_12px_rgba(234,179,8,0.8)]">👑</div>
                    </div>
                    <div className="absolute top-2/3 right-1/6 opacity-45">
                        <div className="text-yellow-400 text-2.5xl animate-float-bob-small delay-3000 drop-shadow-[0_0_18px_rgba(234,179,8,0.9)]">👑</div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrincipalsPalace;