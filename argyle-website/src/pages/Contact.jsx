import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Users, BookOpen, Shield, Heart } from 'lucide-react';

const Contact = () => {
    const contactInfo = [
        {
            icon: MapPin,
            title: "Address",
            details: [
                "Argyle Magnet Middle School",
                "2400 Bel Pre Rd",
                "Silver Spring, MD 20906"
            ]
        },
        {
            icon: Phone,
            title: "Phone",
            details: [
                "Main Office: (240) 740-6370",
                "Attendance Line: (240) 740-6370",
                "Nurse's Office: (240) 740-6372"
            ]
        },
        {
            icon: Mail,
            title: "Email",
            details: [
                "General: info@argylems.mcpsmd.org",
                "Principal: James_K_Allrich@mcpsmd.org",
                "Counseling: Hannah_D_Jimenez@mcpsmd.org"
            ]
        },
        {
            icon: Clock,
            title: "Office Hours",
            details: [
                "Monday - Friday: 7:30 AM - 3:30 PM",
                "Summer Hours: 8:00 AM - 4:00 PM",
                "Closed on County Holidays"
            ]
        }
    ];

    const departments = [
        {
            icon: Users,
            title: "Administration",
            contacts: [
                { name: "Principal - Mr. James K. Allrich", email: "James_K_Allrich@mcpsmd.org" },
                { name: "Assistant Principal - Mrs. Cortney E. Chao", email: "Cortney_E_Chao@mcpsmd.org" },
                { name: "Administrative Assistant - Mrs. Alyson L. Gordon", email: "Alyson_L_Gordon@mcpsmd.org" }
            ]
        },
        {
            icon: BookOpen,
            title: "Academic Support",
            contacts: [
                { name: "Counseling - Ms. Hannah D. Jimenez", email: "Hannah_D_Jimenez@mcpsmd.org" },
                { name: "Guidance Department", email: "guidance@argylems.mcpsmd.org" },
                { name: "Library/Media Center", email: "library@argylems.mcpsmd.org" }
            ]
        },
        {
            icon: Shield,
            title: "Student Services",
            contacts: [
                { name: "School Nurse", email: "health@argylems.mcpsmd.org" },
                { name: "Security Office", email: "security@argylems.mcpsmd.org" },
                { name: "Special Education", email: "sped@argylems.mcpsmd.org" }
            ]
        },
        {
            icon: Heart,
            title: "Support Services",
            contacts: [
                { name: "PTA Contact", email: "pta@argylems.mcpsmd.org" },
                { name: "Food Services", email: "cafeteria@argylems.mcpsmd.org" },
                { name: "Transportation", email: "transport@argylems.mcpsmd.org" }
            ]
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative py-20 px-4 text-center"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-argyle-blue via-argyle-purple to-argyle-blue/80 opacity-90" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2896&auto=format&fit=crop')] bg-cover bg-center opacity-20" />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-gray-200 max-w-2xl mx-auto"
                    >
                        We're here to help! Reach out to our team for any questions about Argyle Middle School.
                    </motion.p>
                </div>
            </motion.section>

            {/* Contact Information */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Get In Touch
                        </h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Multiple ways to connect with our school community
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {contactInfo.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-argyle-blue/50 transition-all duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-argyle-blue to-argyle-purple rounded-xl flex items-center justify-center mr-4">
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                </div>
                                <div className="space-y-2">
                                    {item.details.map((detail, i) => (
                                        <p key={i} className="text-gray-300 text-sm leading-relaxed">
                                            {detail}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Department Contacts */}
            <section className="py-16 px-4 bg-slate-900/30">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Department Contacts
                        </h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Connect directly with the right department for your needs
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {departments.map((dept, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-800/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
                            >
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-argyle-purple to-argyle-blue rounded-xl flex items-center justify-center mr-4">
                                        <dept.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{dept.title}</h3>
                                </div>
                                <div className="space-y-3">
                                    {dept.contacts.map((contact, i) => (
                                        <div key={i} className="flex items-center justify-between py-2 border-b border-white/10 last:border-b-0">
                                            <span className="text-gray-300 font-medium">{contact.name}</span>
                                            <a
                                                href={`mailto:${contact.email}`}
                                                className="text-argyle-blue hover:text-argyle-purple transition-colors text-sm"
                                            >
                                                {contact.email}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 px-4 bg-slate-900/30">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Visit Us
                        </h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Located in Silver Spring, Maryland
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
                    >
                        <div className="aspect-video bg-slate-700 rounded-xl flex items-center justify-center mb-6">
                            <div className="text-center">
                                <MapPin className="w-16 h-16 text-argyle-blue mx-auto mb-4" />
                                <p className="text-gray-300 mb-2">Interactive Map</p>
                                <p className="text-sm text-gray-400">Google Maps integration coming soon</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-white mb-2">Directions</h3>
                            <p className="text-gray-300 mb-4">
                                Argyle Middle School is easily accessible via public transportation and major roadways.
                                Located at the intersection of Bel Pre Road and Knowles Avenue.
                            </p>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Argyle+Magnet+Middle+School+2400+Bel+Pre+Rd+Silver+Spring+MD+20906"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-argyle-blue to-argyle-purple rounded-full text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                            >
                                <MapPin className="w-5 h-5 mr-2" />
                                Get Directions
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;