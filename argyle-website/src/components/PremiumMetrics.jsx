// PremiumMetrics.jsx - Enterprise-grade metrics dashboard
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, Award, Target, Zap } from 'lucide-react';

const PremiumMetrics = () => {
    const metrics = [
        {
            icon: Users,
            value: "25,000+",
            label: "Students Impacted",
            description: "Since 2015",
            color: "from-blue-500 to-cyan-500",
            trend: "+12%"
        },
        {
            icon: Award,
            value: "#1",
            label: "Maryland Principal",
            description: "2022 Winner",
            color: "from-yellow-500 to-orange-500",
            trend: "🏆"
        },
        {
            icon: Target,
            value: "98%",
            label: "Parent Satisfaction",
            description: "Annual Survey",
            color: "from-green-500 to-emerald-500",
            trend: "+2%"
        },
        {
            icon: Zap,
            value: "1:1",
            label: "Device Ratio",
            description: "iPad Program",
            color: "from-purple-500 to-pink-500",
            trend: "📱"
        },
        {
            icon: Clock,
            value: "24/7",
            label: "AI Support",
            description: "Always Available",
            color: "from-indigo-500 to-blue-500",
            trend: "🤖"
        },
        {
            icon: TrendingUp,
            value: "150+",
            label: "Languages",
            description: "Global Reach",
            color: "from-red-500 to-pink-500",
            trend: "🌍"
        }
    ];

    return (
        <div className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4">
                        Proven Excellence
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Industry-leading metrics that demonstrate our commitment to educational innovation
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1">

                                {/* Icon with gradient background */}
                                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${metric.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    <metric.icon className="w-8 h-8 text-white" />
                                </div>

                                {/* Value */}
                                <div className="mb-2">
                                    <span className="text-4xl font-bold text-white group-hover:text-blue-300 transition-colors">
                                        {metric.value}
                                    </span>
                                </div>

                                {/* Label */}
                                <div className="mb-1">
                                    <span className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors">
                                        {metric.label}
                                    </span>
                                </div>

                                {/* Description */}
                                <div className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors mb-4">
                                    {metric.description}
                                </div>

                                {/* Trend indicator */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-sm font-medium text-green-400">
                                            {metric.trend}
                                        </span>
                                        <span className="text-xs text-gray-500">vs last year</span>
                                    </div>
                                </div>

                                {/* Hover effect overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Glow effect on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-500 -z-10`}></div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur-sm">
                        <span className="text-sm text-gray-300 mr-2">Trusted by</span>
                        <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            25,000+ Students & Families
                        </span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PremiumMetrics;



