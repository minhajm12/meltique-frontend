'use client'

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MainBtn from './MainBtn'
import { motion } from 'motion/react'

type NavLink = {
    label: string;
    href: string;
};

function MobileMenu({ closeMenu, navLinks }: { closeMenu: () => void; navLinks: NavLink[] }) {
    const pathname = usePathname();

    return (
        <nav className="p-[30px]">
            <div className="flex flex-col gap-[50px]">
                {/* Menu Button & Logo */}
                <motion.div
                    initial={{ x: 16, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0, duration: 0.4, type: "tween" }}
                    className="flex"
                >
                    <div className="logo w-[150px]">
                        <Image preload src="/assets/img/logo/meltique-logo.svg" alt="Meltique Gift Collections Logo" title="Meltique Gift Collections Logo" width={122} height={68} loading="eager" className="w-full h-auto" style={{ width: "auto", height: "auto" }} />
                    </div>
                </motion.div>

                {/* Mobile Nav Links */}
                <div className="w-full">
                    <ul className="relative font-normal flex flex-col gap-[25px]">
                        {navLinks?.map((link, index) => {
                            const isActive = link.href === '/#home' ? pathname === '/' : pathname === link.href;
                            return (
                                <motion.li
                                    key={index}
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: index * 0.08,
                                        duration: 0.4,
                                        type: "tween",
                                    }}
                                >
                                    <Link
                                        onClick={closeMenu}
                                        href={link.href}
                                        aria-label={`Navigate to ${link.label}`}
                                        title={`Navigate to ${link.label}`}
                                        className={`relative overflow-hidden flex flex-col rounded-[0px] lg:text-[22px] text-[18px] bg-transparent w-fit ${isActive ? "font-semibold text-black" : ""}`}
                                    >
                                        <span className="left-0 top-1/2 duration-300 transition-all text-nowrap">{link.label}</span>
                                    </Link>
                                </motion.li>
                            );
                        })}
                    </ul>
                    {/* Buttons */}
                    <motion.div
                        initial={{ y: 16, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.4, type: "tween" }}
                        onClick={closeMenu}
                        className="mt-6 block md:hidden"
                    >
                        <div className="md:hidden block">
                            <MainBtn text="Let's Talk" url="/#contact" btnType="outline" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </nav>
    )
}

export default MobileMenu
