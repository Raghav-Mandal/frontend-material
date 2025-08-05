'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItem = {
    name: string
    href: string
}

export const MiddleNav: React.FC<{ items: NavItem[] }> = ({ items }) => {
    const pathname = usePathname()

    return (
        <>
            {items.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-1 rounded-md text-sm font-medium ${pathname === item.href
                            ? 'bg-primary text-white'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                >
                    {item.name}
                </Link>
            ))}
        </>
    )
}
