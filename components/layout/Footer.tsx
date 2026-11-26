'use client'

import Image from "next/image";
import Link from "next/link";
import { Icons } from "../common/Icons";
import { motion } from "motion/react";

const footerData = {
    branding: {
        logoSrc: "/assets/img/logo/meltique-logo.svg",
        logoAlt: "Meltique Gift Collections Logo",
        description:
            "We Believe Every Sweet Moment Deserves A Little Extra Magic. Born From A Love For Thoughtful Gifting And Beautifully Crafted Treats, We Bring Together Delightful Flavours, Quality Ingredients, And Elegant Packaging To Make Every Occasion Memorable.",
    },
    quickLinks: [
        { label: "Home", href: "/" },
        { label: "Our Story", href: "#" },
        { label: "Shop", href: "#" },
        { label: "Gifting", href: "#" },
        { label: "Blogs", href: "#" },
        { label: "Contact Us", href: "#" },
    ],
    socialLinks: [
        { label: "Facebook", href: "#", icon: Icons.Facebook },
        { label: "YouTube", href: "#", icon: Icons.YouTube },
        { label: "X", href: "#", icon: Icons.XIcon },
        { label: "Instagram", href: "#", icon: Icons.Instagram },
    ],
    contact: {
        address: "12th Floor, Marina Plaza, Dubai Marina, Dubai, UAE.",
        phone: "+91 6545 895 452",
        email: "meltique@gmail.com",
    },
    waveImageSrc: "/assets/img/footer-bg.png",
    copyright: "© 2026 Meltique Gifts. All Right Reserved.",
};

function Footer() {
    return (
        <footer className="full-padding pb-[20px] md:pb-[30px] pt-[20px]">
            {/* Main Rounded Card */}
            <motion.div
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: 0, duration: 0.55, type: "tween" }}
                className="bg-white rounded-[20px] md:rounded-[30px] overflow-hidden relative"
            >
                <div className="px-[20px] md:px-[30px] lg:px-[40px] xl:px-[60px] 2xl:px-[80px] pt-[30px] md:pt-[50px] 2xl:pt-[60px] pb-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-[30px] lg:gap-y-0 md:gap-x-[30px] xl:gap-x-[48px] items-start">
                        {/* Brand Info */}
                        <div className="md:col-span-2 lg:col-span-5 flex flex-col gap-[16px]">
                            <Link href="/" aria-label="Navigate to Meltique Home" title="Navigate to Home" className="block w-[140px] md:w-[180px] 2xl:w-[200px]">
                                <Image
                                    src={footerData.branding.logoSrc}
                                    alt={footerData.branding.logoAlt}
                                    title={footerData.branding.logoAlt}
                                    width={165}
                                    height={75}
                                    className="w-full h-auto"
                                />
                            </Link>
                            <p className="2xl:text-[18px] text-[16px] font-normal leading-[1.6] text-[#171717] max-w-[440px]">
                                {footerData.branding.description}
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="md:col-span-1 lg:col-span-4">
                            <h3 className="font-sora font-semibold lg:text-[20px] text-[18px] text-black mb-[12px] md:mb-[16px]">
                                Quick Links
                            </h3>
                            <ul className="flex flex-col flex-wrap items-start gap-x-[20px] xl:gap-x-[24px] gap-y-[8px]">
                                {footerData.quickLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            aria-label={`Navigate to ${link.label}`}
                                            title={`Navigate to ${link.label}`}
                                            className="2xl:text-[18px] text-[16px] font-normal text-[#171717] hover:text-[#DC2D16] common-transition whitespace-nowrap"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Details & Social Media */}
                        <div className="md:col-span-1 lg:col-span-3">
                            <h3 className="font-sora font-semibold lg:text-[20px] text-[18px] text-black mb-[12px] md:mb-[16px]">
                                Contact Details
                            </h3>
                            <ul className="flex flex-col gap-[14px]">
                                <li className="flex items-start gap-[12px] 2xl:text-[18px] text-[16px] font-normal text-[#171717]">
                                    <Icons.Location className="size-[18px] shrink-0 mt-[4px] text-black" />
                                    <span>{footerData.contact.address}</span>
                                </li>
                                <li className="flex items-center gap-[12px] 2xl:text-[18px] text-[16px] font-normal text-[#171717]">
                                    <Icons.Phone className="size-[18px] shrink-0 text-black" />
                                    <Link
                                        href={`tel:${footerData.contact.phone.replace(/\s+/g, "")}`}
                                        aria-label={`Call ${footerData.contact.phone}`}
                                        title={`Call ${footerData.contact.phone}`}
                                        className="hover:text-[#DC2D16] common-transition"
                                    >
                                        {footerData.contact.phone}
                                    </Link>
                                </li>
                                <li className="flex items-center gap-[12px] 2xl:text-[18px] text-[16px] font-normal text-[#171717]">
                                    <Icons.Mail className="size-[18px] shrink-0 text-black" />
                                    <Link
                                        href={`mailto:${footerData.contact.email}`}
                                        aria-label={`Email ${footerData.contact.email}`}
                                        title={`Email ${footerData.contact.email}`}
                                        className="hover:text-[#DC2D16] common-transition"
                                    >
                                        {footerData.contact.email}
                                    </Link>
                                </li>
                            </ul>

                            <div className="mt-[24px] md:mt-[30px]">
                                <h3 className="font-sora font-semibold lg:text-[20px] text-[18px] text-black mb-[12px] md:mb-[16px]">
                                    Follow Us On Social Media
                                </h3>
                                <ul className="flex items-center gap-[12px]">
                                    {footerData.socialLinks.map((social) => {
                                        const SocialIcon = social.icon;
                                        return (
                                            <li key={social.label}>
                                                <Link
                                                    href={social.href}
                                                    aria-label={social.label}
                                                    title={social.label}
                                                    className="size-[32px] rounded-full bg-black text-white flex items-center justify-center hover:bg-[#DC2D16] common-transition"
                                                >
                                                    <SocialIcon className="size-[16px]" />
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Decorative Wave Image */}
                <div className="w-full h-[90px] sm:h-[130px] lg:h-[170px] 2xl:h-[220px]">
                    <Image
                        src={footerData.waveImageSrc}
                        alt="Meltique decorative footer wave pattern"
                        title="Meltique Gift Collections Footer"
                        width={1920}
                        height={260}
                        className="w-full h-full object-cover object-top pointer-events-none select-none"
                    />
                </div>
            </motion.div>

            {/* Bottom Copyright Bar */}
            <motion.div
                initial={{ y: 16, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: 0.15, duration: 0.5, type: "tween" }}
                className="mt-[14px] md:mt-[18px] bg-black text-white rounded-full py-[12px] md:py-[14px] px-[24px] text-center"
            >
                <p className="2xl:text-[18px] text-[16px] font-normal text-white">
                    {footerData.copyright}
                </p>
            </motion.div>
        </footer>
    );
}

export default Footer;
