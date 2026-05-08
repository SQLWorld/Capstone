import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, AlertTriangle, Heart, Clock, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const GetHelp = () => {
    const { t } = useLanguage();

    const emergencyActions = [
        {
            icon: <MapPin className="w-6 h-6" />,
            title: t('getHelp.action.findFood'),
            description: 'Search for food banks, soup kitchens, and pantries near you',
            link: '/resource-map',
            color: 'bg-fivestar-gold',
            textColor: 'text-fivestar-gray'
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: t('getHelp.action.call211'),
            description: 'Call 2-1-1 for immediate assistance and local resources',
            link: 'tel:211',
            color: 'bg-fivestar-gold',
            textColor: 'text-fivestar-gray'
        },
        {
            icon: <AlertTriangle className="w-6 h-6" />,
            title: t('getHelp.action.emergency'),
            description: 'Call 9-1-1 for life-threatening emergencies only',
            link: 'tel:911',
            color: 'bg-red-500',
            textColor: 'text-white'
        }
    ];

    const quickTips = [
        {
            icon: <Clock className="w-5 h-5" />,
            title: 'Check Hours',
            description: 'Food banks often have specific operating hours. Call ahead to confirm availability.'
        },
        {
            icon: <Heart className="w-5 h-5" />,
            title: 'Bring Identification',
            description: 'Many locations require proof of address or ID. Bring what you have available.'
        },
        {
            icon: <Navigation className="w-5 h-5" />,
            title: 'Plan Your Visit',
            description: 'Use the map to get directions and plan the best route to the location.'
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-fivestar-gold/20 border border-fivestar-gold/30 rounded-full mb-6">
                        <Heart className="text-fivestar-gold w-5 h-5" />
                        <span className="text-fivestar-gold font-medium">Immediate Help Available</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        {t('getHelp.title')}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        {t('getHelp.body')}
                    </p>
                </motion.div>

                {/* Emergency Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {emergencyActions.map((action, index) => (
                        <motion.a
                            key={index}
                            href={action.link}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-6 rounded-2xl border-2 border-fivestar-gold/30 ${action.color} ${action.textColor} hover:shadow-lg hover:shadow-fivestar-gold/20 transition-all duration-300 group`}
                            target={action.link.startsWith('tel') ? '_self' : '_self'}
                            rel={action.link.startsWith('tel') ? '' : 'noopener noreferrer'}
                        >
                            <div className="flex justify-center mb-4">
                                <div className="p-3 bg-white/20 rounded-full">
                                    {action.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-2">{action.title}</h3>
                            <p className="text-center opacity-90 text-sm">{action.description}</p>
                        </motion.a>
                    ))}
                </div>

                {/* Quick Tips */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-bold text-white mb-6">Quick Tips</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {quickTips.map((tip, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className="bg-fivestar-gray-light border border-fivestar-gold/20 rounded-xl p-5"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-fivestar-gold/20 rounded-lg">
                                        {React.cloneElement(tip.icon, { className: 'text-fivestar-gold w-5 h-5' })}
                                    </div>
                                    <h3 className="font-bold text-white">{tip.title}</h3>
                                </div>
                                <p className="text-gray-400 text-sm">{tip.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Privacy Notice */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-fivestar-gray-light border border-fivestar-gold/20 rounded-2xl p-6"
                >
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-fivestar-gold/20 rounded-lg">
                            <Heart className="text-fivestar-gold w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-2">Your Privacy Matters</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                5 Star Solutions is committed to protecting your privacy. Your search history and location information 
                                are not stored or shared. This platform is designed to help you find resources safely and privately.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Additional Resources */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12"
                >
                    <h2 className="text-2xl font-bold text-white mb-6">Additional Resources</h2>
                    <div className="space-y-4">
                        <a
                            href="https://www.usa.gov/hunger"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-4 bg-fivestar-gray-light border border-fivestar-gold/20 rounded-xl hover:border-fivestar-gold/50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-bold text-white">USA.gov - Food Assistance</h3>
                                    <p className="text-gray-400 text-sm">Federal food assistance programs and resources</p>
                                </div>
                                <Navigation className="text-fivestar-gold w-5 h-5" />
                            </div>
                        </a>
                        <a
                            href="https://www.fns.usda.gov/snap/supplemental-nutrition-assistance-program"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-4 bg-fivestar-gray-light border border-fivestar-gold/20 rounded-xl hover:border-fivestar-gold/50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-bold text-white">SNAP Benefits</h3>
                                    <p className="text-gray-400 text-sm">Supplemental Nutrition Assistance Program information</p>
                                </div>
                                <Navigation className="text-fivestar-gold w-5 h-5" />
                            </div>
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default GetHelp;
