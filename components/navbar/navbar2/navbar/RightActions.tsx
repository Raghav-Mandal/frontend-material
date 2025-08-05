'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';


type RightActionsProps = {
    enableSearch?: boolean;
};

export const RightActions = ({ enableSearch = true }: RightActionsProps) => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; //

    return (
        <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-muted-foreground"
            >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </Button>

            {/* Search */}
            {enableSearch && (
                <Button variant="ghost" className="text-sm px-2">
                    🔍 Search
                </Button>
            )}

            {/* Auth Buttons */}
            <SignedOut>
                <Link href="/sign-in">
                    <Button variant="outline" size="sm">
                        Login
                    </Button>
                </Link>
                <Link href="/sign-up">
                    <Button size="sm">Sign Up</Button>
                </Link>
            </SignedOut>

            <SignedIn>
                <UserButton afterSignOutUrl="/" />
            </SignedIn>
        </div>
    );
};
