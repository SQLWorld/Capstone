import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Cpu, MousePointer2, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const titleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.8, ease: "easeOut" }
        })
    };

    return (
        <section ref={targetRef} className="relative min-h-[95vh] flex items-center justify-center overflow-hidden perspective-1000">
            {/* Parallax Background */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 bg-fivestar-gray z-0">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-fivestar-gold/20 via-fivestar-gray to-fivestar-gray"></div>

                {/* Animated Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-fivestar-gold/10 rounded-full blur-[100px] mix-blend-screen animate-float-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-fivestar-gold-dark/10 rounded-full blur-[120px] mix-blend-screen animate-float-slower"></div>

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Badge Animation - Moved down with mt-16 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="inline-flex items-center space-x-2 px-6 py-2 rounded-full glass-panel mb-10 mt-16 border border-white/10 hover:border-fivestar-gold/50 transition-colors cursor-default"
                >
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fivestar-gold opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-fivestar-gold"></span>
                    </span>
                    <span className="text-fivestar-gold text-sm font-medium tracking-widest uppercase">{t('hero.badge')}</span>
                </motion.div>

                {/* Staggered Title Animation */}
                <div className="overflow-hidden mb-8">
                    <motion.h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter">
                        <motion.span
                            custom={1} variants={titleVariants} initial="hidden" animate="visible"
                            className="block text-white mb-2"
                        >
                            {t('hero.title1')}
                        </motion.span>
                        <motion.span
                            custom={2} variants={titleVariants} initial="hidden" animate="visible"
                            className="block bg-clip-text text-transparent bg-gradient-to-r from-fivestar-gold via-fivestar-gold-light to-fivestar-gold-dark pb-4"
                        >
                            {t('hero.title2')}
                        </motion.span>
                    </motion.h1>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light leading-relaxed tracking-wide px-4 md:px-0"
                >
                    {t('hero.subtitle')}<span className="text-white font-medium">{t('hero.highlight1')}</span>, <span className="text-white font-medium">{t('hero.highlight2')}</span>, {t('hero.and')} <span className="text-white font-medium">{t('hero.highlight3')}</span>.
                </motion.p>

                {/* Buttons with Hover Effects */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="mt-6 flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <motion.button
                        onClick={(e) => {
                            if (window.triggerParticleCelebration) {
                                window.triggerParticleCelebration(e.clientX, e.clientY);
                            }
                            window.location.href = '/resource-map';
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-10 py-5 bg-fivestar-gold text-fivestar-gray rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,184,0,0.3)] flex items-center overflow-hidden cursor-pointer"
                    >
                        <span className="relative z-10">{t('hero.button1')}</span>
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                        <div className="absolute inset-0 bg-gradient-to-r from-fivestar-gold-light to-fivestar-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.button>

                    <motion.button
                        onClick={(e) => {
                            if (window.triggerParticleCelebration) {
                                window.triggerParticleCelebration(e.clientX, e.clientY);
                            }
                            window.location.href = '/get-help';
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group px-10 py-5 glass-panel text-white rounded-full font-bold text-lg transition-all hover:bg-white/10 hover:scale-105 flex items-center cursor-pointer"
                    >
                        {t('hero.button2')}
                    </motion.button>
                </motion.div>

                {/* Scroll Indicator REMOVED */}

            </div>

            {/* 3D Floating Elements - Parallax */}
            <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }} className="absolute top-32 left-10 text-white/5 hidden lg:block">
                <Cpu size={120} />
            </motion.div>
            <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }} className="absolute bottom-40 right-10 text-white/5 hidden lg:block">
                <MousePointer2 size={120} />
            </motion.div>

        </section>
    );
};

export default Hero;