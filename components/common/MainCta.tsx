'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import MainTitle from './MainTitle'
import ContentMain from './ContentMain'
import MainBtn from './MainBtn'
import { Icons } from './Icons'

type MainCtaProps = {
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
    title = "Make Gifting",
    title2 = "Sweeter.",
    offer = "15% OFF",
    couponCode = "SWEET15",
    description = "On your first gifting order. Because every celebration deserves something sweet.",
    btnText = "Explore Now",
    btnUrl = "#",
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
        <section className="relative w-full overflow-hidden bg-black main-padding py-[40px] md:py-[60px] lg:py-[80px] 2xl:py-[90px]">
            <div className="img-div absolute inset-0 w-full h-full">
                <span className='absolute left-0 top-0 w-full h-full z-1 bg-black/60'></span>
                <Image
                    src={bgImage}
                    alt="Meltique festive sweet gifting offer background"
                    title="Meltique Sweet Gifting Offer"
                    width={1920}
                    height={600}
                    className="w-full h-full object-cover "
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center relative z-10">
                <div className="col-span-1 flex flex-col gap-[16px] md:gap-[20px] items-start">
                    <div className="flex flex-col md:gap-2 gap-1">
                        <MainTitle
                            title={title}
                            title2={title2}
                            h2ClassName="flex-row! flex-wrap gap-x-[12px] text-white"
                        />

                        <h3 className="font-sora font-bold text-white text-[32px] md:text-[40px] lg:text-[48px] xl:text-[54px] 2xl:text-[60px] leading-none">
                            {offer}
                        </h3>
                    </div>

                    <button
                        type="button"
                        onClick={handleCopyCode}
                        aria-label={`Copy coupon code ${couponCode}`}
                        title="Copy coupon code"
                        className="inline-flex items-center gap-[10px] px-[14px] py-[6px] rounded-[6px] bg-white/15 hover:bg-white/25 border border-white/15 text-white 2xl:text-[18px] xsm:text-[16px] text-[14px] backdrop-blur-3xl common-transition cursor-pointer w-fit"
                    >
                        <span className="text-white/80 font-normal">
                            {copied ? "Copied:" : "Use code:"}{" "}
                            <strong className="font-semibold text-white">{couponCode}</strong>
                        </span>
                        <Icons.Copy className="size-[16px] text-white/80 shrink-0" />
                    </button>

                    <ContentMain
                        description={description}
                        variant="banner"
                        className="text-white/90 max-w-[460px]"
                    />

                    <div className="pt-[4px]">
                        <MainBtn
                            BtnArrow
                            BtnOutlineWhite
                            btnType="outline"
                            text={btnText}
                            url={btnUrl}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainCta
