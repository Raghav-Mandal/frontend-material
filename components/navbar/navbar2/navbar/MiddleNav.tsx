'use client';
import Link from 'next/link';

type NavItem = {
    name: string;
    href: string;
};

type MiddleNavProps = {
    navLinks: NavItem[];
};

export const MiddleNav = ({ navLinks }: MiddleNavProps) => (
    <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
        {navLinks.map((link) => (
            <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
            >
                {link.name}
            </Link>
        ))}
    </nav>
);
