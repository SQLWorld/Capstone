import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Users, FlaskConical, Music, Award, Bus, Utensils, Megaphone, Newspaper, ChevronRight, ExternalLink, Clock } from 'lucide-react';
import logo from '../assets/logo.jpg';

const News = () => {
    // Categorized news items for better organization
    const majorAnnouncements = [
        {
            date: "Dec 16 & 18",
            title: "8th Grade Ocean Wonders Trip",
            category: "Field Trip",
            icon: <FlaskConical className="w-6 h-6 text-blue-400" />,
            color: "blue",
            content: "An immersive marine biology experience! 8th Grade students will visit the 'Exploring Ocean Wonders: Aquariums' exhibit. Mr. Abrams' classes attend Dec 16th; Ms. Rary's classes attend Dec 18th. Please ensure permission slips are returned to Ms. Valerio in the Media Center by 8:15 AM."
        },
        {
            date: "Oct - Nov",
            title: "SGA Leadership Workshops",
            category: "Student Life",
            icon: <Users className="w-6 h-6 text-purple-400" />,
            color: "purple",
            content: "Our Student Government Association is building the leaders of tomorrow. Recent workshops focused on 'Resilience' (Oct 22) and 'Teamwork' (Nov 5). Students earned SSL hours for attending these valuable sessions on building character and community."
        },
    ];

    const communityUpdates = [
        {
            title: "Caregiver Climate Survey",
            content: "We need your voice! The annual Climate Survey is open. Your feedback helps us shape the future of Argyle's learning environment.",
            urgent: true
        },
        {
            title: "Community Yard Sale Success",
            content: "Thank you to everyone who participated in our October Yard Sale! It was a fantastic day of community building.",
            urgent: false
        },
        {
            title: "Teacher Advocacy for Better Facilities",
            content: "Our dedicated staff continues to advocate for facility improvements, including HVAC upgrades, to ensure the best possible learning environment for our students.",
            urgent: false
        }
    ];

    const resources = [
        {
            title: "Bus Routes & Transportation",
            link: "/bus-routes",
            icon: <Bus className="w-4 h-4" />
        },
        {
            title: "Online Meal Application",
            link: "https://www.myschoolapps.com/",
            icon: <Utensils className="w-4 h-4" />
        },
        {
            title: "Attendance Policy",
            link: "/attendance-policy",
            icon: <Clock className="w-4 h-4" />
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-20 min-h-screen relative">
            {/* INCREDIBLE NEWS-THEMED BACKGROUND EFFECTS */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {/* VIBRANT NEWS ENERGY BURSTS */}
                <div className="absolute top-1/4 left-1/5 w-52 h-52 bg-gradient-radial from-cyan-500/30 via-blue-500/20 to-transparent rounded-full blur-2xl animate-pulse-slow shadow-[0_0_100px_rgba(6,182,212,0.4)]"></div>
                <div className="absolute bottom-1/3 right-1/6 w-60 h-60 bg-gradient-radial from-pink-500/30 via-purple-500/20 to-transparent rounded-full blur-2xl animate-pulse-slow delay-1000 shadow-[0_0_110px_rgba(236,72,153,0.4)]"></div>
                <div className="absolute top-2/3 left-2/3 w-44 h-44 bg-gradient-radial from-emerald-500/30 via-teal-500/20 to-transparent rounded-full blur-2xl animate-pulse-slow delay-2000 shadow-[0_0_90px_rgba(16,185,129,0.4)]"></div>

                {/* FLOATING NEWS ELEMENTS */}
                <div className="absolute top-20 left-16 w-6 h-6 border-3 border-cyan-400 rounded animate-ping opacity-40 shadow-[0_0_15px_rgba(6,182,212,0.7)]"></div>
                <div className="absolute top-32 right-20 w-5 h-5 bg-pink-400 rounded-full animate-bounce delay-300 shadow-[0_0_20px_rgba(236,72,153,0.8)]"></div>
                <div className="absolute bottom-40 left-28 w-4 h-4 bg-purple-400 rounded animate-pulse delay-700 shadow-[0_0_18px_rgba(147,51,234,0.6)]"></div>
                <div className="absolute bottom-52 right-24 w-8 h-2 bg-emerald-400 rounded-full animate-pulse delay-1000 shadow-[0_0_22px_rgba(16,185,129,0.6)]"></div>

                {/* ANIMATED NEWS SYMBOLS */}
                <div className="absolute top-1/4 right-1/4 opacity-20">
                    <div className="text-cyan-400 text-3xl animate-pulse">📰</div>
                </div>
                <div className="absolute bottom-1/4 left-1/3 opacity-15">
                    <div className="text-pink-400 text-3xl animate-pulse delay-1000">📣</div>
                </div>
                <div className="absolute top-2/3 left-1/4 opacity-18">
                    <div className="text-purple-400 text-2xl animate-pulse delay-2000">🔔</div>
                </div>

                {/* NEWS WAVES */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-500/30 via-pink-500/30 to-purple-500/30 animate-gradient-x opacity-40"></div>
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500/30 via-emerald-500/30 to-cyan-500/30 animate-gradient-x delay-1000 opacity-40"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16 relative z-10"
            >
                {/* DYNAMIC NEWS GLOW EFFECTS */}
                <div className="absolute inset-0 bg-gradient-radial from-cyan-500/20 via-transparent to-transparent blur-3xl animate-pulse-slow -z-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-pink-500/10 via-transparent to-transparent rounded-full blur-2xl animate-pulse-slow delay-1000 -z-10"></div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
                    className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 relative"
                >
                    News &
                    <motion.span
                        className="block bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent relative"
                        initial={{ backgroundPosition: '0% 50%' }}
                        animate={{ backgroundPosition: '100% 50%' }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                    >
                        Announcements
                        {/* UNDERLINE GLOW */}
                        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 rounded-full blur-sm opacity-60"></div>
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 relative"
                >
                    The pulse of Argyle Magnet Middle School.
                    <motion.span
                        className="text-pink-400 font-semibold"
                        animate={{ textShadow: ['0 0 10px rgba(236, 72, 153, 0.5)', '0 0 20px rgba(236, 72, 153, 0.8)', '0 0 10px rgba(236, 72, 153, 0.5)'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        From student achievements to critical updates—stay connected and informed!
                    </motion.span>
                </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Main Feed - Left 2 Columns */}
                <div className="lg:col-span-2 space-y-8">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                        <Megaphone className="text-argyle-blue" /> Latest Stories
                    </h2>

                    {majorAnnouncements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
                            whileHover={{
                                scale: 1.02,
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(6, 182, 212, 0.2)'
                            }}
                            className="glass-panel p-8 rounded-3xl border-2 border-white/10 hover:border-cyan-400/50 transition-all duration-500 group relative overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_60px_rgba(6,182,212,0.4)]"
                        >
                            {/* DYNAMIC NEWS CARD GLOW */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}-500/5 via-${item.color}-400/8 to-${item.color}-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>

                            {/* NEWS PARTICLE EFFECTS */}
                            <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-0 group-hover:opacity-80 transition-opacity duration-300 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
                            <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-300 opacity-0 group-hover:opacity-80 transition-opacity duration-300 shadow-[0_0_8px_rgba(236,72,153,0.6)]"></div>

                            <motion.div
                                className={`absolute top-0 right-0 p-3 bg-${item.color}-500/20 rounded-bl-2xl text-${item.color}-300 font-mono text-xs font-bold group-hover:bg-${item.color}-500/30 transition-all duration-300`}
                                initial={{ opacity: 0.9 }}
                                whileHover={{ opacity: 1 }}
                            >
                                {item.category}
                            </motion.div>

                            <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
                                <motion.div
                                    className={`p-4 rounded-2xl bg-${item.color}-500/10 flex-shrink-0 group-hover:bg-${item.color}-500/20 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)]`}
                                    whileHover={{ scale: 1.1, rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {/* ICON GLOW RING */}
                                    <div className={`absolute inset-0 rounded-2xl border-2 border-${item.color}-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}></div>
                                    <div className={`text-${item.color}-400 relative z-10`}>{item.icon}</div>
                                </motion.div>

                                <div className="flex-1">
                                    <motion.div
                                        className="flex items-center gap-3 mb-2"
                                        initial={{ opacity: 0.9 }}
                                        whileHover={{ opacity: 1 }}
                                    >
                                        <span className="text-gray-400 text-sm flex items-center gap-1 group-hover:text-cyan-300 transition-colors duration-300">
                                            <Calendar size={14} />
                                            {item.date}
                                        </span>
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-argyle-blue transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Principal's Message Block */}
                    <div className="glass-card p-8 rounded-3xl bg-slate-800/50 border-l-4 border-l-purple-500">
                        <h3 className="text-xl font-bold text-white mb-4">A Note from Principal Allrich</h3>
                        <p className="text-gray-300 italic mb-4">
                            "At Argyle, we are inventing the future every day. I am incredibly proud of our 8th graders as they embark on their Capstone projects, and our SGA for fostering such a supportive climate. Let's finish the semester strong!"
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden flex items-center justify-center">
                                <img src={logo} alt="Argyle Logo" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="text-white font-bold text-sm">Mr. James K. Allrich</div>
                                <div className="text-gray-500 text-xs">Principal</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="space-y-8">

                    {/* Quick Resources */}
                    <div className="glass-panel p-6 rounded-3xl">
                        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            <Bus className="text-green-400 w-5 h-5" /> Quick Resources
                        </h3>
                        <div className="space-y-4">
                            {resources.map((res, i) => (
                                res.link.startsWith('/') ? (
                                    <Link
                                        key={i}
                                        to={res.link}
                                        className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                                    >
                                        <span className="flex items-center gap-3 text-gray-300 group-hover:text-white text-sm">
                                            {res.icon} {res.title}
                                        </span>
                                        <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-white" />
                                    </Link>
                                ) : (
                                    <a
                                        key={i}
                                        href={res.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                                    >
                                        <span className="flex items-center gap-3 text-gray-300 group-hover:text-white text-sm">
                                            {res.icon} {res.title}
                                        </span>
                                        <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white" />
                                    </a>
                                )
                            ))}
                        </div>
                    </div>

                    {/* Community Corner */}
                    <div className="glass-panel p-6 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500"></div>
                        <h3 className="text-lg font-bold text-white mb-6 mt-2">Community Corner</h3>
                        <div className="space-y-6">
                            {communityUpdates.map((update, i) => (
                                <div key={i} className="pb-6 border-b border-white/5 last:border-0 last:pb-0">
                                    <h4 className="text-white font-bold mb-2 flex items-center justify-between">
                                        {update.title}
                                        {update.urgent && <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>}
                                    </h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {update.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default News;
