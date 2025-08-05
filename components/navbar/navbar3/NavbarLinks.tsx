"use client";

type NavItem = {
    name: string;
    link: string;
};
interface NavbarLinksProps {
    navItems: NavItem[];
}
export const NavbarLinks = ({ navItems }: NavbarLinksProps) => {

    return (
        <div className="hidden md:flex gap-6 items-center">
            {navItems.map((item, idx) => (
                <a
                    key={idx}
                    href={item.link}
                    className="text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                >
                    {item.name}
                </a>
            ))}
        </div>
    );
};
