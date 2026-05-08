import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Phone, Clock, Filter, Navigation, Star } from 'lucide-react';
import { FOOD_RESOURCES, RESOURCE_TYPES } from '../data/foodResources';
import { useLanguage } from '../context/LanguageContext';

const ResourceMap = () => {
    const { t } = useLanguage();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('all');

    const filteredResources = useMemo(() => {
        return FOOD_RESOURCES.filter(resource => {
            const matchesSearch = 
                resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                resource.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                resource.phone.includes(searchTerm);
            
            const matchesType = selectedType === 'all' || resource.type === selectedType;
            
            return matchesSearch && matchesType;
        });
    }, [searchTerm, selectedType]);

    const getTypeIcon = (type) => {
        const typeObj = RESOURCE_TYPES.find(t => t.id === type);
        return typeObj ? typeObj.icon : '🍽️';
    };

    const getDirections = (address) => {
        const encoded = encodeURIComponent(address);
        return `https://www.google.com/maps/search/?api=1&query=${encoded}`;
    };

    return (
        <div className="min-h-screen pt-24 pb-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-fivestar-gold mb-4">
                        {t('resources.title')}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        {t('resources.searchPlaceholder')}
                    </p>
                </motion.div>

                {/* Search and Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                >
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder={t('resources.searchPlaceholder')}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-fivestar-gray-light border border-fivestar-gold/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-fivestar-gold focus:ring-2 focus:ring-fivestar-gold/20 transition-all"
                            />
                        </div>
                        <div className="flex items-center gap-2 px-4 py-4 bg-fivestar-gray-light border border-fivestar-gold/30 rounded-2xl">
                            <Filter className="text-fivestar-gold w-5 h-5" />
                            <span className="text-gray-300">{t('resources.filters.type')}:</span>
                        </div>
                    </div>

                    {/* Type Filters */}
                    <div className="flex flex-wrap gap-3">
                        {RESOURCE_TYPES.map((type) => (
                            <motion.button
                                key={type.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedType(type.id)}
                                className={`px-6 py-3 rounded-full font-medium transition-all ${
                                    selectedType === type.id
                                        ? 'bg-fivestar-gold text-fivestar-gray shadow-lg shadow-fivestar-gold/30'
                                        : 'bg-fivestar-gray-light text-gray-300 hover:bg-fivestar-gray-light/80'
                                }`}
                            >
                                <span className="mr-2">{type.icon}</span>
                                {type.name}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Results Count */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-6 text-gray-400"
                >
                    {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'} found
                </motion.div>

                {/* Resource Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredResources.map((resource, index) => (
                        <motion.div
                            key={resource.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-fivestar-gray-light border border-fivestar-gold/20 rounded-2xl p-6 hover:border-fivestar-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-fivestar-gold/10 group"
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-3xl">{getTypeIcon(resource.type)}</span>
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-fivestar-gold transition-colors">
                                            {resource.name}
                                        </h3>
                                        <span className="text-sm text-fivestar-gold capitalize">
                                            {resource.type.replace('-', ' ')}
                                        </span>
                                    </div>
                                </div>
                                <Star className="text-fivestar-gold w-5 h-5" />
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-3 mb-3">
                                <MapPin className="text-gray-400 w-5 h-5 mt-1 flex-shrink-0" />
                                <p className="text-gray-300">{resource.address}</p>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-3 mb-3">
                                <Phone className="text-gray-400 w-5 h-5 flex-shrink-0" />
                                <a 
                                    href={`tel:${resource.phone}`}
                                    className="text-fivestar-gold hover:text-fivestar-gold-light transition-colors"
                                >
                                    {resource.phone}
                                </a>
                            </div>

                            {/* Hours */}
                            <div className="flex items-start gap-3 mb-3">
                                <Clock className="text-gray-400 w-5 h-5 mt-1 flex-shrink-0" />
                                <p className="text-gray-300">{resource.hours}</p>
                            </div>

                            {/* Services */}
                            <div className="mb-4">
                                <p className="text-sm text-gray-400 mb-2">{t('resources.card.services')}:</p>
                                <div className="flex flex-wrap gap-2">
                                    {resource.services.map((service, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-fivestar-gold/10 border border-fivestar-gold/30 rounded-full text-xs text-fivestar-gold"
                                        >
                                            {service}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Languages */}
                            <div className="mb-4">
                                <p className="text-sm text-gray-400 mb-2">Languages:</p>
                                <div className="flex flex-wrap gap-2">
                                    {resource.languages.map((lang, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-fivestar-gray border border-gray-600 rounded-full text-xs text-gray-300"
                                        >
                                            {lang}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3">
                                <a
                                    href={getDirections(resource.address)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-fivestar-gold text-fivestar-gray rounded-xl font-medium hover:bg-fivestar-gold-light transition-colors"
                                >
                                    <Navigation className="w-4 h-4" />
                                    {t('resources.card.directions')}
                                </a>
                                <a
                                    href={`tel:${resource.phone}`}
                                    className="flex items-center justify-center px-4 py-3 bg-fivestar-gray border border-fivestar-gold/30 text-white rounded-xl hover:bg-fivestar-gray-light transition-colors"
                                >
                                    <Phone className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* No Results */}
                {filteredResources.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                        <p className="text-xl text-gray-400">No resources found matching your search.</p>
                        <p className="text-gray-500 mt-2">Try adjusting your search terms or filters.</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default ResourceMap;
