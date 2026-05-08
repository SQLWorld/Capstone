import React from 'react';
import { motion } from 'framer-motion';
import { Bus, Clock, MapPin, AlertTriangle, Phone, Calendar, Route, Users, Navigation, Info } from 'lucide-react';

const BusRoutes = () => {
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
        title: "Transportation Department",
        phone: "(240) 740-6370",
        email: "transportation@mcpsmd.org",
        website: "https://www.montgomeryschoolsmd.org/departments/transportation/"
    };

    const busRoutes = [
        {
            route: "Route 1 - Downtown Silver Spring",
            icon: <Navigation className="w-6 h-6 text-blue-400" />,
            color: "blue",
            stops: [
                "Argyle Middle School (Pickup: 7:30 AM, Dropoff: 3:30 PM)",
                "Silver Spring Metro Station",
                "Downtown Silver Spring Shopping Center",
                "Veirs Mill Park",
                "Wheaton Plaza"
            ],
            schedule: "Monday-Friday, School Days Only",
            notes: "Serves northern Silver Spring residential areas"
        },
        {
            route: "Route 2 - Four Corners Area",
            icon: <Route className="w-6 h-6 text-green-400" />,
            color: "green",
            stops: [
                "Argyle Middle School (Pickup: 7:45 AM, Dropoff: 3:45 PM)",
                "Four Corners Shopping Center",
                "Layhill Village",
                "Colesville Manor",
                "Fairland Recreational Park"
            ],
            schedule: "Monday-Friday, School Days Only",
            notes: "Covers eastern Silver Spring neighborhoods"
        },
        {
            route: "Route 3 - Aspen Hill",
            icon: <MapPin className="w-6 h-6 text-purple-400" />,
            color: "purple",
            stops: [
                "Argyle Middle School (Pickup: 7:20 AM, Dropoff: 3:20 PM)",
                "Aspen Hill Park & Ride",
                "Fenton Street Shopping Area",
                "New Hampshire Estates",
                "Hillandale Park"
            ],
            schedule: "Monday-Friday, School Days Only",
            notes: "Serves western Silver Spring communities"
        },
        {
            route: "Route 4 - Bel Pre Road Corridor",
            icon: <Navigation className="w-6 h-6 text-orange-400" />,
            color: "orange",
            stops: [
                "Argyle Middle School (Pickup: 7:35 AM, Dropoff: 3:35 PM)",
                "Bel Pre Woods",
                "Indian Spring Park",
                "Glenmont Metro Area",
                "Northwood Park"
            ],
            schedule: "Monday-Friday, School Days Only",
            notes: "Direct route along Bel Pre Road"
        }
    ];

    const importantInfo = [
        {
            icon: <Clock className="w-6 h-6 text-blue-400" />,
            title: "Pickup Times",
            description: "Students should arrive at bus stops 5-10 minutes before scheduled pickup time. Buses run on a fixed schedule and cannot wait for late students."
        },
        {
            icon: <AlertTriangle className="w-6 h-6 text-red-400" />,
            title: "Safety Rules",
            description: "Students must remain seated while the bus is moving. No eating, drinking, or disruptive behavior. Follow all driver instructions."
        },
        {
            icon: <Calendar className="w-6 h-6 text-green-400" />,
            title: "Schedule Changes",
            description: "Bus routes and times may change due to weather, road construction, or other factors. Check announcements for updates."
        },
        {
            icon: <Users className="w-6 h-6 text-purple-400" />,
            title: "Parent Responsibilities",
            description: "Parents must ensure students are at designated stops on time. Contact transportation if your child misses the bus."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 py-20 px-4 relative overflow-hidden">
            {/* INCREDIBLE ANIMATED BACKGROUND EFFECTS */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {/* VIBRANT BUS ROUTE ENERGY BURSTS */}
                <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-radial from-purple-500/40 via-pink-500/25 to-transparent rounded-full blur-3xl animate-pulse-slow shadow-[0_0_150px_rgba(168,85,247,0.6)]"></div>
                <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-gradient-radial from-blue-500/35 via-cyan-500/25 to-transparent rounded-full blur-3xl animate-pulse-slow delay-1000 shadow-[0_0_160px_rgba(59,130,246,0.5)]"></div>
                <div className="absolute top-2/3 left-1/2 w-56 h-56 bg-gradient-radial from-green-500/35 via-emerald-500/25 to-transparent rounded-full blur-3xl animate-pulse-slow delay-2000 shadow-[0_0_130px_rgba(16,185,129,0.5)]"></div>
                <div className="absolute top-1/6 right-1/3 w-72 h-72 bg-gradient-radial from-orange-500/35 via-yellow-500/25 to-transparent rounded-full blur-3xl animate-pulse-slow delay-3000 shadow-[0_0_140px_rgba(234,179,8,0.5)]"></div>

                {/* FLOATING BUS ELEMENTS */}
                <div className="absolute top-16 left-20 w-8 h-8 border-4 border-purple-400 rounded animate-ping opacity-60 shadow-[0_0_20px_rgba(168,85,247,0.9)]"></div>
                <div className="absolute top-40 right-16 w-6 h-6 bg-blue-400 rounded-full animate-bounce delay-500 shadow-[0_0_25px_rgba(59,130,246,1)]"></div>
                <div className="absolute bottom-32 left-32 w-5 h-5 bg-green-400 rounded animate-pulse delay-1000 shadow-[0_0_22px_rgba(16,185,129,0.8)]"></div>
                <div className="absolute bottom-48 right-28 w-10 h-3 bg-orange-400 rounded-full animate-pulse delay-1500 shadow-[0_0_28px_rgba(234,179,8,0.8)]"></div>
                <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-pink-400 rounded-full animate-ping delay-2000 shadow-[0_0_18px_rgba(236,72,153,0.7)]"></div>

                {/* ANIMATED ROUTE SYMBOLS */}
                <div className="absolute top-1/5 right-1/6 opacity-30">
                    <div className="text-purple-400 text-4xl animate-pulse">🚌</div>
                </div>
                <div className="absolute bottom-1/3 left-1/4 opacity-25">
                    <div className="text-blue-400 text-4xl animate-pulse delay-1000">🚏</div>
                </div>
                <div className="absolute top-3/4 right-1/3 opacity-28">
                    <div className="text-green-400 text-3xl animate-pulse delay-2000">🗺️</div>
                </div>
                <div className="absolute bottom-1/5 left-2/3 opacity-32">
                    <div className="text-orange-400 text-3xl animate-pulse delay-3000">⏰</div>
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
                        <Bus className="w-16 h-16 text-white drop-shadow-lg" />
                        {/* SPARKLE EFFECTS */}
                        <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-80"></div>
                        <div className="absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping delay-500 opacity-80"></div>
                    </motion.div>

                    <motion.h1
                        className="text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 relative"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                    >
                        Bus Routes &
                        <motion.span
                            className="block bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text"
                            animate={{
                                textShadow: [
                                    '0 0 20px rgba(168, 85, 247, 0.8)',
                                    '0 0 30px rgba(59, 130, 246, 0.6)',
                                    '0 0 20px rgba(168, 85, 247, 0.8)'
                                ]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            Transportation
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
                        Safe and reliable transportation services for all Argyle Middle School students.
                        Find your bus route, pickup times, and important safety information.
                        <motion.span
                            className="block text-purple-300 font-semibold mt-2"
                            animate={{
                                textShadow: ['0 0 10px rgba(168, 85, 247, 0.6)', '0 0 15px rgba(168, 85, 247, 0.9)', '0 0 10px rgba(168, 85, 247, 0.6)']
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Your journey to excellence starts with safe transportation! 🚌✨
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
                            <Phone className="w-10 h-10 text-green-300 drop-shadow-lg" />
                        </motion.div>
                        <div className="text-left">
                            <h3 className="text-2xl font-bold text-white">{contactInfo.title}</h3>
                            <p className="text-purple-300 font-semibold">MCPS Transportation Services</p>
                        </div>
                    </motion.div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.a
                            href={`tel:${contactInfo.phone}`}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 rounded-xl text-green-300 hover:text-green-200 transition-all"
                        >
                            <Phone className="w-4 h-4" />
                            {contactInfo.phone}
                        </motion.a>
                        <motion.a
                            href={`mailto:${contactInfo.email}`}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-xl text-blue-300 hover:text-blue-200 transition-all"
                        >
                            <Phone className="w-4 h-4" />
                            {contactInfo.email}
                        </motion.a>
                    </div>

                    <div className="mt-6 p-4 bg-slate-800/50 rounded-xl">
                        <p className="text-gray-300 text-sm">
                            For detailed route maps and real-time updates, visit the official MCPS Transportation website.
                        </p>
                        <motion.a
                            href={contactInfo.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-argyle-blue/20 hover:bg-argyle-blue/30 rounded-lg text-argyle-blue hover:text-white transition-all"
                        >
                            <Info className="w-4 h-4" />
                            MCPS Transportation Portal
                        </motion.a>
                    </div>
                </motion.div>

                {/* INCREDIBLE BUS ROUTES SECTION */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="text-center mb-12 relative">
                        {/* SECTION GLOW BACKGROUND */}
                        <div className="absolute inset-0 bg-gradient-radial from-green-500/20 via-transparent to-transparent blur-2xl animate-pulse-slow -z-10"></div>

                        <motion.div
                            animate={{
                                rotate: [0, 8, -8, 0],
                                scale: [1, 1.1, 1],
                                boxShadow: [
                                    "0 0 25px rgba(34, 197, 94, 0.5)",
                                    "0 0 40px rgba(168, 85, 247, 0.7)",
                                    "0 0 25px rgba(34, 197, 94, 0.5)"
                                ]
                            }}
                            transition={{
                                rotate: { duration: 4, repeat: Infinity },
                                scale: { duration: 3, repeat: Infinity },
                                boxShadow: { duration: 2, repeat: Infinity }
                            }}
                            className="inline-block p-6 bg-gradient-to-br from-green-500/30 via-purple-500/30 to-blue-500/30 rounded-full mb-6 shadow-[0_0_35px_rgba(34,197,94,0.6)]"
                        >
                            <Bus className="w-12 h-12 text-white drop-shadow-lg" />
                            {/* SPARKLE EFFECTS */}
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-90"></div>
                            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-700 opacity-90"></div>
                        </motion.div>

                        <motion.h2
                            className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-green-300 via-purple-300 to-blue-300 bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Available Bus Routes
                            <motion.div
                                className="w-32 h-1 bg-gradient-to-r from-green-400 via-purple-400 to-blue-400 mx-auto mt-2 rounded-full blur-sm opacity-70"
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
                            Comprehensive transportation coverage for all Argyle students across the Silver Spring area.
                            <motion.span
                                className="block text-purple-300 font-semibold mt-2"
                                animate={{
                                    textShadow: ['0 0 10px rgba(168, 85, 247, 0.6)', '0 0 15px rgba(168, 85, 247, 0.9)', '0 0 10px rgba(168, 85, 247, 0.6)']
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                Every route designed for your safety and convenience! 🚌✨
                            </motion.span>
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {busRoutes.map((route, index) => (
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
                                {/* ROUTE CARD GLOW BACKGROUND */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-${route.color}-500/8 via-purple-500/5 to-${route.color}-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />

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
                                    className={`p-4 rounded-3xl bg-gradient-to-br from-${route.color}-500/20 to-purple-500/20 mb-6 inline-block shadow-[0_0_20px_rgba(59,130,246,0.5)]`}
                                >
                                    <div className="drop-shadow-lg">{route.icon}</div>
                                </motion.div>
                                <h3 className="text-xl font-bold text-white mb-4">{route.route}</h3>

                                <div className="space-y-3 mb-4">
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <Clock className="w-4 h-4" />
                                        {route.schedule}
                                    </div>
                                    <div className="flex items-start gap-2 text-sm text-gray-400">
                                        <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                        {route.notes}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-sm font-semibold text-white mb-2">Route Stops:</h4>
                                    {route.stops.map((stop, stopIndex) => (
                                        <motion.div
                                            key={stopIndex}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: stopIndex * 0.1 }}
                                            className="flex items-center gap-3 text-sm text-gray-300"
                                        >
                                            <div className={`w-2 h-2 rounded-full bg-${route.color}-400 flex-shrink-0`} />
                                            <span>{stop}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* INCREDIBLE IMPORTANT INFORMATION SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="text-center mb-12 relative">
                        {/* SECTION GLOW */}
                        <div className="absolute inset-0 bg-gradient-radial from-blue-500/25 via-transparent to-transparent blur-2xl animate-pulse-slow -z-10"></div>

                        <motion.div
                            animate={{
                                rotate: [0, -8, 8, 0],
                                scale: [1, 1.1, 1],
                                boxShadow: [
                                    "0 0 25px rgba(59, 130, 246, 0.6)",
                                    "0 0 40px rgba(168, 85, 247, 0.8)",
                                    "0 0 25px rgba(59, 130, 246, 0.6)"
                                ]
                            }}
                            transition={{
                                rotate: { duration: 5, repeat: Infinity },
                                scale: { duration: 3, repeat: Infinity },
                                boxShadow: { duration: 2, repeat: Infinity }
                            }}
                            className="inline-block p-6 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-red-500/30 rounded-full mb-6 shadow-[0_0_35px_rgba(59,130,246,0.7)]"
                        >
                            <AlertTriangle className="w-12 h-12 text-white drop-shadow-lg" />
                            {/* ALERT SPARKLES */}
                            <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-80"></div>
                            <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-red-400 rounded-full animate-ping delay-500 opacity-80"></div>
                        </motion.div>

                        <motion.h2
                            className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-blue-300 via-purple-300 to-red-300 bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Important Information
                            <motion.div
                                className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 mx-auto mt-2 rounded-full blur-sm opacity-70"
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
                            Safety guidelines and procedures for safe and reliable school transportation.
                            <motion.span
                                className="block text-purple-300 font-semibold mt-2"
                                animate={{
                                    textShadow: ['0 0 10px rgba(168, 85, 247, 0.6)', '0 0 15px rgba(168, 85, 247, 0.9)', '0 0 10px rgba(168, 85, 247, 0.6)']
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                Your safety is our top priority! 🛡️✨
                            </motion.span>
                        </motion.p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {importantInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    y: -8,
                                    boxShadow: '0 15px 30px -12px rgba(0, 0, 0, 0.5), 0 0 25px rgba(168, 85, 247, 0.3)'
                                }}
                                className="flex items-start gap-4 p-6 glass-card rounded-3xl hover:bg-purple-500/5 transition-all duration-300 relative overflow-hidden group border border-purple-500/20 hover:border-purple-500/40"
                            >
                                {/* INFO CARD GLOW */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/8 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                                <motion.div
                                    whileHover={{
                                        rotate: [0, -15, 15, 0],
                                        scale: 1.2,
                                        boxShadow: [
                                            "0 0 15px rgba(59, 130, 246, 0.5)",
                                            "0 0 25px rgba(168, 85, 247, 0.8)",
                                            "0 0 15px rgba(59, 130, 246, 0.5)"
                                        ]
                                    }}
                                    transition={{
                                        rotate: { duration: 0.6 },
                                        boxShadow: { duration: 1, repeat: Infinity }
                                    }}
                                    className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex-shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]"
                                >
                                    <div className="drop-shadow-lg">{info.icon}</div>
                                </motion.div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{info.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* INCREDIBLE EMERGENCY & WEATHER SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{
                        scale: 1.02,
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(234, 179, 8, 0.3)'
                    }}
                    className="glass-panel p-8 rounded-3xl mb-12 relative overflow-hidden border-2 border-yellow-500/30 shadow-[0_0_30px_rgba(234,179,8,0.2)] hover:shadow-[0_0_60px_rgba(234,179,8,0.4)]"
                >
                    {/* EMERGENCY GLOW BACKGROUND */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-orange-500/8 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                    {/* FLOATING ALERT PARTICLES */}
                    <div className="absolute top-6 right-6 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-0 group-hover:opacity-80 transition-opacity duration-300 shadow-[0_0_12px_rgba(234,179,8,0.8)]"></div>
                    <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-red-400 rounded-full animate-ping delay-300 opacity-0 group-hover:opacity-80 transition-opacity duration-300 shadow-[0_0_10px_rgba(239,68,68,0.6)]"></div>

                    <div className="flex items-center gap-4 mb-6 relative z-10">
                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1],
                                rotate: [0, 10, -10, 0],
                                boxShadow: [
                                    "0 0 20px rgba(234, 179, 8, 0.5)",
                                    "0 0 35px rgba(239, 68, 68, 0.7)",
                                    "0 0 20px rgba(234, 179, 8, 0.5)"
                                ]
                            }}
                            transition={{
                                scale: { duration: 3, repeat: Infinity },
                                rotate: { duration: 4, repeat: Infinity },
                                boxShadow: { duration: 2, repeat: Infinity }
                            }}
                            className="p-4 bg-gradient-to-br from-yellow-500/30 via-orange-500/30 to-red-500/30 rounded-3xl shadow-[0_0_25px_rgba(234,179,8,0.6)]"
                        >
                            <AlertTriangle className="w-10 h-10 text-yellow-300 drop-shadow-lg" />
                        </motion.div>
                        <div>
                            <h3 className="text-3xl font-bold text-white bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
                                Weather & Emergency Procedures
                            </h3>
                            <p className="text-purple-300 font-semibold">Important safety information for transportation</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-yellow-500/20">
                            <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                                Weather Delays
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li>• Bus routes may be delayed or cancelled due to inclement weather</li>
                                <li>• Follow MCPS announcements for transportation updates</li>
                                <li>• Check school website and local news for delay information</li>
                                <li>• Safety is our top priority in adverse weather conditions</li>
                            </ul>
                        </div>

                        <div className="bg-slate-800/50 p-6 rounded-xl border border-red-500/20">
                            <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-red-400" />
                                Emergency Procedures
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li>• Drivers follow established emergency evacuation procedures</li>
                                <li>• Students must follow driver instructions during emergencies</li>
                                <li>• Emergency contacts will be notified as needed</li>
                                <li>• Safety drills conducted regularly to ensure preparedness</li>
                            </ul>
                        </div>
                    </div>
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
                            <Bus className="w-12 h-12 text-white drop-shadow-lg" />
                            {/* BUS SPARKLES */}
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-90"></div>
                            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-300 opacity-90"></div>
                        </motion.div>

                        <motion.h3
                            className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Safe Transportation for Every Student
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
                            Our comprehensive bus transportation system ensures every Argyle student
                            arrives safely to and from school each day.
                            <motion.span
                                className="block text-purple-300 font-semibold mt-2"
                                animate={{
                                    textShadow: ['0 0 10px rgba(168, 85, 247, 0.6)', '0 0 15px rgba(168, 85, 247, 0.9)', '0 0 10px rgba(168, 85, 247, 0.6)']
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                Your safety journey begins here! 🚌✨
                            </motion.span>
                        </motion.p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href={`tel:${contactInfo.phone}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-white font-bold hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all duration-300"
                            >
                                <span className="flex items-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    Call Transportation
                                </span>
                            </motion.a>

                            <motion.a
                                href={contactInfo.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block px-6 py-3 glass-panel text-white rounded-full font-bold hover:bg-white/10 transition-all duration-300"
                            >
                                <span className="flex items-center gap-2">
                                    <Info className="w-4 h-4" />
                                    Full Route Maps
                                </span>
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default BusRoutes;


















