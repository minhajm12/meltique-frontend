'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

import { usePathname } from "next/navigation";
import MainBtn from "../common/MainBtn";
import { Icons } from "../common/Icons";
import MobileMenu from "../common/MobileMenu";
import { Sheet, SheetContent } from "../ui/sheet";
import { motion } from "motion/react";

const headerData = {
    branding: {
        logoSrc: "/assets/img/logo/meltique-logo.svg",
        logoAlt: "Meltique Gift Collections Logo",
        logoTitle: "Meltique Gift Collections Logo",
    },
    navItems: [
        {
            label: "Home",
            href: "/#home",
        },
        {
            label: "Our Story",
            href: "/#our-story",
        },
        {
            label: "Shop",
            href: "/#shop",
        },
        {
            label: "Gifting",
            href: "/#gifting",
        },
    ],
    ctaButton: {
        label: "Book Now",
        href: "/",
    },
}

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="py-[15px] full-padding bg-linear-to-b from-white to-transparent">
            <nav className="">
                <div className="w-full flex items-center justify-between">
                    {/* Menu Button & Logo */}
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0,
                            duration: 0.5,
                            type: "tween",
                        }}
                        className="flex items-center justify-start xl:flex-1">
                        <Link href="/#home" aria-label="Navigate to Meltique Gift Collections Home" title="Navigate to Home" className="logo w-[110px] md:w-[130px] 2xl:w-[150px]">
                            <Image
                                src={headerData.branding.logoSrc}
                                alt={headerData.branding.logoAlt}
                                title={headerData.branding.logoTitle}
                                width={122}
                                height={68}
                                preload
                                className="w-full !h-[60px]"
                                style={{ width: "auto", height: "auto" }}
                            />
                        </Link>
                    </motion.div>

                    {/* Desktop Nav Links */}
                    <div className="hidden xl:flex items-center justify-center">
                        <ul className="relative font-normal flex flex-col p-4 md:p-0 mt-4 md:flex-row md:items-center md:justify-center md:space-x-2 rtl:space-x-reverse md:mt-0">
                            {headerData.navItems?.map((link, index) => {
                                const isActive = link.href === '/#home' ? pathname === '/' : pathname === link.href;
                                return (
                                    <motion.li
                                        initial={{ x: 20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{
                                            delay: index * 0.1,
                                            duration: 0.5,
                                            type: "tween",
                                        }}
                                        key={index}>
                                        <Link
                                            href={link.href}
                                            aria-label={`Navigate to ${link.label}`}
                                            title={`Navigate to ${link.label}`}
                                            className={`!font-google-sans leading-tight relative hover:text-[#DC2D16] overflow-hidden flex flex-col py-[4px] lg:px-[16px] xl:px-[18px] rounded-[40px] lg:text-[18px] text-[16px] font-normal transition duration-300 group ${isActive
                                                ? "!font-bold"
                                                : ""
                                                }`}
                                        >
                                            <span className={`!font-google-sans left-0 top-1/2 duration-300 transition-all text-nowrap ${isActive
                                                ? ""
                                                : ""
                                                }`}>{link.label}</span>
                                        </Link>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="flex items-center justify-end gap-5 xl:flex-1">


                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0,
                                duration: 0.5,
                                type: "tween",
                            }}
                            className="md:block hidden">
                            <MainBtn BtnArrow text="Let's Connect" url="/#contact" btnType="outline" />
                        </motion.div>

                        <button
                            onClick={() => setMenuOpen(true)}
                            className="text-current xl:hidden cursor-pointer"
                            aria-label="Open Navigation Menu"
                            title="Open Navigation Menu"
                        >
                            <Icons.Menu_Icon className="size-[34px]" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <Sheet open={menuOpen} onOpenChange={() => setMenuOpen(false)}>
                <SheetContent side={"right"} className="w-[85%] z-99 bg-white border-none">
                    <MobileMenu navLinks={headerData.navItems} closeMenu={() => setMenuOpen(false)} />
                </SheetContent>
            </Sheet>
        </header>
    )
}

export default Header