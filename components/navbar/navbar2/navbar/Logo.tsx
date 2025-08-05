'use client';
import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
    logo: string;
    siteName: string;
};

export const Logo = ({ logo, siteName }: LogoProps) => {
    return (
        <Link href="/" className="flex items-center space-x-2">
            {logo ? (
                <Image src={logo} alt={`${siteName} Logo`} width={40} height={40} className="h-10 w-10 rounded-full" />
            ) : (
                <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-700">{siteName.charAt(0)}</span>
                </div>
            )}
            <span className="text-lg font-semibold text-gray-900 dark:text-white">{siteName}</span>
        </Link>
    );
};
