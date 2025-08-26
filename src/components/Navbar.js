import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/portf.png';
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg fixed w-full z-50">
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
                <Link to="/Home">
                    <img src={logo} alt="LogoPortfolio" className="w-20 inline-block mr-2 " />
                </Link>
                <ul className="hidden lg:flex space-x-6 text-white">
                    <li><a href="/Home" className="text-primary hover:text-secondary">Accueil</a></li>
                    <li><a href="/projects" className="hover:text-yellow-400">Projets</a></li>
                    <li><a href="/about" className="hover:text-yellow-400">À propos</a></li>
                    <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
                </ul>
            </div>
        </nav>

    );
}

export default Navbar;
