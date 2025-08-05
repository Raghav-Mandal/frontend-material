import React from 'react'
import Link from 'next/link'

export const Logo: React.FC<{ logo?: React.ReactNode; siteName?: string }> = ({
    logo,
    siteName = 'Mock Master',
}) => (
    <Link href="/" className="flex items-center space-x-2 text-lg font-bold">
        {logo ?? <span>🧠</span>}
        <span>{siteName}</span>
    </Link>
)
