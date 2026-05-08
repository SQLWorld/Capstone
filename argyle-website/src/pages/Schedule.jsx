import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertTriangle, Sun, Calendar, Bell, Sparkles, Zap } from 'lucide-react';

const Schedule = () => {
    const [activeTab, setActiveTab] = useState('regular');

    return (
        <div className="max-w-7xl mx-auto px-4 py-20 min-h-screen relative overflow-hidden">
            {/* Animated Background Glow Effects */}
            <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[800px] h-[800px] bg-argyle-blue/20 blur-[150px] rounded-full -z-10 animate-pulse-slow" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] bg-purple-500/15 blur-[140px] rounded-full -z-10 animate-pulse-slow delay-700" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-500/10 blur-[120px] rounded-full -z-10 animate-pulse-slow delay-1000" />
            
            {/* Floating particles */}
            <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60" />
            <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-500 opacity-60" />
            <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-1000 opacity-60" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16 relative z-10"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-argyle-blue/20 border border-argyle-blue/40 text-argyle-blue text-sm font-bold mb-6 tracking-widest uppercase shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                >
                    <Bell size={18} />
                    Daily Schedules
                </motion.div>
                <h1 className="text-5xl md:text-7xl font-black mb-6 text-white relative">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-argyle-blue via-purple-400 to-pink-400 animate-gradient-x drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                        Daily Schedules
                    </span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    Official Argyle Middle School bell schedules.
                    <br />
                    <span className="text-sm text-argyle-blue glow-text-blue font-semibold">Doors open at 7:50 AM. Advisory starts at 8:15 AM.</span>
                </p>
            </motion.div>

            {/* Enhanced Tabs */}
            <div className="flex justify-center mb-12 flex-wrap gap-4 relative z-10">
                <motion.button
                    onClick={() => setActiveTab('regular')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-3 rounded-full font-bold transition-all duration-300 relative overflow-hidden ${
                        activeTab === 'regular' 
                            ? 'bg-gradient-to-r from-argyle-blue to-cyan-500 text-white shadow-[0_0_30px_rgba(56,189,248,0.6)] border-2 border-argyle-blue/50' 
                            : 'bg-slate-800 text-gray-400 hover:bg-slate-700 border-2 border-transparent'
                    }`}
                >
                    {activeTab === 'regular' && (
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                        <Clock size={16} />
                    Standard (Odd/Even)
                    </span>
                </motion.button>
                <motion.button
                    onClick={() => setActiveTab('delay')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-3 rounded-full font-bold transition-all duration-300 relative overflow-hidden ${
                        activeTab === 'delay' 
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-[0_0_30px_rgba(168,85,247,0.6)] border-2 border-purple-500/50' 
                            : 'bg-slate-800 text-gray-400 hover:bg-slate-700 border-2 border-transparent'
                    }`}
                >
                    {activeTab === 'delay' && (
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                        <AlertTriangle size={16} />
                    2-Hour Delay
                    </span>
                </motion.button>
                <motion.button
                    onClick={() => setActiveTab('half')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-3 rounded-full font-bold transition-all duration-300 relative overflow-hidden ${
                        activeTab === 'half' 
                            ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-[0_0_30px_rgba(236,72,153,0.6)] border-2 border-pink-500/50' 
                            : 'bg-slate-800 text-gray-400 hover:bg-slate-700 border-2 border-transparent'
                    }`}
                >
                    {activeTab === 'half' && (
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                        <Sun size={16} />
                    Half Day
                    </span>
                </motion.button>
            </div>

            {/* Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Enhanced Schedule Table */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: -20, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                    className="glass-panel p-8 rounded-3xl relative overflow-hidden group shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500"
                >
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-argyle-blue/10 via-purple-500/10 to-pink-500/10 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
                    
                    {activeTab === 'regular' && (
                        <div>
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10 relative">
                                <div className="p-2 bg-argyle-blue/20 rounded-lg shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                                <Clock className="text-argyle-blue w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold text-white glow-text-blue">Regular Schedule</h2>
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-argyle-blue to-transparent" />
                            </div>

                            <div className="space-y-8">
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10 mb-6 relative overflow-hidden group hover:border-argyle-blue/30 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 bg-argyle-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
                                    <h4 className="text-gray-300 text-sm font-bold uppercase mb-2 flex items-center gap-2">
                                        <Sparkles size={14} className="text-argyle-blue" />
                                        Daily Morning Routine
                                    </h4>
                                    <Row label="Student Entry" time="7:50 AM" />
                                    <Row label="Lockers & Breakfast" time="7:50 - 8:15" />
                                    <Row label="Advisory (All Students)" time="8:15 - 8:36" />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h3 className="text-lg font-bold text-argyle-blue mb-4 flex items-center gap-2 glow-text-blue">
                                        <Zap size={16} />
                                        Odd Days
                                    </h3>
                                    <div className="space-y-3 font-mono text-sm">
                                        <Row label="Period 1" time="8:41 - 10:04" />
                                        <Row label="Period 3" time="10:09 - 11:32" />
                                        <Row label="Period 5 (Long Lunch Block)" time="11:37 - 1:32" />
                                        <Row label="Period 7" time="1:37 - 3:00" />
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <h3 className="text-lg font-bold text-purple-400 mb-4 flex items-center gap-2 glow-text-purple">
                                        <Zap size={16} />
                                        Even Days
                                    </h3>
                                    <div className="space-y-3 font-mono text-sm">
                                        <Row label="Period 2" time="8:41 - 10:04" />
                                        <Row label="Period 4" time="10:09 - 11:32" />
                                        <Row label="Period 6 (Long Lunch Block)" time="11:37 - 1:32" />
                                        <Row label="Period 8" time="1:37 - 3:00" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'delay' && (
                        <div>
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10 relative">
                                <div className="p-2 bg-purple-500/20 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                                <AlertTriangle className="text-purple-400 w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold text-white glow-text-purple">2-Hour Delay Schedule</h2>
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                            </div>
                            <p className="text-gray-400 mb-6 text-sm flex items-center gap-2">
                                <Calendar size={14} />
                                Doors open at 9:50 AM.
                            </p>

                            <div className="space-y-3 font-mono text-sm">
                                <Row label="Student Entry" time="9:50 AM" />
                                <Row label="Advisory" time="10:15 - 10:27" />
                                <Row label="Block 1 (Period 3/4)" time="10:32 - 11:18" />
                                <Row label="Lunch Block (Period 5/6)" time="11:18 - 1:18" />
                                <Row label="Block 2 (Period 7/8)" time="1:23 - 2:09" />
                                <Row label="Block 3 (Period 1/2)" time="2:14 - 3:00" />
                            </div>
                        </div>
                    )}

                    {activeTab === 'half' && (
                        <div>
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10 relative">
                                <div className="p-2 bg-pink-500/20 rounded-lg shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                                <Sun className="text-pink-400 w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold text-white glow-text-pink">Early Release (Half Day)</h2>
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
                            </div>
                            <p className="text-gray-400 mb-6 text-sm flex items-center gap-2">
                                <Calendar size={14} />
                                Periods rotate. Dismissal at 12:30 PM.
                            </p>

                            <div className="space-y-3 font-mono text-sm">
                                <Row label="Advisory" time="8:15 - 8:27" />
                                <Row label="Rotation Period 1" time="8:32 - 9:08" />
                                <Row label="Rotation Period 2" time="9:13 - 9:49" />
                                <Row label="Rotation Period 3" time="9:54 - 10:30" />
                                <div className="py-2 border-b border-white/5 bg-white/5 rounded px-2 -mx-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-white font-bold">Lunch Block (Rotation 4)</span>
                                        <span className="text-pink-400 font-bold font-mono">10:30 - 12:30</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 p-3 bg-pink-500/10 rounded-lg border border-pink-500/20 text-xs text-pink-300">
                                Note: Rotation Period 4 serves as the Lunch Block. See sidebar for specific shifts.
                            </div>
                        </div>
                    )}
                </motion.div>

                {/* Enhanced Info & Photos Column */}
                <div className="space-y-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-2 rounded-3xl overflow-hidden shadow-2xl relative group"
                    >
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-argyle-blue/20 via-purple-500/20 to-pink-500/20 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
                        <div className="relative h-64 bg-slate-800 rounded-2xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2604&auto=format&fit=crop"
                                alt="Student working on laptop"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <span className="text-white font-bold text-sm flex items-center gap-2">
                                    <Sparkles size={14} />
                                    Focus on Learning
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-panel p-6 rounded-2xl relative overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-500"
                    >
                        {/* Background glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 glow-text-purple">
                            <Bell size={18} />
                            Lunch Shifts
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                            {activeTab === 'half' && "Modified lunch shifts for Early Release days."}
                            {activeTab === 'delay' && "Modified lunch shifts for 2-Hr Delay."}
                            {activeTab === 'regular' && "Applies to the Long Lunch Block (Period 5/6)."}
                        </p>

                        {/* Dynamic Lunch Schedule */}
                        <div className="space-y-2 text-sm text-gray-300">
                            {activeTab === 'half' && (
                                <>
                                    <LunchRow label="A Lunch" time="10:30 - 11:00" active={true} />
                                    <LunchRow label="B Lunch" time="11:00 - 11:30" active={true} />
                                    <LunchRow label="C Lunch" time="11:30 - 12:00" active={true} />
                                    <LunchRow label="D Lunch" time="12:00 - 12:30" active={true} />
                                </>
                            )}

                            {activeTab === 'delay' && (
                                <>
                                    <LunchRow label="A Lunch" time="11:18 - 11:48" active={true} />
                                    <LunchRow label="B Lunch" time="11:48 - 12:18" active={true} />
                                    <LunchRow label="C Lunch" time="12:18 - 12:48" active={true} />
                                    <LunchRow label="D Lunch" time="12:48 - 1:18" active={true} />
                                </>
                            )}

                            {activeTab === 'regular' && (
                                <>
                                    <LunchRow label="A Lunch" time="11:32 - 12:02" active={true} />
                                    <LunchRow label="B Lunch" time="12:02 - 12:32" active={true} />
                                    <LunchRow label="C Lunch" time="12:32 - 1:02" active={true} />
                                    <LunchRow label="D Lunch" time="1:02 - 1:32" active={true} />
                                </>
                            )}
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

// Enhanced Helper components
const Row = ({ label, time }) => (
    <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ x: 5, scale: 1.02 }}
        className="flex justify-between items-center py-3 border-b border-white/5 hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent px-3 rounded-lg transition-all duration-300 group relative overflow-hidden"
    >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-argyle-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
        <span className="text-gray-300 group-hover:text-white transition-colors font-medium">{label}</span>
        <span className="text-white font-bold font-mono text-argyle-blue group-hover:text-purple-300 transition-colors glow-text-blue">{time}</span>
    </motion.div>
);

const LunchRow = ({ label, time, active }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: active ? 1 : 0.5, scale: 1 }}
        whileHover={{ scale: 1.05, x: 5 }}
        className={`flex justify-between p-3 rounded-lg transition-all duration-300 relative overflow-hidden group ${
            active 
                ? 'bg-gradient-to-r from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 border border-white/10 hover:border-purple-500/30' 
                : 'opacity-50'
        }`}
    >
        {active && (
            <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
        )}
        <span className="text-gray-300 group-hover:text-white transition-colors font-medium">{label}</span>
        <span className="text-argyle-blue font-mono font-bold group-hover:text-purple-300 transition-colors glow-text-blue">{time}</span>
    </motion.div>
);

export default Schedule;
