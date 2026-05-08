import React from 'react';
import Hero from '../components/Hero';
import { MapPin, Heart, Users, ArrowRight, Search, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
    const { t } = useLanguage();

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
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
                stiffness: 50,
                damping: 20
            }
        }
    };

    return (
        <div className="relative pb-20">
            <Hero />

            {/* Quick Links Section - Redesigned */}
            <div className="max-w-7xl mx-auto px-4 mt-12 relative z-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                >

                    {/* Find Food Card */}
                    <motion.div variants={itemVariants} className="group bg-fivestar-gray-light/80 backdrop-blur-xl border border-fivestar-gold/20 rounded-3xl p-8 hover:border-fivestar-gold/50 transition-all duration-300 shadow-2xl hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,184,0,0.2)] relative overflow-hidden">
                        {/* Glowing border effect on hover */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-fivestar-gold/30 to-fivestar-gold-dark/30 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500 -z-10" />
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-fivestar-gold/10 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(255,184,0,0.2)] group-hover:shadow-[0_0_25px_rgba(255,184,0,0.4)]">
                                <Search className="w-8 h-8 text-fivestar-gold" />
                            </div>
                            <span className="px-3 py-1 text-xs font-mono text-fivestar-gold bg-fivestar-gold/10 rounded-full border border-fivestar-gold/20">DIRECTORY</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-fivestar-gold-light transition-colors">{t('home.card.findFood.title')}</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            {t('home.card.findFood.desc')}
                        </p>
                        <Link to="/resource-map" className="inline-flex items-center text-fivestar-gold hover:text-fivestar-gold-light font-semibold transition-colors group-hover:translate-x-2 duration-300">
                            {t('home.card.findFood.button')} <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </motion.div>

                    {/* Get Help Card */}
                    <motion.div variants={itemVariants} className="group bg-fivestar-gray-light/80 backdrop-blur-xl border border-fivestar-gold/20 rounded-3xl p-8 hover:border-fivestar-gold/50 transition-all duration-300 shadow-2xl hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,184,0,0.2)] relative overflow-hidden">
                        {/* Glowing border effect on hover */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-fivestar-gold/30 to-fivestar-gold-dark/30 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500 -z-10" />
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-fivestar-gold/10 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(255,184,0,0.2)] group-hover:shadow-[0_0_25px_rgba(255,184,0,0.4)]">
                                <Heart className="w-8 h-8 text-fivestar-gold" />
                            </div>
                            <span className="px-3 py-1 text-xs font-mono text-fivestar-gold bg-fivestar-gold/10 rounded-full border border-fivestar-gold/20">EMERGENCY</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-fivestar-gold-light transition-colors">{t('home.card.getHelp.title')}</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            {t('home.card.getHelp.desc')}
                        </p>
                        <Link to="/get-help" className="inline-flex items-center text-fivestar-gold hover:text-fivestar-gold-light font-semibold transition-colors group-hover:translate-x-2 duration-300">
                            {t('home.card.getHelp.button')} <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </motion.div>

                    {/* Partners Card */}
                    <motion.div variants={itemVariants} className="group bg-fivestar-gray-light/80 backdrop-blur-xl border border-fivestar-gold/20 rounded-3xl p-8 hover:border-fivestar-gold/50 transition-all duration-300 shadow-2xl hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,184,0,0.2)] relative overflow-hidden">
                        {/* Glowing border effect on hover */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-fivestar-gold/30 to-fivestar-gold-dark/30 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500 -z-10" />
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-fivestar-gold/10 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(255,184,0,0.2)] group-hover:shadow-[0_0_25px_rgba(255,184,0,0.4)]">
                                <Users className="w-8 h-8 text-fivestar-gold" />
                            </div>
                            <span className="px-3 py-1 text-xs font-mono text-fivestar-gold bg-fivestar-gold/10 rounded-full border border-fivestar-gold/20">PARTNERSHIP</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-fivestar-gold-light transition-colors">{t('home.card.partners.title')}</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            {t('home.card.partners.desc')}
                        </p>
                        <Link to="/partner-portal" className="inline-flex items-center text-fivestar-gold hover:text-fivestar-gold-light font-semibold transition-colors group-hover:translate-x-2 duration-300">
                            {t('home.card.partners.button')} <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </motion.div>

                </motion.div>
            </div>

            {/* Key Features */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        <span className="text-fivestar-gold">{t('home.features.title')}</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        {t('home.features.desc')}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {/* Search Feature */}
                    <motion.div variants={itemVariants} className="p-8 rounded-3xl glass-card hover:bg-white/5 transition-all text-center group border border-fivestar-gold/20 hover:border-fivestar-gold/50 relative overflow-hidden hover:-translate-y-2 duration-500 shadow-lg hover:shadow-[0_20px_40px_rgba(255,184,0,0.2)]">
                        {/* Animated top border glow */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fivestar-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        {/* Inner glow on hover */}
                        <div className="absolute inset-0 rounded-3xl bg-fivestar-gold/10 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10" />
                        <div className="w-20 h-20 bg-fivestar-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-[0_0_20px_rgba(255,184,0,0.3)]">
                            <Search className="w-10 h-10 text-fivestar-gold" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{t('home.features.search.title')}</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            {t('home.features.search.desc')}
                        </p>
                        <div className="text-xs font-mono text-gray-500 border-t border-fivestar-gold/20 pt-4 group-hover:text-fivestar-gold/50 transition-colors">
                            {t('home.features.search.badge')}
                        </div>
                    </motion.div>

                    {/* Privacy Feature */}
                    <motion.div variants={itemVariants} className="p-8 rounded-3xl glass-card hover:bg-white/5 transition-all text-center group border border-fivestar-gold/20 hover:border-fivestar-gold/50 relative overflow-hidden hover:-translate-y-2 duration-500 shadow-lg hover:shadow-[0_20px_40px_rgba(255,184,0,0.2)]">
                        {/* Animated top border glow */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fivestar-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        {/* Inner glow on hover */}
                        <div className="absolute inset-0 rounded-3xl bg-fivestar-gold/10 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10" />
                        <div className="w-20 h-20 bg-fivestar-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-[0_0_20px_rgba(255,184,0,0.3)]">
                            <Shield className="w-10 h-10 text-fivestar-gold" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{t('home.features.privacy.title')}</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            {t('home.features.privacy.desc')}
                        </p>
                        <div className="text-xs font-mono text-gray-500 border-t border-fivestar-gold/20 pt-4 group-hover:text-fivestar-gold/50 transition-colors">
                            {t('home.features.privacy.badge')}
                        </div>
                    </motion.div>

                    {/* 24/7 Access Feature */}
                    <motion.div variants={itemVariants} className="p-8 rounded-3xl glass-card hover:bg-white/5 transition-all text-center group border border-fivestar-gold/20 hover:border-fivestar-gold/50 relative overflow-hidden hover:-translate-y-2 duration-500 shadow-lg hover:shadow-[0_20px_40px_rgba(255,184,0,0.2)]">
                        {/* Animated top border glow */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fivestar-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        {/* Inner glow on hover */}
                        <div className="absolute inset-0 rounded-3xl bg-fivestar-gold/10 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10" />
                        <div className="w-20 h-20 bg-fivestar-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-[0_0_20px_rgba(255,184,0,0.3)]">
                            <Clock className="w-10 h-10 text-fivestar-gold" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{t('home.features.access.title')}</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            {t('home.features.access.desc')}
                        </p>
                        <div className="text-xs font-mono text-gray-500 border-t border-fivestar-gold/20 pt-4 group-hover:text-fivestar-gold/50 transition-colors">
                            {t('home.features.access.badge')}
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="py-20 text-center border-t border-fivestar-gold/20 relative overflow-hidden shadow-inner shadow-fivestar-gold/10"
            >
                {/* Background Effects with more glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-fivestar-gold/10 to-transparent blur-3xl"></div>
                <div className="absolute top-0 left-1/4 w-40 h-40 bg-fivestar-gold/20 rounded-full blur-[100px] animate-pulse-slow shadow-[0_0_100px_rgba(255,184,0,0.4)]"></div>
                <div className="absolute bottom-0 right-1/4 w-52 h-52 bg-fivestar-gold-dark/20 rounded-full blur-[120px] animate-pulse-slow delay-1000 shadow-[0_0_120px_rgba(255,184,0,0.4)]"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-fivestar-gold/20 to-fivestar-gold-dark/20 border border-fivestar-gold/30 backdrop-blur-sm mb-8"
                    >
                        <Heart className="w-5 h-5 text-fivestar-gold mr-2" />
                        <span className="text-sm font-medium text-fivestar-gold">{t('home.cta.badge')}</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
                    >
                        {t('home.cta.title')}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
                    >
                        {t('home.cta.desc')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <motion.a
                            href="/resource-map"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 184, 0, 0.7)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                                if (window.triggerParticleCelebration) {
                                    window.triggerParticleCelebration(e.clientX, e.clientY);
                                }
                            }}
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-fivestar-gold to-fivestar-gold-dark text-fivestar-gray font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group cursor-pointer"
                        >
                            <span className="relative z-10">{t('home.cta.button1')}</span>
                            <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            {/* Button shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </motion.a>

                        <motion.a
                            href="/partner-portal"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 184, 0, 0.7)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                                if (window.triggerParticleCelebration) {
                                    window.triggerParticleCelebration(e.clientX, e.clientY);
                                }
                            }}
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-fivestar-gold to-fivestar-gold-dark text-fivestar-gray font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group cursor-pointer"
                        >
                            {/* Animated background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-fivestar-gold-light to-fivestar-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative z-10">{t('home.cta.button2')}</span>
                            <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            {/* Button shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </motion.a>
                    </motion.div>

                    {/* Animated elements */}
                    <div className="absolute top-10 left-10 w-2 h-2 bg-fivestar-gold rounded-full animate-bounce"></div>
                    <div className="absolute top-20 right-20 w-1 h-1 bg-fivestar-gold rounded-full animate-ping"></div>
                    <div className="absolute bottom-10 left-1/3 w-3 h-3 bg-fivestar-gold rounded-full animate-pulse"></div>
                </div>
            </motion.div>
        </div>
    );
};

export default Home;