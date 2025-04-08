"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./Mode_toggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background text-foreground backdrop-blur-md border-b border-gray-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl text-gradient">ResumeAI</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#how-it-works"
              className="text-foreground hover:text-blue-600 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#features"
              className="text-foreground hover:text-blue-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#why-choose-us"
              className="text-foreground hover:text-blue-600 transition-colors"
            >
              Why Choose Us
            </a>
            <a
              href="#testimonials"
              className="text-foreground hover:text-blue-600 transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-foreground hover:text-blue-600 transition-colors"
            >
              Pricing
            </a>
            <Button variant="outline" className="ml-4">
              Sign In
            </Button>
            <Button>Get Started</Button>
            <ModeToggle />
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-foreground">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#how-it-works"
              className="block px-3 py-2 text-foreground hover:text-blue-600"
            >
              How It Works
            </a>
            <a
              href="#features"
              className="block px-3 py-2 text-foreground hover:text-blue-600"
            >
              Features
            </a>
            <a
              href="#why-choose-us"
              className="block px-3 py-2 text-foreground hover:text-blue-600"
            >
              Why Choose Us
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 text-foreground hover:text-blue-600"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 text-foreground hover:text-blue-600"
            >
              Pricing
            </a>
            <div className="pt-4 flex flex-col space-y-2 pb-3">
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
