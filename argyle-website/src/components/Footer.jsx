import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="relative z-10 bg-fivestar-gray border-t border-fivestar-gold/20 pt-16 pb-8 mt-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 lg:mb-12">

                    {/* Column 1: 5 Star Solutions */}
                    <div>
                        <h4 className="text-fivestar-gold font-bold mb-3 text-base lg:text-lg">5 Star Solutions</h4>
                        <ul className="space-y-2 text-sm lg:text-sm text-gray-400">
                            <li><Link to="/" className="hover:text-fivestar-gold transition-colors">Home</Link></li>
                            <li><Link to="/resource-map" className="hover:text-fivestar-gold transition-colors">Find Food</Link></li>
                            <li><Link to="/get-help" className="hover:text-fivestar-gold transition-colors">Get Help</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: Resources */}
                    <div>
                        <h4 className="text-white font-bold mb-3 text-base lg:text-lg">Resources</h4>
                        <ul className="space-y-2 text-sm lg:text-sm text-gray-400">
                            <li><a href="https://www.usa.gov/hunger" target="_blank" rel="noopener noreferrer" className="hover:text-fivestar-gold transition-colors">USA.gov Food Assistance</a></li>
                            <li><a href="https://www.fns.usda.gov/snap" target="_blank" rel="noopener noreferrer" className="hover:text-fivestar-gold transition-colors">SNAP Benefits</a></li>
                            <li><a href="https://www.211.org" target="_blank" rel="noopener noreferrer" className="hover:text-fivestar-gold transition-colors">2-1-1 Helpline</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Organization */}
                    <div>
                        <h4 className="text-white font-bold mb-3 text-base lg:text-lg">Organization</h4>
                        <ul className="space-y-2 text-sm lg:text-sm text-gray-400">
                            <li><Link to="/about" className="hover:text-fivestar-gold transition-colors">About Us</Link></li>
                            <li><Link to="/partner-portal" className="hover:text-fivestar-gold transition-colors">Partner Portal</Link></li>
                            <li><Link to="/get-help" className="hover:text-fivestar-gold transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: SDG 2 */}
                    <div>
                        <h4 className="text-white font-bold mb-3 text-base lg:text-lg">SDG 2: Zero Hunger</h4>
                        <ul className="space-y-2 text-sm lg:text-sm text-gray-400">
                            <li><a href="https://sdgs.un.org/goals/goal2" target="_blank" rel="noopener noreferrer" className="hover:text-fivestar-gold transition-colors">UN SDG Goal 2</a></li>
                            <li><a href="https://www.un.org/sustainabledevelopment/hunger/" target="_blank" rel="noopener noreferrer" className="hover:text-fivestar-gold transition-colors">Zero Hunger Initiative</a></li>
                            <li><a href="https://www.worldfoodprogramme.org" target="_blank" rel="noopener noreferrer" className="hover:text-fivestar-gold transition-colors">World Food Programme</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 lg:pt-8 border-t border-fivestar-gold/10 text-center px-4">
                    <p className="text-gray-400 text-sm lg:text-sm mb-3 lg:mb-2">
                        Building an accessible directory of free food resources to support SDG 2: Zero Hunger.
                    </p>
                    <p className="text-gray-500 text-xs lg:text-xs">
                        © {new Date().getFullYear()} 5 Star Solutions | Capstone Project - SDG 2: Zero Hunger
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
