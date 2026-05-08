import React from 'react';
import { motion } from 'framer-motion';
import {
    Shield,
    Lock,
    Eye,
    AlertTriangle,
    Cpu,
    Network,
    Database,
    Key,
    Award,
    Users,
    Target,
    Star,
    ChevronRight,
    CheckCircle,
    BookOpen,
    Zap
} from 'lucide-react';

const Cybersecurity = () => {
    // Cybersecurity Theme: Red/orange security theme with warning colors
    const theme = {
        primary: 'from-red-500 to-orange-500',
        secondary: 'from-orange-500 to-yellow-500',
        accent: 'from-yellow-500 to-red-500',
        background: 'from-slate-900 via-slate-800 to-slate-900',
        particleColors: ['bg-red-400', 'bg-orange-400', 'bg-yellow-400', 'bg-red-500']
    };
    const topics = [
        {
            title: "Network Security",
            description: "Protect networks from unauthorized access and cyber threats",
            icon: Network,
            color: "from-blue-500 to-cyan-500",
            skills: ["Firewall Configuration", "VPN Setup", "Intrusion Detection", "Network Monitoring"]
        },
        {
            title: "Ethical Hacking",
            description: "Learn penetration testing and vulnerability assessment techniques",
            icon: Shield,
            color: "from-red-500 to-orange-500",
            skills: ["Penetration Testing", "Vulnerability Scanning", "Social Engineering", "Exploit Development"]
        },
        {
            title: "Cryptography",
            description: "Master encryption algorithms and secure communication protocols",
            icon: Lock,
            color: "from-purple-500 to-pink-500",
            skills: ["Symmetric Encryption", "Public Key Crypto", "Digital Signatures", "SSL/TLS Protocols"]
        },
        {
            title: "Digital Forensics",
            description: "Investigate cyber incidents and preserve digital evidence",
            icon: Eye,
            color: "from-green-500 to-emerald-500",
            skills: ["Evidence Collection", "Chain of Custody", "Data Recovery", "Incident Response"]
        },
        {
            title: "Secure Coding",
            description: "Write software resistant to common security vulnerabilities",
            icon: Cpu,
            color: "from-yellow-500 to-orange-500",
            skills: ["OWASP Top 10", "Input Validation", "SQL Injection Prevention", "XSS Protection"]
        },
        {
            title: "Privacy & Ethics",
            description: "Understand legal and ethical considerations in cybersecurity",
            icon: Key,
            color: "from-indigo-500 to-purple-500",
            skills: ["GDPR Compliance", "HIPAA Regulations", "Ethical Hacking Code", "Privacy Laws"]
        }
    ];

    const certifications = [
        { name: "CompTIA Security+", issuer: "CompTIA", level: "Foundation" },
        { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", level: "Intermediate" },
        { name: "Certified Information Systems Security Professional (CISSP)", issuer: "ISC²", level: "Advanced" },
        { name: "Certified Information Security Manager (CISM)", issuer: "ISACA", level: "Management" },
        { name: "GIAC Penetration Tester (GPEN)", issuer: "GIAC", level: "Expert" }
    ];

    const scenarios = [
        {
            title: "Corporate Network Breach",
            description: "A company detects unusual network activity. Students investigate, identify the breach vector, and implement remediation strategies.",
            icon: AlertTriangle,
            skills: ["Network Analysis", "Incident Response", "Log Analysis"]
        },
        {
            title: "Social Engineering Attack",
            description: "Students learn to identify and prevent phishing attempts, pretexting, and other social engineering techniques used by attackers.",
            icon: Users,
            skills: ["Security Awareness", "Phishing Detection", "User Training"]
        },
        {
            title: "Data Encryption Challenge",
            description: "Implement end-to-end encryption for sensitive data transmission and storage, ensuring compliance with industry standards.",
            icon: Database,
            skills: ["Encryption Algorithms", "Key Management", "Compliance Standards"]
        },
        {
            title: "Vulnerability Assessment",
            description: "Conduct comprehensive security assessments of web applications and networks, identifying and prioritizing vulnerabilities.",
            icon: Target,
            skills: ["Vulnerability Scanning", "Risk Assessment", "Remediation Planning"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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
                stiffness: 100
            }
        }
    };

    return (
        <div className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative min-h-screen bg-gradient-to-br ${theme.background}`}>
            {/* INCREDIBLE SECURITY BACKGROUND EFFECTS */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {/* DIGITAL LOCK GRID */}
                <div className="absolute inset-0 opacity-8">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <pattern id="security-grid" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                                <rect x="2" y="2" width="4" height="4" fill="none" stroke="rgba(239, 68, 68, 0.1)" strokeWidth="0.5" />
                                <circle cx="4" cy="4" r="1.5" fill="none" stroke="rgba(249, 115, 22, 0.1)" strokeWidth="0.3" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#security-grid)" />
                    </svg>
                </div>

                {/* ALERT ENERGY PULSES */}
                <div className="absolute top-1/4 left-1/6 w-52 h-52 bg-gradient-radial from-red-500/30 via-orange-500/20 to-transparent rounded-full blur-2xl animate-pulse-slow shadow-[0_0_100px_rgba(239,68,68,0.4)]"></div>
                <div className="absolute bottom-1/3 right-1/6 w-60 h-60 bg-gradient-radial from-orange-500/30 via-yellow-500/20 to-transparent rounded-full blur-2xl animate-pulse-slow delay-1000 shadow-[0_0_110px_rgba(249,115,22,0.4)]"></div>
                <div className="absolute top-2/3 left-2/3 w-44 h-44 bg-gradient-radial from-yellow-500/30 via-red-500/20 to-transparent rounded-full blur-2xl animate-pulse-slow delay-2000 shadow-[0_0_90px_rgba(234,179,8,0.4)]"></div>

                {/* FLOATING SECURITY ELEMENTS */}
                <div className="absolute top-16 left-12 w-6 h-6 border-3 border-red-400 rounded animate-pulse opacity-40 shadow-[0_0_15px_rgba(239,68,68,0.7)]"></div>
                <div className="absolute top-28 right-20 w-5 h-5 bg-orange-400 rounded-full animate-ping delay-300 shadow-[0_0_20px_rgba(249,115,22,0.8)]"></div>
                <div className="absolute bottom-40 left-16 w-4 h-4 bg-yellow-400 rounded animate-bounce delay-700 shadow-[0_0_18px_rgba(234,179,8,0.6)]"></div>
                <div className="absolute bottom-52 right-24 w-8 h-2 bg-red-400 rounded-full animate-pulse delay-1000 shadow-[0_0_22px_rgba(239,68,68,0.6)]"></div>

                {/* ENCRYPTION PARTICLES */}
                <div className="absolute top-16 right-32 w-2 h-2 bg-red-400 rounded animate-float-bob-small shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                <div className="absolute bottom-24 left-32 w-3 h-3 bg-orange-400 rounded animate-float-bob-small delay-500 shadow-[0_0_12px_rgba(249,115,22,0.5)]"></div>
                <div className="absolute top-1/3 right-1/5 w-1.5 h-1.5 bg-yellow-400 rounded animate-float-bob-small delay-1000 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
                <div className="absolute bottom-1/3 left-1/3 w-4 h-1 bg-red-400 rounded animate-float-bob-small delay-700 shadow-[0_0_16px_rgba(239,68,68,0.5)]"></div>

                {/* SECURITY SYMBOLS */}
                <div className="absolute top-1/4 right-1/4 opacity-20">
                    <div className="text-red-400 text-2xl animate-pulse">🔒</div>
                </div>
                <div className="absolute bottom-1/4 left-1/3 opacity-15">
                    <div className="text-orange-400 text-2xl animate-pulse delay-1000">🛡️</div>
                </div>
                <div className="absolute top-2/3 left-1/4 opacity-18">
                    <div className="text-yellow-400 text-xl animate-pulse delay-2000">⚠️</div>
                </div>

                {/* FIREWALL SCAN LINES */}
                <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-transparent via-red-500/5 to-transparent animate-gradient-x opacity-20"></div>
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 animate-gradient-x delay-1000 opacity-30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-20"
            >
                <motion.div
                    initial={{ rotate: -5, scale: 0.95 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 1, type: 'spring' }}
                    className="inline-block bg-gradient-to-br from-red-500 to-orange-500 px-6 py-2 rounded-full mb-6 shadow-lg"
                >
                    <span className="text-white text-lg font-semibold tracking-wider uppercase">Cybersecurity & Ethics</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
                    Protect the
                    <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                        Digital World
                    </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                    Become a guardian of the digital realm. Master the skills to protect systems,
                    networks, and data from cyber threats while upholding ethical standards in cybersecurity.
                </p>

                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-full">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        <span className="text-gray-300">Semester Program</span>
                    </div>
                    <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-full">
                        <Shield className="w-4 h-4 text-red-400 mr-2" />
                        <span className="text-gray-300">Advanced Level</span>
                    </div>
                    <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-full">
                        <Award className="w-4 h-4 text-orange-400 mr-2" />
                        <span className="text-gray-300">Industry Certifications</span>
                    </div>
                </div>
            </motion.div>

            {/* Core Topics */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="mb-20"
            >
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Cybersecurity Curriculum
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Comprehensive training in offensive and defensive cybersecurity techniques
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topics.map((topic, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1"
                        >
                            <div className={`w-14 h-14 bg-gradient-to-br ${topic.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <topic.icon className="w-7 h-7 text-white" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3">{topic.title}</h3>
                            <p className="text-gray-300 mb-4 leading-relaxed">{topic.description}</p>

                            <div className="space-y-2">
                                {topic.skills.map((skill, idx) => (
                                    <div key={idx} className="flex items-center text-sm text-gray-300">
                                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Real-World Scenarios */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-20"
            >
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Hands-On Scenarios
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Practice real cybersecurity challenges in controlled, educational environments
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {scenarios.map((scenario, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                    <scenario.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white">{scenario.title}</h3>
                            </div>

                            <p className="text-gray-300 mb-4 leading-relaxed">{scenario.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {scenario.skills.map((skill, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-slate-700/50 text-red-300 text-sm rounded-full border border-red-500/30">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-20"
            >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Professional Certifications
                        </h2>
                        <p className="text-xl text-gray-300">
                            Earn industry-recognized credentials that validate your cybersecurity expertise
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="bg-slate-700/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                                        cert.level === 'Foundation' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                                        cert.level === 'Intermediate' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                                        cert.level === 'Advanced' ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' :
                                        'bg-red-500/20 text-red-300 border border-red-500/30'
                                    }`}>
                                        {cert.level}
                                    </div>
                                    <Award className="w-6 h-6 text-yellow-400" />
                                </div>

                                <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                                <p className="text-gray-400 text-sm">Issued by {cert.issuer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Career Opportunities */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-20"
            >
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Cybersecurity Careers
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        High-demand, high-paying roles in the world's most critical industry
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-3xl p-8 text-center"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Security Analyst</h3>
                        <p className="text-gray-300 mb-4">Monitor and respond to security threats in real-time</p>
                        <div className="text-red-400 font-semibold">$95K avg salary</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-3xl p-8 text-center"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Lock className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Ethical Hacker</h3>
                        <p className="text-gray-300 mb-4">Identify vulnerabilities before malicious actors can exploit them</p>
                        <div className="text-blue-400 font-semibold">$110K avg salary</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-3xl p-8 text-center"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Zap className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Cybersecurity Consultant</h3>
                        <p className="text-gray-300 mb-4">Help organizations build comprehensive security strategies</p>
                        <div className="text-green-400 font-semibold">$120K avg salary</div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <div className="bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
                    {/* Security-themed animations */}
                    <div className="absolute top-4 left-4 w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
                    <div className="absolute top-6 right-6 w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-300"></div>
                    <div className="absolute bottom-4 left-6 w-4 h-4 border border-yellow-400 rounded animate-spin-slow"></div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">
                        Become a Cybersecurity Expert
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
                        Join the Cybersecurity & Ethics program and learn to protect the digital world from emerging threats.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <motion.a
                            href="/admissions"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Secure Your Future
                            <ChevronRight className="ml-2 w-5 h-5" />
                        </motion.a>

                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-bold rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                        >
                            Learn More About Security
                        </motion.a>
                    </div>
                </div>
            </motion.div>
            </div>
        </div>
    );
};

export default Cybersecurity;
