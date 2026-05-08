import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ParticleEffects from './ParticleEffects';

const Layout = () => {
    return (
        <div className="min-h-screen bg-fivestar-gray text-fivestar-white selection:bg-fivestar-gold selection:text-fivestar-gray overflow-x-hidden">
            <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-5 pointer-events-none" />
            <div className="fixed inset-0 bg-gradient-to-b from-fivestar-gray via-fivestar-gray/95 to-fivestar-gold/10 pointer-events-none" />

            {/* ELEGANT GOLD AMBIENT GLOW SYSTEM */}
            <div className="fixed -top-24 -left-24 w-[500px] h-[500px] bg-fivestar-gold/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
            <div className="fixed top-1/2 -right-24 w-[600px] h-[600px] bg-fivestar-gold/15 rounded-full blur-[140px] pointer-events-none animate-pulse delay-700" />
            <div className="fixed -bottom-24 left-1/3 w-[500px] h-[500px] bg-fivestar-gold-dark/20 rounded-full blur-[120px] pointer-events-none animate-pulse delay-1000" />
            <div className="fixed top-1/4 right-1/4 w-96 h-96 bg-fivestar-gold-light/10 rounded-full blur-[100px] pointer-events-none animate-pulse delay-500" />
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,184,0,0.08),transparent_70%)] pointer-events-none" />
            {/* END AMBIENT GLOW */}

            {/* Enterprise Particle Effects */}
            <ParticleEffects />

            <Navbar />

            <main className="relative pt-20">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;