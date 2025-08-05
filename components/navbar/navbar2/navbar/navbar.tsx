'use client';

import React, { useState } from 'react';
import { Logo } from './Logo';
import { MiddleNav } from './MiddleNav';
import { RightActions } from './RightActions';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

type NavItem = {
    name: string;
    href: string;
};

type NavbarProps = {
    logo: string;
    siteName: string;
    navLinks: NavItem[];
    enableSearch?: boolean;
};

const Navbar = ({ logo, siteName, navLinks, enableSearch }: NavbarProps) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="bg-background shadow dark:bg-gray-950">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                <Logo logo={logo} siteName={siteName} />
                <MiddleNav navLinks={navLinks} />
                <RightActions enableSearch={enableSearch} />

                {/* Mobile Menu Toggle */}
                <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
                    {mobileOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.nav
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="lg:hidden overflow-hidden px-4 pb-4"
                    >
                        <div className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground">
                                    {link.name}
                                </Link>
                            ))}
                            {enableSearch && <div className="text-sm">🔍 Search</div>}
                            <RightActions enableSearch={false} />
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
