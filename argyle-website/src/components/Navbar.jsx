import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import logo from '../assets/5 Star Sollutions Logo.png';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'es' : 'en');
    };

    return (
        <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center space-x-4">
                        <Link to="/" className="flex items-center space-x-3 group">
                            <div className="relative overflow-hidden rounded-full border-2 border-fivestar-gold/50 group-hover:border-fivestar-gold transition-colors duration-300">
                                <img src={logo} alt="5 Star Solutions" className="h-10 w-10 object-cover" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold tracking-wider text-fivestar-gold group-hover:text-fivestar-gold-light transition-colors">5 STAR</span>
                                <span className="text-xs text-fivestar-white/80 tracking-[0.2em] group-hover:text-fivestar-white transition-colors">SOLUTIONS</span>
                            </div>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/resource-map">Find Food</NavLink>
                            <NavLink to="/get-help">Get Help</NavLink>
                            <NavLink to="/partner-portal">Partners</NavLink>
                            <div className="flex items-center px-4 py-1 rounded-full bg-fivestar-gold/20 border border-fivestar-gold/30 text-xs font-mono text-fivestar-gold">
                                <span className="animate-pulse mr-2">●</span> SDG 2
                            </div>
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center gap-2 px-4 py-1 rounded-full bg-fivestar-gray-light border border-fivestar-gold/30 text-xs font-mono text-fivestar-gold hover:bg-fivestar-gold/10 transition-colors"
                            >
                                <Globe className="w-4 h-4" />
                                {language === 'en' ? 'EN' : 'ES'}
                            </button>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden glass-panel">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
                        <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
                        <MobileNavLink to="/resource-map" onClick={() => setIsOpen(false)}>Find Food</MobileNavLink>
                        <MobileNavLink to="/get-help" onClick={() => setIsOpen(false)}>
                            <span className="text-fivestar-gold font-bold">Get Help ⭐</span>
                        </MobileNavLink>
                        <MobileNavLink to="/partner-portal" onClick={() => setIsOpen(false)}>Partners</MobileNavLink>
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white w-full"
                        >
                            <Globe className="w-4 h-4" />
                            {language === 'en' ? 'Switch to Español' : 'Cambiar a English'}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

const NavLink = ({ to, children }) => (
    <Link to={to} className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105">
        {children}
    </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
    <Link to={to} onClick={onClick} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
        {children}
    </Link>
);

export default Navbar;
