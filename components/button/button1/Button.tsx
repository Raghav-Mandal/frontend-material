"use client";

import React from "react";
import { Button } from "@/components/ui/stateful-button";
import { useRouter } from "next/navigation";

interface StatefulButtonProps {
    label: string;
    href?: string;
    onClick?: () => void;
    className?: string;
}

export function StatefulButton({
    label,
    href,
    onClick,
    className,
}: StatefulButtonProps) {
    const router = useRouter();

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else if (href) {
            router.push(href);
        }
    };

    return (
        <div className="flex h-10 w-full items-center justify-center">
            <Button onClick={handleClick} className={className}>
                {label}
            </Button>
        </div>
    );
}
