'use client'

import { UserButton, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from './ThemeToggle'

export const RightActions: React.FC<{ showSearch?: boolean }> = ({
    showSearch = false,
}) => {
    return (
        <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Auth Buttons */}
            <SignedOut>
                <SignInButton mode="modal">
                    <Button variant="outline" size="sm">
                        Login
                    </Button>
                </SignInButton>
            </SignedOut>

            <SignedIn>
                <UserButton afterSignOutUrl="/" />
            </SignedIn>
        </div>
    )
}
