"use client";
import React, { useState, useEffect } from "react";
import { ModeToggle } from "./Mode_toggle";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/90 backdrop-blur-lg shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-3 flex justify-between items-center h-16">
                {/* Logo Section */}
                <div className="flex items-center space-x-4">
                    <Link href="/">
                        <div className="flex items-center space-x-2 cursor-pointer">
                            <Image
                                src="/slack.svg"
                                alt="Slack Logo"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <svg
                                width="200"
                                height="40"
                                viewBox="0 0 200 50"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <linearGradient
                                        id="logoGradient"
                                        x1="0%"
                                        y1="0%"
                                        x2="100%"
                                        y2="0%"
                                    >
                                        <stop
                                            offset="0%"
                                            style={{
                                                stopColor: "#6a11cb",
                                                stopOpacity: 1,
                                            }}
                                        />
                                        <stop
                                            offset="100%"
                                            style={{
                                                stopColor: "#2575fc",
                                                stopOpacity: 1,
                                            }}
                                        />
                                    </linearGradient>
                                </defs>
                                <text
                                    x="10"
                                    y="30"
                                    fontFamily="Segoe UI, sans-serif"
                                    fontSize="20"
                                    fontWeight="bold"
                                    fill="url(#logoGradient)"
                                >
                                    AI Resume Builder
                                </text>
                            </svg>
                        </div>
                    </Link>
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-8 items-center font-medium text-gray-700 dark:text-gray-300">
                    <li>
                        <a
                            href="#home"
                            className="hover:text-blue-600 transition-colors duration-200"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="hover:text-blue-600 transition-colors duration-200"
                        >
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