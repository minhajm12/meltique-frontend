'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import MainTitle from './MainTitle'
import ContentMain from './ContentMain'
import MainBtn from './MainBtn'
import { Icons } from './Icons'
import { motion } from 'motion/react'

type MainCtaProps = {
    id?: string;
    title?: string;
    title2?: string;
    offer?: string;
    couponCode?: string;
    description?: string;
    btnText?: string;
    btnUrl?: string;
    bgImage?: string;
};

function MainCta({
    id = "gifting",
    title = "Make Gifting",
    title2 = "Sweeter.",
    offer = "15% OFF",
    couponCode = "SWEET15",
    description = "On your first gifting order. Because every celebration deserves something sweet.",
    btnText = "Explore Now",
    btnUrl = "/#shop",
    bgImage = "/assets/img/cta-bg.jpg",
}: MainCtaProps) {
    const [copied, setCopied] = useState(false);

    const handleCopyCode = async () => {
        try {
            await navigator.clipboard.writeText(couponCode);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard access may fail in restricted contexts
        }
    };

    return (
        <section id={id} className="relative w-full overflow-hidden bg-black main-padding py-[40px] md:py-[60px] lg:py-[80px] 2xl:py-[90px]">
            <motion.div
                initial={{ opacity: 0, scale: 1.04 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: 0, duration: 0.7, type: "tween" }}
                className="img-div absolute inset-0 w-full h-full"
            >
                <span className='absolute left-0 top-0 w-full h-full z-1 bg-black/60'></span>
                <Image
                    src={bgImage}
                    alt="Meltique festive sweet gifting offer background"
                    title="Meltique Sweet Gifting Offer"
                    width={1920}
                    height={600}
                    className="w-full h-full object-cover "
                />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center relative z-10">
                <div className="col-span-1 flex flex-col gap-[16px] md:gap-[20px] items-start">
                    <div className="flex flex-col md:gap-2 gap-1">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.1, duration: 0.5, type: "tween" }}
                        >
                            <MainTitle
                                title={title}
                                title2={title2}
                                h2ClassName="flex-row! flex-wrap gap-x-[12px] text-white"
                            />
                        </motion.div>

                        <motion.h3
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.2, duration: 0.5, type: "tween" }}
                            className="font-sora font-bold text-white text-[32px] md:text-[40px] lg:text-[48px] xl:text-[54px] 2xl:text-[60px] leading-none"
                        >
                            {offer}
                        </motion.h3>
                    </div>

                    <motion.button
                        type="button"
                        onClick={handleCopyCode}
                        aria-label={`Copy coupon code ${couponCode}`}
                        title="Copy coupon code"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.3, duration: 0.5, type: "tween" }}
                        className="inline-flex items-center gap-[10px] px-[14px] py-[6px] rounded-[6px] bg-white/15 hover:bg-white/25 border border-white/15 text-white 2xl:text-[18px] xsm:text-[16px] text-[14px] backdrop-blur-3xl common-transition cursor-pointer w-fit"
                    >
                        <span className="text-white/80 font-normal">
                            {copied ? "Copied:" : "Use code:"}{" "}
                            <strong className="font-semibold text-white">{couponCode}</strong>
                        </span>
                        <Icons.Copy className="size-[16px] text-white/80 shrink-0" />
                    </motion.button>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.35, duration: 0.5, type: "tween" }}
                    >
                        <ContentMain
                            description={description}
                            variant="banner"
                            className="text-white/90 max-w-[460px]"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.45, duration: 0.5, type: "tween" }}
                        className="pt-[4px]"
                    >
                        <MainBtn
                            BtnArrow
                            BtnOutlineWhite
                            btnType="outline"
                            text={btnText}
                            url={btnUrl}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default MainCta
