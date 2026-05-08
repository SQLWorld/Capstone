import React from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Sparkles } from 'lucide-react';

const StaffCard = ({ staff, index }) => {
    // Special styling for Mr. Allrich
    const isAllrich = staff.name.toLowerCase().includes('allrich');
    const cardColors = isAllrich ? {
        primary: 'gold',
        secondary: 'purple',
        glow: 'rgba(255, 215, 0, 0.6)', // gold
        glowSecondary: 'rgba(168, 85, 247, 0.4)' // purple
    } : {
        primary: 'purple',
        secondary: 'blue',
        glow: 'rgba(168, 85, 247, 0.4)',
        glowSecondary: 'rgba(59, 130, 246, 0.4)'
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04, duration: 0.3 }}
            whileHover={{
                y: -6,
                scale: 1.01,
                boxShadow: `0 15px 30px -8px rgba(0, 0, 0, 0.4), 0 0 20px ${cardColors.glow}`
            }}
            className="relative group"
        >
            {/* OPTIMIZED CARD GLOW EFFECTS */}
            <div className={`absolute -inset-1 bg-gradient-to-br ${isAllrich ? 'from-yellow-500/20 via-purple-500/15' : 'from-purple-500/20 via-blue-500/15'} rounded-3xl opacity-0 group-hover:opacity-80 blur-lg transition-opacity duration-300 -z-10`} />

            {/* FLOATING PARTICLES */}
            <div className={`absolute top-4 right-4 w-1 h-1 ${isAllrich ? 'bg-yellow-400' : 'bg-purple-400'} rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-200`}></div>
            <div className={`absolute bottom-4 left-4 w-1 h-1 ${isAllrich ? 'bg-purple-400' : 'bg-blue-400'} rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-200 delay-100`}></div>

            <motion.div
                className={`glass-card p-8 rounded-3xl border-2 ${isAllrich ? 'border-yellow-500/20 hover:border-yellow-400/60' : 'border-purple-500/20 hover:border-purple-400/60'} transition-all duration-300 relative overflow-hidden`}
            style={{
                boxShadow: `0 0 10px ${cardColors.glow.replace('0.4', '0.2')}`,
            }}
                whileHover={{ borderColor: 'rgba(6, 182, 212, 0.8)' }}
            >
                {/* SIMPLE WAVE EFFECT */}
                <div className={`absolute inset-0 ${isAllrich ? 'bg-gradient-to-br from-yellow-500/5 via-purple-500/8' : 'bg-gradient-to-br from-purple-500/5 via-blue-500/8'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`} />

                <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                            {/* OPTIMIZED AVATAR */}
                            <div className="relative mb-8">
                                <motion.div
                                    className={`absolute -inset-2 ${isAllrich ? 'bg-gradient-to-br from-yellow-400 via-purple-400' : 'bg-gradient-to-br from-purple-400 via-blue-400'} rounded-full opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300`}
                                />
                                <div
                                    className={`relative w-20 h-20 rounded-full ${isAllrich ? 'bg-gradient-to-br from-yellow-400 via-purple-500' : 'bg-gradient-to-br from-purple-400 via-blue-500'} flex items-center justify-center group-hover:scale-105 transition-all duration-300`}
                                    style={{
                                        boxShadow: `0 0 20px ${cardColors.glow}`,
                                    }}
                                >
                                    <span className="text-white font-black text-2xl">
                                        {staff.name.charAt(0)}
                                    </span>
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </div>

                            <h3
                                className={`text-2xl font-black text-white mb-3 transition-all duration-300 ${isAllrich ? 'group-hover:text-yellow-200' : 'group-hover:text-purple-200'}`}
                            >
                                {staff.name}
                            </h3>

                            <motion.p
                                className="text-base text-gray-200 mb-4 font-semibold"
                                whileHover={{ color: '#67e8f9' }}
                            >
                                {staff.role}
                            </motion.p>

                            {/* ENHANCED DEPARTMENT BADGE */}
                            <div
                                className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${isAllrich ? 'bg-gradient-to-r from-yellow-500/25 via-purple-500/20 text-yellow-300 border-yellow-400/40' : 'bg-gradient-to-r from-purple-500/25 via-blue-500/20 text-purple-300 border-purple-400/40'} border group-hover:border-opacity-80 transition-all duration-300`}
                                style={{
                                    boxShadow: `0 0 10px ${cardColors.glow}`,
                                }}
                            >
                                <Sparkles size={12} className={isAllrich ? 'text-yellow-400' : 'text-purple-400'} />
                                {staff.department}
                            </div>
                        </div>
                    </div>

                    {/* OPTIMIZED EMAIL SECTION */}
                    <div
                        className={`mt-8 pt-6 border-t ${isAllrich ? 'border-yellow-500/20 group-hover:border-yellow-400/50' : 'border-purple-500/20 group-hover:border-purple-400/50'} transition-colors duration-300`}
                    >
                        <a
                            href={`mailto:${staff.email}`}
                            className={`flex items-center gap-3 text-base text-gray-300 ${isAllrich ? 'hover:text-yellow-300' : 'hover:text-purple-300'} transition-all duration-300 group/email`}
                        >
                            <div
                                className={`p-2 rounded-lg ${isAllrich ? 'bg-yellow-500/15 group-hover:bg-yellow-500/30' : 'bg-purple-500/15 group-hover:bg-purple-500/30'} transition-all duration-300`}
                            >
                                <Mail size={16} className="group-hover/email:scale-105 transition-transform duration-200" />
                            </div>
                            <span className={`truncate group-hover/email:text-opacity-80 transition-colors duration-300 ${isAllrich ? 'group-hover/email:text-yellow-200' : 'group-hover/email:text-purple-200'}`}>
                                {staff.email}
                            </span>
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default StaffCard;