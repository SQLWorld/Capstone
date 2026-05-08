import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Users, Globe, Award, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    const missionCards = [
        {
            icon: <Target className="w-8 h-8" />,
            title: t('about.mission.title'),
            description: t('about.mission.desc'),
            color: 'from-fivestar-gold to-fivestar-gold-light'
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: t('about.sdg.title'),
            description: t('about.sdg.desc'),
            color: 'from-fivestar-gold-dark to-fivestar-gold'
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: t('about.community.title'),
            description: t('about.community.desc'),
            color: 'from-fivestar-gold to-fivestar-gold-dark'
        }
    ];

    const stats = [
        { number: '10+', label: t('about.stats.partners') },
        { number: '5,000+', label: t('about.stats.served') },
        { number: '3', label: t('about.stats.languages') },
        { number: '24/7', label: t('about.stats.access') }
    ];

    const values = [
        {
            icon: <Globe className="w-6 h-6" />,
            title: t('about.values.accessibility.title'),
            description: t('about.values.accessibility.desc')
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: t('about.values.efficiency.title'),
            description: t('about.values.efficiency.desc')
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: t('about.values.privacy.title'),
            description: t('about.values.privacy.desc')
        }
    ];


    return (
        <div className="min-h-screen pt-24 pb-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-fivestar-gold/20 border border-fivestar-gold/30 rounded-full mb-6">
                        <Heart className="text-fivestar-gold w-5 h-5" />
                        <span className="text-fivestar-gold font-medium">{t('about.header')}</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        {t('about.heroTitle').split('Hunger-Free').map((part, i, arr) => 
                            i < arr.length - 1 ? <>{part}<span key={i} className="text-fivestar-gold">Hunger-Free</span></> : part
                        )}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        {t('about.heroDesc')}
                    </p>
                </motion.div>

                {/* Mission Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {missionCards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-fivestar-gray-light border border-fivestar-gold/20 rounded-2xl p-8 hover:border-fivestar-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-fivestar-gold/10"
                        >
                            <div className={`inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-br ${card.color} mb-6`}>
                                <div className="text-fivestar-gray">
                                    {card.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{card.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            className="bg-fivestar-gray-light border border-fivestar-gold/20 rounded-2xl p-6 text-center"
                        >
                            <div className="text-4xl font-bold text-fivestar-gold mb-2">{stat.number}</div>
                            <div className="text-gray-400 text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Values */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">{t('about.values.title')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                                className="bg-fivestar-gray-light border border-fivestar-gold/20 rounded-2xl p-6"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-fivestar-gold/20 rounded-lg">
                                        {React.cloneElement(value.icon, { className: 'text-fivestar-gold w-6 h-6' })}
                                    </div>
                                    <h3 className="font-bold text-white text-lg">{value.title}</h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* SDG 2 Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-gradient-to-br from-fivestar-gold/20 to-fivestar-gold-dark/10 border border-fivestar-gold/30 rounded-2xl p-8 md:p-12"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-fivestar-gold/30 border border-fivestar-gold/50 rounded-full mb-6">
                                <Target className="text-fivestar-gold w-5 h-5" />
                                <span className="text-fivestar-gold font-bold">{t('about.sdg.title')}</span>
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4">{t('about.sdg.section.title')}</h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                {t('about.sdg.section.desc')}
                            </p>
                            <a
                                href="https://sdgs.un.org/goals/goal2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-fivestar-gold text-fivestar-gray rounded-xl font-bold hover:bg-fivestar-gold-light transition-colors"
                            >
                                {t('about.sdg.button')}
                                <Zap className="w-4 h-4" />
                            </a>
                        </div>
                        <div className="text-center">
                            <div className="inline-block p-3 bg-fivestar-gray-light rounded-2xl border border-fivestar-gold/30">
                                <img
                                    src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-02.jpg"
                                    alt="SDG 2: Zero Hunger"
                                    className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-xl"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-400 text-sm">
                        {t('about.footer')}
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;