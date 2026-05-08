// InteractiveDashboard.jsx - Advanced AI learning analytics dashboard
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    BarChart3,
    TrendingUp,
    Brain,
    Target,
    Clock,
    Award,
    Zap,
    BookOpen,
    CheckCircle,
    AlertCircle,
    Star,
    Calendar,
    Users
} from 'lucide-react';

const InteractiveDashboard = () => {
    const [selectedMetric, setSelectedMetric] = useState('progress');
    const [hoveredItem, setHoveredItem] = useState(null);

    // Mock AI learning data - in real app this would come from API
    const dashboardData = {
        progress: {
            title: "Learning Progress",
            icon: TrendingUp,
            color: "from-green-500 to-emerald-500",
            data: [
                { subject: "Math", progress: 87, trend: "+5%", status: "excellent" },
                { subject: "Science", progress: 92, trend: "+3%", status: "excellent" },
                { subject: "English", progress: 78, trend: "+8%", status: "good" },
                { subject: "History", progress: 85, trend: "+2%", status: "excellent" },
                { subject: "Tech", progress: 94, trend: "+6%", status: "excellent" }
            ]
        },
        achievements: {
            title: "AI Achievements",
            icon: Award,
            color: "from-yellow-500 to-orange-500",
            data: [
                { name: "Math Master", description: "Solved 100+ equations", unlocked: true, rarity: "rare" },
                { name: "Science Explorer", description: "Completed 50 experiments", unlocked: true, rarity: "common" },
                { name: "Reading Champion", description: "Read 25 books", unlocked: false, rarity: "epic" },
                { name: "Code Creator", description: "Built 10 projects", unlocked: true, rarity: "legendary" },
                { name: "Global Citizen", description: "Learned 5 languages", unlocked: false, rarity: "mythic" }
            ]
        },
        analytics: {
            title: "AI Insights",
            icon: Brain,
            color: "from-purple-500 to-pink-500",
            data: [
                { metric: "Study Streak", value: "12 days", trend: "+2", icon: Calendar },
                { metric: "Focus Time", value: "8.5 hrs", trend: "+15%", icon: Clock },
                { metric: "Questions Asked", value: "247", trend: "+12%", icon: BookOpen },
                { metric: "AI Interactions", value: "1,842", trend: "+8%", icon: Users },
                { metric: "Skills Mastered", value: "23", trend: "+5", icon: Target }
            ]
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'excellent': return 'from-green-400 to-green-600';
            case 'good': return 'from-yellow-400 to-yellow-600';
            case 'needs-work': return 'from-red-400 to-red-600';
            default: return 'from-gray-400 to-gray-600';
        }
    };

    const getRarityColor = (rarity) => {
        switch (rarity) {
            case 'common': return 'from-gray-400 to-gray-500';
            case 'rare': return 'from-blue-400 to-blue-500';
            case 'epic': return 'from-purple-400 to-purple-500';
            case 'legendary': return 'from-orange-400 to-orange-500';
            case 'mythic': return 'from-red-400 to-pink-500';
            default: return 'from-gray-400 to-gray-500';
        }
    };

    const currentData = dashboardData[selectedMetric];

    return (
        <div className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
            {/* Advanced Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl animate-float-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl animate-float-slower"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-transparent via-cyan-500/5 to-transparent rounded-full animate-spin-slow"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 mb-6">
                        <Brain className="w-4 h-4 text-blue-400 mr-2" />
                        <span className="text-sm font-medium text-blue-300">AI Learning Analytics</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4">
                        Intelligent Learning Dashboard
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Advanced AI-powered insights into your learning journey, personalized recommendations, and academic progress tracking.
                    </p>
                </motion.div>

                {/* Metric Selector */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center mb-12"
                >
                    <div className="flex bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-1">
                        {Object.entries(dashboardData).map(([key, config]) => (
                            <button
                                key={key}
                                onClick={() => setSelectedMetric(key)}
                                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                                    selectedMetric === key
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                <config.icon className="w-5 h-5 mr-2" />
                                {config.title}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Content Area */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedMetric}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
                    >
                        {currentData.data.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative"
                                onHoverStart={() => setHoveredItem(index)}
                                onHoverEnd={() => setHoveredItem(null)}
                            >
                                {/* Card */}
                                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1">

                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${currentData.color} shadow-lg`}>
                                            {selectedMetric === 'analytics' ? (
                                                <item.icon className="w-6 h-6 text-white" />
                                            ) : selectedMetric === 'achievements' ? (
                                                <Award className="w-6 h-6 text-white" />
                                            ) : (
                                                <BarChart3 className="w-6 h-6 text-white" />
                                            )}
                                        </div>

                                        {selectedMetric === 'progress' && (
                                            <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getStatusColor(item.status)} text-white`}>
                                                {item.status}
                                            </div>
                                        )}

                                        {selectedMetric === 'achievements' && (
                                            <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getRarityColor(item.rarity)} text-white`}>
                                                {item.rarity}
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-3">
                                        <div>
                                            <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                                                {selectedMetric === 'progress' ? item.subject :
                                                 selectedMetric === 'achievements' ? item.name :
                                                 item.metric}
                                            </h3>

                                            {selectedMetric === 'achievements' && (
                                                <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                                            )}
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                {selectedMetric === 'progress' && (
                                                    <>
                                                        <span className="text-2xl font-bold text-white">{item.progress}%</span>
                                                        <span className="text-sm text-green-400 font-medium">{item.trend}</span>
                                                    </>
                                                )}

                                                {selectedMetric === 'achievements' && (
                                                    <div className="flex items-center space-x-2">
                                                        {item.unlocked ? (
                                                            <CheckCircle className="w-5 h-5 text-green-400" />
                                                        ) : (
                                                            <AlertCircle className="w-5 h-5 text-gray-500" />
                                                        )}
                                                        <span className={`text-sm font-medium ${item.unlocked ? 'text-green-400' : 'text-gray-500'}`}>
                                                            {item.unlocked ? 'Unlocked' : 'Locked'}
                                                        </span>
                                                    </div>
                                                )}

                                                {selectedMetric === 'analytics' && (
                                                    <>
                                                        <span className="text-2xl font-bold text-white">{item.value}</span>
                                                        <span className="text-sm text-blue-400 font-medium">{item.trend}</span>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        {/* Progress Bar for progress metric */}
                                        {selectedMetric === 'progress' && (
                                            <div className="mt-4">
                                                <div className="w-full bg-slate-700 rounded-full h-2">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${item.progress}%` }}
                                                        transition={{ duration: 1, delay: index * 0.1 }}
                                                        className={`h-2 rounded-full bg-gradient-to-r ${getStatusColor(item.status)}`}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Hover effect overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Glow effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${currentData.color} opacity-0 group-hover:opacity-5 rounded-2xl blur-xl transition-opacity duration-500 -z-10`}></div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* AI Insights Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10">
                        <Zap className="w-5 h-5 text-yellow-400 mr-3" />
                        <div className="text-left">
                            <div className="text-sm font-medium text-white">AI-Powered Insights</div>
                            <div className="text-xs text-gray-400">Personalized learning recommendations updated daily</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default InteractiveDashboard;



