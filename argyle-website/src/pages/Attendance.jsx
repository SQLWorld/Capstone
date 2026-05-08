import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, AlertTriangle, Calendar, Users, BookOpen, Award, Target, Zap, Shield, Heart, TrendingUp, Phone, Mail, FileText, UserCheck, Timer, Bell, Info, ChevronRight } from 'lucide-react';

const Attendance = () => {
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

    const contactInfo = {
        name: "Patricia Hernandez",
        title: "Attendance Secretary",
        email: "patricia_v_hernandez@mcpsmd.org",
        phone: "(240) 740-6370"
    };

    const procedures = [
        {
            icon: <Timer className="w-8 h-8 text-orange-400" />,
            title: "Late Arrival Procedures",
            color: "orange",
            details: [
                "Students arriving after 8:15 AM must report to main office for a pass",
                "Parents/guardians must provide signed note for documentation",
                "Doctor/dentist notes are accepted",
                "Three (3) unexcused tardies = one (1) unlawful absence"
            ]
        },
        {
            icon: <Calendar className="w-8 h-8 text-blue-400" />,
            title: "Early Departure Procedures",
            color: "blue",
            details: [
                "Adult pickup requires photo ID verification",
                "Only emergency contacts can pick up without written permission",
                "Permission note format: 'I give permission to [name] to pick up [student] for [reason]'",
                "Student brings note to office upon arrival for early dismissal pass"
            ]
        },
        {
            icon: <FileText className="w-8 h-8 text-purple-400" />,
            title: "Absence Documentation",
            color: "purple",
            details: [
                "Email attendance secretary with absence details",
                "Bring signed parent note or doctor's note upon return",
                "Call school at 240.740.6370 for same-day known absences",
                "Doctor's note REQUIRED for 5+ consecutive days absent"
            ]
        }
    ];

    const legitimateReasons = [
        "Certified illness of the student",
        "Physical and mental incapacity",
        "Court summons",
        "Religious holiday",
        "Work or activity accepted by school authorities",
        "Death in the immediate family",
        "State emergency",
        "Violent storm",
        "Suspension"
    ];

    const policyHighlights = [
        {
            icon: <Clock className="w-8 h-8 text-blue-400" />,
            title: "Regular Attendance",
            description: "Students should attend school every day. Perfect attendance is celebrated!",
            color: "blue"
        },
        {
            icon: <CheckCircle className="w-8 h-8 text-green-400" />,
            title: "Excused Absences",
            description: "Medical appointments, family emergencies, and religious observances are excused.",
            color: "green"
        },
        {
            icon: <AlertTriangle className="w-8 h-8 text-yellow-400" />,
            title: "Unexcused Absences",
            description: "Vacations, oversleeping, and non-emergency reasons are considered unexcused.",
            color: "yellow"
        },
        {
            icon: <Calendar className="w-8 h-8 text-purple-400" />,
            title: "Tardy Policy",
            description: "Students arriving after 8:15 AM must sign in at the office.",
            color: "purple"
        }
    ];

    const consequences = [
        { threshold: "3+ Unexcused Absences", action: "Parent Contact", severity: "warning" },
        { threshold: "5+ Unexcused Absences", action: "Attendance Meeting", severity: "warning" },
        { threshold: "7+ Unexcused Absences", action: "Loss of Privileges", severity: "danger" },
        { threshold: "10+ Unexcused Absences", action: "Referral to Administration", severity: "danger" }
    ];

    const benefits = [
        {
            icon: <BookOpen className="w-6 h-6 text-blue-400" />,
            title: "Academic Success",
            description: "Regular attendance directly correlates with better grades and understanding."
        },
        {
            icon: <Users className="w-6 h-6 text-green-400" />,
            title: "Social Development",
            description: "Build relationships with peers and teachers through consistent presence."
        },
        {
            icon: <Award className="w-6 h-6 text-purple-400" />,
            title: "Recognition",
            description: "Perfect attendance awards and special recognition throughout the year."
        },
        {
            icon: <Target className="w-6 h-6 text-pink-400" />,
            title: "Habit Building",
            description: "Develop responsibility and time management skills for future success."
        }
    ];

    const attendanceDefinitions = [
        {
            title: "Full Day Attendance",
            description: "Student present for 4+ hours of the school day"
        },
        {
            title: "Partial Day Attendance",
            description: "Student present for at least 2 hours but less than 4 hours"
        },
        {
            title: "Excused Absence",
            description: "Absence due to legitimate reasons listed in MCPS policy"
        },
        {
            title: "Unexcused Absence",
            description: "Absence without valid reason (vacations not excused)"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 py-20 px-4 relative overflow-hidden">
            {/* INCREDIBLE ANIMATED BACKGROUND EFFECTS */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {/* VIBRANT ATTENDANCE ENERGY BURSTS */}
                <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-radial from-purple-500/40 via-pink-500/25 to-transparent rounded-full blur-3xl animate-pulse-slow shadow-[0_0_150px_rgba(168,85,247,0.6)]"></div>
                <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-gradient-radial from-blue-500/35 via-cyan-500/25 to-transparent rounded-full blur-3xl animate-pulse-slow delay-1000 shadow-[0_0_160px_rgba(59,130,246,0.5)]"></div>
                <div className="absolute top-2/3 left-1/2 w-56 h-56 bg-gradient-radial from-green-500/35 via-emerald-500/25 to-transparent rounded-full blur-3xl animate-pulse-slow delay-2000 shadow-[0_0_130px_rgba(16,185,129,0.5)]"></div>
                <div className="absolute top-1/6 right-1/3 w-72 h-72 bg-gradient-radial from-orange-500/35 via-yellow-500/25 to-transparent rounded-full blur-3xl animate-pulse-slow delay-3000 shadow-[0_0_140px_rgba(234,179,8,0.5)]"></div>

                {/* FLOATING ATTENDANCE ELEMENTS */}
                <div className="absolute top-16 left-20 w-8 h-8 border-4 border-purple-400 rounded-full animate-ping opacity-60 shadow-[0_0_20px_rgba(168,85,247,0.9)]"></div>
                <div className="absolute top-40 right-16 w-6 h-6 bg-blue-400 rounded-full animate-bounce delay-500 shadow-[0_0_25px_rgba(59,130,246,1)]"></div>
                <div className="absolute bottom-32 left-32 w-5 h-5 bg-green-400 rounded animate-pulse delay-1000 shadow-[0_0_22px_rgba(16,185,129,0.8)]"></div>
                <div className="absolute bottom-48 right-28 w-10 h-3 bg-orange-400 rounded-full animate-pulse delay-1500 shadow-[0_0_28px_rgba(234,179,8,0.8)]"></div>
                <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-pink-400 rounded-full animate-ping delay-2000 shadow-[0_0_18px_rgba(236,72,153,0.7)]"></div>

                {/* ANIMATED ATTENDANCE SYMBOLS */}
                <div className="absolute top-1/5 right-1/6 opacity-30">
                    <div className="text-purple-400 text-4xl animate-pulse">📚</div>
                </div>
                <div className="absolute bottom-1/3 left-1/4 opacity-25">
                    <div className="text-blue-400 text-4xl animate-pulse delay-1000">⏰</div>
                </div>
                <div className="absolute top-3/4 right-1/3 opacity-28">
                    <div className="text-green-400 text-3xl animate-pulse delay-2000">📝</div>
                </div>
                <div className="absolute bottom-1/5 left-2/3 opacity-32">
                    <div className="text-orange-400 text-3xl animate-pulse delay-3000">🏆</div>
                </div>

                {/* ANIMATED ROUTE WAVES */}
                <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-blue-500/40 animate-gradient-x opacity-50"></div>
                <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-green-500/40 via-cyan-500/40 to-purple-500/40 animate-gradient-x delay-2000 opacity-50"></div>

                {/* EXTRA FLOATING PARTICLES */}
                <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-purple-300 rounded-full animate-ping opacity-40 delay-500"></div>
                <div className="absolute top-2/3 right-2/3 w-3 h-3 bg-blue-300 rounded animate-bounce opacity-35 delay-1000"></div>
                <div className="absolute bottom-2/3 left-1/5 w-2.5 h-2.5 bg-green-300 rounded-full animate-pulse opacity-45 delay-1500"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* INCREDIBLE HERO SECTION WITH GLOW */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16 relative"
                >
                    {/* HERO GLOW EFFECTS */}
                    <div className="absolute inset-0 bg-gradient-radial from-purple-500/30 via-transparent to-transparent blur-3xl animate-pulse-slow -z-10"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-blue-500/20 via-transparent to-transparent rounded-full blur-2xl animate-pulse-slow delay-1000 -z-10"></div>

                    <motion.div
                        animate={{
                            rotate: 360,
                            scale: [1, 1.1, 1],
                            boxShadow: [
                                "0 0 30px rgba(59, 130, 246, 0.6)",
                                "0 0 50px rgba(168, 85, 247, 0.8)",
                                "0 0 30px rgba(59, 130, 246, 0.6)"
                            ]
                        }}
                        transition={{
                            rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                            scale: { duration: 2, repeat: Infinity },
                            boxShadow: { duration: 2, repeat: Infinity }
                        }}
                        className="inline-block p-6 bg-gradient-to-br from-purple-500/30 via-blue-500/30 to-pink-500/30 rounded-full mb-8 shadow-[0_0_40px_rgba(168,85,247,0.7)]"
                    >
                        <Clock className="w-16 h-16 text-white drop-shadow-lg" />
                        {/* SPARKLE EFFECTS */}
                        <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-80"></div>
                        <div className="absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping delay-700 opacity-80"></div>
                    </motion.div>

                    <motion.h1
                        className="text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 relative"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                    >
                        Attendance Policy &
                        <motion.span
                            className="block bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text"
                            animate={{
                                textShadow: [
                                    '0 0 20px rgba(168, 85, 247, 0.8)',
                                    '0 0 30px rgba(168, 85, 247, 0.6)',
                                    '0 0 20px rgba(168, 85, 247, 0.8)'
                                ]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            Procedures
                        </motion.span>
                        {/* TITLE GLOW UNDERLINE */}
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full blur-sm opacity-70"></div>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 relative"
                    >
                        Regular attendance is the foundation of academic success. At Argyle Magnet Middle School,
                        we follow MCPS policies to ensure every student has the opportunity to succeed.
                        <motion.span
                            className="block text-purple-300 font-semibold mt-2"
                            animate={{
                                textShadow: ['0 0 10px rgba(168, 85, 247, 0.6)', '0 0 15px rgba(168, 85, 247, 0.9)', '0 0 10px rgba(168, 85, 247, 0.6)']
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Every day matters—your future starts with showing up! 📚✨
                        </motion.span>
                    </motion.p>
                </motion.div>

                {/* INCREDIBLE CONTACT INFORMATION WITH GLOW */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{
                        scale: 1.02,
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)'
                    }}
                    className="glass-panel p-8 rounded-3xl mb-12 text-center relative overflow-hidden border-2 border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:shadow-[0_0_60px_rgba(168,85,247,0.4)]"
                >
                    {/* CONTACT GLOW BACKGROUND */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/8 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                    {/* FLOATING PARTICLES */}
                    <div className="absolute top-6 right-6 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-0 group-hover:opacity-80 transition-opacity duration-300 shadow-[0_0_12px_rgba(168,85,247,0.8)]"></div>
                    <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-300 opacity-0 group-hover:opacity-80 transition-opacity duration-300 shadow-[0_0_10px_rgba(59,130,246,0.6)]"></div>

                    <motion.div
                        animate={{
                            scale: [1, 1.08, 1],
                            boxShadow: [
                                "0 0 20px rgba(34, 197, 94, 0.4)",
                                "0 0 30px rgba(168, 85, 247, 0.6)",
                                "0 0 20px rgba(34, 197, 94, 0.4)"
                            ]
                        }}
                        transition={{
                            scale: { duration: 3, repeat: Infinity },
                            boxShadow: { duration: 2, repeat: Infinity }
                        }}
                        className="inline-flex items-center gap-4 mb-6 p-6 bg-gradient-to-r from-green-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl shadow-[0_0_25px_rgba(34,197,94,0.5)]"
                    >
                        <motion.div
                            animate={{ rotate: [0, 15, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                    >
                            <UserCheck className="w-10 h-10 text-green-300 drop-shadow-lg" />
                        </motion.div>
                        <div className="text-left">
                            <h3 className="text-2xl font-bold text-white">{contactInfo.name}</h3>
                            <p className="text-purple-300 font-semibold">{contactInfo.title}</p>
                        </div>
                    </motion.div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.a
                            href={`mailto:${contactInfo.email}`}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-xl text-blue-300 hover:text-blue-200 transition-all"
                        >
                            <Mail className="w-4 h-4" />
                            {contactInfo.email}
                        </motion.a>
                        <motion.a
                            href={`tel:${contactInfo.phone}`}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 rounded-xl text-green-300 hover:text-green-200 transition-all"
                        >
                            <Phone className="w-4 h-4" />
                            {contactInfo.phone}
                        </motion.a>
                    </div>
                </motion.div>

                {/* INCREDIBLE PROCEDURES SECTION */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="text-center mb-12 relative">
                        {/* SECTION GLOW BACKGROUND */}
                        <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-transparent to-transparent blur-2xl animate-pulse-slow -z-10"></div>

                        <motion.div
                            animate={{
                                rotate: [0, 8, -8, 0],
                                scale: [1, 1.1, 1],
                                boxShadow: [
                                    "0 0 25px rgba(168, 85, 247, 0.5)",
                                    "0 0 40px rgba(59, 130, 246, 0.7)",
                                    "0 0 25px rgba(168, 85, 247, 0.5)"
                                ]
                            }}
                            transition={{
                                rotate: { duration: 4, repeat: Infinity },
                                scale: { duration: 3, repeat: Infinity },
                                boxShadow: { duration: 2, repeat: Infinity }
                            }}
                            className="inline-block p-6 bg-gradient-to-br from-purple-500/30 via-blue-500/30 to-pink-500/30 rounded-full mb-6 shadow-[0_0_35px_rgba(168,85,247,0.6)]"
                        >
                            <FileText className="w-12 h-12 text-white drop-shadow-lg" />
                            {/* SPARKLE EFFECTS */}
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-90"></div>
                            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-700 opacity-90"></div>
                        </motion.div>

                        <motion.h2
                            className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-purple-300 via-blue-300 to-pink-300 bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Attendance Procedures
                            <motion.div
                                className="w-32 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 mx-auto mt-2 rounded-full blur-sm opacity-70"
                                initial={{ width: 0 }}
                                whileInView={{ width: 128 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            />
                        </motion.h2>

                        <motion.p
                            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            Clear guidelines for managing student attendance, absences, and school communications.
                            <motion.span
                                className="block text-purple-300 font-semibold mt-2"
                                animate={{
                                    textShadow: ['0 0 10px rgba(168, 85, 247, 0.6)', '0 0 15px rgba(168, 85, 247, 0.9)', '0 0 10px rgba(168, 85, 247, 0.6)']
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                Stay informed and stay on track! 📝✨
                            </motion.span>
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {procedures.map((procedure, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    y: -10,
                                    boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.5), 0 0 35px rgba(168, 85, 247, 0.4)'
                                }}
                                className="glass-panel p-6 rounded-3xl border-2 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 relative overflow-hidden group shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:shadow-[0_0_50px_rgba(168,85,247,0.3)]"
                            >
                                {/* PROCEDURE CARD GLOW BACKGROUND */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-${procedure.color}-500/8 via-purple-500/5 to-${procedure.color}-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />

                                {/* FLOATING PARTICLES */}
                                <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-0 group-hover:opacity-70 transition-opacity duration-300 shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>

                                <motion.div
                                    animate={{
                                        rotate: [0, 15, -15, 0],
                                        scale: [1, 1.1, 1],
                                        boxShadow: [
                                            `0 0 15px rgba(59, 130, 246, 0.4)`,
                                            `0 0 25px rgba(168, 85, 247, 0.7)`,
                                            `0 0 15px rgba(59, 130, 246, 0.4)`
                                        ]
                                    }}
                                    transition={{
                                        rotate: { duration: 4, repeat: Infinity, delay: index * 0.5 },
                                        scale: { duration: 3, repeat: Infinity },
                                        boxShadow: { duration: 2, repeat: Infinity }
                                    }}
                                    className={`p-4 rounded-3xl bg-gradient-to-br from-${procedure.color}-500/20 to-purple-500/20 mb-6 inline-block shadow-[0_0_20px_rgba(59,130,246,0.5)]`}
                                >
                                    <div className="drop-shadow-lg">{procedure.icon}</div>
                                </motion.div>
                                <h3 className="text-xl font-bold text-white mb-4">{procedure.title}</h3>
                                <ul className="space-y-3">
                                    {procedure.details.map((detail, detailIndex) => (
                                        <motion.li
                                            key={detailIndex}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: detailIndex * 0.1 }}
                                            className="flex items-start gap-3 text-gray-300"
                                        >
                                            <ChevronRight className="w-4 h-4 text-argyle-blue mt-0.5 flex-shrink-0" />
                                            <span className="text-sm leading-relaxed">{detail}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Attendance Reporting */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel p-8 rounded-3xl mb-12"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="p-3 bg-yellow-500/20 rounded-xl"
                        >
                            <Bell className="w-8 h-8 text-yellow-400" />
                        </motion.div>
                        <div>
                            <h3 className="text-2xl font-bold text-white">Automated Attendance Reporting</h3>
                            <p className="text-gray-400">MCPS automated notification system</p>
                        </div>
                    </div>

                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-yellow-500/20">
                        <p className="text-gray-300 leading-relaxed mb-4">
                            An automated call is sent each evening to parents/guardians of every MCPS student marked absent for any part of the day—even if you've already notified the school.
                        </p>
                        <div className="text-sm text-gray-400 space-y-2">
                            <p>• If the report contains an error, contact Ms. Hernandez via email</p>
                            <p>• She can identify which teacher marked your child absent</p>
                            <p>• Parents can then email the specific teacher to correct the record</p>
                        </div>
                    </div>
                </motion.div>

                {/* MCPS Policy Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="text-center mb-12">
                        <motion.div
                            animate={{
                                rotate: [0, -5, 5, 0],
                                scale: [1, 1.05, 1]
                            }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="inline-block p-4 bg-blue-500/20 rounded-full mb-4"
                        >
                            <Shield className="w-8 h-8 text-blue-400" />
                        </motion.div>
                        <h2 className="text-3xl font-bold text-white mb-4">MCPS Attendance Policy</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Official Montgomery County Public Schools attendance regulations and guidelines.
                        </p>
                    </div>

                    {/* Policy Overview */}
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="glass-panel p-8 rounded-3xl mb-8"
                    >
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <Info className="w-6 h-6 text-argyle-blue" />
                            Policy Overview
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-slate-800/50 p-4 rounded-xl">
                                <h4 className="text-lg font-bold text-white mb-2">Direct Relationship</h4>
                                <p className="text-gray-400 text-sm">There is a direct relationship between school attendance and student achievement.</p>
                            </div>
                            <div className="bg-slate-800/50 p-4 rounded-xl">
                                <h4 className="text-lg font-bold text-white mb-2">School Hours</h4>
                                <p className="text-gray-400 text-sm">School day begins at 8:15 AM and ends at 3:00 PM.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Legitimate Reasons */}
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="glass-panel p-8 rounded-3xl mb-8"
                    >
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                            <CheckCircle className="w-6 h-6 text-green-400" />
                            Legitimate Reasons for Absence
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {legitimateReasons.map((reason, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl"
                                >
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                        <span className="text-green-300 text-sm font-medium">{reason}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                            <div className="flex items-center gap-2 mb-2">
                                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                                <span className="text-yellow-300 font-bold">Important Note:</span>
                            </div>
                            <p className="text-yellow-200 text-sm">Vacations are NOT excused absences. The principal may issue an exception only in extraordinary circumstances.</p>
                        </div>
                    </motion.div>

                    {/* Attendance Definitions */}
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="glass-panel p-8 rounded-3xl"
                    >
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                            <BookOpen className="w-6 h-6 text-purple-400" />
                            MCPS Attendance Definitions
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {attendanceDefinitions.map((def, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20"
                                >
                                    <h4 className="text-lg font-bold text-white mb-3">{def.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{def.description}</p>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                            <p className="text-blue-200 text-sm">
                                <strong>Reference:</strong> Montgomery County Public Schools Regulation JEA-RA and Maryland Student Records System Manual for complete attendance policies.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* INCREDIBLE WHY EVERY DAY COUNTS SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="text-center mb-12 relative">
                        {/* SECTION GLOW */}
                        <div className="absolute inset-0 bg-gradient-radial from-orange-500/25 via-transparent to-transparent blur-2xl animate-pulse-slow -z-10"></div>

                        <motion.div
                            animate={{
                                rotate: [0, -8, 8, 0],
                                scale: [1, 1.1, 1],
                                boxShadow: [
                                    "0 0 25px rgba(234, 179, 8, 0.6)",
                                    "0 0 40px rgba(168, 85, 247, 0.8)",
                                    "0 0 25px rgba(234, 179, 8, 0.6)"
                                ]
                            }}
                            transition={{
                                rotate: { duration: 5, repeat: Infinity },
                                scale: { duration: 3, repeat: Infinity },
                                boxShadow: { duration: 2, repeat: Infinity }
                            }}
                            className="inline-block p-6 bg-gradient-to-br from-orange-500/30 via-purple-500/30 to-red-500/30 rounded-full mb-6 shadow-[0_0_35px_rgba(234,179,8,0.7)]"
                        >
                            <TrendingUp className="w-12 h-12 text-white drop-shadow-lg" />
                            {/* ALERT SPARKLES */}
                            <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-80"></div>
                            <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-red-400 rounded-full animate-ping delay-500 opacity-80"></div>
                        </motion.div>

                        <motion.h2
                            className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-orange-300 via-purple-300 to-red-300 bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Why Every Day Counts
                            <motion.div
                                className="w-32 h-1 bg-gradient-to-r from-orange-400 via-purple-400 to-red-400 mx-auto mt-2 rounded-full blur-sm opacity-70"
                                initial={{ width: 0 }}
                                whileInView={{ width: 128 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            />
                        </motion.h2>

                        <motion.p
                            className="text-xl text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            Missing school isn't just about falling behind—it's about missing opportunities to grow, learn, and connect.
                            <motion.span
                                className="block text-purple-300 font-semibold mt-2"
                                animate={{
                                    textShadow: ['0 0 10px rgba(168, 85, 247, 0.6)', '0 0 15px rgba(168, 85, 247, 0.9)', '0 0 10px rgba(168, 85, 247, 0.6)']
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                Every day is a chance to shine! 🌟✨
                            </motion.span>
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        {/* Academic Impact */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="glass-panel p-8 rounded-3xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                            <div className="flex items-center gap-4 mb-6">
                                <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    className="p-3 bg-blue-500/20 rounded-xl"
                                >
                                    <BookOpen className="w-8 h-8 text-blue-400" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-white">Academic Impact</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-300">Students with poor attendance miss <span className="text-white font-semibold">critical instruction time</span> and learning opportunities</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-300">Research shows <span className="text-white font-semibold">direct correlation</span> between attendance and academic performance</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-300">Consistent attendance leads to <span className="text-white font-semibold">better grades, test scores, and graduation rates</span></p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Social & Emotional Impact */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="glass-panel p-8 rounded-3xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-teal-500"></div>
                            <div className="flex items-center gap-4 mb-6">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="p-3 bg-green-500/20 rounded-xl"
                                >
                                    <Heart className="w-8 h-8 text-green-400" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-white">Social & Emotional Impact</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-300">School provides essential <span className="text-white font-semibold">social interaction</span> and relationship building</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-300">Regular attendance builds <span className="text-white font-semibold">confidence and self-esteem</span> through participation</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-300">Missed school means missing <span className="text-white font-semibold">important emotional support</span> and counseling opportunities</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* MCPS Research & Impact */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 rounded-3xl mb-8"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-3">
                            <motion.div
                                animate={{ pulse: true }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-3 h-3 bg-blue-400 rounded-full"
                            ></motion.div>
                            MCPS Research Shows
                            <motion.div
                                animate={{ pulse: true }}
                                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                className="w-3 h-3 bg-blue-400 rounded-full"
                            ></motion.div>
                        </h3>
                        <div className="space-y-6">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="p-6 bg-slate-800/50 rounded-xl border-l-4 border-blue-500"
                            >
                                <div className="flex items-start gap-3">
                                    <BookOpen className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-2">Academic Achievement</h4>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            Research consistently shows that regular school attendance is strongly correlated with academic success,
                                            higher graduation rates, and better long-term outcomes for students.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="p-6 bg-slate-800/50 rounded-xl border-l-4 border-green-500"
                            >
                                <div className="flex items-start gap-3">
                                    <Users className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-2">Social Development</h4>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            Daily attendance provides essential opportunities for social interaction, relationship building,
                                            and developing important social skills that are crucial for success in school and life.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="p-6 bg-slate-800/50 rounded-xl border-l-4 border-purple-500"
                            >
                                <div className="flex items-start gap-3">
                                    <Target className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-2">Long-term Success</h4>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            Students who maintain good attendance habits develop responsibility, time management skills,
                                            and work ethic that contribute to success in higher education and careers.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                            <div className="flex items-center gap-3 mb-3">
                                <Info className="w-5 h-5 text-blue-400" />
                                <span className="text-blue-300 font-semibold">MCPS Policy Reference</span>
                            </div>
                            <p className="text-blue-200 text-sm">
                                "There is a direct relationship between school attendance and student achievement. Students are to attend
                                every scheduled class, on time, each day unless there is a legitimate reason for an absence."
                            </p>
                            <p className="text-blue-300 text-xs mt-2 italic">
                                — Montgomery County Public Schools Regulation JEA-RA
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Policy Highlights Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                >
                    {policyHighlights.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="glass-panel p-6 rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-300"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                                className={`p-3 rounded-2xl bg-${item.color}-500/10 mb-4 inline-block`}
                            >
                                {item.icon}
                            </motion.div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Consequences Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel p-8 rounded-3xl mb-12"
                >
                    <div className="text-center mb-8">
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="inline-block p-4 bg-red-500/20 rounded-full mb-4"
                        >
                            <Shield className="w-8 h-8 text-red-400" />
                        </motion.div>
                        <h2 className="text-3xl font-bold text-white mb-4">Consequences for Excessive Absences</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            We believe in supporting students and families, but consistent attendance is essential for success.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {consequences.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-6 rounded-2xl border-l-4 ${
                                    item.severity === 'warning'
                                        ? 'border-yellow-500 bg-yellow-500/10'
                                        : 'border-red-500 bg-red-500/10'
                                }`}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <AlertTriangle className={`w-5 h-5 ${item.severity === 'warning' ? 'text-yellow-400' : 'text-red-400'}`} />
                                    <span className="font-bold text-white">{item.threshold}</span>
                                </div>
                                <p className="text-gray-300">{item.action}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Benefits Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="text-center mb-12">
                        <motion.div
                            animate={{
                                rotate: [0, 10, -10, 0],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="inline-block p-4 bg-green-500/20 rounded-full mb-4"
                        >
                            <Heart className="w-8 h-8 text-green-400" />
                        </motion.div>
                        <h2 className="text-3xl font-bold text-white mb-4">Benefits of Good Attendance</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Regular attendance isn't just about following rules—it's about maximizing your potential and opportunities.
                        </p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                className="flex items-start gap-4 p-6 glass-card rounded-2xl hover:bg-white/10 transition-all duration-300"
                            >
                                <motion.div
                                    whileHover={{ rotate: 15, scale: 1.1 }}
                                    className="p-3 bg-white/5 rounded-xl flex-shrink-0"
                                >
                                    {benefit.icon}
                                </motion.div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* INCREDIBLE CALL TO ACTION */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <motion.div
                        animate={{
                            boxShadow: [
                                "0 0 30px rgba(59, 130, 246, 0.6)",
                                "0 0 50px rgba(168, 85, 247, 0.8)",
                                "0 0 70px rgba(236, 72, 153, 0.5)",
                                "0 0 30px rgba(59, 130, 246, 0.6)"
                            ],
                            scale: [1, 1.02, 1]
                        }}
                        transition={{
                            boxShadow: { duration: 3, repeat: Infinity },
                            scale: { duration: 4, repeat: Infinity }
                        }}
                        className="inline-block p-10 glass-panel rounded-3xl border-3 border-gradient-to-r from-purple-400 via-pink-400 to-blue-400 relative overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.4)]"
                    >
                        {/* CTA GLOW EFFECTS */}
                        <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-pink-500/15 to-blue-500/20 blur-2xl animate-pulse-slow -z-10"></div>
                        <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-60"></div>
                        <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-500 opacity-60"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-1000 opacity-60"></div>

                        <motion.div
                            animate={{
                                rotate: [0, 360],
                                scale: [1, 1.1, 1],
                                boxShadow: [
                                    "0 0 20px rgba(59, 130, 246, 0.7)",
                                    "0 0 35px rgba(168, 85, 247, 0.9)",
                                    "0 0 50px rgba(236, 72, 153, 0.6)",
                                    "0 0 20px rgba(59, 130, 246, 0.7)"
                                ]
                            }}
                            transition={{
                                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                                scale: { duration: 3, repeat: Infinity },
                                boxShadow: { duration: 4, repeat: Infinity }
                            }}
                            className="inline-block p-6 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full mb-8 shadow-[0_0_30px_rgba(168,85,247,0.8)]"
                        >
                            <TrendingUp className="w-12 h-12 text-white drop-shadow-lg" />
                            {/* ATTENDANCE SPARKLES */}
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-90"></div>
                            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-300 opacity-90"></div>
                        </motion.div>

                        <motion.h3
                            className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Perfect Attendance Matters!
                            <motion.div
                                className="w-40 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mx-auto mt-2 rounded-full blur-sm opacity-70"
                                initial={{ width: 0 }}
                                whileInView={{ width: 160 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            />
                        </motion.h3>

                        <motion.p
                            className="text-xl text-gray-300 mb-8 max-w-lg mx-auto leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            Every day you attend school is an investment in your future success.
                            Let's make regular attendance your commitment to excellence!
                            <motion.span
                                className="block text-purple-300 font-semibold mt-2"
                                animate={{
                                    textShadow: ['0 0 10px rgba(168, 85, 247, 0.6)', '0 0 15px rgba(168, 85, 247, 0.9)', '0 0 10px rgba(168, 85, 247, 0.6)']
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                Your future starts with showing up! 📚✨
                            </motion.span>
                        </motion.p>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full text-white font-bold text-lg hover:shadow-[0_0_40px_rgba(168,85,247,0.8)] transition-all duration-300"
                        >
                            <span className="flex items-center gap-2">
                                <Heart className="w-5 h-5" />
                                Attend Every Day
                            </span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Attendance;