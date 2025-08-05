'use client'

import React, { useState } from 'react'
import { Logo } from './Logo'
import { MiddleNav } from './middleNav'
import { RightActions } from './RightActions'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type NavItem = {
    name: string
    href: string
}

type NavbarProps = {
    logo?: React.ReactNode
    siteName?: string
    middleNavItems?: NavItem[]
    showSearch?: boolean
}

export const Navbar: React.FC<NavbarProps> = ({
    logo,
    siteName = 'Mock Master',
    middleNavItems = [],
    showSearch = false,
}) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="w-full fixed top-0 left-0 z-50 bg-background shadow">
            <div className="flex items-center justify-between px-4 py-3 md:px-6">
                <Logo logo={logo} siteName={siteName} />

                {/* Desktop Middle Nav */}
                <div className="hidden md:flex space-x-4">
                    <MiddleNav items={middleNavItems} />
                </div>

                {/* Right Actions */}
                <RightActions showSearch={showSearch} />

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="md:hidden overflow-hidden bg-background border-t"
                    >
                        <div className="flex flex-col px-4 py-2 space-y-2">
                            <MiddleNav items={middleNavItems} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
