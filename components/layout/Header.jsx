
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Process", href: "/#process" },
    { name: "Reviews", href: "/#reviews" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-gray-200" : "bg-white border-transparent"
            )}
        >
            <div className="container px-0 lg:px-0 h-[70px] flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center relative h-40 w-38 md:h-38 md:w-44">
                    <Image
                        src="/images/logo.png"
                        alt="Eva Tax Solutions"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-600 hover:text-secondary transition-colors duration-200 font-medium text-[15px]"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:block">
                    <Button asChild className="font-sans font-normal cursor-pointer tracking-wide bg-[#4d7c6e] hover:bg-[#3d6358] text-white rounded-sm text-xs shadow-sm px-4 h-9">
                        <Link href="/contact">
                            Contact Us
                        </Link>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden p-2 text-gray-600 focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-gray-200 overflow-hidden shadow-xl"
                    >
                        <div className="container py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-gray-700 hover:text-secondary"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="mt-8">
                                <Button asChild className="w-full font-sans font-normal bg-[#4d7c6e] hover:bg-[#3d6358] text-white rounded-sm h-12 text-lg">
                                    <Link href="/contact" target="_blank" rel="noopener noreferrer">
                                        Contact Us
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
