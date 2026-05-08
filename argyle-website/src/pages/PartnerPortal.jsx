import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Globe, Shield, CheckCircle, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PartnerPortal = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        organizationName: '',
        contactName: '',
        email: '',
        phone: '',
        address: '',
        message: ''
    });

    const benefits = [
        {
            icon: <Globe className="w-6 h-6" />,
            title: 'Increased Visibility',
            description: 'Your organization will be listed in our directory, making it easier for people to find you when they need help.'
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: 'Reach More People',
            description: 'Connect with individuals and families in your community who are looking for food assistance.'
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: 'Easy Management',
            description: 'Update your information, hours, and services in real-time to keep your listing accurate.'
        },
        {
            icon: <CheckCircle className="w-6 h-6" />,
            title: 'Impact Tracking',
            description: 'See how many people are viewing your listing and accessing your services.'
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your interest in partnering with 5 Star Solutions! We will contact you shortly.');
        setFormData({
            organizationName: '',
            contactName: '',
            email: '',
            phone: '',
            address: '',
            message: ''
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen pt-24 pb-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-fivestar-gold/20 border border-fivestar-gold/30 rounded-full mb-6">
                        <Building2 className="text-fivestar-gold w-5 h-5" />
                        <span className="text-fivestar-gold font-medium">Partner With Us</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        {t('partners.title')}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        {t('partners.body')}
                    </p>
                </motion.div>

                {/* Benefits */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-16"
                >
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Why Partner With 5 Star Solutions?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="bg-fivestar-gray-light border border-fivestar-gold/20 rounded-2xl p-6 hover:border-fivestar-gold/50 transition-all duration-300"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="p-3 bg-fivestar-gold/20 rounded-full">
                                        {React.cloneElement(benefit.icon, { className: 'text-fivestar-gold' })}
                                    </div>
                                </div>
                                <h3 className="font-bold text-white text-center mb-2">{benefit.title}</h3>
                                <p className="text-gray-400 text-sm text-center">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Partnership Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-fivestar-gray-light border border-fivestar-gold/20 rounded-2xl p-8"
                >
                    <h2 className="text-2xl font-bold text-white mb-6">Request Partnership</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">Organization Name *</label>
                                <input
                                    type="text"
                                    name="organizationName"
                                    value={formData.organizationName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-fivestar-gray border border-fivestar-gold/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-fivestar-gold focus:ring-2 focus:ring-fivestar-gold/20 transition-all"
                                    placeholder="Your organization name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">Contact Name *</label>
                                <input
                                    type="text"
                                    name="contactName"
                                    value={formData.contactName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-fivestar-gray border border-fivestar-gold/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-fivestar-gold focus:ring-2 focus:ring-fivestar-gold/20 transition-all"
                                    placeholder="Your name"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-fivestar-gray border border-fivestar-gold/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-fivestar-gold focus:ring-2 focus:ring-fivestar-gold/20 transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-fivestar-gray border border-fivestar-gold/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-fivestar-gold focus:ring-2 focus:ring-fivestar-gold/20 transition-all"
                                    placeholder="(555) 123-4567"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-300 mb-2 font-medium">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-fivestar-gray border border-fivestar-gold/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-fivestar-gold focus:ring-2 focus:ring-fivestar-gold/20 transition-all"
                                placeholder="Your organization address"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-300 mb-2 font-medium">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-3 bg-fivestar-gray border border-fivestar-gold/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-fivestar-gold focus:ring-2 focus:ring-fivestar-gold/20 transition-all resize-none"
                                placeholder="Tell us about your organization and how you'd like to partner with us..."
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-fivestar-gold text-fivestar-gray rounded-xl font-bold hover:bg-fivestar-gold-light transition-colors"
                        >
                            <Send className="w-5 h-5" />
                            Submit Partnership Request
                        </motion.button>
                    </form>
                </motion.div>

                {/* Current Partners */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-16"
                >
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Our Partner Network</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-fivestar-gray-light border border-fivestar-gold/20 rounded-2xl p-6 text-center">
                            <div className="text-4xl font-bold text-fivestar-gold mb-2">10+</div>
                            <div className="text-gray-300">Partner Organizations</div>
                        </div>
                        <div className="bg-fivestar-gray-light border border-fivestar-gold/20 rounded-2xl p-6 text-center">
                            <div className="text-4xl font-bold text-fivestar-gold mb-2">5,000+</div>
                            <div className="text-gray-300">People Served Monthly</div>
                        </div>
                        <div className="bg-fivestar-gray-light border border-fivestar-gold/20 rounded-2xl p-6 text-center">
                            <div className="text-4xl font-bold text-fivestar-gold mb-2">3</div>
                            <div className="text-gray-300">Languages Supported</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PartnerPortal;
