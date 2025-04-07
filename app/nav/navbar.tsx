
"use client"
import React, { useState, useEffect } from 'react';
import { ModeToggle } from './Mode_toggle';
const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold">Logo</div>
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500">
                About
              </a>
            </li>
            <li>
             <ModeToggle />
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;