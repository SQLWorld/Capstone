import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { ArgyleSpinner } from './LoadingStates';

// Ultra-light page transitions - just fade in/out
const fadeVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
};

const fastFadeTransition = {
    duration: 0.3,
    ease: "easeInOut"
};

// EXACT SAME LOADING SCREEN (user's absolute favorite!)
const LoadingScreen = ({ isLoading, progress = 0 }) => {
    if (!isLoading) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
        >
            {/* Enhanced background effects during loading */}
            <div className="absolute inset-0">
                {/* Floating particles */}
                {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-40"
                        animate={{
                            opacity: [0.2, 0.7, 0.2],
                            scale: [1, 1.5, 1],
                            y: [0, -20, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut"
                        }}
                        style={{
                            left: `${15 + Math.random() * 70}%`,
                            top: `${15 + Math.random() * 70}%`,
                        }}
                    />
                ))}

                {/* Subtle glow orbs */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-indigo-500/15 rounded-full blur-xl animate-pulse delay-500"></div>
            </div>

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center relative z-10"
            >
                {/* Enhanced Argyle Spinner */}
                <div className="flex justify-center mb-6">
                    <ArgyleSpinner size="w-20 h-20" />
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold bg-gradient-to-r from-purple-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent mb-3"
                >
                    Loading Argyle Excellence
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-gray-300 mb-6"
                >
                    Preparing an amazing experience...
                </motion.p>

                {/* Simple Progress bar that actually moves */}
                <div className="w-80 mx-auto bg-white/10 rounded-full h-4 overflow-hidden mb-4 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                    <div
                        className="h-full bg-gradient-to-r from-argyle-blue via-purple-500 to-pink-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all duration-100"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-sm text-gray-500"
                >
                    {progress}% Complete
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

// Page Transition with WELCOMING entrance animations after loading screen
const PageTransition = ({ children, mode = 'fade' }) => {
    const location = useLocation();
    const [isLoading, setIsLoading] = React.useState(true);
    const [loadProgress, setLoadProgress] = React.useState(0);
    const [showContent, setShowContent] = React.useState(false);

    // BRUTE FORCE: Show loading for 2 seconds on EVERY page load/reload
    React.useEffect(() => {
        console.log('🔄 LOADING SCREEN: Starting forced 2-second loading');

        setIsLoading(true);
        setLoadProgress(0);
        setShowContent(false);

        let progress = 0;
        const interval = setInterval(() => {
            progress += 5; // 5% every 100ms = 2 seconds total
            setLoadProgress(Math.min(progress, 100));

            if (progress >= 100) {
                clearInterval(interval);
                console.log('✅ LOADING SCREEN: Complete, hiding loading');
                setIsLoading(false);
                setTimeout(() => setShowContent(true), 150);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [location.pathname]); // Run on every pathname change

    // Ultra-light welcoming entrance (no blur, minimal effects)
    const welcomingVariants = {
        hidden: {
            opacity: 0,
            y: 15
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    };

    const childVariants = {
        hidden: {
            opacity: 0,
            y: 10
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <>
            <LoadingScreen isLoading={isLoading} progress={loadProgress} />

            <motion.div
                initial="hidden"
                animate={showContent ? "visible" : "hidden"}
                variants={welcomingVariants}
                className="min-h-screen"
            >
                {/* Elegant page entrance with welcoming animations */}
                <motion.div
                    variants={childVariants}
                    className="relative"
                >
                    {/* Minimal welcome sparkle (just one elegant sparkle) */}
                    {showContent && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
                        >
                            <div className="text-6xl">✨</div>
                        </motion.div>
                    )}

                    {children}
                </motion.div>

                {/* Removed celebration effect for performance */}
            </motion.div>
        </>
    );
};

export { PageTransition };