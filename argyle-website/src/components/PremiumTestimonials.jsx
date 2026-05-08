// PremiumTestimonials.jsx - Enterprise-grade testimonial carousel
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star, Award, TrendingUp } from 'lucide-react';

const PremiumTestimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const testimonials = [
        {
            name: "Dr. Sarah Martinez",
            role: "Parent & Technology Director",
            school: "Montgomery County Public Schools",
            avatar: "SM",
            rating: 5,
            quote: "Argyle's AI learning platform transformed my daughter's approach to STEM subjects. The personalized tutoring and progress tracking gave her confidence she never had before. As a tech professional, I'm impressed by the sophisticated AI capabilities.",
            achievement: "Student improved from C to A+ in Math",
            metrics: { improvement: "+85%", satisfaction: "98%" }
        },
        {
            name: "Principal James Allrich",
            role: "Principal & Educational Leader",
            school: "Argyle Middle School",
            avatar: "JA",
            rating: 5,
            quote: "This platform represents the future of education. We've seen unprecedented engagement and learning outcomes since implementation. The AI adapts to each student's learning style, creating truly personalized education experiences.",
            achievement: "2022 Maryland Principal of the Year",
            metrics: { engagement: "+240%", outcomes: "+65%" }
        },
        {
            name: "Maria Gonzalez",
            role: "8th Grade Student",
            school: "Argyle Middle School",
            avatar: "MG",
            rating: 5,
            quote: "The AI tutor explains things in ways I actually understand. It's like having a teacher available 24/7 who knows exactly what I'm struggling with. I went from hating math to wanting to learn more!",
            achievement: "Top 10% in district math assessment",
            metrics: { confidence: "+200%", participation: "+150%" }
        },
        {
            name: "Dr. Robert Chen",
            role: "Superintendent",
            school: "Fairfax County Public Schools",
            avatar: "RC",
            rating: 5,
            quote: "In education technology, execution matters more than features. Argyle delivers on both. Their AI platform not only engages students but delivers measurable academic improvements. This is enterprise-grade edtech.",
            achievement: "District-wide implementation",
            metrics: { roi: "340%", scalability: "100%" }
        }
    ];

    useEffect(() => {
        if (!isAutoPlaying) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);

        return () => clearInterval(timer);
    }, [isAutoPlaying, testimonials.length]);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const goToTestimonial = (index) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <div className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
            {/* Premium Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_rgba(59,130,246,0.05),transparent_50%)]"></div>
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,_rgba(147,51,234,0.05),transparent_50%)]"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/3 via-transparent to-transparent rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-white/10 mb-6">
                        <Award className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-sm font-medium text-green-300">Trusted by Educators</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-green-100 to-blue-100 bg-clip-text text-transparent mb-4">
                        Success Stories
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Real results from real educators and students transforming education through AI-powered learning
                    </p>
                </motion.div>

                {/* Main Testimonial Card */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
                        >

                            {/* Background Pattern */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-green-500/5 to-cyan-500/5 rounded-full blur-2xl"></div>

                            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

                                {/* Left Side - Avatar and Basic Info */}
                                <div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                                    {/* Avatar */}
                                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-2xl font-bold text-white mb-4 shadow-lg shadow-blue-500/25">
                                        {currentTestimonial.avatar}
                                    </div>

                                    {/* Name and Role */}
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-white mb-1">
                                            {currentTestimonial.name}
                                        </h3>
                                        <p className="text-blue-400 font-medium mb-1">
                                            {currentTestimonial.role}
                                        </p>
                                        <p className="text-gray-400 text-sm">
                                            {currentTestimonial.school}
                                        </p>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center space-x-1 mb-4">
                                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>

                                    {/* Achievement Badge */}
                                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-300 text-sm font-medium">
                                        <Award className="w-4 h-4 mr-2" />
                                        {currentTestimonial.achievement}
                                    </div>
                                </div>

                                {/* Right Side - Quote and Metrics */}
                                <div className="lg:col-span-2">

                                    {/* Quote */}
                                    <div className="relative mb-8">
                                        <Quote className="w-12 h-12 text-blue-400/30 absolute -top-2 -left-2" />
                                        <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed pl-8 italic">
                                            "{currentTestimonial.quote}"
                                        </blockquote>
                                    </div>

                                    {/* Metrics Grid */}
                                    <div className="grid grid-cols-2 gap-4">
                                        {Object.entries(currentTestimonial.metrics).map(([key, value]) => (
                                            <div key={key} className="bg-slate-700/30 rounded-xl p-4 border border-white/5">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-sm font-medium text-gray-400 capitalize">
                                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                                    </span>
                                                    <TrendingUp className="w-4 h-4 text-green-400" />
                                                </div>
                                                <div className="text-2xl font-bold text-white">
                                                    {value}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-slate-700/80 transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextTestimonial}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-slate-700/80 transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-8 space-x-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToTestimonial(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentIndex
                                    ? 'bg-blue-500 scale-125 shadow-lg shadow-blue-500/50'
                                    : 'bg-gray-600 hover:bg-gray-500'
                            }`}
                        />
                    ))}
                </div>

                {/* Stats Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
                >
                    <div className="bg-slate-800/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                        <div className="text-3xl font-bold text-blue-400 mb-2">25,000+</div>
                        <div className="text-gray-400">Students Impacted</div>
                    </div>
                    <div className="bg-slate-800/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                        <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
                        <div className="text-gray-400">Satisfaction Rate</div>
                    </div>
                    <div className="bg-slate-800/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                        <div className="text-3xl font-bold text-purple-400 mb-2">150+</div>
                        <div className="text-gray-400">Languages Supported</div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PremiumTestimonials;



