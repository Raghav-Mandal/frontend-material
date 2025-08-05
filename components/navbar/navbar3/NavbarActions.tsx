"use client";

import { StatefulButton } from "@/components/ui/button/Button";
import { useUser, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";

export const NavbarActions = () => {
    const { user, isSignedIn } = useUser();

    return (
        <div className="flex items-center gap-4">
            {isSignedIn ? (
                <>
                    <UserButton afterSignOutUrl="/" />
                    {user?.firstName && (
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {user.firstName}
                        </span>
                    )}
                </>
            ) : (
                <SignInButton>
                    <StatefulButton label="Get Started" />
                </SignInButton>
            )}
        </div>
    );
};
