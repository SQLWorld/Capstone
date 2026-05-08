import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Sparkles, Award } from 'lucide-react';
import { staff } from '../data/staff';
import StaffCard from '../components/StaffCard';
import { CardSkeleton, StaggeredReveal, PageLoader, LazyLoad } from '../components/LoadingStates';

const Staff = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Group staff by department
    const departments = [...new Set(staff.map(s => s.department))];

    // Simulate loading delay for demonstration
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 second loading demo

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative overflow-hidden">
            {/* INCREDIBLE STAFF BACKGROUND EFFECTS */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {/* VIBRANT STAFF ENERGY ORBS */}
                <div className="absolute top-1/6 left-1/5 w-96 h-96 bg-gradient-radial from-purple-500/30 via-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse-slow shadow-[0_0_120px_rgba(168,85,247,0.5)]"></div>
                <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-radial from-blue-500/25 via-cyan-500/15 to-transparent rounded-full blur-3xl animate-pulse-slow delay-1000 shadow-[0_0_130px_rgba(59,130,246,0.4)]"></div>
                <div className="absolute top-2/3 left-2/3 w-72 h-72 bg-gradient-radial from-indigo-500/25 via-purple-500/15 to-transparent rounded-full blur-3xl animate-pulse-slow delay-2000 shadow-[0_0_100px_rgba(139,92,246,0.4)]"></div>

                {/* FLOATING GEOMETRIC SHAPES */}
                <div className="absolute top-20 left-16 w-6 h-6 border-3 border-purple-400 rotate-45 animate-spin opacity-70 shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
                <div className="absolute top-32 right-24 w-4 h-4 bg-blue-400 rotate-12 animate-bounce delay-300 opacity-75 shadow-[0_0_18px_rgba(59,130,246,0.9)]"></div>
                <div className="absolute bottom-40 left-20 w-8 h-8 border-2 border-indigo-400 rotate-45 animate-ping delay-500 opacity-60 shadow-[0_0_20px_rgba(139,92,246,0.7)]"></div>
                <div className="absolute top-1/2 right-12 w-5 h-5 bg-cyan-400 rotate-45 animate-pulse delay-700 opacity-80 shadow-[0_0_16px_rgba(6,182,212,0.8)]"></div>
                <div className="absolute bottom-1/3 left-2/3 w-7 h-7 border-3 border-blue-400 -rotate-12 animate-spin delay-900 opacity-65 shadow-[0_0_19px_rgba(59,130,246,0.7)]"></div>

                {/* ANIMATED STAFF SYMBOLS */}
                <div className="absolute top-1/4 right-1/5 opacity-25">
                    <div className="text-purple-400 text-5xl animate-pulse">👨‍🏫</div>
                </div>
                <div className="absolute bottom-1/4 left-1/6 opacity-20">
                    <div className="text-blue-400 text-4xl animate-pulse delay-1000">👩‍💼</div>
                </div>
                <div className="absolute top-3/4 right-1/4 opacity-30">
                    <div className="text-indigo-400 text-4xl animate-pulse delay-2000">🎓</div>
                </div>
                <div className="absolute bottom-1/6 left-3/4 opacity-28">
                    <div className="text-cyan-400 text-3xl animate-pulse delay-3000">📚</div>
                </div>

                {/* DYNAMIC WAVE PATTERNS */}
                <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-indigo-500/30 animate-gradient-x opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 animate-gradient-x delay-3000 opacity-60"></div>

                {/* EXTRA FLOATING ELEMENTS */}
                <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-purple-300 rotate-45 animate-ping opacity-50 delay-500"></div>
                <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-blue-300 animate-bounce opacity-45 delay-1000"></div>
                <div className="absolute bottom-1/2 left-1/6 w-4 h-4 border-2 border-indigo-300 rotate-12 animate-pulse opacity-55 delay-1500"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* OPTIMIZED STAFF HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-center mb-20 relative"
                >
                    {/* HEADER GLOW EFFECTS */}
                    <div className="absolute inset-0 bg-gradient-radial from-purple-500/25 via-transparent to-transparent blur-3xl animate-pulse-slow -z-10"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-blue-500/15 via-transparent to-transparent rounded-full blur-2xl animate-pulse-slow delay-1000 -z-10"></div>

                    <motion.div
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-indigo-500/30 border-2 border-purple-400/40 text-purple-300 text-sm font-bold mb-8 tracking-widest uppercase shadow-[0_0_30px_rgba(168,85,247,0.6)]"
                    >
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            <Users size={20} />
                        </motion.div>
                        Our Dedicated Team
                        {/* HEADER SPARKLES */}
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-80"></div>
                        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-700 opacity-80"></div>
                    </motion.div>

                    <motion.h2
                        className="text-7xl md:text-8xl font-black mb-8 leading-tight bg-gradient-to-r from-purple-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent relative"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                    >
                        Meet Our Team
                        {/* TITLE GLOW UNDERLINE */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-1.5 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 rounded-full blur-sm opacity-80"></div>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8 relative"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        The educators and administrators dedicated to inventing the future at Argyle Magnet Middle School.
                        <motion.span
                            className="block text-cyan-300 font-semibold mt-3"
                            animate={{
                                textShadow: ['0 0 10px rgba(168, 85, 247, 0.6)', '0 0 15px rgba(168, 85, 247, 0.9)', '0 0 10px rgba(168, 85, 247, 0.6)']
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Passionate educators shaping tomorrow's innovators! 🌟✨
                        </motion.span>
                    </motion.p>

                    <motion.div
                        className="flex items-center justify-center gap-6 mt-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        <div className="h-[3px] w-20 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full" />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="p-3 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.7)]"
                        >
                            <Sparkles className="text-purple-300" size={24} />
                        </motion.div>
                        <div className="h-[3px] w-20 bg-gradient-to-r from-transparent via-indigo-400 to-transparent rounded-full" />
                    </motion.div>
                </motion.div>

                {/* Enhanced Department Sections */}
                <div className="space-y-20">
                    {departments.map((dept, deptIdx) => (
                        <LazyLoad
                            key={dept}
                            animationType="fadeUp"
                            className="relative"
                        >
                            <div className="relative mb-16">
                                {/* DEPARTMENT GLOW BACKGROUND */}
                                <div className="absolute inset-0 bg-gradient-radial from-purple-500/15 via-transparent to-transparent blur-2xl animate-pulse-slow -z-10"></div>

                                <motion.div
                                    animate={{ x: [-2, 2, -2] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute -left-6 top-0 bottom-0 w-2 bg-gradient-to-b from-purple-400 via-blue-400 to-indigo-400 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.6)]"
                                />

                                <motion.div
                                    className="flex items-center gap-6 mb-4"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                        className="p-4 bg-gradient-to-br from-purple-500/30 via-blue-500/30 to-indigo-500/30 rounded-full shadow-[0_0_25px_rgba(168,85,247,0.7)]"
                                    >
                                        <Award className="text-purple-300" size={28} />
                                    </motion.div>
                                    <motion.h3
                                        className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: deptIdx * 0.2 }}
                                    >
                                        {dept}
                                    </motion.h3>
                                </motion.div>

                                <motion.div
                                    className="h-[4px] w-40 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 160 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: deptIdx * 0.3, duration: 0.8 }}
                                />
                            </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {isLoading ? (
                                // Show skeleton cards during loading
                                Array.from({ length: Math.max(6, staff.filter(s => s.department === dept).length) }).map((_, idx) => (
                                    <CardSkeleton key={`skeleton-${dept}-${idx}`} />
                                ))
                            ) : (
                                // Show real staff cards with lazy loading reveals
                                staff.filter(s => s.department === dept).map((member, idx) => (
                                    <LazyLoad
                                        key={member.email}
                                        animationType="fadeUp"
                                        rootMargin="100px"
                                    >
                                        <StaffCard staff={member} index={idx} />
                                    </LazyLoad>
                                ))
                            )}
                        </div>
                        </LazyLoad>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Staff;